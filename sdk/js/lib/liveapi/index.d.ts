/**
 * @summary an API for creating cloud video applications
 */
import * as NiceGrpc from 'nice-grpc-web';
import { ApiClient } from "../api";
import { EventApi } from '../eventapi';
import * as LiveApiModel from './proto/ts/live/v21/api';
export declare class LiveApi extends ApiClient {
    private static LIVEAPI_EVENT_PREFIX;
    private accessTokenRefreshCallback;
    private eventApi;
    private handlers;
    collection: NiceGrpc.Client<typeof LiveApiModel.CollectionServiceDefinition>;
    project: NiceGrpc.Client<typeof LiveApiModel.ProjectServiceDefinition>;
    source: NiceGrpc.Client<typeof LiveApiModel.SourceServiceDefinition>;
    destination: NiceGrpc.Client<typeof LiveApiModel.DestinationServiceDefinition>;
    authentication: NiceGrpc.Client<typeof LiveApiModel.AuthenticationServiceDefinition>;
    backendAuthentication?: NiceGrpc.Client<typeof LiveApiModel.BackendAuthenticationServiceDefinition>;
    publicAuthentication: NiceGrpc.Client<typeof LiveApiModel.PublicAuthenticationServiceDefinition>;
    constructor(sessionId: string, eventApi: EventApi, server: string, onAccessTokenRefresh: LiveApi.AccessTokenRefreshCallback, apiKey?: string, sdkVersion?: string, apiLogCallback?: ApiClient.ApiLogCallback);
    /**
   * Register an event handler
   *
   * @param type Type of event
   * @param handler
   */
    on<T extends LiveApiModel.EventType>(type: T, handler: LiveApi.EventHandlerFn<T>): void;
    /**
     * Unregister an event handler
     *
     * @param type Type of event
     * @param handler
     */
    off<T extends LiveApiModel.EventType>(type: T, handler: LiveApi.EventHandlerFn<T>): void;
    private emitToHandlers;
    subscribeToCollection(collectionId: string): Promise<void>;
    unsubscribeFromCollection(collectionId: string): Promise<void>;
    subscribeToProject(collectionId: string, projectId: string): Promise<void>;
    unsubscribeFromProject(collectionId: string, projectId: string): Promise<void>;
    private eventCallback;
    protected _setup(options: NiceGrpc.CallOptions): void;
}
export declare module LiveApi {
    const liveApiEventMap: {
        readonly EVENT_TYPE_COLLECTION: "collection";
        readonly EVENT_TYPE_PROJECT: "project";
        readonly EVENT_TYPE_SOURCE: "source";
        readonly EVENT_TYPE_DESTINATION: "destination";
        readonly EVENT_TYPE_UNSPECIFIED: "unspecified";
    };
    type AccessTokenRefreshCallback = (accessToken: string) => any;
    type EventMessageType<T extends LiveApiModel.EventType> = Required<Pick<LiveApiModel.LiveEvent, typeof liveApiEventMap[T]>>;
    type EventHandlerFn<T extends LiveApiModel.EventType> = (payload: EventMessageType<T>[typeof liveApiEventMap[T]], subType: LiveApiModel.EventSubType) => void;
}
