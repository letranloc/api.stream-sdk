"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveKitUtils = void 0;
const jwt_decode_1 = __importDefault(require("jwt-decode"));
class LiveKitUtils {
    static decodeJwt(sfuToken) {
        return (0, jwt_decode_1.default)(sfuToken, { header: false });
    }
    static isRoomAdmin(sfuToken) {
        let grants = LiveKitUtils.decodeJwt(sfuToken);
        return grants.video.roomAdmin;
    }
    static getRoomName(sfuToken) {
        let grants = LiveKitUtils.decodeJwt(sfuToken);
        return grants.video.room;
    }
}
exports.LiveKitUtils = LiveKitUtils;
//# sourceMappingURL=index.js.map