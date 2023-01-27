/**
 * @summary an API for creating cloud video applications
 */
import { LayoutApi } from './layoutapi';
import { LiveApi } from "./liveapi";
import { EventApi } from "./eventapi";
import * as LiveApiModel from './liveapi/proto/ts/live/v21/api';
import * as LayoutApiModel from '@api.stream/protocol-layout-api';
import * as EventApiModel from '@api.stream/protocol-event-api';
export { LiveApiModel, LayoutApiModel, EventApiModel };
import { LiveKitUtils } from "./livekit";
export { LiveKitUtils };
import { Category } from 'typescript-logging-category-style';
import { ApiClient } from './api';
export declare module ApiStream {
    interface GuestProject {
        collectionId?: string;
        projectId?: string;
        role: LiveApiModel.Role;
    }
    interface AccessToken {
        serviceUserId: string;
        userId: string;
        displayName?: string;
        guestControl?: ApiStream.GuestProject;
        trial: boolean;
        demo: boolean;
    }
    type Environment = 'dev' | 'stage' | 'prod';
    type LoggerLevel = 'Trace' | 'Debug' | 'Info' | 'Warn' | 'Error' | 'Fatal';
    interface ApiStreamOptions {
        sdkVersion?: string;
        env?: ApiStream.Environment;
        logLevel?: ApiStream.LoggerLevel;
        apiKey?: string;
        sessionId?: string;
        overrideEndpoints?: {
            liveApiServer?: string;
            layoutApiServer?: string;
            eventApiServer?: string;
            eventApiWebSocketServer?: string;
        };
        apiLogCallback?: ApiClient.ApiLogCallback;
        eventLogCallback?: ApiClient.EventLogCallback;
    }
}
export declare class ApiStream {
    private readonly liveApi;
    private readonly layoutApi;
    private readonly eventApi;
    private decodedAccessToken?;
    private env;
    private static ACCESS_TOKEN_QUERY_PARAM;
    protected log?: Category;
    /**
     * Returns the live api client
     *
     * @returns the live api client
     */
    LiveApi(): LiveApi;
    /**
     * Returns the layout api client
     *
     * @returns the layout api client
     */
    LayoutApi(): LayoutApi;
    /**
     * Returns the layout api client
     *
     * @returns the layout api client
     */
    EventApi(): EventApi;
    /**
     * Create an ApiStream API Client
     */
    constructor(opts?: ApiStream.ApiStreamOptions);
    private setLogLevel;
    private setAccessToken;
    getAccessToken(): ApiStream.AccessToken | null;
    /**
     * Are we running as a guest role?
     *
     * @returns {(ApiStream.GuestProject | null)} return the active project if running as a guest role
     */
    getGuestProject(): ApiStream.GuestProject | null;
    /**
     * Initialize the api library and check if we are running inside of the rendering engine
     * @async
     * @param {string} accessToken - a valid ApiStream access token
     * @returns {(ApiStream.GuestProject | null)} if we are operating inside of the rendering engine, this is the active project
     */
    load(accessToken?: string): Promise<ApiStream.GuestProject | null>;
    /**
     * get the signaling address of the appropriate livekit webrtc server
     *
     * @param {boolean} admin - if true, return the admin (vs. client) address
     * @returns {string} the address of the appropriate livekit webrtc server
     */
    getLiveKitServer(admin?: boolean): string;
    private parseQuery;
    private static decodeAccessToken;
}
