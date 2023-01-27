import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "audit.v21";
export interface Audit {
    serviceId: string;
    serviceUserId: string;
    userId: string;
    operation: string;
    projectId?: string | undefined;
    request: any | undefined;
    response: any | undefined;
}
export declare const Audit: {
    encode(message: Audit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Audit;
    fromJSON(object: any): Audit;
    toJSON(message: Audit): unknown;
    fromPartial(object: DeepPartial<Audit>): Audit;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
