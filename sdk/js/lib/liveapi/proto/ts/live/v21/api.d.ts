import * as _m0 from "protobufjs/minimal";
import { NullValue } from "../../google/protobuf/struct";
export declare const protobufPackage = "live.v21";
/** image binary format */
export declare enum ImageFormat {
    IMAGE_FORMAT_UNSPECIFIED = "IMAGE_FORMAT_UNSPECIFIED",
    IMAGE_FORMAT_JPEG = "IMAGE_FORMAT_JPEG"
}
export declare function imageFormatFromJSON(object: any): ImageFormat;
export declare function imageFormatToJSON(object: ImageFormat): string;
export declare function imageFormatToNumber(object: ImageFormat): number;
/** rendering color space */
export declare enum VideoColorSpace {
    VIDEO_COLOR_SPACE_UNSPECIFIED = "VIDEO_COLOR_SPACE_UNSPECIFIED",
    VIDEO_COLOR_SPACE_YUV420 = "VIDEO_COLOR_SPACE_YUV420"
}
export declare function videoColorSpaceFromJSON(object: any): VideoColorSpace;
export declare function videoColorSpaceToJSON(object: VideoColorSpace): string;
export declare function videoColorSpaceToNumber(object: VideoColorSpace): number;
/** audio channel layout */
export declare enum AudioChannelLayout {
    AUDIO_CHANNEL_LAYOUT_UNSPECIFIED = "AUDIO_CHANNEL_LAYOUT_UNSPECIFIED",
    AUDIO_CHANNEL_LAYOUT_STEREO = "AUDIO_CHANNEL_LAYOUT_STEREO"
}
export declare function audioChannelLayoutFromJSON(object: any): AudioChannelLayout;
export declare function audioChannelLayoutToJSON(object: AudioChannelLayout): string;
export declare function audioChannelLayoutToNumber(object: AudioChannelLayout): number;
/** rendering quality */
export declare enum RenderingQuality {
    RENDERING_QUALITY_UNSPECIFIED = "RENDERING_QUALITY_UNSPECIFIED",
    RENDERING_QUALITY_STANDARD = "RENDERING_QUALITY_STANDARD",
    RENDERING_QUALITY_HIGH = "RENDERING_QUALITY_HIGH"
}
export declare function renderingQualityFromJSON(object: any): RenderingQuality;
export declare function renderingQualityToJSON(object: RenderingQuality): string;
export declare function renderingQualityToNumber(object: RenderingQuality): number;
/** video encoding codec */
export declare enum VideoCodec {
    VIDEO_CODEC_UNSPECIFIED = "VIDEO_CODEC_UNSPECIFIED",
    VIDEO_CODEC_H264 = "VIDEO_CODEC_H264"
}
export declare function videoCodecFromJSON(object: any): VideoCodec;
export declare function videoCodecToJSON(object: VideoCodec): string;
export declare function videoCodecToNumber(object: VideoCodec): number;
/** video encoding codec profile */
export declare enum VideoCodecProfile {
    VIDEO_CODEC_PROFILE_UNSPECIFIED = "VIDEO_CODEC_PROFILE_UNSPECIFIED",
    VIDEO_CODEC_PROFILE_BASELINE = "VIDEO_CODEC_PROFILE_BASELINE",
    VIDEO_CODEC_PROFILE_MAIN = "VIDEO_CODEC_PROFILE_MAIN",
    VIDEO_CODEC_PROFILE_HIGH = "VIDEO_CODEC_PROFILE_HIGH"
}
export declare function videoCodecProfileFromJSON(object: any): VideoCodecProfile;
export declare function videoCodecProfileToJSON(object: VideoCodecProfile): string;
export declare function videoCodecProfileToNumber(object: VideoCodecProfile): number;
/** audio encoding codec */
export declare enum AudioCodec {
    AUDIO_CODEC_UNSPECIFIED = "AUDIO_CODEC_UNSPECIFIED",
    AUDIO_CODEC_AAC = "AUDIO_CODEC_AAC"
}
export declare function audioCodecFromJSON(object: any): AudioCodec;
export declare function audioCodecToJSON(object: AudioCodec): string;
export declare function audioCodecToNumber(object: AudioCodec): number;
/** video encoding rate control mode */
export declare enum VideoCodecRateControlMode {
    VIDEO_CODEC_RATE_CONTROL_MODE_UNSPECIFIED = "VIDEO_CODEC_RATE_CONTROL_MODE_UNSPECIFIED",
    /** VIDEO_CODEC_RATE_CONTROL_MODE_CBR - constant bit rate encoding */
    VIDEO_CODEC_RATE_CONTROL_MODE_CBR = "VIDEO_CODEC_RATE_CONTROL_MODE_CBR"
}
export declare function videoCodecRateControlModeFromJSON(object: any): VideoCodecRateControlMode;
export declare function videoCodecRateControlModeToJSON(object: VideoCodecRateControlMode): string;
export declare function videoCodecRateControlModeToNumber(object: VideoCodecRateControlMode): number;
/** broadcast phase of project */
export declare enum ProjectBroadcastPhase {
    PROJECT_BROADCAST_PHASE_UNSPECIFIED = "PROJECT_BROADCAST_PHASE_UNSPECIFIED",
    PROJECT_BROADCAST_PHASE_NOT_RUNNING = "PROJECT_BROADCAST_PHASE_NOT_RUNNING",
    /** PROJECT_BROADCAST_PHASE_WAITING - broadcast is waiting to be scheduled */
    PROJECT_BROADCAST_PHASE_WAITING = "PROJECT_BROADCAST_PHASE_WAITING",
    PROJECT_BROADCAST_PHASE_STARTING = "PROJECT_BROADCAST_PHASE_STARTING",
    PROJECT_BROADCAST_PHASE_RUNNING = "PROJECT_BROADCAST_PHASE_RUNNING",
    PROJECT_BROADCAST_PHASE_STOPPING = "PROJECT_BROADCAST_PHASE_STOPPING",
    PROJECT_BROADCAST_PHASE_STOPPED = "PROJECT_BROADCAST_PHASE_STOPPED",
    PROJECT_BROADCAST_PHASE_ARCHIVED = "PROJECT_BROADCAST_PHASE_ARCHIVED"
}
export declare function projectBroadcastPhaseFromJSON(object: any): ProjectBroadcastPhase;
export declare function projectBroadcastPhaseToJSON(object: ProjectBroadcastPhase): string;
export declare function projectBroadcastPhaseToNumber(object: ProjectBroadcastPhase): number;
export declare enum S3ACL {
    S3ACL_UNSPECIFIED = "S3ACL_UNSPECIFIED",
    S3ACL_PRIVATE = "S3ACL_PRIVATE",
    S3ACL_PUBLIC_READ = "S3ACL_PUBLIC_READ",
    S3ACL_PUBLIC_READ_WRITE = "S3ACL_PUBLIC_READ_WRITE",
    S3ACL_AUTHENTICATED_READ = "S3ACL_AUTHENTICATED_READ",
    S3ACL_BUCKET_OWNER_READ = "S3ACL_BUCKET_OWNER_READ",
    S3ACL_BUCKET_OWNER_FULL_CONTROL = "S3ACL_BUCKET_OWNER_FULL_CONTROL"
}
export declare function s3ACLFromJSON(object: any): S3ACL;
export declare function s3ACLToJSON(object: S3ACL): string;
export declare function s3ACLToNumber(object: S3ACL): number;
/** boolean logic for trigger */
export declare enum SourceTriggerAction {
    SOURCE_TRIGGER_ACTION_UNSPECIFIED = "SOURCE_TRIGGER_ACTION_UNSPECIFIED",
    SOURCE_TRIGGER_ACTION_IGNORE = "SOURCE_TRIGGER_ACTION_IGNORE",
    /** SOURCE_TRIGGER_ACTION_OR - SOURCE_TRIGGER_ACTION_AND = 2; */
    SOURCE_TRIGGER_ACTION_OR = "SOURCE_TRIGGER_ACTION_OR"
}
export declare function sourceTriggerActionFromJSON(object: any): SourceTriggerAction;
export declare function sourceTriggerActionToJSON(object: SourceTriggerAction): string;
export declare function sourceTriggerActionToNumber(object: SourceTriggerAction): number;
/** region which is hosting broadcast */
export declare enum Region {
    REGION_UNSPECIFIED = "REGION_UNSPECIFIED",
    /** REGION_US_EAST_1 - US East */
    REGION_US_EAST_1 = "REGION_US_EAST_1",
    REGION_US_EAST_2 = "REGION_US_EAST_2",
    /** REGION_US_WEST_1 - US West */
    REGION_US_WEST_1 = "REGION_US_WEST_1",
    REGION_US_WEST_2 = "REGION_US_WEST_2",
    /** REGION_US_CENTRAL_1 - US Central */
    REGION_US_CENTRAL_1 = "REGION_US_CENTRAL_1",
    /** REGION_AP_SOUTHEAST_1 - Asia Pacific Southeast */
    REGION_AP_SOUTHEAST_1 = "REGION_AP_SOUTHEAST_1",
    /** REGION_CA_EAST_1 - Canada East */
    REGION_CA_EAST_1 = "REGION_CA_EAST_1",
    /** REGION_EU_CENTRAL_1 - Europe Central */
    REGION_EU_CENTRAL_1 = "REGION_EU_CENTRAL_1",
    /** REGION_EU_WEST_1 - Europe West */
    REGION_EU_WEST_1 = "REGION_EU_WEST_1"
}
export declare function regionFromJSON(object: any): Region;
export declare function regionToJSON(object: Region): string;
export declare function regionToNumber(object: Region): number;
/** defined roles */
export declare enum Role {
    ROLE_UNSPECIFIED = "ROLE_UNSPECIFIED",
    ROLE_HOST = "ROLE_HOST",
    ROLE_COHOST = "ROLE_COHOST",
    ROLE_CONTRIBUTOR = "ROLE_CONTRIBUTOR",
    ROLE_GUEST = "ROLE_GUEST",
    ROLE_VIEWER = "ROLE_VIEWER",
    ROLE_RENDERER = "ROLE_RENDERER",
    ROLE_PLATFORM = "ROLE_PLATFORM",
    ROLE_IMPERSONATE = "ROLE_IMPERSONATE"
}
export declare function roleFromJSON(object: any): Role;
export declare function roleToJSON(object: Role): string;
export declare function roleToNumber(object: Role): number;
/** an error that occured during a broadcast */
export declare enum ProjectBroadcastError {
    PROJECT_BROADCAST_ERROR_UNSPECIFIED = "PROJECT_BROADCAST_ERROR_UNSPECIFIED",
    PROJECT_BROADCAST_ERROR_INTERNAL = "PROJECT_BROADCAST_ERROR_INTERNAL",
    PROJECT_BROADCAST_ERROR_DURATION_EXCEEDED = "PROJECT_BROADCAST_ERROR_DURATION_EXCEEDED"
}
export declare function projectBroadcastErrorFromJSON(object: any): ProjectBroadcastError;
export declare function projectBroadcastErrorToJSON(object: ProjectBroadcastError): string;
export declare function projectBroadcastErrorToNumber(object: ProjectBroadcastError): number;
/** the state of the connection */
export declare enum ConnectState {
    CONNECT_STATE_UNSPECIFIED = "CONNECT_STATE_UNSPECIFIED",
    CONNECT_STATE_CONNECTED = "CONNECT_STATE_CONNECTED",
    CONNECT_STATE_DISCONNECTED = "CONNECT_STATE_DISCONNECTED"
}
export declare function connectStateFromJSON(object: any): ConnectState;
export declare function connectStateToJSON(object: ConnectState): string;
export declare function connectStateToNumber(object: ConnectState): number;
export declare enum EventSubType {
    EVENT_SUB_TYPE_UNSPECIFIED = "EVENT_SUB_TYPE_UNSPECIFIED",
    EVENT_SUB_TYPE_CREATE = "EVENT_SUB_TYPE_CREATE",
    EVENT_SUB_TYPE_UPDATE = "EVENT_SUB_TYPE_UPDATE",
    EVENT_SUB_TYPE_DELETE = "EVENT_SUB_TYPE_DELETE",
    EVENT_SUB_TYPE_ADD = "EVENT_SUB_TYPE_ADD",
    EVENT_SUB_TYPE_REMOVE = "EVENT_SUB_TYPE_REMOVE",
    EVENT_SUB_TYPE_STATE = "EVENT_SUB_TYPE_STATE"
}
export declare function eventSubTypeFromJSON(object: any): EventSubType;
export declare function eventSubTypeToJSON(object: EventSubType): string;
export declare function eventSubTypeToNumber(object: EventSubType): number;
export declare enum EventType {
    EVENT_TYPE_UNSPECIFIED = "EVENT_TYPE_UNSPECIFIED",
    EVENT_TYPE_COLLECTION = "EVENT_TYPE_COLLECTION",
    EVENT_TYPE_PROJECT = "EVENT_TYPE_PROJECT",
    EVENT_TYPE_SOURCE = "EVENT_TYPE_SOURCE",
    EVENT_TYPE_DESTINATION = "EVENT_TYPE_DESTINATION"
}
export declare function eventTypeFromJSON(object: any): EventType;
export declare function eventTypeToJSON(object: EventType): string;
export declare function eventTypeToNumber(object: EventType): number;
/** composition video parameters */
export interface VideoRendering {
    /** canvas height (pixels) */
    height?: number | undefined;
    /** canvas width (pixels) */
    width?: number | undefined;
    /** canvas frame rate (frames/s) */
    framerate?: number | undefined;
    /** rendering color space */
    colorSpace?: VideoColorSpace | undefined;
}
/** composition audio parameters */
export interface AudioRendering {
    /** audio channel layout */
    channelLayout?: AudioChannelLayout | undefined;
}
/** composition parameters */
export interface Rendering {
    /** composition video parameters */
    video?: VideoRendering | undefined;
    /** composition audio parameters */
    audio?: AudioRendering | undefined;
    /** rendering quality */
    quality?: RenderingQuality | undefined;
    /** target end-to-end latency (in ms) */
    targetLatency?: number | undefined;
    /** estimated composition complexity (where 0 is nominal complexity) */
    complexity?: number | undefined;
}
/** video encoding CBR rate control params */
export interface VideoCodecRateControl {
    mode?: VideoCodecRateControlMode | undefined;
    /** video encoding target bitrate (bits/s) */
    targetBitrate?: number | undefined;
    /** maximum video encoding key frame interval (frames) */
    maxKeyFrameInterval?: number | undefined;
}
/** encoding video parameters */
export interface VideoEncoding {
    /** video encoding codec */
    codec?: VideoCodec | undefined;
    /** video encoding rate control */
    rateControl?: VideoCodecRateControl | undefined;
    /** video encoding codec profile */
    profile?: VideoCodecProfile | undefined;
}
/** encoding audio parameters */
export interface AudioEncoding {
    /** audio encoding codec */
    codec?: AudioCodec | undefined;
}
/** the parameters of the encoding */
export interface Encoding {
    /** the video parameters of the encoding */
    video?: VideoEncoding | undefined;
    /** the audio parameters of the encoding */
    audio?: AudioEncoding | undefined;
}
/** rtmp push source address */
export interface SourceRtmpPushAddress {
    /** enable source rtmp push address */
    enabled?: boolean | undefined;
    /** assigned rtmp stream key */
    key?: string | undefined;
    /** assigned rtmp destination url */
    url?: string | undefined;
    /** base_url without stream key */
    baseUrl?: string | undefined;
}
/** srt push addressing */
export interface SrtPushAddress {
    /** enable source srt push address */
    enabled?: boolean | undefined;
    /** assigned srt streamid */
    streamId?: string | undefined;
    /** assigned srt destination url */
    url?: string | undefined;
    /** base_url without streamid */
    baseUrl?: string | undefined;
}
/** rtmp pull addressing */
export interface RtmpPullAddress {
    /** rtmp source url */
    url: string;
}
/** live source address (select one) */
export interface SourceAddress {
    /** rtmp push addressing */
    rtmpPush: SourceRtmpPushAddress | undefined;
    /** the srt address to publish to */
    srtPush: SrtPushAddress | undefined;
    /** the rtmp address to pull from */
    rtmpPull: RtmpPullAddress | undefined;
}
/** rtmp push destination address */
export interface DestinationRtmpPushAddress {
    /** rtmp stream key */
    key?: string | undefined;
    /** rtmp destination url */
    url: string;
}
/** Agora push addressing */
export interface DestinationAgoraPushAddress {
    /** Agora app id */
    appId: string;
    /** Agora channel id */
    channelId: string;
    /** Agora user id */
    userId: string;
}
/** live hls lifecycle management */
export interface HlsLifecycleLive {
    /** number of entries to advertise in playlist file */
    playlistCount?: number | undefined;
    /** number of files to keep on disk */
    fileCount?: number | undefined;
}
/** vod hls lifecycle management */
export interface HlsLifecycleVod {
    /** max duration of the recording in ms (0 is indefinite) */
    maxDuration?: number | undefined;
}
/** hls lifecycle management */
export interface HlsLifecycle {
    /** lifecycle of vod */
    vod: HlsLifecycleVod | undefined;
    /** lifecycle of live */
    live: HlsLifecycleLive | undefined;
}
/** hls packaging options */
export interface HlsPackaging {
    /** lifecycle of hls segments */
    lifecycle: HlsLifecycle | undefined;
    /** duration of segments in ms */
    segmentDuration?: number | undefined;
}
/** packaging options for object storage */
export interface ObjectStoragePackaging {
    /** hls format */
    hls: HlsPackaging | undefined;
}
export interface S3StorageAddress {
    /** cloud region */
    region: string;
    /** cloud bucket */
    bucket: string;
    /** cloud bucket prefix */
    prefix?: string | undefined;
    /** cloud access key */
    accessKey: string;
    /** cloud secret key */
    secretKey: string;
    /** token based auth */
    token?: string | undefined;
    /** token duration in ms */
    tokenDuration?: number | undefined;
    /** access control list */
    acl?: S3ACL | undefined;
    /** endpoint for non aws s3 destinations */
    endpoint?: string | undefined;
    /** the format of the files to be written */
    packaging: ObjectStoragePackaging | undefined;
}
/** destination address (select one) */
export interface DestinationAddress {
    /** rtmp push addressing */
    rtmpPush: DestinationRtmpPushAddress | undefined;
    /** Agora addressing */
    agora: DestinationAgoraPushAddress | undefined;
    /** s3 storage addressing */
    s3Storage: S3StorageAddress | undefined;
}
/** triggers to indicate what actions to take on the project for a given Source */
export interface SourceTrigger {
    /** the id of the source */
    sourceId: string;
    /** source should trigger project(s) to start */
    start?: SourceTriggerAction | undefined;
    /** source should trigger project(s) to stop */
    stop?: SourceTriggerAction | undefined;
}
/** optional string service_user_id = 1; */
export interface WebRtcTrigger {
    /** webrtc stop should trigger project to stop */
    stop?: SourceTriggerAction | undefined;
}
/** the trigger type (select one) */
export interface ProjectTrigger {
    /** start/stop project with source */
    source: SourceTrigger | undefined;
}
/** request hls preview */
export interface PreviewHlsPullAddress {
    /** request hls preview */
    enabled?: boolean | undefined;
    /** hls manifest url */
    url?: string | undefined;
}
/** webrtc addressing parameters */
export interface PreviewWebRtcAddress {
    /** request rtmp preview */
    enabled?: boolean | undefined;
    /** the name this source will use in the webrtc room */
    displayName?: string | undefined;
    /** the id this source was assigned in the webrtc room */
    participantId?: string | undefined;
}
/** addresses of source previews */
export interface PreviewAddress {
    /**
     * hls preview address
     * optional PreviewHlsPullAddress hls = 1;
     * webrtc preview address
     */
    webrtc?: PreviewWebRtcAddress | undefined;
}
/** compose using the studiosdk renderer */
export interface StudioSdkComposition {
    /** the url to pass to the studiosdk */
    rendererUrl?: string | undefined;
    version?: string | undefined;
}
/** compose scenes using the browser-based compositor */
export interface SceneComposition {
    /** the url to pass to the studiosdk */
    rendererUrl?: string | undefined;
    /** the active "scene" to render */
    selectedLayoutId?: string | undefined;
    debug?: boolean | undefined;
}
/** compose using an external renderer */
export interface ExternalComposition {
    url: string;
}
/** composition source for project (select one) */
export interface Composition {
    /** compose using an external renderer */
    external: ExternalComposition | undefined;
    /** compose using the studiosdk renderer */
    studioSdk: StudioSdkComposition | undefined;
    /** compose scenes using the browser-based compositor */
    scene: SceneComposition | undefined;
}
/** hosted webrtc configuration */
export interface HostedWebRtc {
    /** enable webrtc services */
    enabled?: boolean | undefined;
}
/** webrtc service (select one) */
export interface WebRtc {
    /** hosted webrtc configuration */
    hosted: HostedWebRtc | undefined;
}
/** webrtc access parameters */
export interface WebRtcAccess {
    /** access token for webrtc room */
    accessToken: string;
    /** the id this user was assigned in the webrtc room */
    participantId?: string | undefined;
}
/** optimal location of broadcast (to optimize routing and delay) */
export interface LatLong {
    latitude: number;
    longitude: number;
}
/** broadcast status */
export interface ProjectBroadcastStatus {
    /** collection which owns the project which owns the broadcast */
    collectionId: string;
    /** project which owns the broadcast */
    projectId: string;
    broadcastId?: string | undefined;
    /** broadcast duration (ms) */
    duration?: number | undefined;
    /** broadcast start timestamp (ISO8601 UTC) */
    start?: string | undefined;
    /** broadcast stop timestamp (ISO8601 UTC) */
    stop?: string | undefined;
    /** broadcast phase */
    phase: ProjectBroadcastPhase;
    /** region broadcast is located */
    region?: Region | undefined;
    /** datacenter broadcast is located */
    datacenter?: string | undefined;
}
/** collection live source */
export interface Source {
    /** collection which owns the source */
    collectionId: string;
    /** collection source id */
    sourceId: string;
    /** arbitrary metadata associated with this collection source */
    metadata?: any | undefined;
    /** preview addresses */
    preview?: PreviewAddress | undefined;
    /** source address */
    address: SourceAddress | undefined;
}
/** streaming destination of project */
export interface Destination {
    /** collection which owns the project which owns the destination */
    collectionId: string;
    /** project which owns the destination */
    projectId: string;
    /** destination id */
    destinationId: string;
    /** arbitrary metadata associated with this destination */
    metadata?: any | undefined;
    /** is output stream enabled? */
    enabled?: boolean | undefined;
    /** address of the destination */
    address: DestinationAddress | undefined;
    /** timeout (ms) to wait before resetting a connection */
    timeout?: number | undefined;
}
/** project which owns a broadcast, sources, and destinations */
export interface Project {
    /** collection which owns the project */
    collectionId: string;
    /** project id */
    projectId: string;
    /** arbitrary metadata associated with this project */
    metadata?: any | undefined;
    /** composition parameters */
    rendering: Rendering | undefined;
    /** encoding parameters */
    encoding: Encoding | undefined;
    /** collection live sources added to this project */
    sources: Source[];
    /** destinations associated with this project */
    destinations: Destination[];
    /** composition/layout source of the broadcast */
    composition: Composition | undefined;
    /** maximum duration (ms) of project broadcasts */
    maxDuration?: number | undefined;
    /** configuration for webrtc services (if requested) */
    webrtc?: WebRtc | undefined;
    /** external triggers to start and stop this broadcast */
    triggers: ProjectTrigger[];
    /** optional optimal location to start broadcast */
    location?: LatLong | undefined;
    /** guest codes associated with this project */
    guestCodes: GuestCode[];
}
/** a Collection of Projects and Sources */
export interface Collection {
    /** collection id */
    collectionId: string;
    /** arbitrary metadata associated with this collection */
    metadata?: any | undefined;
    /** projects owned by this collection */
    projects: Project[];
    /** collection live sources owned by this collection */
    sources: Source[];
}
export interface CreateCollectionRequest {
    /** arbitrary metadata to associate with this collection */
    metadata?: any | undefined;
}
export interface CreateCollectionResponse {
    collection: Collection | undefined;
}
export interface GetCollectionRequest {
    /** collection id */
    collectionId: string;
    /** optionally populate projects */
    populateProjects?: boolean | undefined;
    /** optionally populate sources */
    populateSources?: boolean | undefined;
}
export interface GetCollectionResponse {
    collection: Collection | undefined;
}
export interface UpdateCollectionRequest {
    /** collection id */
    collectionId: string;
    /** fields to update */
    updateMask: string[] | undefined;
    /** arbitrary metadata to associate with this collection */
    metadata?: any | undefined;
}
export interface UpdateCollectionResponse {
    /** the updated collection */
    collection: Collection | undefined;
}
export interface DeleteCollectionRequest {
    /** collection id */
    collectionId: string;
    /** forcibly end all child project broadcasts in progress */
    force?: boolean | undefined;
}
export interface DeleteCollectionResponse {
    /** number of live sources owned by this collection which were deleted */
    sourcesDeleted: number;
    /** number of projects owned by this collection which were deleted */
    projectsDeleted: number;
    /** project ids owned by this collection whose broadcasts were stopped */
    projectIdsStopped: string[];
}
export interface GetCollectionsRequest {
}
export interface GetCollectionsResponse {
    /** all collections owned by this user */
    collections: Collection[];
}
export interface CreateProjectRequest {
    /** collection which will own this project */
    collectionId: string;
    /** arbitrary metadata to associate with this project */
    metadata?: any | undefined;
    /** composition parameters */
    rendering?: Rendering | undefined;
    /** encoding parameters */
    encoding?: Encoding | undefined;
    /** composition/layout source of the broadcast */
    composition: Composition | undefined;
    /** maximum duration of project broadcasts (ms) */
    maxDuration?: number | undefined;
    /** request webrtc services */
    webrtc?: WebRtc | undefined;
    /** optimal broadcast location (for routing and delay) */
    location?: LatLong | undefined;
}
export interface CreateProjectResponse {
    project: Project | undefined;
}
export interface UpdateProjectRequest {
    /** collection which owns the project */
    collectionId: string;
    /** project id */
    projectId: string;
    /** fields to update */
    updateMask: string[] | undefined;
    /** arbitrary metadata to associate with this project */
    metadata?: any | undefined;
    /** composition parameters */
    rendering?: Rendering | undefined;
    /** encoding parameters */
    encoding?: Encoding | undefined;
    /** composition/layout source of the broadcast */
    composition?: Composition | undefined;
    /** maximum duration of project broadcasts (ms) */
    maxDuration?: number | undefined;
    /** configuration for webrtc services (if requested) */
    webrtc?: WebRtc | undefined;
    /** optimal broadcast location (for routing and delay) */
    location?: LatLong | undefined;
}
export interface UpdateProjectResponse {
    /** updated project */
    project: Project | undefined;
    /** indicates whether the broadcast was updated as a function of this request */
    broadcastUpdated: boolean;
}
export interface DeleteProjectRequest {
    /** collection which owns the project */
    collectionId: string;
    /** project id */
    projectId: string;
    /** forcibly end broadcast in progress */
    force?: boolean | undefined;
}
export interface DeleteProjectResponse {
    /** was a broadcast stopped */
    broadcastStopped: boolean;
    /** the number of associated layouts deleted */
    layoutsDeleted: number;
}
export interface StartProjectBroadcastRequest {
    /** collection which owns the project */
    collectionId: string;
    /** project id */
    projectId: string;
    /** also start webrtc room */
    webrtcStart?: boolean | undefined;
}
export interface StartProjectBroadcastResponse {
    /** the id of the broadcast started */
    broadcastId: string;
}
export interface StopProjectBroadcastRequest {
    /** collection which owns the project */
    collectionId: string;
    /** project id */
    projectId: string;
    /** stop the associated webrtc room, */
    webrtcStop?: boolean | undefined;
}
export interface StopProjectBroadcastResponse {
}
export interface GetProjectRequest {
    /** collection which owns the project */
    collectionId: string;
    /** project id */
    projectId: string;
    /** also query project broadcast status */
    status?: boolean | undefined;
}
export interface GetProjectResponse {
    /** the request project */
    project: Project | undefined;
    /** the status of the project broadcast (if requested) */
    status?: ProjectBroadcastStatus | undefined;
}
export interface GetProjectBroadcastSnapshotRequest {
    /** collection which owns the project */
    collectionId: string;
    /** project id */
    projectId: string;
    /** snapshot binary format */
    format?: ImageFormat | undefined;
}
export interface GetProjectBroadcastSnapshotResponse {
    /** the format of the returned snapshot */
    format: ImageFormat;
    /** the binary snapshot */
    image: Uint8Array;
}
export interface GetProjectBroadcastStatusRequest {
    /** collection which owns the project */
    collectionId: string;
    /** project id */
    projectId: string;
}
export interface GetProjectBroadcastStatusResponse {
    /** the status of the project broadcast */
    status: ProjectBroadcastStatus | undefined;
}
export interface StartProjectWebRtcRequest {
    /** collection which owns the project */
    collectionId: string;
    /** project id */
    projectId: string;
}
export interface StartProjectWebRtcResponse {
}
export interface StopProjectWebRtcRequest {
    /** collection which owns the project */
    collectionId: string;
    /** project id */
    projectId: string;
}
export interface StopProjectWebRtcResponse {
}
export interface CreateDestinationRequest {
    /** collection which owns the project which owns the destination */
    collectionId: string;
    /** project which will own this destination */
    projectId: string;
    /** arbitrary metadata associated with this destination */
    metadata?: any | undefined;
    /** destination address (select one) */
    address: DestinationAddress | undefined;
    /** enable or disable this destination */
    enabled?: boolean | undefined;
    /** timeout (in milliseconds) to wait before resetting a connection */
    timeout?: number | undefined;
}
export interface CreateDestinationResponse {
    /** the newly created destination */
    destination: Destination | undefined;
}
export interface GetDestinationRequest {
    /** collection which owns the project which owns the destination */
    collectionId: string;
    /** project which owns the destination */
    projectId: string;
    /** destination id */
    destinationId: string;
}
export interface GetDestinationResponse {
    /** the requested destination */
    destination: Destination | undefined;
}
export interface DeleteDestinationRequest {
    /** collection which owns the project which owns the destination */
    collectionId: string;
    /** project which owns the destination */
    projectId: string;
    /** destination id */
    destinationId: string;
    /** forcibly remove destination if enabled */
    force?: boolean | undefined;
}
export interface DeleteDestinationResponse {
    /** indicates whether the broadcast was updated as a function of this request */
    broadcastUpdated: boolean;
}
export interface UpdateDestinationRequest {
    /** collection which owns the project which owns the destination */
    collectionId: string;
    /** project which owns the destination */
    projectId: string;
    /** destination id */
    destinationId: string;
    /** fields to update (default updates any non-null field) */
    updateMask: string[] | undefined;
    /** arbitrary metadata associated with this destination */
    metadata?: any | undefined;
    /** destination address (select one) */
    address?: DestinationAddress | undefined;
    /** enable or disable this destination */
    enabled?: boolean | undefined;
    /** timeout (in milliseconds) to wait before resetting a connection */
    timeout?: number | undefined;
}
export interface UpdateDestinationResponse {
    /** updated destination */
    destination: Destination | undefined;
    /** indicates whether the broadcast was updated as a function of this request */
    broadcastUpdated: boolean;
}
export interface CreateSourceRequest {
    /** collection which will own this collection live source */
    collectionId: string;
    /** arbitrary metadata to associate with this collection live source */
    metadata?: any | undefined;
    /** type of collection live source */
    address: SourceAddress | undefined;
    /** enable real-time previews */
    preview?: PreviewAddress | undefined;
}
export interface CreateSourceResponse {
    source: Source | undefined;
}
export interface DeleteSourceRequest {
    /** collection which owns the live source */
    collectionId: string;
    /** live source id */
    sourceId: string;
    /** delete a live source even if it is in use in a broadcast */
    force?: boolean | undefined;
}
export interface DeleteSourceResponse {
    /** project ids owned by this collection which were affected */
    projectIdsUpdated: string[];
}
export interface AddSourceToProjectRequest {
    /** collection which owns the project */
    collectionId: string;
    /** project which will own the source */
    projectId: string;
    /** live source id */
    sourceId: string;
    /** allow this source to trigger a project broadcast */
    trigger?: SourceTrigger | undefined;
}
export interface AddSourceToProjectResponse {
    /** updated project */
    project: Project | undefined;
    /** indicates whether the broadcast was updated as a function of this request */
    broadcastUpdated: boolean;
}
export interface UpdateSourceInProjectRequest {
    /** collection which owns the project */
    collectionId: string;
    /** project which will own the source */
    projectId: string;
    /** live source id */
    sourceId: string;
    /** fields to update (default updates any non-null field) */
    updateMask: string[] | undefined;
    /** allow this source to trigger a project broadcast */
    trigger?: SourceTrigger | undefined;
}
export interface UpdateSourceInProjectResponse {
    /** updated project */
    project: Project | undefined;
}
export interface GetSourceRequest {
    /** collection which owns the project which owns the source */
    collectionId: string;
    /** source id */
    sourceId: string;
}
export interface GetSourceResponse {
    source: Source | undefined;
}
export interface GetSourcesRequest {
    /** collection which owns the project which owns the source */
    collectionId: string;
}
export interface GetSourcesResponse {
    sources: Source[];
}
export interface UpdateSourceRequest {
    /** collection which owns the project which owns the source */
    collectionId: string;
    /** source id */
    sourceId: string;
    /** fields to update (default updates any non-null field) */
    updateMask: string[] | undefined;
    /** arbitrary metadata to associate with this source */
    metadata?: any | undefined;
    /** type of collection live source */
    address?: SourceAddress | undefined;
    /** enable real-time previews */
    preview?: PreviewAddress | undefined;
}
export interface UpdateSourceResponse {
    /** updated source */
    source: Source | undefined;
    /** indicates whether the broadcast was updated as a function of this request */
    broadcastUpdated: boolean;
}
export interface RemoveSourceFromProjectRequest {
    /** the id of the parent Collection */
    collectionId: string;
    /** the id of the Project */
    projectId: string;
    /** the id of the Source */
    sourceId: string;
    /** delete a live source even if it is in use in a broadcast */
    force?: boolean | undefined;
}
export interface RemoveSourceFromProjectResponse {
    /** updated project */
    project: Project | undefined;
    /** indicates whether the broadcast was updated as a function of this request */
    broadcastUpdated: boolean;
}
export interface CreateAccessTokenRequest {
    /**
     * service-specific user id
     * ### Usage
     * * this should be an opaque GUID with no spaces
     */
    serviceUserId: string;
    displayName?: string | undefined;
    /** the requested role */
    role?: Role | undefined;
    /** requested duration of token before it expires (ms) */
    maxDuration?: number | undefined;
}
export interface CreateAccessTokenResponse {
    /**
     * access token for owner to be asserted in subsequent Video and Layout API
     * calls
     */
    accessToken: string;
}
/** create an immutable, single-use guest access token */
export interface GuestAccessTokenDirect {
    /** display name of the guest (used to generate webrtc particpant name) */
    displayName: string;
    /** service-specific user id (used for record auditing purposes) */
    serviceUserId?: string | undefined;
}
/** create a multi-use guest access token */
export interface GuestAccessTokenExchange {
    /** the max duration this token is valid for redemption */
    maxDuration?: number | undefined;
}
/** the type of access token (selec one) */
export interface GuestAccessToken {
    direct: GuestAccessTokenDirect | undefined;
    exchange: GuestAccessTokenExchange | undefined;
}
export interface CreateGuestAccessTokenRequest {
    /** id of the collection this token is allowed to access */
    collectionId: string;
    /** id of the project this token is allowed to access */
    projectId: string;
    /** requested duration (ms) of token before it expires */
    maxDuration?: number | undefined;
    /** the requested role of the guest */
    role: Role;
    /** the type of token */
    token: GuestAccessToken | undefined;
    /** request a shortened url */
    url?: string | undefined;
}
export interface CreateGuestAccessTokenResponse {
    /** access token for guest to be used in subsequent API calls */
    accessToken: string;
    /** the shortened url */
    url?: string | undefined;
}
export interface CreateWebRtcAccessTokenRequest {
    /** id of the collection this token is allowed to access */
    collectionId: string;
    /** id of the project this token is allowed to access */
    projectId: string;
    /** display name of the guest (used to generate webrtc particpant name) */
    displayName: string;
}
export interface CreateWebRtcAccessTokenResponse {
    /** the webrtc token parameters */
    webrtcAccess: WebRtcAccess | undefined;
}
export interface RefreshAccessTokenRequest {
}
export interface RefreshAccessTokenResponse {
}
export interface GuestCode {
    /** collection which owns the project */
    collectionId: string;
    /** project id */
    projectId: string;
    /** the short url code */
    code: string;
    /** the short url */
    url: string;
    /** auto-delete after time */
    autoDelete: string | undefined;
}
export interface GuestCodeRedirectRequest {
    /** the id of the service */
    serviceId: string;
    /** the short url code */
    code: string;
}
export interface GuestCodeRedirectResponse {
}
export interface JsonWebKey {
    alg: string;
    kty: string;
    use: string;
    kid: string;
    e: string;
    n: string;
}
export interface GetJsonWebKeySetRequest {
}
export interface GetJsonWebKeySetResponse {
    /** public keys used to sign access tokens */
    keys: JsonWebKey[];
}
export interface GetTestTokenRequest {
}
export interface GetTestTokenResponse {
    /** a dummy access key (with no grants) */
    accessToken: string;
}
/** a destination was created */
export interface DestinationCreateEvent {
    /** collection which owns the project which owns the destination */
    collectionId: string;
    /** project which owns the destination */
    projectId: string;
    /** destination id */
    destinationId: string;
    /** the new destination */
    destination: Destination | undefined;
}
/** a destination was deleted */
export interface DestinationDeleteEvent {
    /** collection which owns the project which owns the destination */
    collectionId: string;
    /** project which owns the destination */
    projectId: string;
    /** destination id */
    destinationId: string;
}
/** a destination was updated */
export interface DestinationUpdateEvent {
    /** collection which owns the project which owns the destination */
    collectionId: string;
    /** project which owns the destination */
    projectId: string;
    /** destination id */
    destinationId: string;
    /** changed fields */
    updateMask: string[];
    /** the updated destination */
    destination: Destination | undefined;
}
/** the state of a destination changed */
export interface DestinationStateEvent {
    /** collection which owns the project which owns the destination */
    collectionId: string;
    /** project which owns the destination */
    projectId: string;
    /** destination id */
    destinationId: string;
    /** the state of the connection changed */
    connect: ConnectState | undefined;
}
/** a project was created */
export interface ProjectCreateEvent {
    /** collection which owns the project */
    collectionId: string;
    /** project id */
    projectId: string;
    /** the new project */
    project: Project | undefined;
}
/** a project was deleted */
export interface ProjectDeleteEvent {
    /** collection which owns the project */
    collectionId: string;
    /** project id */
    projectId: string;
}
/** a project was updated */
export interface ProjectUpdateEvent {
    /** collection which owns the project */
    collectionId: string;
    /** project id */
    projectId: string;
    /** the fields that were updated */
    updateMask: string[];
    /** the updated project */
    project: Project | undefined;
}
/** the state of a project broadcast has changed */
export interface ProjectBroadcastStateEvent {
    /** collection which owns the project */
    collectionId: string;
    /** project id */
    projectId: string;
    /** the id of the broadcast */
    broadcastId: string;
    phase: ProjectBroadcastPhase | undefined;
    error: ProjectBroadcastError | undefined;
}
/** a collection was created */
export interface CollectionCreateEvent {
    /** collection id */
    collectionId: string;
    /** the new collection */
    collection: Collection | undefined;
}
/** a collection was deleted */
export interface CollectionDeleteEvent {
    /** collection id */
    collectionId: string;
}
/** a collection was updated */
export interface CollectionUpdateEvent {
    /** collection id */
    collectionId: string;
    /** the fields which were updated */
    updateMask: string[];
    /** the updated collection */
    collection: Collection | undefined;
}
export interface SourceCreateEvent {
    /** collection which owns the source */
    collectionId: string;
    /** source id */
    sourceId: string;
    source: Source | undefined;
}
export interface SourceDeleteEvent {
    collectionId: string;
    sourceId: string;
}
export interface SourceUpdateEvent {
    collectionId: string;
    sourceId: string;
    updateMask: string[];
    source: Source | undefined;
}
export interface SourceAddEvent {
    collectionId: string;
    sourceId: string;
    projectId: string;
    source: Source | undefined;
}
export interface SourceRemoveEvent {
    collectionId: string;
    sourceId: string;
    projectId: string;
}
/** the state of a destination changed */
export interface SourceStateEvent {
    /** collection which owns the project which owns the source */
    collectionId: string;
    /** project id */
    projectId: string;
    /** destination id */
    sourceId: string;
    /** the state of the connection changed */
    connect: ConnectState | undefined;
}
export interface CollectionEvent {
    create: CollectionCreateEvent | undefined;
    update: CollectionUpdateEvent | undefined;
    delete: CollectionDeleteEvent | undefined;
}
export interface DestinationEvent {
    create: DestinationCreateEvent | undefined;
    update: DestinationUpdateEvent | undefined;
    delete: DestinationDeleteEvent | undefined;
    state: DestinationStateEvent | undefined;
}
export interface ProjectEvent {
    create: ProjectCreateEvent | undefined;
    update: ProjectUpdateEvent | undefined;
    delete: ProjectDeleteEvent | undefined;
    state: ProjectBroadcastStateEvent | undefined;
}
export interface SourceEvent {
    create: SourceCreateEvent | undefined;
    update: SourceUpdateEvent | undefined;
    delete: SourceDeleteEvent | undefined;
    add: SourceAddEvent | undefined;
    remove: SourceDeleteEvent | undefined;
    state: SourceStateEvent | undefined;
}
export interface LiveEvent {
    collection: CollectionEvent | undefined;
    destination: DestinationEvent | undefined;
    project: ProjectEvent | undefined;
    source: SourceEvent | undefined;
    unspecified: NullValue | undefined;
}
export declare const VideoRendering: {
    encode(message: VideoRendering, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VideoRendering;
    fromJSON(object: any): VideoRendering;
    toJSON(message: VideoRendering): unknown;
    fromPartial(object: DeepPartial<VideoRendering>): VideoRendering;
};
export declare const AudioRendering: {
    encode(message: AudioRendering, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AudioRendering;
    fromJSON(object: any): AudioRendering;
    toJSON(message: AudioRendering): unknown;
    fromPartial(object: DeepPartial<AudioRendering>): AudioRendering;
};
export declare const Rendering: {
    encode(message: Rendering, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Rendering;
    fromJSON(object: any): Rendering;
    toJSON(message: Rendering): unknown;
    fromPartial(object: DeepPartial<Rendering>): Rendering;
};
export declare const VideoCodecRateControl: {
    encode(message: VideoCodecRateControl, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VideoCodecRateControl;
    fromJSON(object: any): VideoCodecRateControl;
    toJSON(message: VideoCodecRateControl): unknown;
    fromPartial(object: DeepPartial<VideoCodecRateControl>): VideoCodecRateControl;
};
export declare const VideoEncoding: {
    encode(message: VideoEncoding, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VideoEncoding;
    fromJSON(object: any): VideoEncoding;
    toJSON(message: VideoEncoding): unknown;
    fromPartial(object: DeepPartial<VideoEncoding>): VideoEncoding;
};
export declare const AudioEncoding: {
    encode(message: AudioEncoding, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AudioEncoding;
    fromJSON(object: any): AudioEncoding;
    toJSON(message: AudioEncoding): unknown;
    fromPartial(object: DeepPartial<AudioEncoding>): AudioEncoding;
};
export declare const Encoding: {
    encode(message: Encoding, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Encoding;
    fromJSON(object: any): Encoding;
    toJSON(message: Encoding): unknown;
    fromPartial(object: DeepPartial<Encoding>): Encoding;
};
export declare const SourceRtmpPushAddress: {
    encode(message: SourceRtmpPushAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SourceRtmpPushAddress;
    fromJSON(object: any): SourceRtmpPushAddress;
    toJSON(message: SourceRtmpPushAddress): unknown;
    fromPartial(object: DeepPartial<SourceRtmpPushAddress>): SourceRtmpPushAddress;
};
export declare const SrtPushAddress: {
    encode(message: SrtPushAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SrtPushAddress;
    fromJSON(object: any): SrtPushAddress;
    toJSON(message: SrtPushAddress): unknown;
    fromPartial(object: DeepPartial<SrtPushAddress>): SrtPushAddress;
};
export declare const RtmpPullAddress: {
    encode(message: RtmpPullAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RtmpPullAddress;
    fromJSON(object: any): RtmpPullAddress;
    toJSON(message: RtmpPullAddress): unknown;
    fromPartial(object: DeepPartial<RtmpPullAddress>): RtmpPullAddress;
};
export declare const SourceAddress: {
    encode(message: SourceAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SourceAddress;
    fromJSON(object: any): SourceAddress;
    toJSON(message: SourceAddress): unknown;
    fromPartial(object: DeepPartial<SourceAddress>): SourceAddress;
};
export declare const DestinationRtmpPushAddress: {
    encode(message: DestinationRtmpPushAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DestinationRtmpPushAddress;
    fromJSON(object: any): DestinationRtmpPushAddress;
    toJSON(message: DestinationRtmpPushAddress): unknown;
    fromPartial(object: DeepPartial<DestinationRtmpPushAddress>): DestinationRtmpPushAddress;
};
export declare const DestinationAgoraPushAddress: {
    encode(message: DestinationAgoraPushAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DestinationAgoraPushAddress;
    fromJSON(object: any): DestinationAgoraPushAddress;
    toJSON(message: DestinationAgoraPushAddress): unknown;
    fromPartial(object: DeepPartial<DestinationAgoraPushAddress>): DestinationAgoraPushAddress;
};
export declare const HlsLifecycleLive: {
    encode(message: HlsLifecycleLive, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HlsLifecycleLive;
    fromJSON(object: any): HlsLifecycleLive;
    toJSON(message: HlsLifecycleLive): unknown;
    fromPartial(object: DeepPartial<HlsLifecycleLive>): HlsLifecycleLive;
};
export declare const HlsLifecycleVod: {
    encode(message: HlsLifecycleVod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HlsLifecycleVod;
    fromJSON(object: any): HlsLifecycleVod;
    toJSON(message: HlsLifecycleVod): unknown;
    fromPartial(object: DeepPartial<HlsLifecycleVod>): HlsLifecycleVod;
};
export declare const HlsLifecycle: {
    encode(message: HlsLifecycle, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HlsLifecycle;
    fromJSON(object: any): HlsLifecycle;
    toJSON(message: HlsLifecycle): unknown;
    fromPartial(object: DeepPartial<HlsLifecycle>): HlsLifecycle;
};
export declare const HlsPackaging: {
    encode(message: HlsPackaging, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HlsPackaging;
    fromJSON(object: any): HlsPackaging;
    toJSON(message: HlsPackaging): unknown;
    fromPartial(object: DeepPartial<HlsPackaging>): HlsPackaging;
};
export declare const ObjectStoragePackaging: {
    encode(message: ObjectStoragePackaging, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ObjectStoragePackaging;
    fromJSON(object: any): ObjectStoragePackaging;
    toJSON(message: ObjectStoragePackaging): unknown;
    fromPartial(object: DeepPartial<ObjectStoragePackaging>): ObjectStoragePackaging;
};
export declare const S3StorageAddress: {
    encode(message: S3StorageAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): S3StorageAddress;
    fromJSON(object: any): S3StorageAddress;
    toJSON(message: S3StorageAddress): unknown;
    fromPartial(object: DeepPartial<S3StorageAddress>): S3StorageAddress;
};
export declare const DestinationAddress: {
    encode(message: DestinationAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DestinationAddress;
    fromJSON(object: any): DestinationAddress;
    toJSON(message: DestinationAddress): unknown;
    fromPartial(object: DeepPartial<DestinationAddress>): DestinationAddress;
};
export declare const SourceTrigger: {
    encode(message: SourceTrigger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SourceTrigger;
    fromJSON(object: any): SourceTrigger;
    toJSON(message: SourceTrigger): unknown;
    fromPartial(object: DeepPartial<SourceTrigger>): SourceTrigger;
};
export declare const WebRtcTrigger: {
    encode(message: WebRtcTrigger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WebRtcTrigger;
    fromJSON(object: any): WebRtcTrigger;
    toJSON(message: WebRtcTrigger): unknown;
    fromPartial(object: DeepPartial<WebRtcTrigger>): WebRtcTrigger;
};
export declare const ProjectTrigger: {
    encode(message: ProjectTrigger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectTrigger;
    fromJSON(object: any): ProjectTrigger;
    toJSON(message: ProjectTrigger): unknown;
    fromPartial(object: DeepPartial<ProjectTrigger>): ProjectTrigger;
};
export declare const PreviewHlsPullAddress: {
    encode(message: PreviewHlsPullAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PreviewHlsPullAddress;
    fromJSON(object: any): PreviewHlsPullAddress;
    toJSON(message: PreviewHlsPullAddress): unknown;
    fromPartial(object: DeepPartial<PreviewHlsPullAddress>): PreviewHlsPullAddress;
};
export declare const PreviewWebRtcAddress: {
    encode(message: PreviewWebRtcAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PreviewWebRtcAddress;
    fromJSON(object: any): PreviewWebRtcAddress;
    toJSON(message: PreviewWebRtcAddress): unknown;
    fromPartial(object: DeepPartial<PreviewWebRtcAddress>): PreviewWebRtcAddress;
};
export declare const PreviewAddress: {
    encode(message: PreviewAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PreviewAddress;
    fromJSON(object: any): PreviewAddress;
    toJSON(message: PreviewAddress): unknown;
    fromPartial(object: DeepPartial<PreviewAddress>): PreviewAddress;
};
export declare const StudioSdkComposition: {
    encode(message: StudioSdkComposition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StudioSdkComposition;
    fromJSON(object: any): StudioSdkComposition;
    toJSON(message: StudioSdkComposition): unknown;
    fromPartial(object: DeepPartial<StudioSdkComposition>): StudioSdkComposition;
};
export declare const SceneComposition: {
    encode(message: SceneComposition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SceneComposition;
    fromJSON(object: any): SceneComposition;
    toJSON(message: SceneComposition): unknown;
    fromPartial(object: DeepPartial<SceneComposition>): SceneComposition;
};
export declare const ExternalComposition: {
    encode(message: ExternalComposition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExternalComposition;
    fromJSON(object: any): ExternalComposition;
    toJSON(message: ExternalComposition): unknown;
    fromPartial(object: DeepPartial<ExternalComposition>): ExternalComposition;
};
export declare const Composition: {
    encode(message: Composition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Composition;
    fromJSON(object: any): Composition;
    toJSON(message: Composition): unknown;
    fromPartial(object: DeepPartial<Composition>): Composition;
};
export declare const HostedWebRtc: {
    encode(message: HostedWebRtc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HostedWebRtc;
    fromJSON(object: any): HostedWebRtc;
    toJSON(message: HostedWebRtc): unknown;
    fromPartial(object: DeepPartial<HostedWebRtc>): HostedWebRtc;
};
export declare const WebRtc: {
    encode(message: WebRtc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WebRtc;
    fromJSON(object: any): WebRtc;
    toJSON(message: WebRtc): unknown;
    fromPartial(object: DeepPartial<WebRtc>): WebRtc;
};
export declare const WebRtcAccess: {
    encode(message: WebRtcAccess, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WebRtcAccess;
    fromJSON(object: any): WebRtcAccess;
    toJSON(message: WebRtcAccess): unknown;
    fromPartial(object: DeepPartial<WebRtcAccess>): WebRtcAccess;
};
export declare const LatLong: {
    encode(message: LatLong, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LatLong;
    fromJSON(object: any): LatLong;
    toJSON(message: LatLong): unknown;
    fromPartial(object: DeepPartial<LatLong>): LatLong;
};
export declare const ProjectBroadcastStatus: {
    encode(message: ProjectBroadcastStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectBroadcastStatus;
    fromJSON(object: any): ProjectBroadcastStatus;
    toJSON(message: ProjectBroadcastStatus): unknown;
    fromPartial(object: DeepPartial<ProjectBroadcastStatus>): ProjectBroadcastStatus;
};
export declare const Source: {
    encode(message: Source, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Source;
    fromJSON(object: any): Source;
    toJSON(message: Source): unknown;
    fromPartial(object: DeepPartial<Source>): Source;
};
export declare const Destination: {
    encode(message: Destination, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Destination;
    fromJSON(object: any): Destination;
    toJSON(message: Destination): unknown;
    fromPartial(object: DeepPartial<Destination>): Destination;
};
export declare const Project: {
    encode(message: Project, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Project;
    fromJSON(object: any): Project;
    toJSON(message: Project): unknown;
    fromPartial(object: DeepPartial<Project>): Project;
};
export declare const Collection: {
    encode(message: Collection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Collection;
    fromJSON(object: any): Collection;
    toJSON(message: Collection): unknown;
    fromPartial(object: DeepPartial<Collection>): Collection;
};
export declare const CreateCollectionRequest: {
    encode(message: CreateCollectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateCollectionRequest;
    fromJSON(object: any): CreateCollectionRequest;
    toJSON(message: CreateCollectionRequest): unknown;
    fromPartial(object: DeepPartial<CreateCollectionRequest>): CreateCollectionRequest;
};
export declare const CreateCollectionResponse: {
    encode(message: CreateCollectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateCollectionResponse;
    fromJSON(object: any): CreateCollectionResponse;
    toJSON(message: CreateCollectionResponse): unknown;
    fromPartial(object: DeepPartial<CreateCollectionResponse>): CreateCollectionResponse;
};
export declare const GetCollectionRequest: {
    encode(message: GetCollectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCollectionRequest;
    fromJSON(object: any): GetCollectionRequest;
    toJSON(message: GetCollectionRequest): unknown;
    fromPartial(object: DeepPartial<GetCollectionRequest>): GetCollectionRequest;
};
export declare const GetCollectionResponse: {
    encode(message: GetCollectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCollectionResponse;
    fromJSON(object: any): GetCollectionResponse;
    toJSON(message: GetCollectionResponse): unknown;
    fromPartial(object: DeepPartial<GetCollectionResponse>): GetCollectionResponse;
};
export declare const UpdateCollectionRequest: {
    encode(message: UpdateCollectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCollectionRequest;
    fromJSON(object: any): UpdateCollectionRequest;
    toJSON(message: UpdateCollectionRequest): unknown;
    fromPartial(object: DeepPartial<UpdateCollectionRequest>): UpdateCollectionRequest;
};
export declare const UpdateCollectionResponse: {
    encode(message: UpdateCollectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCollectionResponse;
    fromJSON(object: any): UpdateCollectionResponse;
    toJSON(message: UpdateCollectionResponse): unknown;
    fromPartial(object: DeepPartial<UpdateCollectionResponse>): UpdateCollectionResponse;
};
export declare const DeleteCollectionRequest: {
    encode(message: DeleteCollectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteCollectionRequest;
    fromJSON(object: any): DeleteCollectionRequest;
    toJSON(message: DeleteCollectionRequest): unknown;
    fromPartial(object: DeepPartial<DeleteCollectionRequest>): DeleteCollectionRequest;
};
export declare const DeleteCollectionResponse: {
    encode(message: DeleteCollectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteCollectionResponse;
    fromJSON(object: any): DeleteCollectionResponse;
    toJSON(message: DeleteCollectionResponse): unknown;
    fromPartial(object: DeepPartial<DeleteCollectionResponse>): DeleteCollectionResponse;
};
export declare const GetCollectionsRequest: {
    encode(_: GetCollectionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCollectionsRequest;
    fromJSON(_: any): GetCollectionsRequest;
    toJSON(_: GetCollectionsRequest): unknown;
    fromPartial(_: DeepPartial<GetCollectionsRequest>): GetCollectionsRequest;
};
export declare const GetCollectionsResponse: {
    encode(message: GetCollectionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCollectionsResponse;
    fromJSON(object: any): GetCollectionsResponse;
    toJSON(message: GetCollectionsResponse): unknown;
    fromPartial(object: DeepPartial<GetCollectionsResponse>): GetCollectionsResponse;
};
export declare const CreateProjectRequest: {
    encode(message: CreateProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateProjectRequest;
    fromJSON(object: any): CreateProjectRequest;
    toJSON(message: CreateProjectRequest): unknown;
    fromPartial(object: DeepPartial<CreateProjectRequest>): CreateProjectRequest;
};
export declare const CreateProjectResponse: {
    encode(message: CreateProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateProjectResponse;
    fromJSON(object: any): CreateProjectResponse;
    toJSON(message: CreateProjectResponse): unknown;
    fromPartial(object: DeepPartial<CreateProjectResponse>): CreateProjectResponse;
};
export declare const UpdateProjectRequest: {
    encode(message: UpdateProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectRequest;
    fromJSON(object: any): UpdateProjectRequest;
    toJSON(message: UpdateProjectRequest): unknown;
    fromPartial(object: DeepPartial<UpdateProjectRequest>): UpdateProjectRequest;
};
export declare const UpdateProjectResponse: {
    encode(message: UpdateProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectResponse;
    fromJSON(object: any): UpdateProjectResponse;
    toJSON(message: UpdateProjectResponse): unknown;
    fromPartial(object: DeepPartial<UpdateProjectResponse>): UpdateProjectResponse;
};
export declare const DeleteProjectRequest: {
    encode(message: DeleteProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteProjectRequest;
    fromJSON(object: any): DeleteProjectRequest;
    toJSON(message: DeleteProjectRequest): unknown;
    fromPartial(object: DeepPartial<DeleteProjectRequest>): DeleteProjectRequest;
};
export declare const DeleteProjectResponse: {
    encode(message: DeleteProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteProjectResponse;
    fromJSON(object: any): DeleteProjectResponse;
    toJSON(message: DeleteProjectResponse): unknown;
    fromPartial(object: DeepPartial<DeleteProjectResponse>): DeleteProjectResponse;
};
export declare const StartProjectBroadcastRequest: {
    encode(message: StartProjectBroadcastRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StartProjectBroadcastRequest;
    fromJSON(object: any): StartProjectBroadcastRequest;
    toJSON(message: StartProjectBroadcastRequest): unknown;
    fromPartial(object: DeepPartial<StartProjectBroadcastRequest>): StartProjectBroadcastRequest;
};
export declare const StartProjectBroadcastResponse: {
    encode(message: StartProjectBroadcastResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StartProjectBroadcastResponse;
    fromJSON(object: any): StartProjectBroadcastResponse;
    toJSON(message: StartProjectBroadcastResponse): unknown;
    fromPartial(object: DeepPartial<StartProjectBroadcastResponse>): StartProjectBroadcastResponse;
};
export declare const StopProjectBroadcastRequest: {
    encode(message: StopProjectBroadcastRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StopProjectBroadcastRequest;
    fromJSON(object: any): StopProjectBroadcastRequest;
    toJSON(message: StopProjectBroadcastRequest): unknown;
    fromPartial(object: DeepPartial<StopProjectBroadcastRequest>): StopProjectBroadcastRequest;
};
export declare const StopProjectBroadcastResponse: {
    encode(_: StopProjectBroadcastResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StopProjectBroadcastResponse;
    fromJSON(_: any): StopProjectBroadcastResponse;
    toJSON(_: StopProjectBroadcastResponse): unknown;
    fromPartial(_: DeepPartial<StopProjectBroadcastResponse>): StopProjectBroadcastResponse;
};
export declare const GetProjectRequest: {
    encode(message: GetProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectRequest;
    fromJSON(object: any): GetProjectRequest;
    toJSON(message: GetProjectRequest): unknown;
    fromPartial(object: DeepPartial<GetProjectRequest>): GetProjectRequest;
};
export declare const GetProjectResponse: {
    encode(message: GetProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectResponse;
    fromJSON(object: any): GetProjectResponse;
    toJSON(message: GetProjectResponse): unknown;
    fromPartial(object: DeepPartial<GetProjectResponse>): GetProjectResponse;
};
export declare const GetProjectBroadcastSnapshotRequest: {
    encode(message: GetProjectBroadcastSnapshotRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectBroadcastSnapshotRequest;
    fromJSON(object: any): GetProjectBroadcastSnapshotRequest;
    toJSON(message: GetProjectBroadcastSnapshotRequest): unknown;
    fromPartial(object: DeepPartial<GetProjectBroadcastSnapshotRequest>): GetProjectBroadcastSnapshotRequest;
};
export declare const GetProjectBroadcastSnapshotResponse: {
    encode(message: GetProjectBroadcastSnapshotResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectBroadcastSnapshotResponse;
    fromJSON(object: any): GetProjectBroadcastSnapshotResponse;
    toJSON(message: GetProjectBroadcastSnapshotResponse): unknown;
    fromPartial(object: DeepPartial<GetProjectBroadcastSnapshotResponse>): GetProjectBroadcastSnapshotResponse;
};
export declare const GetProjectBroadcastStatusRequest: {
    encode(message: GetProjectBroadcastStatusRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectBroadcastStatusRequest;
    fromJSON(object: any): GetProjectBroadcastStatusRequest;
    toJSON(message: GetProjectBroadcastStatusRequest): unknown;
    fromPartial(object: DeepPartial<GetProjectBroadcastStatusRequest>): GetProjectBroadcastStatusRequest;
};
export declare const GetProjectBroadcastStatusResponse: {
    encode(message: GetProjectBroadcastStatusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectBroadcastStatusResponse;
    fromJSON(object: any): GetProjectBroadcastStatusResponse;
    toJSON(message: GetProjectBroadcastStatusResponse): unknown;
    fromPartial(object: DeepPartial<GetProjectBroadcastStatusResponse>): GetProjectBroadcastStatusResponse;
};
export declare const StartProjectWebRtcRequest: {
    encode(message: StartProjectWebRtcRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StartProjectWebRtcRequest;
    fromJSON(object: any): StartProjectWebRtcRequest;
    toJSON(message: StartProjectWebRtcRequest): unknown;
    fromPartial(object: DeepPartial<StartProjectWebRtcRequest>): StartProjectWebRtcRequest;
};
export declare const StartProjectWebRtcResponse: {
    encode(_: StartProjectWebRtcResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StartProjectWebRtcResponse;
    fromJSON(_: any): StartProjectWebRtcResponse;
    toJSON(_: StartProjectWebRtcResponse): unknown;
    fromPartial(_: DeepPartial<StartProjectWebRtcResponse>): StartProjectWebRtcResponse;
};
export declare const StopProjectWebRtcRequest: {
    encode(message: StopProjectWebRtcRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StopProjectWebRtcRequest;
    fromJSON(object: any): StopProjectWebRtcRequest;
    toJSON(message: StopProjectWebRtcRequest): unknown;
    fromPartial(object: DeepPartial<StopProjectWebRtcRequest>): StopProjectWebRtcRequest;
};
export declare const StopProjectWebRtcResponse: {
    encode(_: StopProjectWebRtcResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StopProjectWebRtcResponse;
    fromJSON(_: any): StopProjectWebRtcResponse;
    toJSON(_: StopProjectWebRtcResponse): unknown;
    fromPartial(_: DeepPartial<StopProjectWebRtcResponse>): StopProjectWebRtcResponse;
};
export declare const CreateDestinationRequest: {
    encode(message: CreateDestinationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateDestinationRequest;
    fromJSON(object: any): CreateDestinationRequest;
    toJSON(message: CreateDestinationRequest): unknown;
    fromPartial(object: DeepPartial<CreateDestinationRequest>): CreateDestinationRequest;
};
export declare const CreateDestinationResponse: {
    encode(message: CreateDestinationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateDestinationResponse;
    fromJSON(object: any): CreateDestinationResponse;
    toJSON(message: CreateDestinationResponse): unknown;
    fromPartial(object: DeepPartial<CreateDestinationResponse>): CreateDestinationResponse;
};
export declare const GetDestinationRequest: {
    encode(message: GetDestinationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDestinationRequest;
    fromJSON(object: any): GetDestinationRequest;
    toJSON(message: GetDestinationRequest): unknown;
    fromPartial(object: DeepPartial<GetDestinationRequest>): GetDestinationRequest;
};
export declare const GetDestinationResponse: {
    encode(message: GetDestinationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDestinationResponse;
    fromJSON(object: any): GetDestinationResponse;
    toJSON(message: GetDestinationResponse): unknown;
    fromPartial(object: DeepPartial<GetDestinationResponse>): GetDestinationResponse;
};
export declare const DeleteDestinationRequest: {
    encode(message: DeleteDestinationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDestinationRequest;
    fromJSON(object: any): DeleteDestinationRequest;
    toJSON(message: DeleteDestinationRequest): unknown;
    fromPartial(object: DeepPartial<DeleteDestinationRequest>): DeleteDestinationRequest;
};
export declare const DeleteDestinationResponse: {
    encode(message: DeleteDestinationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDestinationResponse;
    fromJSON(object: any): DeleteDestinationResponse;
    toJSON(message: DeleteDestinationResponse): unknown;
    fromPartial(object: DeepPartial<DeleteDestinationResponse>): DeleteDestinationResponse;
};
export declare const UpdateDestinationRequest: {
    encode(message: UpdateDestinationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDestinationRequest;
    fromJSON(object: any): UpdateDestinationRequest;
    toJSON(message: UpdateDestinationRequest): unknown;
    fromPartial(object: DeepPartial<UpdateDestinationRequest>): UpdateDestinationRequest;
};
export declare const UpdateDestinationResponse: {
    encode(message: UpdateDestinationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDestinationResponse;
    fromJSON(object: any): UpdateDestinationResponse;
    toJSON(message: UpdateDestinationResponse): unknown;
    fromPartial(object: DeepPartial<UpdateDestinationResponse>): UpdateDestinationResponse;
};
export declare const CreateSourceRequest: {
    encode(message: CreateSourceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateSourceRequest;
    fromJSON(object: any): CreateSourceRequest;
    toJSON(message: CreateSourceRequest): unknown;
    fromPartial(object: DeepPartial<CreateSourceRequest>): CreateSourceRequest;
};
export declare const CreateSourceResponse: {
    encode(message: CreateSourceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateSourceResponse;
    fromJSON(object: any): CreateSourceResponse;
    toJSON(message: CreateSourceResponse): unknown;
    fromPartial(object: DeepPartial<CreateSourceResponse>): CreateSourceResponse;
};
export declare const DeleteSourceRequest: {
    encode(message: DeleteSourceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSourceRequest;
    fromJSON(object: any): DeleteSourceRequest;
    toJSON(message: DeleteSourceRequest): unknown;
    fromPartial(object: DeepPartial<DeleteSourceRequest>): DeleteSourceRequest;
};
export declare const DeleteSourceResponse: {
    encode(message: DeleteSourceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSourceResponse;
    fromJSON(object: any): DeleteSourceResponse;
    toJSON(message: DeleteSourceResponse): unknown;
    fromPartial(object: DeepPartial<DeleteSourceResponse>): DeleteSourceResponse;
};
export declare const AddSourceToProjectRequest: {
    encode(message: AddSourceToProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddSourceToProjectRequest;
    fromJSON(object: any): AddSourceToProjectRequest;
    toJSON(message: AddSourceToProjectRequest): unknown;
    fromPartial(object: DeepPartial<AddSourceToProjectRequest>): AddSourceToProjectRequest;
};
export declare const AddSourceToProjectResponse: {
    encode(message: AddSourceToProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddSourceToProjectResponse;
    fromJSON(object: any): AddSourceToProjectResponse;
    toJSON(message: AddSourceToProjectResponse): unknown;
    fromPartial(object: DeepPartial<AddSourceToProjectResponse>): AddSourceToProjectResponse;
};
export declare const UpdateSourceInProjectRequest: {
    encode(message: UpdateSourceInProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSourceInProjectRequest;
    fromJSON(object: any): UpdateSourceInProjectRequest;
    toJSON(message: UpdateSourceInProjectRequest): unknown;
    fromPartial(object: DeepPartial<UpdateSourceInProjectRequest>): UpdateSourceInProjectRequest;
};
export declare const UpdateSourceInProjectResponse: {
    encode(message: UpdateSourceInProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSourceInProjectResponse;
    fromJSON(object: any): UpdateSourceInProjectResponse;
    toJSON(message: UpdateSourceInProjectResponse): unknown;
    fromPartial(object: DeepPartial<UpdateSourceInProjectResponse>): UpdateSourceInProjectResponse;
};
export declare const GetSourceRequest: {
    encode(message: GetSourceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSourceRequest;
    fromJSON(object: any): GetSourceRequest;
    toJSON(message: GetSourceRequest): unknown;
    fromPartial(object: DeepPartial<GetSourceRequest>): GetSourceRequest;
};
export declare const GetSourceResponse: {
    encode(message: GetSourceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSourceResponse;
    fromJSON(object: any): GetSourceResponse;
    toJSON(message: GetSourceResponse): unknown;
    fromPartial(object: DeepPartial<GetSourceResponse>): GetSourceResponse;
};
export declare const GetSourcesRequest: {
    encode(message: GetSourcesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSourcesRequest;
    fromJSON(object: any): GetSourcesRequest;
    toJSON(message: GetSourcesRequest): unknown;
    fromPartial(object: DeepPartial<GetSourcesRequest>): GetSourcesRequest;
};
export declare const GetSourcesResponse: {
    encode(message: GetSourcesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSourcesResponse;
    fromJSON(object: any): GetSourcesResponse;
    toJSON(message: GetSourcesResponse): unknown;
    fromPartial(object: DeepPartial<GetSourcesResponse>): GetSourcesResponse;
};
export declare const UpdateSourceRequest: {
    encode(message: UpdateSourceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSourceRequest;
    fromJSON(object: any): UpdateSourceRequest;
    toJSON(message: UpdateSourceRequest): unknown;
    fromPartial(object: DeepPartial<UpdateSourceRequest>): UpdateSourceRequest;
};
export declare const UpdateSourceResponse: {
    encode(message: UpdateSourceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSourceResponse;
    fromJSON(object: any): UpdateSourceResponse;
    toJSON(message: UpdateSourceResponse): unknown;
    fromPartial(object: DeepPartial<UpdateSourceResponse>): UpdateSourceResponse;
};
export declare const RemoveSourceFromProjectRequest: {
    encode(message: RemoveSourceFromProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveSourceFromProjectRequest;
    fromJSON(object: any): RemoveSourceFromProjectRequest;
    toJSON(message: RemoveSourceFromProjectRequest): unknown;
    fromPartial(object: DeepPartial<RemoveSourceFromProjectRequest>): RemoveSourceFromProjectRequest;
};
export declare const RemoveSourceFromProjectResponse: {
    encode(message: RemoveSourceFromProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveSourceFromProjectResponse;
    fromJSON(object: any): RemoveSourceFromProjectResponse;
    toJSON(message: RemoveSourceFromProjectResponse): unknown;
    fromPartial(object: DeepPartial<RemoveSourceFromProjectResponse>): RemoveSourceFromProjectResponse;
};
export declare const CreateAccessTokenRequest: {
    encode(message: CreateAccessTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateAccessTokenRequest;
    fromJSON(object: any): CreateAccessTokenRequest;
    toJSON(message: CreateAccessTokenRequest): unknown;
    fromPartial(object: DeepPartial<CreateAccessTokenRequest>): CreateAccessTokenRequest;
};
export declare const CreateAccessTokenResponse: {
    encode(message: CreateAccessTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateAccessTokenResponse;
    fromJSON(object: any): CreateAccessTokenResponse;
    toJSON(message: CreateAccessTokenResponse): unknown;
    fromPartial(object: DeepPartial<CreateAccessTokenResponse>): CreateAccessTokenResponse;
};
export declare const GuestAccessTokenDirect: {
    encode(message: GuestAccessTokenDirect, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GuestAccessTokenDirect;
    fromJSON(object: any): GuestAccessTokenDirect;
    toJSON(message: GuestAccessTokenDirect): unknown;
    fromPartial(object: DeepPartial<GuestAccessTokenDirect>): GuestAccessTokenDirect;
};
export declare const GuestAccessTokenExchange: {
    encode(message: GuestAccessTokenExchange, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GuestAccessTokenExchange;
    fromJSON(object: any): GuestAccessTokenExchange;
    toJSON(message: GuestAccessTokenExchange): unknown;
    fromPartial(object: DeepPartial<GuestAccessTokenExchange>): GuestAccessTokenExchange;
};
export declare const GuestAccessToken: {
    encode(message: GuestAccessToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GuestAccessToken;
    fromJSON(object: any): GuestAccessToken;
    toJSON(message: GuestAccessToken): unknown;
    fromPartial(object: DeepPartial<GuestAccessToken>): GuestAccessToken;
};
export declare const CreateGuestAccessTokenRequest: {
    encode(message: CreateGuestAccessTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateGuestAccessTokenRequest;
    fromJSON(object: any): CreateGuestAccessTokenRequest;
    toJSON(message: CreateGuestAccessTokenRequest): unknown;
    fromPartial(object: DeepPartial<CreateGuestAccessTokenRequest>): CreateGuestAccessTokenRequest;
};
export declare const CreateGuestAccessTokenResponse: {
    encode(message: CreateGuestAccessTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateGuestAccessTokenResponse;
    fromJSON(object: any): CreateGuestAccessTokenResponse;
    toJSON(message: CreateGuestAccessTokenResponse): unknown;
    fromPartial(object: DeepPartial<CreateGuestAccessTokenResponse>): CreateGuestAccessTokenResponse;
};
export declare const CreateWebRtcAccessTokenRequest: {
    encode(message: CreateWebRtcAccessTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateWebRtcAccessTokenRequest;
    fromJSON(object: any): CreateWebRtcAccessTokenRequest;
    toJSON(message: CreateWebRtcAccessTokenRequest): unknown;
    fromPartial(object: DeepPartial<CreateWebRtcAccessTokenRequest>): CreateWebRtcAccessTokenRequest;
};
export declare const CreateWebRtcAccessTokenResponse: {
    encode(message: CreateWebRtcAccessTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateWebRtcAccessTokenResponse;
    fromJSON(object: any): CreateWebRtcAccessTokenResponse;
    toJSON(message: CreateWebRtcAccessTokenResponse): unknown;
    fromPartial(object: DeepPartial<CreateWebRtcAccessTokenResponse>): CreateWebRtcAccessTokenResponse;
};
export declare const RefreshAccessTokenRequest: {
    encode(_: RefreshAccessTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RefreshAccessTokenRequest;
    fromJSON(_: any): RefreshAccessTokenRequest;
    toJSON(_: RefreshAccessTokenRequest): unknown;
    fromPartial(_: DeepPartial<RefreshAccessTokenRequest>): RefreshAccessTokenRequest;
};
export declare const RefreshAccessTokenResponse: {
    encode(_: RefreshAccessTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RefreshAccessTokenResponse;
    fromJSON(_: any): RefreshAccessTokenResponse;
    toJSON(_: RefreshAccessTokenResponse): unknown;
    fromPartial(_: DeepPartial<RefreshAccessTokenResponse>): RefreshAccessTokenResponse;
};
export declare const GuestCode: {
    encode(message: GuestCode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GuestCode;
    fromJSON(object: any): GuestCode;
    toJSON(message: GuestCode): unknown;
    fromPartial(object: DeepPartial<GuestCode>): GuestCode;
};
export declare const GuestCodeRedirectRequest: {
    encode(message: GuestCodeRedirectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GuestCodeRedirectRequest;
    fromJSON(object: any): GuestCodeRedirectRequest;
    toJSON(message: GuestCodeRedirectRequest): unknown;
    fromPartial(object: DeepPartial<GuestCodeRedirectRequest>): GuestCodeRedirectRequest;
};
export declare const GuestCodeRedirectResponse: {
    encode(_: GuestCodeRedirectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GuestCodeRedirectResponse;
    fromJSON(_: any): GuestCodeRedirectResponse;
    toJSON(_: GuestCodeRedirectResponse): unknown;
    fromPartial(_: DeepPartial<GuestCodeRedirectResponse>): GuestCodeRedirectResponse;
};
export declare const JsonWebKey: {
    encode(message: JsonWebKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): JsonWebKey;
    fromJSON(object: any): JsonWebKey;
    toJSON(message: JsonWebKey): unknown;
    fromPartial(object: DeepPartial<JsonWebKey>): JsonWebKey;
};
export declare const GetJsonWebKeySetRequest: {
    encode(_: GetJsonWebKeySetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetJsonWebKeySetRequest;
    fromJSON(_: any): GetJsonWebKeySetRequest;
    toJSON(_: GetJsonWebKeySetRequest): unknown;
    fromPartial(_: DeepPartial<GetJsonWebKeySetRequest>): GetJsonWebKeySetRequest;
};
export declare const GetJsonWebKeySetResponse: {
    encode(message: GetJsonWebKeySetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetJsonWebKeySetResponse;
    fromJSON(object: any): GetJsonWebKeySetResponse;
    toJSON(message: GetJsonWebKeySetResponse): unknown;
    fromPartial(object: DeepPartial<GetJsonWebKeySetResponse>): GetJsonWebKeySetResponse;
};
export declare const GetTestTokenRequest: {
    encode(_: GetTestTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTestTokenRequest;
    fromJSON(_: any): GetTestTokenRequest;
    toJSON(_: GetTestTokenRequest): unknown;
    fromPartial(_: DeepPartial<GetTestTokenRequest>): GetTestTokenRequest;
};
export declare const GetTestTokenResponse: {
    encode(message: GetTestTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTestTokenResponse;
    fromJSON(object: any): GetTestTokenResponse;
    toJSON(message: GetTestTokenResponse): unknown;
    fromPartial(object: DeepPartial<GetTestTokenResponse>): GetTestTokenResponse;
};
export declare const DestinationCreateEvent: {
    encode(message: DestinationCreateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DestinationCreateEvent;
    fromJSON(object: any): DestinationCreateEvent;
    toJSON(message: DestinationCreateEvent): unknown;
    fromPartial(object: DeepPartial<DestinationCreateEvent>): DestinationCreateEvent;
};
export declare const DestinationDeleteEvent: {
    encode(message: DestinationDeleteEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DestinationDeleteEvent;
    fromJSON(object: any): DestinationDeleteEvent;
    toJSON(message: DestinationDeleteEvent): unknown;
    fromPartial(object: DeepPartial<DestinationDeleteEvent>): DestinationDeleteEvent;
};
export declare const DestinationUpdateEvent: {
    encode(message: DestinationUpdateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DestinationUpdateEvent;
    fromJSON(object: any): DestinationUpdateEvent;
    toJSON(message: DestinationUpdateEvent): unknown;
    fromPartial(object: DeepPartial<DestinationUpdateEvent>): DestinationUpdateEvent;
};
export declare const DestinationStateEvent: {
    encode(message: DestinationStateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DestinationStateEvent;
    fromJSON(object: any): DestinationStateEvent;
    toJSON(message: DestinationStateEvent): unknown;
    fromPartial(object: DeepPartial<DestinationStateEvent>): DestinationStateEvent;
};
export declare const ProjectCreateEvent: {
    encode(message: ProjectCreateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectCreateEvent;
    fromJSON(object: any): ProjectCreateEvent;
    toJSON(message: ProjectCreateEvent): unknown;
    fromPartial(object: DeepPartial<ProjectCreateEvent>): ProjectCreateEvent;
};
export declare const ProjectDeleteEvent: {
    encode(message: ProjectDeleteEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectDeleteEvent;
    fromJSON(object: any): ProjectDeleteEvent;
    toJSON(message: ProjectDeleteEvent): unknown;
    fromPartial(object: DeepPartial<ProjectDeleteEvent>): ProjectDeleteEvent;
};
export declare const ProjectUpdateEvent: {
    encode(message: ProjectUpdateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectUpdateEvent;
    fromJSON(object: any): ProjectUpdateEvent;
    toJSON(message: ProjectUpdateEvent): unknown;
    fromPartial(object: DeepPartial<ProjectUpdateEvent>): ProjectUpdateEvent;
};
export declare const ProjectBroadcastStateEvent: {
    encode(message: ProjectBroadcastStateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectBroadcastStateEvent;
    fromJSON(object: any): ProjectBroadcastStateEvent;
    toJSON(message: ProjectBroadcastStateEvent): unknown;
    fromPartial(object: DeepPartial<ProjectBroadcastStateEvent>): ProjectBroadcastStateEvent;
};
export declare const CollectionCreateEvent: {
    encode(message: CollectionCreateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CollectionCreateEvent;
    fromJSON(object: any): CollectionCreateEvent;
    toJSON(message: CollectionCreateEvent): unknown;
    fromPartial(object: DeepPartial<CollectionCreateEvent>): CollectionCreateEvent;
};
export declare const CollectionDeleteEvent: {
    encode(message: CollectionDeleteEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CollectionDeleteEvent;
    fromJSON(object: any): CollectionDeleteEvent;
    toJSON(message: CollectionDeleteEvent): unknown;
    fromPartial(object: DeepPartial<CollectionDeleteEvent>): CollectionDeleteEvent;
};
export declare const CollectionUpdateEvent: {
    encode(message: CollectionUpdateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CollectionUpdateEvent;
    fromJSON(object: any): CollectionUpdateEvent;
    toJSON(message: CollectionUpdateEvent): unknown;
    fromPartial(object: DeepPartial<CollectionUpdateEvent>): CollectionUpdateEvent;
};
export declare const SourceCreateEvent: {
    encode(message: SourceCreateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SourceCreateEvent;
    fromJSON(object: any): SourceCreateEvent;
    toJSON(message: SourceCreateEvent): unknown;
    fromPartial(object: DeepPartial<SourceCreateEvent>): SourceCreateEvent;
};
export declare const SourceDeleteEvent: {
    encode(message: SourceDeleteEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SourceDeleteEvent;
    fromJSON(object: any): SourceDeleteEvent;
    toJSON(message: SourceDeleteEvent): unknown;
    fromPartial(object: DeepPartial<SourceDeleteEvent>): SourceDeleteEvent;
};
export declare const SourceUpdateEvent: {
    encode(message: SourceUpdateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SourceUpdateEvent;
    fromJSON(object: any): SourceUpdateEvent;
    toJSON(message: SourceUpdateEvent): unknown;
    fromPartial(object: DeepPartial<SourceUpdateEvent>): SourceUpdateEvent;
};
export declare const SourceAddEvent: {
    encode(message: SourceAddEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SourceAddEvent;
    fromJSON(object: any): SourceAddEvent;
    toJSON(message: SourceAddEvent): unknown;
    fromPartial(object: DeepPartial<SourceAddEvent>): SourceAddEvent;
};
export declare const SourceRemoveEvent: {
    encode(message: SourceRemoveEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SourceRemoveEvent;
    fromJSON(object: any): SourceRemoveEvent;
    toJSON(message: SourceRemoveEvent): unknown;
    fromPartial(object: DeepPartial<SourceRemoveEvent>): SourceRemoveEvent;
};
export declare const SourceStateEvent: {
    encode(message: SourceStateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SourceStateEvent;
    fromJSON(object: any): SourceStateEvent;
    toJSON(message: SourceStateEvent): unknown;
    fromPartial(object: DeepPartial<SourceStateEvent>): SourceStateEvent;
};
export declare const CollectionEvent: {
    encode(message: CollectionEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CollectionEvent;
    fromJSON(object: any): CollectionEvent;
    toJSON(message: CollectionEvent): unknown;
    fromPartial(object: DeepPartial<CollectionEvent>): CollectionEvent;
};
export declare const DestinationEvent: {
    encode(message: DestinationEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DestinationEvent;
    fromJSON(object: any): DestinationEvent;
    toJSON(message: DestinationEvent): unknown;
    fromPartial(object: DeepPartial<DestinationEvent>): DestinationEvent;
};
export declare const ProjectEvent: {
    encode(message: ProjectEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectEvent;
    fromJSON(object: any): ProjectEvent;
    toJSON(message: ProjectEvent): unknown;
    fromPartial(object: DeepPartial<ProjectEvent>): ProjectEvent;
};
export declare const SourceEvent: {
    encode(message: SourceEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SourceEvent;
    fromJSON(object: any): SourceEvent;
    toJSON(message: SourceEvent): unknown;
    fromPartial(object: DeepPartial<SourceEvent>): SourceEvent;
};
export declare const LiveEvent: {
    encode(message: LiveEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LiveEvent;
    fromJSON(object: any): LiveEvent;
    toJSON(message: LiveEvent): unknown;
    fromPartial(object: DeepPartial<LiveEvent>): LiveEvent;
};
/**
 * The Collection Service operates on collections, which contain projects and
 * collection live sources used in projects.
 */
export interface CollectionService {
    /**
     * Create Collection
     *
     * Create a new collection of related projects and collection live sources
     */
    CreateCollection(request: CreateCollectionRequest): Promise<CreateCollectionResponse>;
    /**
     * Get Collection
     *
     * Get an existing collection of related projects and collection live
     * sources
     */
    GetCollection(request: GetCollectionRequest): Promise<GetCollectionResponse>;
    /**
     * Get Collections
     *
     * Get all collections owned by the user
     */
    GetCollections(request: GetCollectionsRequest): Promise<GetCollectionsResponse>;
    /**
     * Update Collection
     *
     * Update select collection document data
     */
    UpdateCollection(request: UpdateCollectionRequest): Promise<UpdateCollectionResponse>;
    /**
     * Delete Collection
     *
     * Delete a collection of related projects and collection live sources
     */
    DeleteCollection(request: DeleteCollectionRequest): Promise<DeleteCollectionResponse>;
}
export declare class CollectionServiceClientImpl implements CollectionService {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateCollection(request: CreateCollectionRequest): Promise<CreateCollectionResponse>;
    GetCollection(request: GetCollectionRequest): Promise<GetCollectionResponse>;
    GetCollections(request: GetCollectionsRequest): Promise<GetCollectionsResponse>;
    UpdateCollection(request: UpdateCollectionRequest): Promise<UpdateCollectionResponse>;
    DeleteCollection(request: DeleteCollectionRequest): Promise<DeleteCollectionResponse>;
}
/**
 * The Collection Service operates on collections, which contain projects and
 * collection live sources used in projects.
 */
export declare const CollectionServiceDefinition: {
    readonly name: "CollectionService";
    readonly fullName: "live.v21.CollectionService";
    readonly methods: {
        /**
         * Create Collection
         *
         * Create a new collection of related projects and collection live sources
         */
        readonly createCollection: {
            readonly name: "CreateCollection";
            readonly requestType: {
                encode(message: CreateCollectionRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreateCollectionRequest;
                fromJSON(object: any): CreateCollectionRequest;
                toJSON(message: CreateCollectionRequest): unknown;
                fromPartial(object: DeepPartial<CreateCollectionRequest>): CreateCollectionRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: CreateCollectionResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreateCollectionResponse;
                fromJSON(object: any): CreateCollectionResponse;
                toJSON(message: CreateCollectionResponse): unknown;
                fromPartial(object: DeepPartial<CreateCollectionResponse>): CreateCollectionResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * Get Collection
         *
         * Get an existing collection of related projects and collection live
         * sources
         */
        readonly getCollection: {
            readonly name: "GetCollection";
            readonly requestType: {
                encode(message: GetCollectionRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCollectionRequest;
                fromJSON(object: any): GetCollectionRequest;
                toJSON(message: GetCollectionRequest): unknown;
                fromPartial(object: DeepPartial<GetCollectionRequest>): GetCollectionRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetCollectionResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCollectionResponse;
                fromJSON(object: any): GetCollectionResponse;
                toJSON(message: GetCollectionResponse): unknown;
                fromPartial(object: DeepPartial<GetCollectionResponse>): GetCollectionResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * Get Collections
         *
         * Get all collections owned by the user
         */
        readonly getCollections: {
            readonly name: "GetCollections";
            readonly requestType: {
                encode(_: GetCollectionsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCollectionsRequest;
                fromJSON(_: any): GetCollectionsRequest;
                toJSON(_: GetCollectionsRequest): unknown;
                fromPartial(_: DeepPartial<GetCollectionsRequest>): GetCollectionsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetCollectionsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCollectionsResponse;
                fromJSON(object: any): GetCollectionsResponse;
                toJSON(message: GetCollectionsResponse): unknown;
                fromPartial(object: DeepPartial<GetCollectionsResponse>): GetCollectionsResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * Update Collection
         *
         * Update select collection document data
         */
        readonly updateCollection: {
            readonly name: "UpdateCollection";
            readonly requestType: {
                encode(message: UpdateCollectionRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCollectionRequest;
                fromJSON(object: any): UpdateCollectionRequest;
                toJSON(message: UpdateCollectionRequest): unknown;
                fromPartial(object: DeepPartial<UpdateCollectionRequest>): UpdateCollectionRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateCollectionResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCollectionResponse;
                fromJSON(object: any): UpdateCollectionResponse;
                toJSON(message: UpdateCollectionResponse): unknown;
                fromPartial(object: DeepPartial<UpdateCollectionResponse>): UpdateCollectionResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * Delete Collection
         *
         * Delete a collection of related projects and collection live sources
         */
        readonly deleteCollection: {
            readonly name: "DeleteCollection";
            readonly requestType: {
                encode(message: DeleteCollectionRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeleteCollectionRequest;
                fromJSON(object: any): DeleteCollectionRequest;
                toJSON(message: DeleteCollectionRequest): unknown;
                fromPartial(object: DeepPartial<DeleteCollectionRequest>): DeleteCollectionRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: DeleteCollectionResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeleteCollectionResponse;
                fromJSON(object: any): DeleteCollectionResponse;
                toJSON(message: DeleteCollectionResponse): unknown;
                fromPartial(object: DeepPartial<DeleteCollectionResponse>): DeleteCollectionResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
/** The Project Service operates on a Project. */
export interface ProjectService {
    /**
     * Create Project
     *
     * Create a new project
     */
    CreateProject(request: CreateProjectRequest): Promise<CreateProjectResponse>;
    /**
     * Get Project
     *
     * Get an existing project
     */
    GetProject(request: GetProjectRequest): Promise<GetProjectResponse>;
    /**
     * Delete Project
     *
     * Delete a project
     */
    DeleteProject(request: DeleteProjectRequest): Promise<DeleteProjectResponse>;
    /**
     * Update Project
     *
     * Updates a project
     */
    UpdateProject(request: UpdateProjectRequest): Promise<UpdateProjectResponse>;
    /**
     * Start Broadcast
     *
     * Start broadcasting a project
     */
    StartProjectBroadcast(request: StartProjectBroadcastRequest): Promise<StartProjectBroadcastResponse>;
    /**
     * Stop Broadcast
     *
     * Stop broadcasting a project
     */
    StopProjectBroadcast(request: StopProjectBroadcastRequest): Promise<StopProjectBroadcastResponse>;
    /**
     * Start WebRTC
     *
     * Start WebRTC services
     */
    StartProjectWebRtc(request: StartProjectWebRtcRequest): Promise<StartProjectWebRtcResponse>;
    /**
     * Stop WebRTC
     *
     * Stop WebRTC services
     */
    StopProjectWebRtc(request: StopProjectWebRtcRequest): Promise<StopProjectWebRtcResponse>;
    /**
     * Get Snapshot
     *
     * Get a snapshot of the current output frame of the broadcast
     */
    GetProjectBroadcastSnapshot(request: GetProjectBroadcastSnapshotRequest): Promise<GetProjectBroadcastSnapshotResponse>;
    /**
     * Get Broadcast Status
     *
     * Get the broadcast status of the project
     */
    GetProjectBroadcastStatus(request: GetProjectBroadcastStatusRequest): Promise<GetProjectBroadcastStatusResponse>;
}
export declare class ProjectServiceClientImpl implements ProjectService {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateProject(request: CreateProjectRequest): Promise<CreateProjectResponse>;
    GetProject(request: GetProjectRequest): Promise<GetProjectResponse>;
    DeleteProject(request: DeleteProjectRequest): Promise<DeleteProjectResponse>;
    UpdateProject(request: UpdateProjectRequest): Promise<UpdateProjectResponse>;
    StartProjectBroadcast(request: StartProjectBroadcastRequest): Promise<StartProjectBroadcastResponse>;
    StopProjectBroadcast(request: StopProjectBroadcastRequest): Promise<StopProjectBroadcastResponse>;
    StartProjectWebRtc(request: StartProjectWebRtcRequest): Promise<StartProjectWebRtcResponse>;
    StopProjectWebRtc(request: StopProjectWebRtcRequest): Promise<StopProjectWebRtcResponse>;
    GetProjectBroadcastSnapshot(request: GetProjectBroadcastSnapshotRequest): Promise<GetProjectBroadcastSnapshotResponse>;
    GetProjectBroadcastStatus(request: GetProjectBroadcastStatusRequest): Promise<GetProjectBroadcastStatusResponse>;
}
/** The Project Service operates on a Project. */
export declare const ProjectServiceDefinition: {
    readonly name: "ProjectService";
    readonly fullName: "live.v21.ProjectService";
    readonly methods: {
        /**
         * Create Project
         *
         * Create a new project
         */
        readonly createProject: {
            readonly name: "CreateProject";
            readonly requestType: {
                encode(message: CreateProjectRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreateProjectRequest;
                fromJSON(object: any): CreateProjectRequest;
                toJSON(message: CreateProjectRequest): unknown;
                fromPartial(object: DeepPartial<CreateProjectRequest>): CreateProjectRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: CreateProjectResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreateProjectResponse;
                fromJSON(object: any): CreateProjectResponse;
                toJSON(message: CreateProjectResponse): unknown;
                fromPartial(object: DeepPartial<CreateProjectResponse>): CreateProjectResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * Get Project
         *
         * Get an existing project
         */
        readonly getProject: {
            readonly name: "GetProject";
            readonly requestType: {
                encode(message: GetProjectRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectRequest;
                fromJSON(object: any): GetProjectRequest;
                toJSON(message: GetProjectRequest): unknown;
                fromPartial(object: DeepPartial<GetProjectRequest>): GetProjectRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetProjectResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectResponse;
                fromJSON(object: any): GetProjectResponse;
                toJSON(message: GetProjectResponse): unknown;
                fromPartial(object: DeepPartial<GetProjectResponse>): GetProjectResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * Delete Project
         *
         * Delete a project
         */
        readonly deleteProject: {
            readonly name: "DeleteProject";
            readonly requestType: {
                encode(message: DeleteProjectRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeleteProjectRequest;
                fromJSON(object: any): DeleteProjectRequest;
                toJSON(message: DeleteProjectRequest): unknown;
                fromPartial(object: DeepPartial<DeleteProjectRequest>): DeleteProjectRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: DeleteProjectResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeleteProjectResponse;
                fromJSON(object: any): DeleteProjectResponse;
                toJSON(message: DeleteProjectResponse): unknown;
                fromPartial(object: DeepPartial<DeleteProjectResponse>): DeleteProjectResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * Update Project
         *
         * Updates a project
         */
        readonly updateProject: {
            readonly name: "UpdateProject";
            readonly requestType: {
                encode(message: UpdateProjectRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectRequest;
                fromJSON(object: any): UpdateProjectRequest;
                toJSON(message: UpdateProjectRequest): unknown;
                fromPartial(object: DeepPartial<UpdateProjectRequest>): UpdateProjectRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateProjectResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectResponse;
                fromJSON(object: any): UpdateProjectResponse;
                toJSON(message: UpdateProjectResponse): unknown;
                fromPartial(object: DeepPartial<UpdateProjectResponse>): UpdateProjectResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * Start Broadcast
         *
         * Start broadcasting a project
         */
        readonly startProjectBroadcast: {
            readonly name: "StartProjectBroadcast";
            readonly requestType: {
                encode(message: StartProjectBroadcastRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): StartProjectBroadcastRequest;
                fromJSON(object: any): StartProjectBroadcastRequest;
                toJSON(message: StartProjectBroadcastRequest): unknown;
                fromPartial(object: DeepPartial<StartProjectBroadcastRequest>): StartProjectBroadcastRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: StartProjectBroadcastResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): StartProjectBroadcastResponse;
                fromJSON(object: any): StartProjectBroadcastResponse;
                toJSON(message: StartProjectBroadcastResponse): unknown;
                fromPartial(object: DeepPartial<StartProjectBroadcastResponse>): StartProjectBroadcastResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * Stop Broadcast
         *
         * Stop broadcasting a project
         */
        readonly stopProjectBroadcast: {
            readonly name: "StopProjectBroadcast";
            readonly requestType: {
                encode(message: StopProjectBroadcastRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): StopProjectBroadcastRequest;
                fromJSON(object: any): StopProjectBroadcastRequest;
                toJSON(message: StopProjectBroadcastRequest): unknown;
                fromPartial(object: DeepPartial<StopProjectBroadcastRequest>): StopProjectBroadcastRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: StopProjectBroadcastResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): StopProjectBroadcastResponse;
                fromJSON(_: any): StopProjectBroadcastResponse;
                toJSON(_: StopProjectBroadcastResponse): unknown;
                fromPartial(_: DeepPartial<StopProjectBroadcastResponse>): StopProjectBroadcastResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * Start WebRTC
         *
         * Start WebRTC services
         */
        readonly startProjectWebRtc: {
            readonly name: "StartProjectWebRtc";
            readonly requestType: {
                encode(message: StartProjectWebRtcRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): StartProjectWebRtcRequest;
                fromJSON(object: any): StartProjectWebRtcRequest;
                toJSON(message: StartProjectWebRtcRequest): unknown;
                fromPartial(object: DeepPartial<StartProjectWebRtcRequest>): StartProjectWebRtcRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: StartProjectWebRtcResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): StartProjectWebRtcResponse;
                fromJSON(_: any): StartProjectWebRtcResponse;
                toJSON(_: StartProjectWebRtcResponse): unknown;
                fromPartial(_: DeepPartial<StartProjectWebRtcResponse>): StartProjectWebRtcResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * Stop WebRTC
         *
         * Stop WebRTC services
         */
        readonly stopProjectWebRtc: {
            readonly name: "StopProjectWebRtc";
            readonly requestType: {
                encode(message: StopProjectWebRtcRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): StopProjectWebRtcRequest;
                fromJSON(object: any): StopProjectWebRtcRequest;
                toJSON(message: StopProjectWebRtcRequest): unknown;
                fromPartial(object: DeepPartial<StopProjectWebRtcRequest>): StopProjectWebRtcRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: StopProjectWebRtcResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): StopProjectWebRtcResponse;
                fromJSON(_: any): StopProjectWebRtcResponse;
                toJSON(_: StopProjectWebRtcResponse): unknown;
                fromPartial(_: DeepPartial<StopProjectWebRtcResponse>): StopProjectWebRtcResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * Get Snapshot
         *
         * Get a snapshot of the current output frame of the broadcast
         */
        readonly getProjectBroadcastSnapshot: {
            readonly name: "GetProjectBroadcastSnapshot";
            readonly requestType: {
                encode(message: GetProjectBroadcastSnapshotRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectBroadcastSnapshotRequest;
                fromJSON(object: any): GetProjectBroadcastSnapshotRequest;
                toJSON(message: GetProjectBroadcastSnapshotRequest): unknown;
                fromPartial(object: DeepPartial<GetProjectBroadcastSnapshotRequest>): GetProjectBroadcastSnapshotRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetProjectBroadcastSnapshotResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectBroadcastSnapshotResponse;
                fromJSON(object: any): GetProjectBroadcastSnapshotResponse;
                toJSON(message: GetProjectBroadcastSnapshotResponse): unknown;
                fromPartial(object: DeepPartial<GetProjectBroadcastSnapshotResponse>): GetProjectBroadcastSnapshotResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * Get Broadcast Status
         *
         * Get the broadcast status of the project
         */
        readonly getProjectBroadcastStatus: {
            readonly name: "GetProjectBroadcastStatus";
            readonly requestType: {
                encode(message: GetProjectBroadcastStatusRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectBroadcastStatusRequest;
                fromJSON(object: any): GetProjectBroadcastStatusRequest;
                toJSON(message: GetProjectBroadcastStatusRequest): unknown;
                fromPartial(object: DeepPartial<GetProjectBroadcastStatusRequest>): GetProjectBroadcastStatusRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetProjectBroadcastStatusResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectBroadcastStatusResponse;
                fromJSON(object: any): GetProjectBroadcastStatusResponse;
                toJSON(message: GetProjectBroadcastStatusResponse): unknown;
                fromPartial(object: DeepPartial<GetProjectBroadcastStatusResponse>): GetProjectBroadcastStatusResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
/**
 * The Destination Service operates on Project Destinations. Destinations
 * designate where a Broadcast associated with a Project is distributed
 * downstream.
 */
export interface DestinationService {
    /**
     * Create Destination
     *
     * Create a new Destination
     */
    CreateDestination(request: CreateDestinationRequest): Promise<CreateDestinationResponse>;
    /**
     * Get Destination
     *
     * Get an existing Destination.
     */
    GetDestination(request: GetDestinationRequest): Promise<GetDestinationResponse>;
    /**
     * Update Destination
     *
     * Update a destination
     */
    UpdateDestination(request: UpdateDestinationRequest): Promise<UpdateDestinationResponse>;
    /**
     * Delete Destination
     *
     * Delete a destination
     */
    DeleteDestination(request: DeleteDestinationRequest): Promise<DeleteDestinationResponse>;
}
export declare class DestinationServiceClientImpl implements DestinationService {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateDestination(request: CreateDestinationRequest): Promise<CreateDestinationResponse>;
    GetDestination(request: GetDestinationRequest): Promise<GetDestinationResponse>;
    UpdateDestination(request: UpdateDestinationRequest): Promise<UpdateDestinationResponse>;
    DeleteDestination(request: DeleteDestinationRequest): Promise<DeleteDestinationResponse>;
}
/**
 * The Destination Service operates on Project Destinations. Destinations
 * designate where a Broadcast associated with a Project is distributed
 * downstream.
 */
export declare const DestinationServiceDefinition: {
    readonly name: "DestinationService";
    readonly fullName: "live.v21.DestinationService";
    readonly methods: {
        /**
         * Create Destination
         *
         * Create a new Destination
         */
        readonly createDestination: {
            readonly name: "CreateDestination";
            readonly requestType: {
                encode(message: CreateDestinationRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreateDestinationRequest;
                fromJSON(object: any): CreateDestinationRequest;
                toJSON(message: CreateDestinationRequest): unknown;
                fromPartial(object: DeepPartial<CreateDestinationRequest>): CreateDestinationRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: CreateDestinationResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreateDestinationResponse;
                fromJSON(object: any): CreateDestinationResponse;
                toJSON(message: CreateDestinationResponse): unknown;
                fromPartial(object: DeepPartial<CreateDestinationResponse>): CreateDestinationResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * Get Destination
         *
         * Get an existing Destination.
         */
        readonly getDestination: {
            readonly name: "GetDestination";
            readonly requestType: {
                encode(message: GetDestinationRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDestinationRequest;
                fromJSON(object: any): GetDestinationRequest;
                toJSON(message: GetDestinationRequest): unknown;
                fromPartial(object: DeepPartial<GetDestinationRequest>): GetDestinationRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetDestinationResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDestinationResponse;
                fromJSON(object: any): GetDestinationResponse;
                toJSON(message: GetDestinationResponse): unknown;
                fromPartial(object: DeepPartial<GetDestinationResponse>): GetDestinationResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * Update Destination
         *
         * Update a destination
         */
        readonly updateDestination: {
            readonly name: "UpdateDestination";
            readonly requestType: {
                encode(message: UpdateDestinationRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDestinationRequest;
                fromJSON(object: any): UpdateDestinationRequest;
                toJSON(message: UpdateDestinationRequest): unknown;
                fromPartial(object: DeepPartial<UpdateDestinationRequest>): UpdateDestinationRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateDestinationResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDestinationResponse;
                fromJSON(object: any): UpdateDestinationResponse;
                toJSON(message: UpdateDestinationResponse): unknown;
                fromPartial(object: DeepPartial<UpdateDestinationResponse>): UpdateDestinationResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * Delete Destination
         *
         * Delete a destination
         */
        readonly deleteDestination: {
            readonly name: "DeleteDestination";
            readonly requestType: {
                encode(message: DeleteDestinationRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDestinationRequest;
                fromJSON(object: any): DeleteDestinationRequest;
                toJSON(message: DeleteDestinationRequest): unknown;
                fromPartial(object: DeepPartial<DeleteDestinationRequest>): DeleteDestinationRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: DeleteDestinationResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDestinationResponse;
                fromJSON(object: any): DeleteDestinationResponse;
                toJSON(message: DeleteDestinationResponse): unknown;
                fromPartial(object: DeepPartial<DeleteDestinationResponse>): DeleteDestinationResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
/** The Source Service operates on Collection Live Sources and Project Sources. */
export interface SourceService {
    /**
     * Create Collection Live Source
     *
     * Create a new live source in a collection
     * ### Permissions
     * * scope: `SCOPE_VAPI_CREATE`
     */
    CreateSource(request: CreateSourceRequest): Promise<CreateSourceResponse>;
    /**
     * Delete Live Source
     *
     * Deletes a live source from a collection
     */
    DeleteSource(request: DeleteSourceRequest): Promise<DeleteSourceResponse>;
    /**
     * Update Source
     *
     * Update attributes of the Source.
     */
    UpdateSource(request: UpdateSourceRequest): Promise<UpdateSourceResponse>;
    /**
     * Update Source
     *
     * Update attributes of the Source.
     */
    UpdateSourceInProject(request: UpdateSourceInProjectRequest): Promise<UpdateSourceInProjectResponse>;
    /**
     * Get Source
     *
     * Get an existing source in a project
     */
    GetSource(request: GetSourceRequest): Promise<GetSourceResponse>;
    /**
     * Get Source
     *
     * Get existing sources in a collection
     */
    GetSources(request: GetSourcesRequest): Promise<GetSourcesResponse>;
    /**
     * Add Source to Project
     *
     * Add a source to a project
     */
    AddSourceToProject(request: AddSourceToProjectRequest): Promise<AddSourceToProjectResponse>;
    /**
     * Delete Source From Project
     *
     * Removes a source from a project.
     */
    RemoveSourceFromProject(request: RemoveSourceFromProjectRequest): Promise<RemoveSourceFromProjectResponse>;
}
export declare class SourceServiceClientImpl implements SourceService {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateSource(request: CreateSourceRequest): Promise<CreateSourceResponse>;
    DeleteSource(request: DeleteSourceRequest): Promise<DeleteSourceResponse>;
    UpdateSource(request: UpdateSourceRequest): Promise<UpdateSourceResponse>;
    UpdateSourceInProject(request: UpdateSourceInProjectRequest): Promise<UpdateSourceInProjectResponse>;
    GetSource(request: GetSourceRequest): Promise<GetSourceResponse>;
    GetSources(request: GetSourcesRequest): Promise<GetSourcesResponse>;
    AddSourceToProject(request: AddSourceToProjectRequest): Promise<AddSourceToProjectResponse>;
    RemoveSourceFromProject(request: RemoveSourceFromProjectRequest): Promise<RemoveSourceFromProjectResponse>;
}
/** The Source Service operates on Collection Live Sources and Project Sources. */
export declare const SourceServiceDefinition: {
    readonly name: "SourceService";
    readonly fullName: "live.v21.SourceService";
    readonly methods: {
        /**
         * Create Collection Live Source
         *
         * Create a new live source in a collection
         * ### Permissions
         * * scope: `SCOPE_VAPI_CREATE`
         */
        readonly createSource: {
            readonly name: "CreateSource";
            readonly requestType: {
                encode(message: CreateSourceRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreateSourceRequest;
                fromJSON(object: any): CreateSourceRequest;
                toJSON(message: CreateSourceRequest): unknown;
                fromPartial(object: DeepPartial<CreateSourceRequest>): CreateSourceRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: CreateSourceResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreateSourceResponse;
                fromJSON(object: any): CreateSourceResponse;
                toJSON(message: CreateSourceResponse): unknown;
                fromPartial(object: DeepPartial<CreateSourceResponse>): CreateSourceResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * Delete Live Source
         *
         * Deletes a live source from a collection
         */
        readonly deleteSource: {
            readonly name: "DeleteSource";
            readonly requestType: {
                encode(message: DeleteSourceRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSourceRequest;
                fromJSON(object: any): DeleteSourceRequest;
                toJSON(message: DeleteSourceRequest): unknown;
                fromPartial(object: DeepPartial<DeleteSourceRequest>): DeleteSourceRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: DeleteSourceResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSourceResponse;
                fromJSON(object: any): DeleteSourceResponse;
                toJSON(message: DeleteSourceResponse): unknown;
                fromPartial(object: DeepPartial<DeleteSourceResponse>): DeleteSourceResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * Update Source
         *
         * Update attributes of the Source.
         */
        readonly updateSource: {
            readonly name: "UpdateSource";
            readonly requestType: {
                encode(message: UpdateSourceRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSourceRequest;
                fromJSON(object: any): UpdateSourceRequest;
                toJSON(message: UpdateSourceRequest): unknown;
                fromPartial(object: DeepPartial<UpdateSourceRequest>): UpdateSourceRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateSourceResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSourceResponse;
                fromJSON(object: any): UpdateSourceResponse;
                toJSON(message: UpdateSourceResponse): unknown;
                fromPartial(object: DeepPartial<UpdateSourceResponse>): UpdateSourceResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * Update Source
         *
         * Update attributes of the Source.
         */
        readonly updateSourceInProject: {
            readonly name: "UpdateSourceInProject";
            readonly requestType: {
                encode(message: UpdateSourceInProjectRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSourceInProjectRequest;
                fromJSON(object: any): UpdateSourceInProjectRequest;
                toJSON(message: UpdateSourceInProjectRequest): unknown;
                fromPartial(object: DeepPartial<UpdateSourceInProjectRequest>): UpdateSourceInProjectRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateSourceInProjectResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSourceInProjectResponse;
                fromJSON(object: any): UpdateSourceInProjectResponse;
                toJSON(message: UpdateSourceInProjectResponse): unknown;
                fromPartial(object: DeepPartial<UpdateSourceInProjectResponse>): UpdateSourceInProjectResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * Get Source
         *
         * Get an existing source in a project
         */
        readonly getSource: {
            readonly name: "GetSource";
            readonly requestType: {
                encode(message: GetSourceRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetSourceRequest;
                fromJSON(object: any): GetSourceRequest;
                toJSON(message: GetSourceRequest): unknown;
                fromPartial(object: DeepPartial<GetSourceRequest>): GetSourceRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetSourceResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetSourceResponse;
                fromJSON(object: any): GetSourceResponse;
                toJSON(message: GetSourceResponse): unknown;
                fromPartial(object: DeepPartial<GetSourceResponse>): GetSourceResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * Get Source
         *
         * Get existing sources in a collection
         */
        readonly getSources: {
            readonly name: "GetSources";
            readonly requestType: {
                encode(message: GetSourcesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetSourcesRequest;
                fromJSON(object: any): GetSourcesRequest;
                toJSON(message: GetSourcesRequest): unknown;
                fromPartial(object: DeepPartial<GetSourcesRequest>): GetSourcesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetSourcesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetSourcesResponse;
                fromJSON(object: any): GetSourcesResponse;
                toJSON(message: GetSourcesResponse): unknown;
                fromPartial(object: DeepPartial<GetSourcesResponse>): GetSourcesResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * Add Source to Project
         *
         * Add a source to a project
         */
        readonly addSourceToProject: {
            readonly name: "AddSourceToProject";
            readonly requestType: {
                encode(message: AddSourceToProjectRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddSourceToProjectRequest;
                fromJSON(object: any): AddSourceToProjectRequest;
                toJSON(message: AddSourceToProjectRequest): unknown;
                fromPartial(object: DeepPartial<AddSourceToProjectRequest>): AddSourceToProjectRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddSourceToProjectResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddSourceToProjectResponse;
                fromJSON(object: any): AddSourceToProjectResponse;
                toJSON(message: AddSourceToProjectResponse): unknown;
                fromPartial(object: DeepPartial<AddSourceToProjectResponse>): AddSourceToProjectResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * Delete Source From Project
         *
         * Removes a source from a project.
         */
        readonly removeSourceFromProject: {
            readonly name: "RemoveSourceFromProject";
            readonly requestType: {
                encode(message: RemoveSourceFromProjectRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveSourceFromProjectRequest;
                fromJSON(object: any): RemoveSourceFromProjectRequest;
                toJSON(message: RemoveSourceFromProjectRequest): unknown;
                fromPartial(object: DeepPartial<RemoveSourceFromProjectRequest>): RemoveSourceFromProjectRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveSourceFromProjectResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveSourceFromProjectResponse;
                fromJSON(object: any): RemoveSourceFromProjectResponse;
                toJSON(message: RemoveSourceFromProjectResponse): unknown;
                fromPartial(object: DeepPartial<RemoveSourceFromProjectResponse>): RemoveSourceFromProjectResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
/**
 * The Backend Authentication Service provides token services for partner
 * backend systems
 */
export interface BackendAuthenticationService {
    /**
     * Create Access Token
     *
     * Create an access token for a session host
     */
    CreateAccessToken(request: CreateAccessTokenRequest): Promise<CreateAccessTokenResponse>;
}
export declare class BackendAuthenticationServiceClientImpl implements BackendAuthenticationService {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateAccessToken(request: CreateAccessTokenRequest): Promise<CreateAccessTokenResponse>;
}
/**
 * The Backend Authentication Service provides token services for partner
 * backend systems
 */
export declare const BackendAuthenticationServiceDefinition: {
    readonly name: "BackendAuthenticationService";
    readonly fullName: "live.v21.BackendAuthenticationService";
    readonly methods: {
        /**
         * Create Access Token
         *
         * Create an access token for a session host
         */
        readonly createAccessToken: {
            readonly name: "CreateAccessToken";
            readonly requestType: {
                encode(message: CreateAccessTokenRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreateAccessTokenRequest;
                fromJSON(object: any): CreateAccessTokenRequest;
                toJSON(message: CreateAccessTokenRequest): unknown;
                fromPartial(object: DeepPartial<CreateAccessTokenRequest>): CreateAccessTokenRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: CreateAccessTokenResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreateAccessTokenResponse;
                fromJSON(object: any): CreateAccessTokenResponse;
                toJSON(message: CreateAccessTokenResponse): unknown;
                fromPartial(object: DeepPartial<CreateAccessTokenResponse>): CreateAccessTokenResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
/** The Authentication Service provides token services for clients */
export interface AuthenticationService {
    /**
     * Create Guest Access Token
     *
     * Create an access token for a guest
     */
    CreateGuestAccessToken(request: CreateGuestAccessTokenRequest): Promise<CreateGuestAccessTokenResponse>;
    /**
     * Refresh Access Token
     *
     * Forcibly refresh an access token prior to expiration
     */
    RefreshAccessToken(request: RefreshAccessTokenRequest): Promise<RefreshAccessTokenResponse>;
    /**
     * Create WebRTC Access Token
     *
     * Create a WebRTC Access Token
     */
    CreateWebRtcAccessToken(request: CreateWebRtcAccessTokenRequest): Promise<CreateWebRtcAccessTokenResponse>;
}
export declare class AuthenticationServiceClientImpl implements AuthenticationService {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateGuestAccessToken(request: CreateGuestAccessTokenRequest): Promise<CreateGuestAccessTokenResponse>;
    RefreshAccessToken(request: RefreshAccessTokenRequest): Promise<RefreshAccessTokenResponse>;
    CreateWebRtcAccessToken(request: CreateWebRtcAccessTokenRequest): Promise<CreateWebRtcAccessTokenResponse>;
}
/** The Authentication Service provides token services for clients */
export declare const AuthenticationServiceDefinition: {
    readonly name: "AuthenticationService";
    readonly fullName: "live.v21.AuthenticationService";
    readonly methods: {
        /**
         * Create Guest Access Token
         *
         * Create an access token for a guest
         */
        readonly createGuestAccessToken: {
            readonly name: "CreateGuestAccessToken";
            readonly requestType: {
                encode(message: CreateGuestAccessTokenRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreateGuestAccessTokenRequest;
                fromJSON(object: any): CreateGuestAccessTokenRequest;
                toJSON(message: CreateGuestAccessTokenRequest): unknown;
                fromPartial(object: DeepPartial<CreateGuestAccessTokenRequest>): CreateGuestAccessTokenRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: CreateGuestAccessTokenResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreateGuestAccessTokenResponse;
                fromJSON(object: any): CreateGuestAccessTokenResponse;
                toJSON(message: CreateGuestAccessTokenResponse): unknown;
                fromPartial(object: DeepPartial<CreateGuestAccessTokenResponse>): CreateGuestAccessTokenResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * Refresh Access Token
         *
         * Forcibly refresh an access token prior to expiration
         */
        readonly refreshAccessToken: {
            readonly name: "RefreshAccessToken";
            readonly requestType: {
                encode(_: RefreshAccessTokenRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RefreshAccessTokenRequest;
                fromJSON(_: any): RefreshAccessTokenRequest;
                toJSON(_: RefreshAccessTokenRequest): unknown;
                fromPartial(_: DeepPartial<RefreshAccessTokenRequest>): RefreshAccessTokenRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: RefreshAccessTokenResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RefreshAccessTokenResponse;
                fromJSON(_: any): RefreshAccessTokenResponse;
                toJSON(_: RefreshAccessTokenResponse): unknown;
                fromPartial(_: DeepPartial<RefreshAccessTokenResponse>): RefreshAccessTokenResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * Create WebRTC Access Token
         *
         * Create a WebRTC Access Token
         */
        readonly createWebRtcAccessToken: {
            readonly name: "CreateWebRtcAccessToken";
            readonly requestType: {
                encode(message: CreateWebRtcAccessTokenRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreateWebRtcAccessTokenRequest;
                fromJSON(object: any): CreateWebRtcAccessTokenRequest;
                toJSON(message: CreateWebRtcAccessTokenRequest): unknown;
                fromPartial(object: DeepPartial<CreateWebRtcAccessTokenRequest>): CreateWebRtcAccessTokenRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: CreateWebRtcAccessTokenResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreateWebRtcAccessTokenResponse;
                fromJSON(object: any): CreateWebRtcAccessTokenResponse;
                toJSON(message: CreateWebRtcAccessTokenResponse): unknown;
                fromPartial(object: DeepPartial<CreateWebRtcAccessTokenResponse>): CreateWebRtcAccessTokenResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
/** The Public Authentication Service provides token verification services */
export interface PublicAuthenticationService {
    /**
     * Get Public Keys
     *
     * Get public keys used to sign access tokens
     */
    GetJsonWebKeySet(request: GetJsonWebKeySetRequest): Promise<GetJsonWebKeySetResponse>;
    /**
     * Exchange Guest Access Token
     *
     * Exchange a guest access token with updated user identifiers
     */
    GuestCodeRedirect(request: GuestCodeRedirectRequest): Promise<GuestCodeRedirectResponse>;
}
export declare class PublicAuthenticationServiceClientImpl implements PublicAuthenticationService {
    private readonly rpc;
    constructor(rpc: Rpc);
    GetJsonWebKeySet(request: GetJsonWebKeySetRequest): Promise<GetJsonWebKeySetResponse>;
    GuestCodeRedirect(request: GuestCodeRedirectRequest): Promise<GuestCodeRedirectResponse>;
}
/** The Public Authentication Service provides token verification services */
export declare const PublicAuthenticationServiceDefinition: {
    readonly name: "PublicAuthenticationService";
    readonly fullName: "live.v21.PublicAuthenticationService";
    readonly methods: {
        /**
         * Get Public Keys
         *
         * Get public keys used to sign access tokens
         */
        readonly getJsonWebKeySet: {
            readonly name: "GetJsonWebKeySet";
            readonly requestType: {
                encode(_: GetJsonWebKeySetRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetJsonWebKeySetRequest;
                fromJSON(_: any): GetJsonWebKeySetRequest;
                toJSON(_: GetJsonWebKeySetRequest): unknown;
                fromPartial(_: DeepPartial<GetJsonWebKeySetRequest>): GetJsonWebKeySetRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetJsonWebKeySetResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetJsonWebKeySetResponse;
                fromJSON(object: any): GetJsonWebKeySetResponse;
                toJSON(message: GetJsonWebKeySetResponse): unknown;
                fromPartial(object: DeepPartial<GetJsonWebKeySetResponse>): GetJsonWebKeySetResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * Exchange Guest Access Token
         *
         * Exchange a guest access token with updated user identifiers
         */
        readonly guestCodeRedirect: {
            readonly name: "GuestCodeRedirect";
            readonly requestType: {
                encode(message: GuestCodeRedirectRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GuestCodeRedirectRequest;
                fromJSON(object: any): GuestCodeRedirectRequest;
                toJSON(message: GuestCodeRedirectRequest): unknown;
                fromPartial(object: DeepPartial<GuestCodeRedirectRequest>): GuestCodeRedirectRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: GuestCodeRedirectResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GuestCodeRedirectResponse;
                fromJSON(_: any): GuestCodeRedirectResponse;
                toJSON(_: GuestCodeRedirectResponse): unknown;
                fromPartial(_: DeepPartial<GuestCodeRedirectResponse>): GuestCodeRedirectResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
