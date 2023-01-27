/**
 * @summary an API for creating cloud video applications
 */
import * as NiceGrpc from 'nice-grpc-web';
import * as LayoutApiModel from '@api.stream/protocol-layout-api';
import { ApiClient } from "../api";
import { EventApi } from '../eventapi';
export declare type LayoutApiEventHandler<T extends LayoutApiModel.EventType> = (payload: LayoutApiModel.LayoutApiEventType<T>[typeof LayoutApiModel.layoutApiEventMap[T]], subType: LayoutApiModel.EventSubType) => void;
export declare class LayoutApi extends ApiClient {
    private static LAYOUTAPI_EVENT_PREFIX;
    layout: NiceGrpc.Client<typeof LayoutApiModel.LayoutServiceDefinition>;
    layer: NiceGrpc.Client<typeof LayoutApiModel.LayerServiceDefinition>;
    private eventApi;
    private handlers;
    constructor(sessionId: string, eventApi: EventApi, server: string, sdkVersion?: string, apiLogCallback?: ApiClient.ApiLogCallback);
    protected _setup(options: NiceGrpc.CallOptions): void;
    /**
     * Subscribe to all events for a given layout.
     *
     * @param layoutId - the id of the layout to which you want to subscribe to layout events
     */
    subscribeToLayout(layoutId: string): Promise<void>;
    /**
     * Unsubscribe from all events for a given layout.
     *
     * @param layoutId - the id of the layout to which you want to unsubscribe to layout events
     */
    unsubscribeFromLayout(layoutId: string): Promise<void>;
    /**
     * Subscribe to all events for layouts in a project.
     *
     * @param collectionId - the id of the collection the layouts are in.
     * @param projectId - the id of the project the layouts are in.
     */
    subscribeToLayoutsInProject(collectionId: string, projectId: string): Promise<void>;
    /**
     * Unsubscribe from all events for layouts in a project.
     *
     * @param collectionId - the id of the collection the layouts are in.
     * @param projectId - the id of the project the layouts are in.
     */
    unsubscribeFromLayoutsInProject(collectionId: string, projectId: string): Promise<void>;
    /**
     * Register an event handler
     *
     * @param type Type of event
     * @param handler
     */
    on<T extends LayoutApiModel.EventType>(type: T, handler: LayoutApiEventHandler<T>): void;
    /**
     * Unregister an event handler
     *
     * @param type Type of event
     * @param handler
     */
    off<T extends LayoutApiModel.EventType>(type: T, handler: LayoutApiEventHandler<T>): void;
}
