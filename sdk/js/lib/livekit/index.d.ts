import * as LiveKitServer from "@api.stream/livekit-server-sdk";
export declare class LiveKitUtils {
    static decodeJwt(sfuToken: string): LiveKitServer.ClaimGrants;
    static isRoomAdmin(sfuToken: string): boolean;
    static getRoomName(sfuToken: string): string;
}
