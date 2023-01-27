import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "common.v21";
export interface FieldOptions {
    /** indcates that this field is planned for a future release of this api */
    future?: boolean | undefined;
    databaseId?: boolean | undefined;
    databaseReferenceFrom?: boolean | undefined;
    databaseReference?: string | undefined;
    databaseOwnerReference?: string | undefined;
    databaseReferenceDeep?: boolean | undefined;
    databaseReferenceFromArray?: boolean | undefined;
    databaseReferenceTo?: boolean | undefined;
    databaseIgnore?: boolean | undefined;
    databaseOptimizeSearch?: boolean | undefined;
    urlProtocols?: string | undefined;
    databaseAutoDelete?: boolean | undefined;
}
export interface MessageOptions {
    /** indcates that this field is planned for a future release of this api */
    databaseModel?: boolean | undefined;
    databaseCustomId?: boolean | undefined;
}
export declare const FieldOptions: {
    encode(message: FieldOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FieldOptions;
    fromJSON(object: any): FieldOptions;
    toJSON(message: FieldOptions): unknown;
    fromPartial(object: DeepPartial<FieldOptions>): FieldOptions;
};
export declare const MessageOptions: {
    encode(message: MessageOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageOptions;
    fromJSON(object: any): MessageOptions;
    toJSON(message: MessageOptions): unknown;
    fromPartial(object: DeepPartial<MessageOptions>): MessageOptions;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
