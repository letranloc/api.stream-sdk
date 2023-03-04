/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
import { batchLayer, createCollection, createDestination, createLayer, createLayout, createProject, createSource, getAccessToken, getLayers, startBroadcast, stopBroadcast, updateProject } from './apistream';

const apikey = 'YOUR_API_KEY';
const targetRTMP = `rtmp://ingest.golightstream.com/app/scene-rest-${+new Date()}`;

export async function work() {
	// Create our access token for future requests
	const { accessToken } = await getAccessToken(apikey, {
		// This is a configurable username. This should be unique for each user on your end.
		serviceUserId: 'test',
		// Give full permission to this access token
		role: 'ROLE_HOST',
		// Expire the token in an hour
		maxDuration: 1000 * 60 * 60,
	})


	const collection = await createCollection(accessToken);
	const project = await createProject(accessToken, collection.collection.collectionId, {
		rendering: {
			// Start a broadcast at 720p30
			video: {
				width: 1280,
				height: 720,
				framerate: 30,
			},

			// The location that the broadcast will be coming from. We use this to identify where
			// to place the broadcast geographically. This should ideally be
			// close to where the RTMP streams are coming from. If omitted we will use
			// location of the API call.
			location: {
				latitude: 51.7500,
				longitude: -2.2833,
			},
		}
	});

	try {

		// A project can have multiple layouts and transition between them. Each layout has a unique set of layers.
		const layout = await createLayout(accessToken, {
			width: 1280,
			height: 720,
			projectId: project.project.projectId,
			collectionId: collection.collection.collectionId,

			type: 'LAYOUT_TYPE_SCENE',
		});

		// Set the active layout for this project.
		// Note: if you specify "transitions" on the layout, updating the layout id will apply the transition.
		// https://www.api.stream/docs/compositor/scene/transitions
		await updateProject(accessToken, collection.collection.collectionId, project.project.projectId, {
			composition: { scene: { selectedLayoutId: layout.id } },
			updateMask: 'composition.scene',
		})

		// Create some cameras.
		const sourceA = await createSource(accessToken, collection.collection.collectionId, project.project.projectId, {
			// Normally, this would be an RTMP push, with the address returned under .source.address.rtmpPush.url
			// address: { rtmpPush: { enabled: true }}

			// Note: this is for test purposes.
			address: { rtmpPull: { url: 'rtmp://ingest.stream.horse/vod/BigBuckBunny.mp4' } },
		});
		const sourceB = await createSource(accessToken, collection.collection.collectionId, project.project.projectId, {
			// Normally, this would be an RTMP push, with the address returned under .source.address.rtmpPush.url
			// address: { rtmpPush: { enabled: true }}

			// Note: this is for test purposes.
			address: { rtmpPull: { url: 'rtmp://ingest.stream.horse/vod/TearsOfSteel.mp4' } },
		});
		const sourceC = await createSource(accessToken, collection.collection.collectionId, project.project.projectId, {
			address: { rtmpPush: { enabled: true } }
		});

		console.log("Created stream key for source C", sourceC.source.address.rtmpPush.url)


		// All layers exist under a "root" layer. This has a property "children" containing an array of all the child layers. The order in this array determines the z-order.
		const rootLayer = (await getLayers(accessToken, layout.id)).find((i: any) => i.type === 'root');


		// Note: we support a range of layers and properties, see docs: https://www.api.stream/docs/compositor/scene/types
		// Create a background layer
		const bgimg = await createLayer(accessToken, layout.id, {
			type: 'image', width: 1280, height: 720, x: 0, y: 0, data: { media: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Ubuntu_alternative_background.svg/1280px-Ubuntu_alternative_background.svg.png', } }, parentId: rootLayer.id
		});

		// Create cameras we can switch between
		const rtmpOne = await createLayer(accessToken, layout.id, { type: 'source', width: 1280, height: 720, x: 0, y: 0, data: { source: { id: sourceA.source.sourceId, volume: 1 }, }, parentId: rootLayer.id });
		const rtmpTwo = await createLayer(accessToken, layout.id, { type: 'source', width: 1280, height: 720, x: 0, y: 0, data: { source: { id: sourceB.source.sourceId, volume: 0 }, }, opacity: 0, parentId: rootLayer.id });
		const rtmpThree = await createLayer(accessToken, layout.id, { type: 'source', width: 1280, height: 720, x: 0, y: 0, data: { source: { id: sourceC.source.sourceId, volume: 0 }, }, opacity: 0, parentId: rootLayer.id });

		// Add a HTML overlay on top of the composition.
		const overlay = await createLayer(accessToken, layout.id, {
			type: 'webpage', width: 1280, height: 720, x: 0, y: 0, data: { url: 'https://rainmaker.gg/overlay/a3ee1b1439c653087532d21ea71d1c9f/56' }, parentId: rootLayer.id
		});


		// Create a destination to output to. Multiple destinations can exist for a project. 
		await createDestination(accessToken, collection.collection.collectionId, project.project.projectId, {
			address: {
				rtmpPush: {
					url: targetRTMP,
				}
			}
		})

		console.log("Starting a broadcast");
		console.log("Watch the broadcast at", targetRTMP);
		await startBroadcast(accessToken, collection.collection.collectionId, project.project.projectId);

		// kill broadcast on script close.
		process.on('SIGINT', () => {
			stopBroadcast(accessToken, collection.collection.collectionId, project.project.projectId)
				.then(e => {
					console.log("Stopped broadcast");
					process.exit(0);
				});
		})



		// Animate through each camera, cross-fading between them.
		const rtmpLayers = [rtmpOne, rtmpTwo, rtmpThree];
		setInterval(async () => {
			const focusedCamera = rtmpLayers.shift();
			rtmpLayers.push(focusedCamera);

			// Various animations can be done here. We support "delaying" specific updates in a batch, etc.
			// https://www.api.stream/docs/compositor/scene/animation
			await batchLayer(accessToken, layout.id, {
				layers: rtmpLayers.map(camera => {
					return {
						update: {
							id: camera.id,

							// set the opacity of the focused layer
							opacity: camera.id === focusedCamera.id ? 1 : 0,
							data: { source: { id: camera.data.source.id, volume: camera.id === focusedCamera.id ? 1 : 0 } },

							// this adds a cross-fade effect.
							requestAnimation: [{ properties: ['*'], durationMs: 500 }],
						}
					}
				}),
			})
			.catch(console.log);
		}, 10000);

	} catch (e) {
		stopBroadcast(accessToken, collection.collection.collectionId, project.project.projectId)
			.then(() => {
				console.log("Stopped broadcast");
				process.exit(0);
			});
	}
}

work();