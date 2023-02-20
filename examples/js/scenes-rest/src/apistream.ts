/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
const apiBase = 'https://live.api.stream';

import fetchRaw from 'node-fetch';

/**
 * Generate an access token to be used with subsequent API calls to the Live and Layout APIs.
 */
export function getAccessToken(apikey: string, data: any): Promise<{ accessToken: string }> {
	return fetch(`${apiBase}/live/v2/authentication/token`, {
		method: 'POST',
		headers: {
			'X-API-Key': apikey,
			Accept: "application/json",
			"Content-Type": "application/json; charset=utf-8",
		},
		body: JSON.stringify({
			...data,
		})
	}).then(j => <any>j.json());
}

/**
 * Create a top-level collection.
 */
export function createCollection(accessToken: string): Promise<{ collection: { collectionId: string } }> {
	return fetch(`${apiBase}/live/v2/collection`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
		body: JSON.stringify({
		})
	}).then(j => <any>j.json());
}

/**
 * Create a project, which encapsulates a broadcast..
 */
export function createProject(accessToken: string, collectionId: string, config: any): Promise<{ project: { projectId: string } }> {
	return fetch(`${apiBase}/live/v2/collection/${collectionId}/project`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
		body: JSON.stringify({
			...config,
		})
	}).then(j => <any>j.json());
}

/**
 * Create a source
 */
export async function createSource(accessToken: string, collectionId: string, projectId: string, config: any): Promise<any> {
	const source = await fetch(`${apiBase}/live/v2/collection/${collectionId}/source`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
		body: JSON.stringify({
			...config,
		})
	}).then(j => <any>j.json());
	
	await fetch(`${apiBase}/live/v2/collection/${collectionId}/project/${projectId}/source/${source.source.sourceId}`, {
		method: 'PUT',
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
		body: JSON.stringify({ })
	}).then(j => <any>j.json());

	return source;
}

/**
 * Create a layout.
 * Multiple distinct layouts can exist for a project and can be switched between with transitions.
 */
export function createLayout(accessToken: string, config: any): Promise<any> {
	return fetch(`${apiBase}/layout/v2/layouts`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
		body: JSON.stringify(config)
	}).then(j => <any>j.json());
}

/**
 * Get all layers in a layout.
 */
export function getLayers(accessToken: string, layoutId: string): Promise<any> {
	return fetch(`${apiBase}/layout/v2/layouts/${layoutId}/layers`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	}).then(j => <any>j.json());
}

/**
 * Create layers on a layout.
 */
export function createLayer(accessToken: string, layoutId: string, config: any): Promise<any> {
	return fetch(`${apiBase}/layout/v2/layouts/${layoutId}/layers`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
		body: JSON.stringify(config)
	}).then(j => <any>j.json());
}

/**
 * Make modifications to a layout in a batch request.
 */
export function batchLayer(accessToken: string, layoutId: string, config: any): Promise<any> {
	return fetch(`${apiBase}/layout/v2/layouts/${layoutId}/layers/batch`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
		body: JSON.stringify(config)
	}).then(j => <any>j.json());
}


/**
 * Create a destination.
 */
export function createDestination(accessToken: string, collectionId: string, projectId: string, config: any): Promise<any> {
	return fetch(`${apiBase}/live/v2/collection/${collectionId}/project/${projectId}/destination`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
		body: JSON.stringify(config)
	}).then(j => <any>j.json());
}


/**
 * Start a broadcast.
 */
export function startBroadcast(accessToken: string, collectionId: string, projectId: string): Promise<any> {
	return fetch(`${apiBase}/live/v2/collection/${collectionId}/project/${projectId}/broadcast/start`, {
		method: 'PUT',
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
		body: JSON.stringify({})
	}).then(j => <any>j.json())
	.then(console.log);
}


// Stop a running broadcast
export function stopBroadcast(accessToken: string, collectionId: string, projectId: string): Promise<any> {
	return fetch(`${apiBase}/live/v2/collection/${collectionId}/project/${projectId}/broadcast/stop`, {
		method: 'PUT',
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
		body: JSON.stringify({})
	}).then(j => <any>j.json())
	.then(console.log);
}


/**
 * Update an existing project
 */
export function updateProject(accessToken: string, collectionId: string, projectId: string, config: any): Promise<any> {
	return fetch(`${apiBase}/live/v2/collection/${collectionId}/project/${projectId}`, {
		method: 'PATCH',
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
		body: JSON.stringify(config)
	}).then(j => <any>j.json());
}


// wrapper around the http client
function fetch(url: string, payload: any) {
	console.log(`Request to ${payload.method} ${url}`, { payload: payload.body});

	return fetchRaw(url, payload).then(async r => {
		if (r.status !== 200) {
			console.log(await r.json());
			throw new Error(`Status ${r.status} for ${url}`);
		}
		return r;
	});
}