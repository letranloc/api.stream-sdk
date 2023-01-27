/**
 * @summary an API for creating cloud video applications
 */
import * as EventApiModel from '@api.stream/protocol-event-api';
import * as NiceGrpc from 'nice-grpc-web';
import { ApiClient } from "../api";
declare type SupportedStreamEvents = typeof EventApiModel.eventsApiSupportedEvents[number];
export declare type ExtendedEventType = SupportedStreamEvents | 'connected' | 'disconnected';
export declare type ExtendedStreamResponse = EventApiModel.EventsStreamResponse & {
    connected?: undefined;
    disconnected?: undefined;
};
export declare type EventMessageType<T extends ExtendedEventType> = ExtendedStreamResponse[T];
export declare type EventHandlerFn<T extends ExtendedEventType> = (payload: EventMessageType<T>, metadata: {
    isFromCurrentSession: boolean;
}) => void;
export interface IEventListenerOptions {
    /** ignore events created by this session */
    ignoreSessionEvents?: boolean;
    /** if ignoreSessionEvents=true, allow specific events */
    allowedSessionEvents?: string[];
}
export interface IEventListenerOptionsEvent {
    name?: string | string[];
}
declare type EventsClient = NiceGrpc.Client<typeof EventApiModel.EventServiceDefinition>;
export declare class EventApi extends ApiClient {
    private readonly websocketServer;
    static APISTREAM_EVENT_PREFIX: string;
    private ws;
    private subscriptions;
    private eventHandlers;
    private calls;
    private messageQueue;
    private pingLoop;
    private reconnectTimeout;
    private websocketReady;
    private reconnectionAttempts;
    private badAuthentication;
    private eventsClient?;
    constructor(sessionId: string, server: string, websocketServer: string, sdkVersion: string, apiLogCallback?: ApiClient.ApiLogCallback, eventLogCallback?: ApiClient.EventLogCallback);
    /**
     * Publish a custom event
     *
     * note: if this session has an established stream, all custom
     * events will use that transport.
     *
     * @param request
     * @returns
     */
    publish(...request: Parameters<EventsClient['publish']>): Promise<EventApiModel.PublishEventResponse>;
    /**
     * Open the connection
     */
    connect(): void;
    /**
     * Subscribe to an event
     *
     * note: if a connection does not exist, one will be established.
     *
     * @param type
     * @param payload
     */
    subscribe(name: string, payload?: Omit<EventApiModel.SubscribePayload, 'name'>): Promise<void>;
    /**
     * Unsubscribe from an event
     * @param type
     * @param payload
     */
    unsubscribe(name: string, payload?: Omit<EventApiModel.SubscribePayload, 'name'>): Promise<void>;
    /**
     * Register an event handler
     *
     * @param type Type of event
     * @param handler
     */
    on(type: 'connected', fn: () => void): void;
    on(type: 'disconnected', fn: () => void): void;
    on(type: 'reconnectBefore', fn: EventHandlerFn<'reconnectBefore'>): void;
    on(type: 'event', fn: EventHandlerFn<'event'>): void;
    on(type: 'event', data: IEventListenerOptions & IEventListenerOptionsEvent, fn: EventHandlerFn<'event'>): void;
    off(type: 'connected', fn: () => void): void;
    off(type: 'disconnected', fn: () => void): void;
    off(type: 'reconnectBefore', fn: EventHandlerFn<'reconnectBefore'>): void;
    off(type: 'event', fn: EventHandlerFn<'event'>): void;
    off(type: 'event', data: IEventListenerOptions & IEventListenerOptionsEvent, fn: EventHandlerFn<'event'>): void;
    /**
     * Disconnect the websocket connection
     */
    disconnect(reason: string): void;
    protected _setup(options: NiceGrpc.CallOptions): void;
    /**
     * Called when the websocket is ready.
     */
    private ready;
    private ping;
    /**
     * Reconnect event stream
     *
     * @param reason Rec
     */
    private reconnect;
    /**
     * Send a raw message to the websocket.
     *
     * @param data
     */
    private send;
    /**
     * Process a stream event
     *
     * @param name the name of the event
     * @param payload the full event stream payload
     *
     * @returns void
     */
    private handleEvent;
    /**
     * Make an RPC call
     *
     * Initiates an async request via the stream. A correlationId is generated and used to track
     * responses and errors. A handler is registered
     *
     * @param method request method to call
     * @param payload payload to send
     * @param opts timeout
     * @returns
     */
    private call;
    /**
     * Handler for `.call()`
     *
     * Handle response events for a socket call.
     *
     * @param name name of responding event
     * @param payload payload of the event
     * @returns void
     */
    private resolveCall;
    /**
     * Cleanup connection
     *
     * This cleans up the local state for a given websocket connection.
     */
    private cleanup;
}
export {};
