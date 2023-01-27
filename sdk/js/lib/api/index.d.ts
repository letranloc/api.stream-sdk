/**
 * @summary an API for creating cloud video applications
 */
import * as NiceGrpc from 'nice-grpc-web';
import { Category } from 'typescript-logging-category-style';
export declare module ApiClient {
    type ApiLogCallback = (api: string, service: string, func: string, request: any, response: any) => void;
    type EventLogCallback = (service: string, type: string, subtype: string, event: any) => void;
}
export declare class ApiClient {
    protected channel: NiceGrpc.Channel;
    protected accessToken?: string;
    protected clientFactory?: NiceGrpc.ClientFactory;
    protected sdkVersion?: string;
    protected version?: string;
    protected log?: Category;
    protected sessionId: string;
    protected grpcOptions: NiceGrpc.CallOptions;
    protected apiLogCallback?: ApiClient.ApiLogCallback;
    protected eventLogCallback?: ApiClient.EventLogCallback;
    logMiddleware<Request, Response>(call: NiceGrpc.ClientMiddlewareCall<Request, Response>, options: NiceGrpc.CallOptions): AsyncGenerator<Awaited<Response>, void | Awaited<Response>, undefined>;
    constructor(sessionId: string, server: string, sdkVersion?: string, logCategory?: string, apiLogCallback?: ApiClient.ApiLogCallback, eventLogCallback?: ApiClient.EventLogCallback);
    setAccessToken(accessToken: string): void;
    protected makeGrpcMetadata(): NiceGrpc.Metadata;
    protected setup(): void;
    protected _setup(options: NiceGrpc.CallOptions): void;
}
