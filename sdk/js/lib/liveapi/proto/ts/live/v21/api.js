"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = exports.regionToNumber = exports.regionToJSON = exports.regionFromJSON = exports.Region = exports.sourceTriggerActionToNumber = exports.sourceTriggerActionToJSON = exports.sourceTriggerActionFromJSON = exports.SourceTriggerAction = exports.s3ACLToNumber = exports.s3ACLToJSON = exports.s3ACLFromJSON = exports.S3ACL = exports.projectBroadcastPhaseToNumber = exports.projectBroadcastPhaseToJSON = exports.projectBroadcastPhaseFromJSON = exports.ProjectBroadcastPhase = exports.videoCodecRateControlModeToNumber = exports.videoCodecRateControlModeToJSON = exports.videoCodecRateControlModeFromJSON = exports.VideoCodecRateControlMode = exports.audioCodecToNumber = exports.audioCodecToJSON = exports.audioCodecFromJSON = exports.AudioCodec = exports.videoCodecProfileToNumber = exports.videoCodecProfileToJSON = exports.videoCodecProfileFromJSON = exports.VideoCodecProfile = exports.videoCodecToNumber = exports.videoCodecToJSON = exports.videoCodecFromJSON = exports.VideoCodec = exports.renderingQualityToNumber = exports.renderingQualityToJSON = exports.renderingQualityFromJSON = exports.RenderingQuality = exports.audioChannelLayoutToNumber = exports.audioChannelLayoutToJSON = exports.audioChannelLayoutFromJSON = exports.AudioChannelLayout = exports.videoColorSpaceToNumber = exports.videoColorSpaceToJSON = exports.videoColorSpaceFromJSON = exports.VideoColorSpace = exports.imageFormatToNumber = exports.imageFormatToJSON = exports.imageFormatFromJSON = exports.ImageFormat = exports.protobufPackage = void 0;
exports.HostedWebRtc = exports.Composition = exports.ExternalComposition = exports.SceneComposition = exports.StudioSdkComposition = exports.PreviewAddress = exports.PreviewWebRtcAddress = exports.PreviewHlsPullAddress = exports.ProjectTrigger = exports.WebRtcTrigger = exports.SourceTrigger = exports.DestinationAddress = exports.S3StorageAddress = exports.ObjectStoragePackaging = exports.HlsPackaging = exports.HlsLifecycle = exports.HlsLifecycleVod = exports.HlsLifecycleLive = exports.DestinationAgoraPushAddress = exports.DestinationRtmpPushAddress = exports.SourceAddress = exports.RtmpPullAddress = exports.SrtPushAddress = exports.SourceRtmpPushAddress = exports.Encoding = exports.AudioEncoding = exports.VideoEncoding = exports.VideoCodecRateControl = exports.Rendering = exports.AudioRendering = exports.VideoRendering = exports.eventTypeToNumber = exports.eventTypeToJSON = exports.eventTypeFromJSON = exports.EventType = exports.eventSubTypeToNumber = exports.eventSubTypeToJSON = exports.eventSubTypeFromJSON = exports.EventSubType = exports.connectStateToNumber = exports.connectStateToJSON = exports.connectStateFromJSON = exports.ConnectState = exports.projectBroadcastErrorToNumber = exports.projectBroadcastErrorToJSON = exports.projectBroadcastErrorFromJSON = exports.ProjectBroadcastError = exports.roleToNumber = exports.roleToJSON = exports.roleFromJSON = void 0;
exports.DeleteSourceResponse = exports.DeleteSourceRequest = exports.CreateSourceResponse = exports.CreateSourceRequest = exports.UpdateDestinationResponse = exports.UpdateDestinationRequest = exports.DeleteDestinationResponse = exports.DeleteDestinationRequest = exports.GetDestinationResponse = exports.GetDestinationRequest = exports.CreateDestinationResponse = exports.CreateDestinationRequest = exports.StopProjectWebRtcResponse = exports.StopProjectWebRtcRequest = exports.StartProjectWebRtcResponse = exports.StartProjectWebRtcRequest = exports.GetProjectBroadcastStatusResponse = exports.GetProjectBroadcastStatusRequest = exports.GetProjectBroadcastSnapshotResponse = exports.GetProjectBroadcastSnapshotRequest = exports.GetProjectResponse = exports.GetProjectRequest = exports.StopProjectBroadcastResponse = exports.StopProjectBroadcastRequest = exports.StartProjectBroadcastResponse = exports.StartProjectBroadcastRequest = exports.DeleteProjectResponse = exports.DeleteProjectRequest = exports.UpdateProjectResponse = exports.UpdateProjectRequest = exports.CreateProjectResponse = exports.CreateProjectRequest = exports.GetCollectionsResponse = exports.GetCollectionsRequest = exports.DeleteCollectionResponse = exports.DeleteCollectionRequest = exports.UpdateCollectionResponse = exports.UpdateCollectionRequest = exports.GetCollectionResponse = exports.GetCollectionRequest = exports.CreateCollectionResponse = exports.CreateCollectionRequest = exports.Collection = exports.Project = exports.Destination = exports.Source = exports.ProjectBroadcastStatus = exports.LatLong = exports.WebRtcAccess = exports.WebRtc = void 0;
exports.DestinationEvent = exports.CollectionEvent = exports.SourceStateEvent = exports.SourceRemoveEvent = exports.SourceAddEvent = exports.SourceUpdateEvent = exports.SourceDeleteEvent = exports.SourceCreateEvent = exports.CollectionUpdateEvent = exports.CollectionDeleteEvent = exports.CollectionCreateEvent = exports.ProjectBroadcastStateEvent = exports.ProjectUpdateEvent = exports.ProjectDeleteEvent = exports.ProjectCreateEvent = exports.DestinationStateEvent = exports.DestinationUpdateEvent = exports.DestinationDeleteEvent = exports.DestinationCreateEvent = exports.GetTestTokenResponse = exports.GetTestTokenRequest = exports.GetJsonWebKeySetResponse = exports.GetJsonWebKeySetRequest = exports.JsonWebKey = exports.GuestCodeRedirectResponse = exports.GuestCodeRedirectRequest = exports.GuestCode = exports.RefreshAccessTokenResponse = exports.RefreshAccessTokenRequest = exports.CreateWebRtcAccessTokenResponse = exports.CreateWebRtcAccessTokenRequest = exports.CreateGuestAccessTokenResponse = exports.CreateGuestAccessTokenRequest = exports.GuestAccessToken = exports.GuestAccessTokenExchange = exports.GuestAccessTokenDirect = exports.CreateAccessTokenResponse = exports.CreateAccessTokenRequest = exports.RemoveSourceFromProjectResponse = exports.RemoveSourceFromProjectRequest = exports.UpdateSourceResponse = exports.UpdateSourceRequest = exports.GetSourcesResponse = exports.GetSourcesRequest = exports.GetSourceResponse = exports.GetSourceRequest = exports.UpdateSourceInProjectResponse = exports.UpdateSourceInProjectRequest = exports.AddSourceToProjectResponse = exports.AddSourceToProjectRequest = void 0;
exports.PublicAuthenticationServiceDefinition = exports.PublicAuthenticationServiceClientImpl = exports.AuthenticationServiceDefinition = exports.AuthenticationServiceClientImpl = exports.BackendAuthenticationServiceDefinition = exports.BackendAuthenticationServiceClientImpl = exports.SourceServiceDefinition = exports.SourceServiceClientImpl = exports.DestinationServiceDefinition = exports.DestinationServiceClientImpl = exports.ProjectServiceDefinition = exports.ProjectServiceClientImpl = exports.CollectionServiceDefinition = exports.CollectionServiceClientImpl = exports.LiveEvent = exports.SourceEvent = exports.ProjectEvent = void 0;
/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const timestamp_1 = require("../../google/protobuf/timestamp");
const struct_1 = require("../../google/protobuf/struct");
const field_mask_1 = require("../../google/protobuf/field_mask");
exports.protobufPackage = "live.v21";
/** image binary format */
var ImageFormat;
(function (ImageFormat) {
    ImageFormat["IMAGE_FORMAT_UNSPECIFIED"] = "IMAGE_FORMAT_UNSPECIFIED";
    ImageFormat["IMAGE_FORMAT_JPEG"] = "IMAGE_FORMAT_JPEG";
})(ImageFormat = exports.ImageFormat || (exports.ImageFormat = {}));
function imageFormatFromJSON(object) {
    switch (object) {
        case 0:
        case "IMAGE_FORMAT_UNSPECIFIED":
            return ImageFormat.IMAGE_FORMAT_UNSPECIFIED;
        case 1:
        case "IMAGE_FORMAT_JPEG":
            return ImageFormat.IMAGE_FORMAT_JPEG;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum ImageFormat");
    }
}
exports.imageFormatFromJSON = imageFormatFromJSON;
function imageFormatToJSON(object) {
    switch (object) {
        case ImageFormat.IMAGE_FORMAT_UNSPECIFIED:
            return "IMAGE_FORMAT_UNSPECIFIED";
        case ImageFormat.IMAGE_FORMAT_JPEG:
            return "IMAGE_FORMAT_JPEG";
        default:
            return "UNKNOWN";
    }
}
exports.imageFormatToJSON = imageFormatToJSON;
function imageFormatToNumber(object) {
    switch (object) {
        case ImageFormat.IMAGE_FORMAT_UNSPECIFIED:
            return 0;
        case ImageFormat.IMAGE_FORMAT_JPEG:
            return 1;
        default:
            return 0;
    }
}
exports.imageFormatToNumber = imageFormatToNumber;
/** rendering color space */
var VideoColorSpace;
(function (VideoColorSpace) {
    VideoColorSpace["VIDEO_COLOR_SPACE_UNSPECIFIED"] = "VIDEO_COLOR_SPACE_UNSPECIFIED";
    VideoColorSpace["VIDEO_COLOR_SPACE_YUV420"] = "VIDEO_COLOR_SPACE_YUV420";
})(VideoColorSpace = exports.VideoColorSpace || (exports.VideoColorSpace = {}));
function videoColorSpaceFromJSON(object) {
    switch (object) {
        case 0:
        case "VIDEO_COLOR_SPACE_UNSPECIFIED":
            return VideoColorSpace.VIDEO_COLOR_SPACE_UNSPECIFIED;
        case 1:
        case "VIDEO_COLOR_SPACE_YUV420":
            return VideoColorSpace.VIDEO_COLOR_SPACE_YUV420;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum VideoColorSpace");
    }
}
exports.videoColorSpaceFromJSON = videoColorSpaceFromJSON;
function videoColorSpaceToJSON(object) {
    switch (object) {
        case VideoColorSpace.VIDEO_COLOR_SPACE_UNSPECIFIED:
            return "VIDEO_COLOR_SPACE_UNSPECIFIED";
        case VideoColorSpace.VIDEO_COLOR_SPACE_YUV420:
            return "VIDEO_COLOR_SPACE_YUV420";
        default:
            return "UNKNOWN";
    }
}
exports.videoColorSpaceToJSON = videoColorSpaceToJSON;
function videoColorSpaceToNumber(object) {
    switch (object) {
        case VideoColorSpace.VIDEO_COLOR_SPACE_UNSPECIFIED:
            return 0;
        case VideoColorSpace.VIDEO_COLOR_SPACE_YUV420:
            return 1;
        default:
            return 0;
    }
}
exports.videoColorSpaceToNumber = videoColorSpaceToNumber;
/** audio channel layout */
var AudioChannelLayout;
(function (AudioChannelLayout) {
    AudioChannelLayout["AUDIO_CHANNEL_LAYOUT_UNSPECIFIED"] = "AUDIO_CHANNEL_LAYOUT_UNSPECIFIED";
    AudioChannelLayout["AUDIO_CHANNEL_LAYOUT_STEREO"] = "AUDIO_CHANNEL_LAYOUT_STEREO";
})(AudioChannelLayout = exports.AudioChannelLayout || (exports.AudioChannelLayout = {}));
function audioChannelLayoutFromJSON(object) {
    switch (object) {
        case 0:
        case "AUDIO_CHANNEL_LAYOUT_UNSPECIFIED":
            return AudioChannelLayout.AUDIO_CHANNEL_LAYOUT_UNSPECIFIED;
        case 1:
        case "AUDIO_CHANNEL_LAYOUT_STEREO":
            return AudioChannelLayout.AUDIO_CHANNEL_LAYOUT_STEREO;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum AudioChannelLayout");
    }
}
exports.audioChannelLayoutFromJSON = audioChannelLayoutFromJSON;
function audioChannelLayoutToJSON(object) {
    switch (object) {
        case AudioChannelLayout.AUDIO_CHANNEL_LAYOUT_UNSPECIFIED:
            return "AUDIO_CHANNEL_LAYOUT_UNSPECIFIED";
        case AudioChannelLayout.AUDIO_CHANNEL_LAYOUT_STEREO:
            return "AUDIO_CHANNEL_LAYOUT_STEREO";
        default:
            return "UNKNOWN";
    }
}
exports.audioChannelLayoutToJSON = audioChannelLayoutToJSON;
function audioChannelLayoutToNumber(object) {
    switch (object) {
        case AudioChannelLayout.AUDIO_CHANNEL_LAYOUT_UNSPECIFIED:
            return 0;
        case AudioChannelLayout.AUDIO_CHANNEL_LAYOUT_STEREO:
            return 1;
        default:
            return 0;
    }
}
exports.audioChannelLayoutToNumber = audioChannelLayoutToNumber;
/** rendering quality */
var RenderingQuality;
(function (RenderingQuality) {
    RenderingQuality["RENDERING_QUALITY_UNSPECIFIED"] = "RENDERING_QUALITY_UNSPECIFIED";
    RenderingQuality["RENDERING_QUALITY_STANDARD"] = "RENDERING_QUALITY_STANDARD";
    RenderingQuality["RENDERING_QUALITY_HIGH"] = "RENDERING_QUALITY_HIGH";
})(RenderingQuality = exports.RenderingQuality || (exports.RenderingQuality = {}));
function renderingQualityFromJSON(object) {
    switch (object) {
        case 0:
        case "RENDERING_QUALITY_UNSPECIFIED":
            return RenderingQuality.RENDERING_QUALITY_UNSPECIFIED;
        case 1:
        case "RENDERING_QUALITY_STANDARD":
            return RenderingQuality.RENDERING_QUALITY_STANDARD;
        case 2:
        case "RENDERING_QUALITY_HIGH":
            return RenderingQuality.RENDERING_QUALITY_HIGH;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum RenderingQuality");
    }
}
exports.renderingQualityFromJSON = renderingQualityFromJSON;
function renderingQualityToJSON(object) {
    switch (object) {
        case RenderingQuality.RENDERING_QUALITY_UNSPECIFIED:
            return "RENDERING_QUALITY_UNSPECIFIED";
        case RenderingQuality.RENDERING_QUALITY_STANDARD:
            return "RENDERING_QUALITY_STANDARD";
        case RenderingQuality.RENDERING_QUALITY_HIGH:
            return "RENDERING_QUALITY_HIGH";
        default:
            return "UNKNOWN";
    }
}
exports.renderingQualityToJSON = renderingQualityToJSON;
function renderingQualityToNumber(object) {
    switch (object) {
        case RenderingQuality.RENDERING_QUALITY_UNSPECIFIED:
            return 0;
        case RenderingQuality.RENDERING_QUALITY_STANDARD:
            return 1;
        case RenderingQuality.RENDERING_QUALITY_HIGH:
            return 2;
        default:
            return 0;
    }
}
exports.renderingQualityToNumber = renderingQualityToNumber;
/** video encoding codec */
var VideoCodec;
(function (VideoCodec) {
    VideoCodec["VIDEO_CODEC_UNSPECIFIED"] = "VIDEO_CODEC_UNSPECIFIED";
    VideoCodec["VIDEO_CODEC_H264"] = "VIDEO_CODEC_H264";
})(VideoCodec = exports.VideoCodec || (exports.VideoCodec = {}));
function videoCodecFromJSON(object) {
    switch (object) {
        case 0:
        case "VIDEO_CODEC_UNSPECIFIED":
            return VideoCodec.VIDEO_CODEC_UNSPECIFIED;
        case 1:
        case "VIDEO_CODEC_H264":
            return VideoCodec.VIDEO_CODEC_H264;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum VideoCodec");
    }
}
exports.videoCodecFromJSON = videoCodecFromJSON;
function videoCodecToJSON(object) {
    switch (object) {
        case VideoCodec.VIDEO_CODEC_UNSPECIFIED:
            return "VIDEO_CODEC_UNSPECIFIED";
        case VideoCodec.VIDEO_CODEC_H264:
            return "VIDEO_CODEC_H264";
        default:
            return "UNKNOWN";
    }
}
exports.videoCodecToJSON = videoCodecToJSON;
function videoCodecToNumber(object) {
    switch (object) {
        case VideoCodec.VIDEO_CODEC_UNSPECIFIED:
            return 0;
        case VideoCodec.VIDEO_CODEC_H264:
            return 1;
        default:
            return 0;
    }
}
exports.videoCodecToNumber = videoCodecToNumber;
/** video encoding codec profile */
var VideoCodecProfile;
(function (VideoCodecProfile) {
    VideoCodecProfile["VIDEO_CODEC_PROFILE_UNSPECIFIED"] = "VIDEO_CODEC_PROFILE_UNSPECIFIED";
    VideoCodecProfile["VIDEO_CODEC_PROFILE_BASELINE"] = "VIDEO_CODEC_PROFILE_BASELINE";
    VideoCodecProfile["VIDEO_CODEC_PROFILE_MAIN"] = "VIDEO_CODEC_PROFILE_MAIN";
    VideoCodecProfile["VIDEO_CODEC_PROFILE_HIGH"] = "VIDEO_CODEC_PROFILE_HIGH";
})(VideoCodecProfile = exports.VideoCodecProfile || (exports.VideoCodecProfile = {}));
function videoCodecProfileFromJSON(object) {
    switch (object) {
        case 0:
        case "VIDEO_CODEC_PROFILE_UNSPECIFIED":
            return VideoCodecProfile.VIDEO_CODEC_PROFILE_UNSPECIFIED;
        case 2:
        case "VIDEO_CODEC_PROFILE_BASELINE":
            return VideoCodecProfile.VIDEO_CODEC_PROFILE_BASELINE;
        case 3:
        case "VIDEO_CODEC_PROFILE_MAIN":
            return VideoCodecProfile.VIDEO_CODEC_PROFILE_MAIN;
        case 4:
        case "VIDEO_CODEC_PROFILE_HIGH":
            return VideoCodecProfile.VIDEO_CODEC_PROFILE_HIGH;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum VideoCodecProfile");
    }
}
exports.videoCodecProfileFromJSON = videoCodecProfileFromJSON;
function videoCodecProfileToJSON(object) {
    switch (object) {
        case VideoCodecProfile.VIDEO_CODEC_PROFILE_UNSPECIFIED:
            return "VIDEO_CODEC_PROFILE_UNSPECIFIED";
        case VideoCodecProfile.VIDEO_CODEC_PROFILE_BASELINE:
            return "VIDEO_CODEC_PROFILE_BASELINE";
        case VideoCodecProfile.VIDEO_CODEC_PROFILE_MAIN:
            return "VIDEO_CODEC_PROFILE_MAIN";
        case VideoCodecProfile.VIDEO_CODEC_PROFILE_HIGH:
            return "VIDEO_CODEC_PROFILE_HIGH";
        default:
            return "UNKNOWN";
    }
}
exports.videoCodecProfileToJSON = videoCodecProfileToJSON;
function videoCodecProfileToNumber(object) {
    switch (object) {
        case VideoCodecProfile.VIDEO_CODEC_PROFILE_UNSPECIFIED:
            return 0;
        case VideoCodecProfile.VIDEO_CODEC_PROFILE_BASELINE:
            return 2;
        case VideoCodecProfile.VIDEO_CODEC_PROFILE_MAIN:
            return 3;
        case VideoCodecProfile.VIDEO_CODEC_PROFILE_HIGH:
            return 4;
        default:
            return 0;
    }
}
exports.videoCodecProfileToNumber = videoCodecProfileToNumber;
/** audio encoding codec */
var AudioCodec;
(function (AudioCodec) {
    AudioCodec["AUDIO_CODEC_UNSPECIFIED"] = "AUDIO_CODEC_UNSPECIFIED";
    AudioCodec["AUDIO_CODEC_AAC"] = "AUDIO_CODEC_AAC";
})(AudioCodec = exports.AudioCodec || (exports.AudioCodec = {}));
function audioCodecFromJSON(object) {
    switch (object) {
        case 0:
        case "AUDIO_CODEC_UNSPECIFIED":
            return AudioCodec.AUDIO_CODEC_UNSPECIFIED;
        case 1:
        case "AUDIO_CODEC_AAC":
            return AudioCodec.AUDIO_CODEC_AAC;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum AudioCodec");
    }
}
exports.audioCodecFromJSON = audioCodecFromJSON;
function audioCodecToJSON(object) {
    switch (object) {
        case AudioCodec.AUDIO_CODEC_UNSPECIFIED:
            return "AUDIO_CODEC_UNSPECIFIED";
        case AudioCodec.AUDIO_CODEC_AAC:
            return "AUDIO_CODEC_AAC";
        default:
            return "UNKNOWN";
    }
}
exports.audioCodecToJSON = audioCodecToJSON;
function audioCodecToNumber(object) {
    switch (object) {
        case AudioCodec.AUDIO_CODEC_UNSPECIFIED:
            return 0;
        case AudioCodec.AUDIO_CODEC_AAC:
            return 1;
        default:
            return 0;
    }
}
exports.audioCodecToNumber = audioCodecToNumber;
/** video encoding rate control mode */
var VideoCodecRateControlMode;
(function (VideoCodecRateControlMode) {
    VideoCodecRateControlMode["VIDEO_CODEC_RATE_CONTROL_MODE_UNSPECIFIED"] = "VIDEO_CODEC_RATE_CONTROL_MODE_UNSPECIFIED";
    /** VIDEO_CODEC_RATE_CONTROL_MODE_CBR - constant bit rate encoding */
    VideoCodecRateControlMode["VIDEO_CODEC_RATE_CONTROL_MODE_CBR"] = "VIDEO_CODEC_RATE_CONTROL_MODE_CBR";
})(VideoCodecRateControlMode = exports.VideoCodecRateControlMode || (exports.VideoCodecRateControlMode = {}));
function videoCodecRateControlModeFromJSON(object) {
    switch (object) {
        case 0:
        case "VIDEO_CODEC_RATE_CONTROL_MODE_UNSPECIFIED":
            return VideoCodecRateControlMode.VIDEO_CODEC_RATE_CONTROL_MODE_UNSPECIFIED;
        case 1:
        case "VIDEO_CODEC_RATE_CONTROL_MODE_CBR":
            return VideoCodecRateControlMode.VIDEO_CODEC_RATE_CONTROL_MODE_CBR;
        default:
            throw new globalThis.Error("Unrecognized enum value " +
                object +
                " for enum VideoCodecRateControlMode");
    }
}
exports.videoCodecRateControlModeFromJSON = videoCodecRateControlModeFromJSON;
function videoCodecRateControlModeToJSON(object) {
    switch (object) {
        case VideoCodecRateControlMode.VIDEO_CODEC_RATE_CONTROL_MODE_UNSPECIFIED:
            return "VIDEO_CODEC_RATE_CONTROL_MODE_UNSPECIFIED";
        case VideoCodecRateControlMode.VIDEO_CODEC_RATE_CONTROL_MODE_CBR:
            return "VIDEO_CODEC_RATE_CONTROL_MODE_CBR";
        default:
            return "UNKNOWN";
    }
}
exports.videoCodecRateControlModeToJSON = videoCodecRateControlModeToJSON;
function videoCodecRateControlModeToNumber(object) {
    switch (object) {
        case VideoCodecRateControlMode.VIDEO_CODEC_RATE_CONTROL_MODE_UNSPECIFIED:
            return 0;
        case VideoCodecRateControlMode.VIDEO_CODEC_RATE_CONTROL_MODE_CBR:
            return 1;
        default:
            return 0;
    }
}
exports.videoCodecRateControlModeToNumber = videoCodecRateControlModeToNumber;
/** broadcast phase of project */
var ProjectBroadcastPhase;
(function (ProjectBroadcastPhase) {
    ProjectBroadcastPhase["PROJECT_BROADCAST_PHASE_UNSPECIFIED"] = "PROJECT_BROADCAST_PHASE_UNSPECIFIED";
    ProjectBroadcastPhase["PROJECT_BROADCAST_PHASE_NOT_RUNNING"] = "PROJECT_BROADCAST_PHASE_NOT_RUNNING";
    /** PROJECT_BROADCAST_PHASE_WAITING - broadcast is waiting to be scheduled */
    ProjectBroadcastPhase["PROJECT_BROADCAST_PHASE_WAITING"] = "PROJECT_BROADCAST_PHASE_WAITING";
    ProjectBroadcastPhase["PROJECT_BROADCAST_PHASE_STARTING"] = "PROJECT_BROADCAST_PHASE_STARTING";
    ProjectBroadcastPhase["PROJECT_BROADCAST_PHASE_RUNNING"] = "PROJECT_BROADCAST_PHASE_RUNNING";
    ProjectBroadcastPhase["PROJECT_BROADCAST_PHASE_STOPPING"] = "PROJECT_BROADCAST_PHASE_STOPPING";
    ProjectBroadcastPhase["PROJECT_BROADCAST_PHASE_STOPPED"] = "PROJECT_BROADCAST_PHASE_STOPPED";
    ProjectBroadcastPhase["PROJECT_BROADCAST_PHASE_ARCHIVED"] = "PROJECT_BROADCAST_PHASE_ARCHIVED";
})(ProjectBroadcastPhase = exports.ProjectBroadcastPhase || (exports.ProjectBroadcastPhase = {}));
function projectBroadcastPhaseFromJSON(object) {
    switch (object) {
        case 0:
        case "PROJECT_BROADCAST_PHASE_UNSPECIFIED":
            return ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_UNSPECIFIED;
        case 1:
        case "PROJECT_BROADCAST_PHASE_NOT_RUNNING":
            return ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_NOT_RUNNING;
        case 2:
        case "PROJECT_BROADCAST_PHASE_WAITING":
            return ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_WAITING;
        case 3:
        case "PROJECT_BROADCAST_PHASE_STARTING":
            return ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_STARTING;
        case 4:
        case "PROJECT_BROADCAST_PHASE_RUNNING":
            return ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_RUNNING;
        case 5:
        case "PROJECT_BROADCAST_PHASE_STOPPING":
            return ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_STOPPING;
        case 6:
        case "PROJECT_BROADCAST_PHASE_STOPPED":
            return ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_STOPPED;
        case 7:
        case "PROJECT_BROADCAST_PHASE_ARCHIVED":
            return ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_ARCHIVED;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum ProjectBroadcastPhase");
    }
}
exports.projectBroadcastPhaseFromJSON = projectBroadcastPhaseFromJSON;
function projectBroadcastPhaseToJSON(object) {
    switch (object) {
        case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_UNSPECIFIED:
            return "PROJECT_BROADCAST_PHASE_UNSPECIFIED";
        case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_NOT_RUNNING:
            return "PROJECT_BROADCAST_PHASE_NOT_RUNNING";
        case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_WAITING:
            return "PROJECT_BROADCAST_PHASE_WAITING";
        case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_STARTING:
            return "PROJECT_BROADCAST_PHASE_STARTING";
        case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_RUNNING:
            return "PROJECT_BROADCAST_PHASE_RUNNING";
        case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_STOPPING:
            return "PROJECT_BROADCAST_PHASE_STOPPING";
        case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_STOPPED:
            return "PROJECT_BROADCAST_PHASE_STOPPED";
        case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_ARCHIVED:
            return "PROJECT_BROADCAST_PHASE_ARCHIVED";
        default:
            return "UNKNOWN";
    }
}
exports.projectBroadcastPhaseToJSON = projectBroadcastPhaseToJSON;
function projectBroadcastPhaseToNumber(object) {
    switch (object) {
        case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_UNSPECIFIED:
            return 0;
        case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_NOT_RUNNING:
            return 1;
        case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_WAITING:
            return 2;
        case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_STARTING:
            return 3;
        case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_RUNNING:
            return 4;
        case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_STOPPING:
            return 5;
        case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_STOPPED:
            return 6;
        case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_ARCHIVED:
            return 7;
        default:
            return 0;
    }
}
exports.projectBroadcastPhaseToNumber = projectBroadcastPhaseToNumber;
var S3ACL;
(function (S3ACL) {
    S3ACL["S3ACL_UNSPECIFIED"] = "S3ACL_UNSPECIFIED";
    S3ACL["S3ACL_PRIVATE"] = "S3ACL_PRIVATE";
    S3ACL["S3ACL_PUBLIC_READ"] = "S3ACL_PUBLIC_READ";
    S3ACL["S3ACL_PUBLIC_READ_WRITE"] = "S3ACL_PUBLIC_READ_WRITE";
    S3ACL["S3ACL_AUTHENTICATED_READ"] = "S3ACL_AUTHENTICATED_READ";
    S3ACL["S3ACL_BUCKET_OWNER_READ"] = "S3ACL_BUCKET_OWNER_READ";
    S3ACL["S3ACL_BUCKET_OWNER_FULL_CONTROL"] = "S3ACL_BUCKET_OWNER_FULL_CONTROL";
})(S3ACL = exports.S3ACL || (exports.S3ACL = {}));
function s3ACLFromJSON(object) {
    switch (object) {
        case 0:
        case "S3ACL_UNSPECIFIED":
            return S3ACL.S3ACL_UNSPECIFIED;
        case 1:
        case "S3ACL_PRIVATE":
            return S3ACL.S3ACL_PRIVATE;
        case 2:
        case "S3ACL_PUBLIC_READ":
            return S3ACL.S3ACL_PUBLIC_READ;
        case 3:
        case "S3ACL_PUBLIC_READ_WRITE":
            return S3ACL.S3ACL_PUBLIC_READ_WRITE;
        case 4:
        case "S3ACL_AUTHENTICATED_READ":
            return S3ACL.S3ACL_AUTHENTICATED_READ;
        case 5:
        case "S3ACL_BUCKET_OWNER_READ":
            return S3ACL.S3ACL_BUCKET_OWNER_READ;
        case 6:
        case "S3ACL_BUCKET_OWNER_FULL_CONTROL":
            return S3ACL.S3ACL_BUCKET_OWNER_FULL_CONTROL;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum S3ACL");
    }
}
exports.s3ACLFromJSON = s3ACLFromJSON;
function s3ACLToJSON(object) {
    switch (object) {
        case S3ACL.S3ACL_UNSPECIFIED:
            return "S3ACL_UNSPECIFIED";
        case S3ACL.S3ACL_PRIVATE:
            return "S3ACL_PRIVATE";
        case S3ACL.S3ACL_PUBLIC_READ:
            return "S3ACL_PUBLIC_READ";
        case S3ACL.S3ACL_PUBLIC_READ_WRITE:
            return "S3ACL_PUBLIC_READ_WRITE";
        case S3ACL.S3ACL_AUTHENTICATED_READ:
            return "S3ACL_AUTHENTICATED_READ";
        case S3ACL.S3ACL_BUCKET_OWNER_READ:
            return "S3ACL_BUCKET_OWNER_READ";
        case S3ACL.S3ACL_BUCKET_OWNER_FULL_CONTROL:
            return "S3ACL_BUCKET_OWNER_FULL_CONTROL";
        default:
            return "UNKNOWN";
    }
}
exports.s3ACLToJSON = s3ACLToJSON;
function s3ACLToNumber(object) {
    switch (object) {
        case S3ACL.S3ACL_UNSPECIFIED:
            return 0;
        case S3ACL.S3ACL_PRIVATE:
            return 1;
        case S3ACL.S3ACL_PUBLIC_READ:
            return 2;
        case S3ACL.S3ACL_PUBLIC_READ_WRITE:
            return 3;
        case S3ACL.S3ACL_AUTHENTICATED_READ:
            return 4;
        case S3ACL.S3ACL_BUCKET_OWNER_READ:
            return 5;
        case S3ACL.S3ACL_BUCKET_OWNER_FULL_CONTROL:
            return 6;
        default:
            return 0;
    }
}
exports.s3ACLToNumber = s3ACLToNumber;
/** boolean logic for trigger */
var SourceTriggerAction;
(function (SourceTriggerAction) {
    SourceTriggerAction["SOURCE_TRIGGER_ACTION_UNSPECIFIED"] = "SOURCE_TRIGGER_ACTION_UNSPECIFIED";
    SourceTriggerAction["SOURCE_TRIGGER_ACTION_IGNORE"] = "SOURCE_TRIGGER_ACTION_IGNORE";
    /** SOURCE_TRIGGER_ACTION_OR - SOURCE_TRIGGER_ACTION_AND = 2; */
    SourceTriggerAction["SOURCE_TRIGGER_ACTION_OR"] = "SOURCE_TRIGGER_ACTION_OR";
})(SourceTriggerAction = exports.SourceTriggerAction || (exports.SourceTriggerAction = {}));
function sourceTriggerActionFromJSON(object) {
    switch (object) {
        case 0:
        case "SOURCE_TRIGGER_ACTION_UNSPECIFIED":
            return SourceTriggerAction.SOURCE_TRIGGER_ACTION_UNSPECIFIED;
        case 1:
        case "SOURCE_TRIGGER_ACTION_IGNORE":
            return SourceTriggerAction.SOURCE_TRIGGER_ACTION_IGNORE;
        case 3:
        case "SOURCE_TRIGGER_ACTION_OR":
            return SourceTriggerAction.SOURCE_TRIGGER_ACTION_OR;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum SourceTriggerAction");
    }
}
exports.sourceTriggerActionFromJSON = sourceTriggerActionFromJSON;
function sourceTriggerActionToJSON(object) {
    switch (object) {
        case SourceTriggerAction.SOURCE_TRIGGER_ACTION_UNSPECIFIED:
            return "SOURCE_TRIGGER_ACTION_UNSPECIFIED";
        case SourceTriggerAction.SOURCE_TRIGGER_ACTION_IGNORE:
            return "SOURCE_TRIGGER_ACTION_IGNORE";
        case SourceTriggerAction.SOURCE_TRIGGER_ACTION_OR:
            return "SOURCE_TRIGGER_ACTION_OR";
        default:
            return "UNKNOWN";
    }
}
exports.sourceTriggerActionToJSON = sourceTriggerActionToJSON;
function sourceTriggerActionToNumber(object) {
    switch (object) {
        case SourceTriggerAction.SOURCE_TRIGGER_ACTION_UNSPECIFIED:
            return 0;
        case SourceTriggerAction.SOURCE_TRIGGER_ACTION_IGNORE:
            return 1;
        case SourceTriggerAction.SOURCE_TRIGGER_ACTION_OR:
            return 3;
        default:
            return 0;
    }
}
exports.sourceTriggerActionToNumber = sourceTriggerActionToNumber;
/** region which is hosting broadcast */
var Region;
(function (Region) {
    Region["REGION_UNSPECIFIED"] = "REGION_UNSPECIFIED";
    /** REGION_US_EAST_1 - US East */
    Region["REGION_US_EAST_1"] = "REGION_US_EAST_1";
    Region["REGION_US_EAST_2"] = "REGION_US_EAST_2";
    /** REGION_US_WEST_1 - US West */
    Region["REGION_US_WEST_1"] = "REGION_US_WEST_1";
    Region["REGION_US_WEST_2"] = "REGION_US_WEST_2";
    /** REGION_US_CENTRAL_1 - US Central */
    Region["REGION_US_CENTRAL_1"] = "REGION_US_CENTRAL_1";
    /** REGION_AP_SOUTHEAST_1 - Asia Pacific Southeast */
    Region["REGION_AP_SOUTHEAST_1"] = "REGION_AP_SOUTHEAST_1";
    /** REGION_CA_EAST_1 - Canada East */
    Region["REGION_CA_EAST_1"] = "REGION_CA_EAST_1";
    /** REGION_EU_CENTRAL_1 - Europe Central */
    Region["REGION_EU_CENTRAL_1"] = "REGION_EU_CENTRAL_1";
    /** REGION_EU_WEST_1 - Europe West */
    Region["REGION_EU_WEST_1"] = "REGION_EU_WEST_1";
})(Region = exports.Region || (exports.Region = {}));
function regionFromJSON(object) {
    switch (object) {
        case 0:
        case "REGION_UNSPECIFIED":
            return Region.REGION_UNSPECIFIED;
        case 1:
        case "REGION_US_EAST_1":
            return Region.REGION_US_EAST_1;
        case 2:
        case "REGION_US_EAST_2":
            return Region.REGION_US_EAST_2;
        case 3:
        case "REGION_US_WEST_1":
            return Region.REGION_US_WEST_1;
        case 4:
        case "REGION_US_WEST_2":
            return Region.REGION_US_WEST_2;
        case 5:
        case "REGION_US_CENTRAL_1":
            return Region.REGION_US_CENTRAL_1;
        case 10:
        case "REGION_AP_SOUTHEAST_1":
            return Region.REGION_AP_SOUTHEAST_1;
        case 20:
        case "REGION_CA_EAST_1":
            return Region.REGION_CA_EAST_1;
        case 30:
        case "REGION_EU_CENTRAL_1":
            return Region.REGION_EU_CENTRAL_1;
        case 31:
        case "REGION_EU_WEST_1":
            return Region.REGION_EU_WEST_1;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum Region");
    }
}
exports.regionFromJSON = regionFromJSON;
function regionToJSON(object) {
    switch (object) {
        case Region.REGION_UNSPECIFIED:
            return "REGION_UNSPECIFIED";
        case Region.REGION_US_EAST_1:
            return "REGION_US_EAST_1";
        case Region.REGION_US_EAST_2:
            return "REGION_US_EAST_2";
        case Region.REGION_US_WEST_1:
            return "REGION_US_WEST_1";
        case Region.REGION_US_WEST_2:
            return "REGION_US_WEST_2";
        case Region.REGION_US_CENTRAL_1:
            return "REGION_US_CENTRAL_1";
        case Region.REGION_AP_SOUTHEAST_1:
            return "REGION_AP_SOUTHEAST_1";
        case Region.REGION_CA_EAST_1:
            return "REGION_CA_EAST_1";
        case Region.REGION_EU_CENTRAL_1:
            return "REGION_EU_CENTRAL_1";
        case Region.REGION_EU_WEST_1:
            return "REGION_EU_WEST_1";
        default:
            return "UNKNOWN";
    }
}
exports.regionToJSON = regionToJSON;
function regionToNumber(object) {
    switch (object) {
        case Region.REGION_UNSPECIFIED:
            return 0;
        case Region.REGION_US_EAST_1:
            return 1;
        case Region.REGION_US_EAST_2:
            return 2;
        case Region.REGION_US_WEST_1:
            return 3;
        case Region.REGION_US_WEST_2:
            return 4;
        case Region.REGION_US_CENTRAL_1:
            return 5;
        case Region.REGION_AP_SOUTHEAST_1:
            return 10;
        case Region.REGION_CA_EAST_1:
            return 20;
        case Region.REGION_EU_CENTRAL_1:
            return 30;
        case Region.REGION_EU_WEST_1:
            return 31;
        default:
            return 0;
    }
}
exports.regionToNumber = regionToNumber;
/** defined roles */
var Role;
(function (Role) {
    Role["ROLE_UNSPECIFIED"] = "ROLE_UNSPECIFIED";
    Role["ROLE_HOST"] = "ROLE_HOST";
    Role["ROLE_COHOST"] = "ROLE_COHOST";
    Role["ROLE_CONTRIBUTOR"] = "ROLE_CONTRIBUTOR";
    Role["ROLE_GUEST"] = "ROLE_GUEST";
    Role["ROLE_VIEWER"] = "ROLE_VIEWER";
    Role["ROLE_RENDERER"] = "ROLE_RENDERER";
    Role["ROLE_PLATFORM"] = "ROLE_PLATFORM";
    Role["ROLE_IMPERSONATE"] = "ROLE_IMPERSONATE";
})(Role = exports.Role || (exports.Role = {}));
function roleFromJSON(object) {
    switch (object) {
        case 0:
        case "ROLE_UNSPECIFIED":
            return Role.ROLE_UNSPECIFIED;
        case 1:
        case "ROLE_HOST":
            return Role.ROLE_HOST;
        case 2:
        case "ROLE_COHOST":
            return Role.ROLE_COHOST;
        case 3:
        case "ROLE_CONTRIBUTOR":
            return Role.ROLE_CONTRIBUTOR;
        case 4:
        case "ROLE_GUEST":
            return Role.ROLE_GUEST;
        case 5:
        case "ROLE_VIEWER":
            return Role.ROLE_VIEWER;
        case 6:
        case "ROLE_RENDERER":
            return Role.ROLE_RENDERER;
        case 7:
        case "ROLE_PLATFORM":
            return Role.ROLE_PLATFORM;
        case 8:
        case "ROLE_IMPERSONATE":
            return Role.ROLE_IMPERSONATE;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum Role");
    }
}
exports.roleFromJSON = roleFromJSON;
function roleToJSON(object) {
    switch (object) {
        case Role.ROLE_UNSPECIFIED:
            return "ROLE_UNSPECIFIED";
        case Role.ROLE_HOST:
            return "ROLE_HOST";
        case Role.ROLE_COHOST:
            return "ROLE_COHOST";
        case Role.ROLE_CONTRIBUTOR:
            return "ROLE_CONTRIBUTOR";
        case Role.ROLE_GUEST:
            return "ROLE_GUEST";
        case Role.ROLE_VIEWER:
            return "ROLE_VIEWER";
        case Role.ROLE_RENDERER:
            return "ROLE_RENDERER";
        case Role.ROLE_PLATFORM:
            return "ROLE_PLATFORM";
        case Role.ROLE_IMPERSONATE:
            return "ROLE_IMPERSONATE";
        default:
            return "UNKNOWN";
    }
}
exports.roleToJSON = roleToJSON;
function roleToNumber(object) {
    switch (object) {
        case Role.ROLE_UNSPECIFIED:
            return 0;
        case Role.ROLE_HOST:
            return 1;
        case Role.ROLE_COHOST:
            return 2;
        case Role.ROLE_CONTRIBUTOR:
            return 3;
        case Role.ROLE_GUEST:
            return 4;
        case Role.ROLE_VIEWER:
            return 5;
        case Role.ROLE_RENDERER:
            return 6;
        case Role.ROLE_PLATFORM:
            return 7;
        case Role.ROLE_IMPERSONATE:
            return 8;
        default:
            return 0;
    }
}
exports.roleToNumber = roleToNumber;
/** an error that occured during a broadcast */
var ProjectBroadcastError;
(function (ProjectBroadcastError) {
    ProjectBroadcastError["PROJECT_BROADCAST_ERROR_UNSPECIFIED"] = "PROJECT_BROADCAST_ERROR_UNSPECIFIED";
    ProjectBroadcastError["PROJECT_BROADCAST_ERROR_INTERNAL"] = "PROJECT_BROADCAST_ERROR_INTERNAL";
    ProjectBroadcastError["PROJECT_BROADCAST_ERROR_DURATION_EXCEEDED"] = "PROJECT_BROADCAST_ERROR_DURATION_EXCEEDED";
})(ProjectBroadcastError = exports.ProjectBroadcastError || (exports.ProjectBroadcastError = {}));
function projectBroadcastErrorFromJSON(object) {
    switch (object) {
        case 0:
        case "PROJECT_BROADCAST_ERROR_UNSPECIFIED":
            return ProjectBroadcastError.PROJECT_BROADCAST_ERROR_UNSPECIFIED;
        case 1:
        case "PROJECT_BROADCAST_ERROR_INTERNAL":
            return ProjectBroadcastError.PROJECT_BROADCAST_ERROR_INTERNAL;
        case 2:
        case "PROJECT_BROADCAST_ERROR_DURATION_EXCEEDED":
            return ProjectBroadcastError.PROJECT_BROADCAST_ERROR_DURATION_EXCEEDED;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum ProjectBroadcastError");
    }
}
exports.projectBroadcastErrorFromJSON = projectBroadcastErrorFromJSON;
function projectBroadcastErrorToJSON(object) {
    switch (object) {
        case ProjectBroadcastError.PROJECT_BROADCAST_ERROR_UNSPECIFIED:
            return "PROJECT_BROADCAST_ERROR_UNSPECIFIED";
        case ProjectBroadcastError.PROJECT_BROADCAST_ERROR_INTERNAL:
            return "PROJECT_BROADCAST_ERROR_INTERNAL";
        case ProjectBroadcastError.PROJECT_BROADCAST_ERROR_DURATION_EXCEEDED:
            return "PROJECT_BROADCAST_ERROR_DURATION_EXCEEDED";
        default:
            return "UNKNOWN";
    }
}
exports.projectBroadcastErrorToJSON = projectBroadcastErrorToJSON;
function projectBroadcastErrorToNumber(object) {
    switch (object) {
        case ProjectBroadcastError.PROJECT_BROADCAST_ERROR_UNSPECIFIED:
            return 0;
        case ProjectBroadcastError.PROJECT_BROADCAST_ERROR_INTERNAL:
            return 1;
        case ProjectBroadcastError.PROJECT_BROADCAST_ERROR_DURATION_EXCEEDED:
            return 2;
        default:
            return 0;
    }
}
exports.projectBroadcastErrorToNumber = projectBroadcastErrorToNumber;
/** the state of the connection */
var ConnectState;
(function (ConnectState) {
    ConnectState["CONNECT_STATE_UNSPECIFIED"] = "CONNECT_STATE_UNSPECIFIED";
    ConnectState["CONNECT_STATE_CONNECTED"] = "CONNECT_STATE_CONNECTED";
    ConnectState["CONNECT_STATE_DISCONNECTED"] = "CONNECT_STATE_DISCONNECTED";
})(ConnectState = exports.ConnectState || (exports.ConnectState = {}));
function connectStateFromJSON(object) {
    switch (object) {
        case 0:
        case "CONNECT_STATE_UNSPECIFIED":
            return ConnectState.CONNECT_STATE_UNSPECIFIED;
        case 1:
        case "CONNECT_STATE_CONNECTED":
            return ConnectState.CONNECT_STATE_CONNECTED;
        case 2:
        case "CONNECT_STATE_DISCONNECTED":
            return ConnectState.CONNECT_STATE_DISCONNECTED;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum ConnectState");
    }
}
exports.connectStateFromJSON = connectStateFromJSON;
function connectStateToJSON(object) {
    switch (object) {
        case ConnectState.CONNECT_STATE_UNSPECIFIED:
            return "CONNECT_STATE_UNSPECIFIED";
        case ConnectState.CONNECT_STATE_CONNECTED:
            return "CONNECT_STATE_CONNECTED";
        case ConnectState.CONNECT_STATE_DISCONNECTED:
            return "CONNECT_STATE_DISCONNECTED";
        default:
            return "UNKNOWN";
    }
}
exports.connectStateToJSON = connectStateToJSON;
function connectStateToNumber(object) {
    switch (object) {
        case ConnectState.CONNECT_STATE_UNSPECIFIED:
            return 0;
        case ConnectState.CONNECT_STATE_CONNECTED:
            return 1;
        case ConnectState.CONNECT_STATE_DISCONNECTED:
            return 2;
        default:
            return 0;
    }
}
exports.connectStateToNumber = connectStateToNumber;
var EventSubType;
(function (EventSubType) {
    EventSubType["EVENT_SUB_TYPE_UNSPECIFIED"] = "EVENT_SUB_TYPE_UNSPECIFIED";
    EventSubType["EVENT_SUB_TYPE_CREATE"] = "EVENT_SUB_TYPE_CREATE";
    EventSubType["EVENT_SUB_TYPE_UPDATE"] = "EVENT_SUB_TYPE_UPDATE";
    EventSubType["EVENT_SUB_TYPE_DELETE"] = "EVENT_SUB_TYPE_DELETE";
    EventSubType["EVENT_SUB_TYPE_ADD"] = "EVENT_SUB_TYPE_ADD";
    EventSubType["EVENT_SUB_TYPE_REMOVE"] = "EVENT_SUB_TYPE_REMOVE";
    EventSubType["EVENT_SUB_TYPE_STATE"] = "EVENT_SUB_TYPE_STATE";
})(EventSubType = exports.EventSubType || (exports.EventSubType = {}));
function eventSubTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "EVENT_SUB_TYPE_UNSPECIFIED":
            return EventSubType.EVENT_SUB_TYPE_UNSPECIFIED;
        case 1:
        case "EVENT_SUB_TYPE_CREATE":
            return EventSubType.EVENT_SUB_TYPE_CREATE;
        case 2:
        case "EVENT_SUB_TYPE_UPDATE":
            return EventSubType.EVENT_SUB_TYPE_UPDATE;
        case 3:
        case "EVENT_SUB_TYPE_DELETE":
            return EventSubType.EVENT_SUB_TYPE_DELETE;
        case 4:
        case "EVENT_SUB_TYPE_ADD":
            return EventSubType.EVENT_SUB_TYPE_ADD;
        case 5:
        case "EVENT_SUB_TYPE_REMOVE":
            return EventSubType.EVENT_SUB_TYPE_REMOVE;
        case 6:
        case "EVENT_SUB_TYPE_STATE":
            return EventSubType.EVENT_SUB_TYPE_STATE;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum EventSubType");
    }
}
exports.eventSubTypeFromJSON = eventSubTypeFromJSON;
function eventSubTypeToJSON(object) {
    switch (object) {
        case EventSubType.EVENT_SUB_TYPE_UNSPECIFIED:
            return "EVENT_SUB_TYPE_UNSPECIFIED";
        case EventSubType.EVENT_SUB_TYPE_CREATE:
            return "EVENT_SUB_TYPE_CREATE";
        case EventSubType.EVENT_SUB_TYPE_UPDATE:
            return "EVENT_SUB_TYPE_UPDATE";
        case EventSubType.EVENT_SUB_TYPE_DELETE:
            return "EVENT_SUB_TYPE_DELETE";
        case EventSubType.EVENT_SUB_TYPE_ADD:
            return "EVENT_SUB_TYPE_ADD";
        case EventSubType.EVENT_SUB_TYPE_REMOVE:
            return "EVENT_SUB_TYPE_REMOVE";
        case EventSubType.EVENT_SUB_TYPE_STATE:
            return "EVENT_SUB_TYPE_STATE";
        default:
            return "UNKNOWN";
    }
}
exports.eventSubTypeToJSON = eventSubTypeToJSON;
function eventSubTypeToNumber(object) {
    switch (object) {
        case EventSubType.EVENT_SUB_TYPE_UNSPECIFIED:
            return 0;
        case EventSubType.EVENT_SUB_TYPE_CREATE:
            return 1;
        case EventSubType.EVENT_SUB_TYPE_UPDATE:
            return 2;
        case EventSubType.EVENT_SUB_TYPE_DELETE:
            return 3;
        case EventSubType.EVENT_SUB_TYPE_ADD:
            return 4;
        case EventSubType.EVENT_SUB_TYPE_REMOVE:
            return 5;
        case EventSubType.EVENT_SUB_TYPE_STATE:
            return 6;
        default:
            return 0;
    }
}
exports.eventSubTypeToNumber = eventSubTypeToNumber;
var EventType;
(function (EventType) {
    EventType["EVENT_TYPE_UNSPECIFIED"] = "EVENT_TYPE_UNSPECIFIED";
    EventType["EVENT_TYPE_COLLECTION"] = "EVENT_TYPE_COLLECTION";
    EventType["EVENT_TYPE_PROJECT"] = "EVENT_TYPE_PROJECT";
    EventType["EVENT_TYPE_SOURCE"] = "EVENT_TYPE_SOURCE";
    EventType["EVENT_TYPE_DESTINATION"] = "EVENT_TYPE_DESTINATION";
})(EventType = exports.EventType || (exports.EventType = {}));
function eventTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "EVENT_TYPE_UNSPECIFIED":
            return EventType.EVENT_TYPE_UNSPECIFIED;
        case 1:
        case "EVENT_TYPE_COLLECTION":
            return EventType.EVENT_TYPE_COLLECTION;
        case 2:
        case "EVENT_TYPE_PROJECT":
            return EventType.EVENT_TYPE_PROJECT;
        case 4:
        case "EVENT_TYPE_SOURCE":
            return EventType.EVENT_TYPE_SOURCE;
        case 5:
        case "EVENT_TYPE_DESTINATION":
            return EventType.EVENT_TYPE_DESTINATION;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum EventType");
    }
}
exports.eventTypeFromJSON = eventTypeFromJSON;
function eventTypeToJSON(object) {
    switch (object) {
        case EventType.EVENT_TYPE_UNSPECIFIED:
            return "EVENT_TYPE_UNSPECIFIED";
        case EventType.EVENT_TYPE_COLLECTION:
            return "EVENT_TYPE_COLLECTION";
        case EventType.EVENT_TYPE_PROJECT:
            return "EVENT_TYPE_PROJECT";
        case EventType.EVENT_TYPE_SOURCE:
            return "EVENT_TYPE_SOURCE";
        case EventType.EVENT_TYPE_DESTINATION:
            return "EVENT_TYPE_DESTINATION";
        default:
            return "UNKNOWN";
    }
}
exports.eventTypeToJSON = eventTypeToJSON;
function eventTypeToNumber(object) {
    switch (object) {
        case EventType.EVENT_TYPE_UNSPECIFIED:
            return 0;
        case EventType.EVENT_TYPE_COLLECTION:
            return 1;
        case EventType.EVENT_TYPE_PROJECT:
            return 2;
        case EventType.EVENT_TYPE_SOURCE:
            return 4;
        case EventType.EVENT_TYPE_DESTINATION:
            return 5;
        default:
            return 0;
    }
}
exports.eventTypeToNumber = eventTypeToNumber;
function createBaseVideoRendering() {
    return {
        height: undefined,
        width: undefined,
        framerate: undefined,
        colorSpace: undefined,
    };
}
exports.VideoRendering = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== undefined) {
            writer.uint32(8).uint32(message.height);
        }
        if (message.width !== undefined) {
            writer.uint32(16).uint32(message.width);
        }
        if (message.framerate !== undefined) {
            writer.uint32(29).float(message.framerate);
        }
        if (message.colorSpace !== undefined) {
            writer.uint32(32).int32(videoColorSpaceToNumber(message.colorSpace));
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVideoRendering();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint32();
                    break;
                case 2:
                    message.width = reader.uint32();
                    break;
                case 3:
                    message.framerate = reader.float();
                    break;
                case 4:
                    message.colorSpace = videoColorSpaceFromJSON(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            height: isSet(object.height) ? Number(object.height) : undefined,
            width: isSet(object.width) ? Number(object.width) : undefined,
            framerate: isSet(object.framerate) ? Number(object.framerate) : undefined,
            colorSpace: isSet(object.colorSpace)
                ? videoColorSpaceFromJSON(object.colorSpace)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = Math.round(message.height));
        message.width !== undefined && (obj.width = Math.round(message.width));
        message.framerate !== undefined && (obj.framerate = message.framerate);
        message.colorSpace !== undefined &&
            (obj.colorSpace =
                message.colorSpace !== undefined
                    ? videoColorSpaceToJSON(message.colorSpace)
                    : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseVideoRendering();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : undefined;
        message.width = (_b = object.width) !== null && _b !== void 0 ? _b : undefined;
        message.framerate = (_c = object.framerate) !== null && _c !== void 0 ? _c : undefined;
        message.colorSpace = (_d = object.colorSpace) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBaseAudioRendering() {
    return { channelLayout: undefined };
}
exports.AudioRendering = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelLayout !== undefined) {
            writer.uint32(8).int32(audioChannelLayoutToNumber(message.channelLayout));
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAudioRendering();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelLayout = audioChannelLayoutFromJSON(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            channelLayout: isSet(object.channelLayout)
                ? audioChannelLayoutFromJSON(object.channelLayout)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.channelLayout !== undefined &&
            (obj.channelLayout =
                message.channelLayout !== undefined
                    ? audioChannelLayoutToJSON(message.channelLayout)
                    : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAudioRendering();
        message.channelLayout = (_a = object.channelLayout) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseRendering() {
    return {
        video: undefined,
        audio: undefined,
        quality: undefined,
        targetLatency: undefined,
        complexity: undefined,
    };
}
exports.Rendering = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.video !== undefined) {
            exports.VideoRendering.encode(message.video, writer.uint32(10).fork()).ldelim();
        }
        if (message.audio !== undefined) {
            exports.AudioRendering.encode(message.audio, writer.uint32(18).fork()).ldelim();
        }
        if (message.quality !== undefined) {
            writer.uint32(24).int32(renderingQualityToNumber(message.quality));
        }
        if (message.targetLatency !== undefined) {
            writer.uint32(32).uint32(message.targetLatency);
        }
        if (message.complexity !== undefined) {
            writer.uint32(40).int32(message.complexity);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRendering();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.video = exports.VideoRendering.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.audio = exports.AudioRendering.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.quality = renderingQualityFromJSON(reader.int32());
                    break;
                case 4:
                    message.targetLatency = reader.uint32();
                    break;
                case 5:
                    message.complexity = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            video: isSet(object.video)
                ? exports.VideoRendering.fromJSON(object.video)
                : undefined,
            audio: isSet(object.audio)
                ? exports.AudioRendering.fromJSON(object.audio)
                : undefined,
            quality: isSet(object.quality)
                ? renderingQualityFromJSON(object.quality)
                : undefined,
            targetLatency: isSet(object.targetLatency)
                ? Number(object.targetLatency)
                : undefined,
            complexity: isSet(object.complexity)
                ? Number(object.complexity)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.video !== undefined &&
            (obj.video = message.video
                ? exports.VideoRendering.toJSON(message.video)
                : undefined);
        message.audio !== undefined &&
            (obj.audio = message.audio
                ? exports.AudioRendering.toJSON(message.audio)
                : undefined);
        message.quality !== undefined &&
            (obj.quality =
                message.quality !== undefined
                    ? renderingQualityToJSON(message.quality)
                    : undefined);
        message.targetLatency !== undefined &&
            (obj.targetLatency = Math.round(message.targetLatency));
        message.complexity !== undefined &&
            (obj.complexity = Math.round(message.complexity));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseRendering();
        message.video =
            object.video !== undefined && object.video !== null
                ? exports.VideoRendering.fromPartial(object.video)
                : undefined;
        message.audio =
            object.audio !== undefined && object.audio !== null
                ? exports.AudioRendering.fromPartial(object.audio)
                : undefined;
        message.quality = (_a = object.quality) !== null && _a !== void 0 ? _a : undefined;
        message.targetLatency = (_b = object.targetLatency) !== null && _b !== void 0 ? _b : undefined;
        message.complexity = (_c = object.complexity) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseVideoCodecRateControl() {
    return {
        mode: undefined,
        targetBitrate: undefined,
        maxKeyFrameInterval: undefined,
    };
}
exports.VideoCodecRateControl = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.mode !== undefined) {
            writer.uint32(8).int32(videoCodecRateControlModeToNumber(message.mode));
        }
        if (message.targetBitrate !== undefined) {
            writer.uint32(16).uint32(message.targetBitrate);
        }
        if (message.maxKeyFrameInterval !== undefined) {
            writer.uint32(24).uint32(message.maxKeyFrameInterval);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVideoCodecRateControl();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = videoCodecRateControlModeFromJSON(reader.int32());
                    break;
                case 2:
                    message.targetBitrate = reader.uint32();
                    break;
                case 3:
                    message.maxKeyFrameInterval = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            mode: isSet(object.mode)
                ? videoCodecRateControlModeFromJSON(object.mode)
                : undefined,
            targetBitrate: isSet(object.targetBitrate)
                ? Number(object.targetBitrate)
                : undefined,
            maxKeyFrameInterval: isSet(object.maxKeyFrameInterval)
                ? Number(object.maxKeyFrameInterval)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.mode !== undefined &&
            (obj.mode =
                message.mode !== undefined
                    ? videoCodecRateControlModeToJSON(message.mode)
                    : undefined);
        message.targetBitrate !== undefined &&
            (obj.targetBitrate = Math.round(message.targetBitrate));
        message.maxKeyFrameInterval !== undefined &&
            (obj.maxKeyFrameInterval = Math.round(message.maxKeyFrameInterval));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseVideoCodecRateControl();
        message.mode = (_a = object.mode) !== null && _a !== void 0 ? _a : undefined;
        message.targetBitrate = (_b = object.targetBitrate) !== null && _b !== void 0 ? _b : undefined;
        message.maxKeyFrameInterval = (_c = object.maxKeyFrameInterval) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseVideoEncoding() {
    return { codec: undefined, rateControl: undefined, profile: undefined };
}
exports.VideoEncoding = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.codec !== undefined) {
            writer.uint32(8).int32(videoCodecToNumber(message.codec));
        }
        if (message.rateControl !== undefined) {
            exports.VideoCodecRateControl.encode(message.rateControl, writer.uint32(18).fork()).ldelim();
        }
        if (message.profile !== undefined) {
            writer.uint32(32).int32(videoCodecProfileToNumber(message.profile));
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVideoEncoding();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codec = videoCodecFromJSON(reader.int32());
                    break;
                case 2:
                    message.rateControl = exports.VideoCodecRateControl.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.profile = videoCodecProfileFromJSON(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            codec: isSet(object.codec) ? videoCodecFromJSON(object.codec) : undefined,
            rateControl: isSet(object.rateControl)
                ? exports.VideoCodecRateControl.fromJSON(object.rateControl)
                : undefined,
            profile: isSet(object.profile)
                ? videoCodecProfileFromJSON(object.profile)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.codec !== undefined &&
            (obj.codec =
                message.codec !== undefined
                    ? videoCodecToJSON(message.codec)
                    : undefined);
        message.rateControl !== undefined &&
            (obj.rateControl = message.rateControl
                ? exports.VideoCodecRateControl.toJSON(message.rateControl)
                : undefined);
        message.profile !== undefined &&
            (obj.profile =
                message.profile !== undefined
                    ? videoCodecProfileToJSON(message.profile)
                    : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseVideoEncoding();
        message.codec = (_a = object.codec) !== null && _a !== void 0 ? _a : undefined;
        message.rateControl =
            object.rateControl !== undefined && object.rateControl !== null
                ? exports.VideoCodecRateControl.fromPartial(object.rateControl)
                : undefined;
        message.profile = (_b = object.profile) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseAudioEncoding() {
    return { codec: undefined };
}
exports.AudioEncoding = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.codec !== undefined) {
            writer.uint32(8).int32(audioCodecToNumber(message.codec));
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAudioEncoding();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codec = audioCodecFromJSON(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            codec: isSet(object.codec) ? audioCodecFromJSON(object.codec) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.codec !== undefined &&
            (obj.codec =
                message.codec !== undefined
                    ? audioCodecToJSON(message.codec)
                    : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAudioEncoding();
        message.codec = (_a = object.codec) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseEncoding() {
    return { video: undefined, audio: undefined };
}
exports.Encoding = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.video !== undefined) {
            exports.VideoEncoding.encode(message.video, writer.uint32(10).fork()).ldelim();
        }
        if (message.audio !== undefined) {
            exports.AudioEncoding.encode(message.audio, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEncoding();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.video = exports.VideoEncoding.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.audio = exports.AudioEncoding.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            video: isSet(object.video)
                ? exports.VideoEncoding.fromJSON(object.video)
                : undefined,
            audio: isSet(object.audio)
                ? exports.AudioEncoding.fromJSON(object.audio)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.video !== undefined &&
            (obj.video = message.video
                ? exports.VideoEncoding.toJSON(message.video)
                : undefined);
        message.audio !== undefined &&
            (obj.audio = message.audio
                ? exports.AudioEncoding.toJSON(message.audio)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEncoding();
        message.video =
            object.video !== undefined && object.video !== null
                ? exports.VideoEncoding.fromPartial(object.video)
                : undefined;
        message.audio =
            object.audio !== undefined && object.audio !== null
                ? exports.AudioEncoding.fromPartial(object.audio)
                : undefined;
        return message;
    },
};
function createBaseSourceRtmpPushAddress() {
    return {
        enabled: undefined,
        key: undefined,
        url: undefined,
        baseUrl: undefined,
    };
}
exports.SourceRtmpPushAddress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.enabled !== undefined) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.key !== undefined) {
            writer.uint32(18).string(message.key);
        }
        if (message.url !== undefined) {
            writer.uint32(26).string(message.url);
        }
        if (message.baseUrl !== undefined) {
            writer.uint32(34).string(message.baseUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSourceRtmpPushAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.key = reader.string();
                    break;
                case 3:
                    message.url = reader.string();
                    break;
                case 4:
                    message.baseUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            enabled: isSet(object.enabled) ? Boolean(object.enabled) : undefined,
            key: isSet(object.key) ? String(object.key) : undefined,
            url: isSet(object.url) ? String(object.url) : undefined,
            baseUrl: isSet(object.baseUrl) ? String(object.baseUrl) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.key !== undefined && (obj.key = message.key);
        message.url !== undefined && (obj.url = message.url);
        message.baseUrl !== undefined && (obj.baseUrl = message.baseUrl);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseSourceRtmpPushAddress();
        message.enabled = (_a = object.enabled) !== null && _a !== void 0 ? _a : undefined;
        message.key = (_b = object.key) !== null && _b !== void 0 ? _b : undefined;
        message.url = (_c = object.url) !== null && _c !== void 0 ? _c : undefined;
        message.baseUrl = (_d = object.baseUrl) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBaseSrtPushAddress() {
    return {
        enabled: undefined,
        streamId: undefined,
        url: undefined,
        baseUrl: undefined,
    };
}
exports.SrtPushAddress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.enabled !== undefined) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.streamId !== undefined) {
            writer.uint32(18).string(message.streamId);
        }
        if (message.url !== undefined) {
            writer.uint32(26).string(message.url);
        }
        if (message.baseUrl !== undefined) {
            writer.uint32(34).string(message.baseUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSrtPushAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.streamId = reader.string();
                    break;
                case 3:
                    message.url = reader.string();
                    break;
                case 4:
                    message.baseUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            enabled: isSet(object.enabled) ? Boolean(object.enabled) : undefined,
            streamId: isSet(object.streamId) ? String(object.streamId) : undefined,
            url: isSet(object.url) ? String(object.url) : undefined,
            baseUrl: isSet(object.baseUrl) ? String(object.baseUrl) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.streamId !== undefined && (obj.streamId = message.streamId);
        message.url !== undefined && (obj.url = message.url);
        message.baseUrl !== undefined && (obj.baseUrl = message.baseUrl);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseSrtPushAddress();
        message.enabled = (_a = object.enabled) !== null && _a !== void 0 ? _a : undefined;
        message.streamId = (_b = object.streamId) !== null && _b !== void 0 ? _b : undefined;
        message.url = (_c = object.url) !== null && _c !== void 0 ? _c : undefined;
        message.baseUrl = (_d = object.baseUrl) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBaseRtmpPullAddress() {
    return { url: "" };
}
exports.RtmpPullAddress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.url !== "") {
            writer.uint32(10).string(message.url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRtmpPullAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            url: isSet(object.url) ? String(object.url) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRtmpPullAddress();
        message.url = (_a = object.url) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseSourceAddress() {
    return { rtmpPush: undefined, srtPush: undefined, rtmpPull: undefined };
}
exports.SourceAddress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.rtmpPush !== undefined) {
            exports.SourceRtmpPushAddress.encode(message.rtmpPush, writer.uint32(10).fork()).ldelim();
        }
        if (message.srtPush !== undefined) {
            exports.SrtPushAddress.encode(message.srtPush, writer.uint32(18).fork()).ldelim();
        }
        if (message.rtmpPull !== undefined) {
            exports.RtmpPullAddress.encode(message.rtmpPull, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSourceAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rtmpPush = exports.SourceRtmpPushAddress.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.srtPush = exports.SrtPushAddress.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.rtmpPull = exports.RtmpPullAddress.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            rtmpPush: isSet(object.rtmpPush)
                ? exports.SourceRtmpPushAddress.fromJSON(object.rtmpPush)
                : undefined,
            srtPush: isSet(object.srtPush)
                ? exports.SrtPushAddress.fromJSON(object.srtPush)
                : undefined,
            rtmpPull: isSet(object.rtmpPull)
                ? exports.RtmpPullAddress.fromJSON(object.rtmpPull)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.rtmpPush !== undefined &&
            (obj.rtmpPush = message.rtmpPush
                ? exports.SourceRtmpPushAddress.toJSON(message.rtmpPush)
                : undefined);
        message.srtPush !== undefined &&
            (obj.srtPush = message.srtPush
                ? exports.SrtPushAddress.toJSON(message.srtPush)
                : undefined);
        message.rtmpPull !== undefined &&
            (obj.rtmpPull = message.rtmpPull
                ? exports.RtmpPullAddress.toJSON(message.rtmpPull)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSourceAddress();
        message.rtmpPush =
            object.rtmpPush !== undefined && object.rtmpPush !== null
                ? exports.SourceRtmpPushAddress.fromPartial(object.rtmpPush)
                : undefined;
        message.srtPush =
            object.srtPush !== undefined && object.srtPush !== null
                ? exports.SrtPushAddress.fromPartial(object.srtPush)
                : undefined;
        message.rtmpPull =
            object.rtmpPull !== undefined && object.rtmpPull !== null
                ? exports.RtmpPullAddress.fromPartial(object.rtmpPull)
                : undefined;
        return message;
    },
};
function createBaseDestinationRtmpPushAddress() {
    return { key: undefined, url: "" };
}
exports.DestinationRtmpPushAddress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== undefined) {
            writer.uint32(10).string(message.key);
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDestinationRtmpPushAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            key: isSet(object.key) ? String(object.key) : undefined,
            url: isSet(object.url) ? String(object.url) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDestinationRtmpPushAddress();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : undefined;
        message.url = (_b = object.url) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseDestinationAgoraPushAddress() {
    return { appId: "", channelId: "", userId: "" };
}
exports.DestinationAgoraPushAddress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.appId !== "") {
            writer.uint32(10).string(message.appId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.userId !== "") {
            writer.uint32(26).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDestinationAgoraPushAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.userId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            appId: isSet(object.appId) ? String(object.appId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            userId: isSet(object.userId) ? String(object.userId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined && (obj.appId = message.appId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseDestinationAgoraPushAddress();
        message.appId = (_a = object.appId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        message.userId = (_c = object.userId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseHlsLifecycleLive() {
    return { playlistCount: undefined, fileCount: undefined };
}
exports.HlsLifecycleLive = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.playlistCount !== undefined) {
            writer.uint32(8).int32(message.playlistCount);
        }
        if (message.fileCount !== undefined) {
            writer.uint32(16).int32(message.fileCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHlsLifecycleLive();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.playlistCount = reader.int32();
                    break;
                case 2:
                    message.fileCount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            playlistCount: isSet(object.playlistCount)
                ? Number(object.playlistCount)
                : undefined,
            fileCount: isSet(object.fileCount) ? Number(object.fileCount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.playlistCount !== undefined &&
            (obj.playlistCount = Math.round(message.playlistCount));
        message.fileCount !== undefined &&
            (obj.fileCount = Math.round(message.fileCount));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseHlsLifecycleLive();
        message.playlistCount = (_a = object.playlistCount) !== null && _a !== void 0 ? _a : undefined;
        message.fileCount = (_b = object.fileCount) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseHlsLifecycleVod() {
    return { maxDuration: undefined };
}
exports.HlsLifecycleVod = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.maxDuration !== undefined) {
            writer.uint32(8).int32(message.maxDuration);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHlsLifecycleVod();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxDuration = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            maxDuration: isSet(object.maxDuration)
                ? Number(object.maxDuration)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.maxDuration !== undefined &&
            (obj.maxDuration = Math.round(message.maxDuration));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseHlsLifecycleVod();
        message.maxDuration = (_a = object.maxDuration) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseHlsLifecycle() {
    return { vod: undefined, live: undefined };
}
exports.HlsLifecycle = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vod !== undefined) {
            exports.HlsLifecycleVod.encode(message.vod, writer.uint32(10).fork()).ldelim();
        }
        if (message.live !== undefined) {
            exports.HlsLifecycleLive.encode(message.live, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHlsLifecycle();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vod = exports.HlsLifecycleVod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.live = exports.HlsLifecycleLive.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            vod: isSet(object.vod) ? exports.HlsLifecycleVod.fromJSON(object.vod) : undefined,
            live: isSet(object.live)
                ? exports.HlsLifecycleLive.fromJSON(object.live)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.vod !== undefined &&
            (obj.vod = message.vod ? exports.HlsLifecycleVod.toJSON(message.vod) : undefined);
        message.live !== undefined &&
            (obj.live = message.live
                ? exports.HlsLifecycleLive.toJSON(message.live)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHlsLifecycle();
        message.vod =
            object.vod !== undefined && object.vod !== null
                ? exports.HlsLifecycleVod.fromPartial(object.vod)
                : undefined;
        message.live =
            object.live !== undefined && object.live !== null
                ? exports.HlsLifecycleLive.fromPartial(object.live)
                : undefined;
        return message;
    },
};
function createBaseHlsPackaging() {
    return { lifecycle: undefined, segmentDuration: undefined };
}
exports.HlsPackaging = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.lifecycle !== undefined) {
            exports.HlsLifecycle.encode(message.lifecycle, writer.uint32(10).fork()).ldelim();
        }
        if (message.segmentDuration !== undefined) {
            writer.uint32(16).int32(message.segmentDuration);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHlsPackaging();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lifecycle = exports.HlsLifecycle.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.segmentDuration = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            lifecycle: isSet(object.lifecycle)
                ? exports.HlsLifecycle.fromJSON(object.lifecycle)
                : undefined,
            segmentDuration: isSet(object.segmentDuration)
                ? Number(object.segmentDuration)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.lifecycle !== undefined &&
            (obj.lifecycle = message.lifecycle
                ? exports.HlsLifecycle.toJSON(message.lifecycle)
                : undefined);
        message.segmentDuration !== undefined &&
            (obj.segmentDuration = Math.round(message.segmentDuration));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseHlsPackaging();
        message.lifecycle =
            object.lifecycle !== undefined && object.lifecycle !== null
                ? exports.HlsLifecycle.fromPartial(object.lifecycle)
                : undefined;
        message.segmentDuration = (_a = object.segmentDuration) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseObjectStoragePackaging() {
    return { hls: undefined };
}
exports.ObjectStoragePackaging = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hls !== undefined) {
            exports.HlsPackaging.encode(message.hls, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseObjectStoragePackaging();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hls = exports.HlsPackaging.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            hls: isSet(object.hls) ? exports.HlsPackaging.fromJSON(object.hls) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.hls !== undefined &&
            (obj.hls = message.hls ? exports.HlsPackaging.toJSON(message.hls) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseObjectStoragePackaging();
        message.hls =
            object.hls !== undefined && object.hls !== null
                ? exports.HlsPackaging.fromPartial(object.hls)
                : undefined;
        return message;
    },
};
function createBaseS3StorageAddress() {
    return {
        region: "",
        bucket: "",
        prefix: undefined,
        accessKey: "",
        secretKey: "",
        token: undefined,
        tokenDuration: undefined,
        acl: undefined,
        endpoint: undefined,
        packaging: undefined,
    };
}
exports.S3StorageAddress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.region !== "") {
            writer.uint32(10).string(message.region);
        }
        if (message.bucket !== "") {
            writer.uint32(18).string(message.bucket);
        }
        if (message.prefix !== undefined) {
            writer.uint32(26).string(message.prefix);
        }
        if (message.accessKey !== "") {
            writer.uint32(34).string(message.accessKey);
        }
        if (message.secretKey !== "") {
            writer.uint32(42).string(message.secretKey);
        }
        if (message.token !== undefined) {
            writer.uint32(50).string(message.token);
        }
        if (message.tokenDuration !== undefined) {
            writer.uint32(56).int32(message.tokenDuration);
        }
        if (message.acl !== undefined) {
            writer.uint32(64).int32(s3ACLToNumber(message.acl));
        }
        if (message.endpoint !== undefined) {
            writer.uint32(74).string(message.endpoint);
        }
        if (message.packaging !== undefined) {
            exports.ObjectStoragePackaging.encode(message.packaging, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseS3StorageAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.region = reader.string();
                    break;
                case 2:
                    message.bucket = reader.string();
                    break;
                case 3:
                    message.prefix = reader.string();
                    break;
                case 4:
                    message.accessKey = reader.string();
                    break;
                case 5:
                    message.secretKey = reader.string();
                    break;
                case 6:
                    message.token = reader.string();
                    break;
                case 7:
                    message.tokenDuration = reader.int32();
                    break;
                case 8:
                    message.acl = s3ACLFromJSON(reader.int32());
                    break;
                case 9:
                    message.endpoint = reader.string();
                    break;
                case 10:
                    message.packaging = exports.ObjectStoragePackaging.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            region: isSet(object.region) ? String(object.region) : "",
            bucket: isSet(object.bucket) ? String(object.bucket) : "",
            prefix: isSet(object.prefix) ? String(object.prefix) : undefined,
            accessKey: isSet(object.accessKey) ? String(object.accessKey) : "",
            secretKey: isSet(object.secretKey) ? String(object.secretKey) : "",
            token: isSet(object.token) ? String(object.token) : undefined,
            tokenDuration: isSet(object.tokenDuration)
                ? Number(object.tokenDuration)
                : undefined,
            acl: isSet(object.acl) ? s3ACLFromJSON(object.acl) : undefined,
            endpoint: isSet(object.endpoint) ? String(object.endpoint) : undefined,
            packaging: isSet(object.packaging)
                ? exports.ObjectStoragePackaging.fromJSON(object.packaging)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.region !== undefined && (obj.region = message.region);
        message.bucket !== undefined && (obj.bucket = message.bucket);
        message.prefix !== undefined && (obj.prefix = message.prefix);
        message.accessKey !== undefined && (obj.accessKey = message.accessKey);
        message.secretKey !== undefined && (obj.secretKey = message.secretKey);
        message.token !== undefined && (obj.token = message.token);
        message.tokenDuration !== undefined &&
            (obj.tokenDuration = Math.round(message.tokenDuration));
        message.acl !== undefined &&
            (obj.acl =
                message.acl !== undefined ? s3ACLToJSON(message.acl) : undefined);
        message.endpoint !== undefined && (obj.endpoint = message.endpoint);
        message.packaging !== undefined &&
            (obj.packaging = message.packaging
                ? exports.ObjectStoragePackaging.toJSON(message.packaging)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseS3StorageAddress();
        message.region = (_a = object.region) !== null && _a !== void 0 ? _a : "";
        message.bucket = (_b = object.bucket) !== null && _b !== void 0 ? _b : "";
        message.prefix = (_c = object.prefix) !== null && _c !== void 0 ? _c : undefined;
        message.accessKey = (_d = object.accessKey) !== null && _d !== void 0 ? _d : "";
        message.secretKey = (_e = object.secretKey) !== null && _e !== void 0 ? _e : "";
        message.token = (_f = object.token) !== null && _f !== void 0 ? _f : undefined;
        message.tokenDuration = (_g = object.tokenDuration) !== null && _g !== void 0 ? _g : undefined;
        message.acl = (_h = object.acl) !== null && _h !== void 0 ? _h : undefined;
        message.endpoint = (_j = object.endpoint) !== null && _j !== void 0 ? _j : undefined;
        message.packaging =
            object.packaging !== undefined && object.packaging !== null
                ? exports.ObjectStoragePackaging.fromPartial(object.packaging)
                : undefined;
        return message;
    },
};
function createBaseDestinationAddress() {
    return { rtmpPush: undefined, agora: undefined, s3Storage: undefined };
}
exports.DestinationAddress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.rtmpPush !== undefined) {
            exports.DestinationRtmpPushAddress.encode(message.rtmpPush, writer.uint32(10).fork()).ldelim();
        }
        if (message.agora !== undefined) {
            exports.DestinationAgoraPushAddress.encode(message.agora, writer.uint32(18).fork()).ldelim();
        }
        if (message.s3Storage !== undefined) {
            exports.S3StorageAddress.encode(message.s3Storage, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDestinationAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rtmpPush = exports.DestinationRtmpPushAddress.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.agora = exports.DestinationAgoraPushAddress.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.s3Storage = exports.S3StorageAddress.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            rtmpPush: isSet(object.rtmpPush)
                ? exports.DestinationRtmpPushAddress.fromJSON(object.rtmpPush)
                : undefined,
            agora: isSet(object.agora)
                ? exports.DestinationAgoraPushAddress.fromJSON(object.agora)
                : undefined,
            s3Storage: isSet(object.s3Storage)
                ? exports.S3StorageAddress.fromJSON(object.s3Storage)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.rtmpPush !== undefined &&
            (obj.rtmpPush = message.rtmpPush
                ? exports.DestinationRtmpPushAddress.toJSON(message.rtmpPush)
                : undefined);
        message.agora !== undefined &&
            (obj.agora = message.agora
                ? exports.DestinationAgoraPushAddress.toJSON(message.agora)
                : undefined);
        message.s3Storage !== undefined &&
            (obj.s3Storage = message.s3Storage
                ? exports.S3StorageAddress.toJSON(message.s3Storage)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDestinationAddress();
        message.rtmpPush =
            object.rtmpPush !== undefined && object.rtmpPush !== null
                ? exports.DestinationRtmpPushAddress.fromPartial(object.rtmpPush)
                : undefined;
        message.agora =
            object.agora !== undefined && object.agora !== null
                ? exports.DestinationAgoraPushAddress.fromPartial(object.agora)
                : undefined;
        message.s3Storage =
            object.s3Storage !== undefined && object.s3Storage !== null
                ? exports.S3StorageAddress.fromPartial(object.s3Storage)
                : undefined;
        return message;
    },
};
function createBaseSourceTrigger() {
    return { sourceId: "", start: undefined, stop: undefined };
}
exports.SourceTrigger = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sourceId !== "") {
            writer.uint32(10).string(message.sourceId);
        }
        if (message.start !== undefined) {
            writer.uint32(16).int32(sourceTriggerActionToNumber(message.start));
        }
        if (message.stop !== undefined) {
            writer.uint32(24).int32(sourceTriggerActionToNumber(message.stop));
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSourceTrigger();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sourceId = reader.string();
                    break;
                case 2:
                    message.start = sourceTriggerActionFromJSON(reader.int32());
                    break;
                case 3:
                    message.stop = sourceTriggerActionFromJSON(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            sourceId: isSet(object.sourceId) ? String(object.sourceId) : "",
            start: isSet(object.start)
                ? sourceTriggerActionFromJSON(object.start)
                : undefined,
            stop: isSet(object.stop)
                ? sourceTriggerActionFromJSON(object.stop)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sourceId !== undefined && (obj.sourceId = message.sourceId);
        message.start !== undefined &&
            (obj.start =
                message.start !== undefined
                    ? sourceTriggerActionToJSON(message.start)
                    : undefined);
        message.stop !== undefined &&
            (obj.stop =
                message.stop !== undefined
                    ? sourceTriggerActionToJSON(message.stop)
                    : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSourceTrigger();
        message.sourceId = (_a = object.sourceId) !== null && _a !== void 0 ? _a : "";
        message.start = (_b = object.start) !== null && _b !== void 0 ? _b : undefined;
        message.stop = (_c = object.stop) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseWebRtcTrigger() {
    return { stop: undefined };
}
exports.WebRtcTrigger = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.stop !== undefined) {
            writer.uint32(24).int32(sourceTriggerActionToNumber(message.stop));
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWebRtcTrigger();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.stop = sourceTriggerActionFromJSON(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            stop: isSet(object.stop)
                ? sourceTriggerActionFromJSON(object.stop)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.stop !== undefined &&
            (obj.stop =
                message.stop !== undefined
                    ? sourceTriggerActionToJSON(message.stop)
                    : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseWebRtcTrigger();
        message.stop = (_a = object.stop) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseProjectTrigger() {
    return { source: undefined };
}
exports.ProjectTrigger = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.source !== undefined) {
            exports.SourceTrigger.encode(message.source, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProjectTrigger();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.source = exports.SourceTrigger.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            source: isSet(object.source)
                ? exports.SourceTrigger.fromJSON(object.source)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.source !== undefined &&
            (obj.source = message.source
                ? exports.SourceTrigger.toJSON(message.source)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProjectTrigger();
        message.source =
            object.source !== undefined && object.source !== null
                ? exports.SourceTrigger.fromPartial(object.source)
                : undefined;
        return message;
    },
};
function createBasePreviewHlsPullAddress() {
    return { enabled: undefined, url: undefined };
}
exports.PreviewHlsPullAddress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.enabled !== undefined) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.url !== undefined) {
            writer.uint32(18).string(message.url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePreviewHlsPullAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            enabled: isSet(object.enabled) ? Boolean(object.enabled) : undefined,
            url: isSet(object.url) ? String(object.url) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePreviewHlsPullAddress();
        message.enabled = (_a = object.enabled) !== null && _a !== void 0 ? _a : undefined;
        message.url = (_b = object.url) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBasePreviewWebRtcAddress() {
    return {
        enabled: undefined,
        displayName: undefined,
        participantId: undefined,
    };
}
exports.PreviewWebRtcAddress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.enabled !== undefined) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.displayName !== undefined) {
            writer.uint32(18).string(message.displayName);
        }
        if (message.participantId !== undefined) {
            writer.uint32(26).string(message.participantId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePreviewWebRtcAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.displayName = reader.string();
                    break;
                case 3:
                    message.participantId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            enabled: isSet(object.enabled) ? Boolean(object.enabled) : undefined,
            displayName: isSet(object.displayName)
                ? String(object.displayName)
                : undefined,
            participantId: isSet(object.participantId)
                ? String(object.participantId)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.displayName !== undefined &&
            (obj.displayName = message.displayName);
        message.participantId !== undefined &&
            (obj.participantId = message.participantId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBasePreviewWebRtcAddress();
        message.enabled = (_a = object.enabled) !== null && _a !== void 0 ? _a : undefined;
        message.displayName = (_b = object.displayName) !== null && _b !== void 0 ? _b : undefined;
        message.participantId = (_c = object.participantId) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBasePreviewAddress() {
    return { webrtc: undefined };
}
exports.PreviewAddress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.webrtc !== undefined) {
            exports.PreviewWebRtcAddress.encode(message.webrtc, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePreviewAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.webrtc = exports.PreviewWebRtcAddress.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            webrtc: isSet(object.webrtc)
                ? exports.PreviewWebRtcAddress.fromJSON(object.webrtc)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.webrtc !== undefined &&
            (obj.webrtc = message.webrtc
                ? exports.PreviewWebRtcAddress.toJSON(message.webrtc)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePreviewAddress();
        message.webrtc =
            object.webrtc !== undefined && object.webrtc !== null
                ? exports.PreviewWebRtcAddress.fromPartial(object.webrtc)
                : undefined;
        return message;
    },
};
function createBaseStudioSdkComposition() {
    return { rendererUrl: undefined, version: undefined };
}
exports.StudioSdkComposition = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.rendererUrl !== undefined) {
            writer.uint32(10).string(message.rendererUrl);
        }
        if (message.version !== undefined) {
            writer.uint32(18).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStudioSdkComposition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rendererUrl = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            rendererUrl: isSet(object.rendererUrl)
                ? String(object.rendererUrl)
                : undefined,
            version: isSet(object.version) ? String(object.version) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.rendererUrl !== undefined &&
            (obj.rendererUrl = message.rendererUrl);
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStudioSdkComposition();
        message.rendererUrl = (_a = object.rendererUrl) !== null && _a !== void 0 ? _a : undefined;
        message.version = (_b = object.version) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseSceneComposition() {
    return {
        rendererUrl: undefined,
        selectedLayoutId: undefined,
        debug: undefined,
    };
}
exports.SceneComposition = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.rendererUrl !== undefined) {
            writer.uint32(10).string(message.rendererUrl);
        }
        if (message.selectedLayoutId !== undefined) {
            writer.uint32(18).string(message.selectedLayoutId);
        }
        if (message.debug !== undefined) {
            writer.uint32(24).bool(message.debug);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSceneComposition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rendererUrl = reader.string();
                    break;
                case 2:
                    message.selectedLayoutId = reader.string();
                    break;
                case 3:
                    message.debug = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            rendererUrl: isSet(object.rendererUrl)
                ? String(object.rendererUrl)
                : undefined,
            selectedLayoutId: isSet(object.selectedLayoutId)
                ? String(object.selectedLayoutId)
                : undefined,
            debug: isSet(object.debug) ? Boolean(object.debug) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.rendererUrl !== undefined &&
            (obj.rendererUrl = message.rendererUrl);
        message.selectedLayoutId !== undefined &&
            (obj.selectedLayoutId = message.selectedLayoutId);
        message.debug !== undefined && (obj.debug = message.debug);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSceneComposition();
        message.rendererUrl = (_a = object.rendererUrl) !== null && _a !== void 0 ? _a : undefined;
        message.selectedLayoutId = (_b = object.selectedLayoutId) !== null && _b !== void 0 ? _b : undefined;
        message.debug = (_c = object.debug) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseExternalComposition() {
    return { url: "" };
}
exports.ExternalComposition = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.url !== "") {
            writer.uint32(10).string(message.url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExternalComposition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            url: isSet(object.url) ? String(object.url) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseExternalComposition();
        message.url = (_a = object.url) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseComposition() {
    return { external: undefined, studioSdk: undefined, scene: undefined };
}
exports.Composition = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.external !== undefined) {
            exports.ExternalComposition.encode(message.external, writer.uint32(10).fork()).ldelim();
        }
        if (message.studioSdk !== undefined) {
            exports.StudioSdkComposition.encode(message.studioSdk, writer.uint32(18).fork()).ldelim();
        }
        if (message.scene !== undefined) {
            exports.SceneComposition.encode(message.scene, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseComposition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.external = exports.ExternalComposition.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.studioSdk = exports.StudioSdkComposition.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.scene = exports.SceneComposition.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            external: isSet(object.external)
                ? exports.ExternalComposition.fromJSON(object.external)
                : undefined,
            studioSdk: isSet(object.studioSdk)
                ? exports.StudioSdkComposition.fromJSON(object.studioSdk)
                : undefined,
            scene: isSet(object.scene)
                ? exports.SceneComposition.fromJSON(object.scene)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.external !== undefined &&
            (obj.external = message.external
                ? exports.ExternalComposition.toJSON(message.external)
                : undefined);
        message.studioSdk !== undefined &&
            (obj.studioSdk = message.studioSdk
                ? exports.StudioSdkComposition.toJSON(message.studioSdk)
                : undefined);
        message.scene !== undefined &&
            (obj.scene = message.scene
                ? exports.SceneComposition.toJSON(message.scene)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseComposition();
        message.external =
            object.external !== undefined && object.external !== null
                ? exports.ExternalComposition.fromPartial(object.external)
                : undefined;
        message.studioSdk =
            object.studioSdk !== undefined && object.studioSdk !== null
                ? exports.StudioSdkComposition.fromPartial(object.studioSdk)
                : undefined;
        message.scene =
            object.scene !== undefined && object.scene !== null
                ? exports.SceneComposition.fromPartial(object.scene)
                : undefined;
        return message;
    },
};
function createBaseHostedWebRtc() {
    return { enabled: undefined };
}
exports.HostedWebRtc = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.enabled !== undefined) {
            writer.uint32(8).bool(message.enabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHostedWebRtc();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            enabled: isSet(object.enabled) ? Boolean(object.enabled) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseHostedWebRtc();
        message.enabled = (_a = object.enabled) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseWebRtc() {
    return { hosted: undefined };
}
exports.WebRtc = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hosted !== undefined) {
            exports.HostedWebRtc.encode(message.hosted, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWebRtc();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hosted = exports.HostedWebRtc.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            hosted: isSet(object.hosted)
                ? exports.HostedWebRtc.fromJSON(object.hosted)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.hosted !== undefined &&
            (obj.hosted = message.hosted
                ? exports.HostedWebRtc.toJSON(message.hosted)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseWebRtc();
        message.hosted =
            object.hosted !== undefined && object.hosted !== null
                ? exports.HostedWebRtc.fromPartial(object.hosted)
                : undefined;
        return message;
    },
};
function createBaseWebRtcAccess() {
    return { accessToken: "", participantId: undefined };
}
exports.WebRtcAccess = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accessToken !== "") {
            writer.uint32(10).string(message.accessToken);
        }
        if (message.participantId !== undefined) {
            writer.uint32(26).string(message.participantId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWebRtcAccess();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessToken = reader.string();
                    break;
                case 3:
                    message.participantId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
            participantId: isSet(object.participantId)
                ? String(object.participantId)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.accessToken !== undefined &&
            (obj.accessToken = message.accessToken);
        message.participantId !== undefined &&
            (obj.participantId = message.participantId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseWebRtcAccess();
        message.accessToken = (_a = object.accessToken) !== null && _a !== void 0 ? _a : "";
        message.participantId = (_b = object.participantId) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseLatLong() {
    return { latitude: 0, longitude: 0 };
}
exports.LatLong = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.latitude !== 0) {
            writer.uint32(9).double(message.latitude);
        }
        if (message.longitude !== 0) {
            writer.uint32(17).double(message.longitude);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLatLong();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.latitude = reader.double();
                    break;
                case 2:
                    message.longitude = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            latitude: isSet(object.latitude) ? Number(object.latitude) : 0,
            longitude: isSet(object.longitude) ? Number(object.longitude) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.latitude !== undefined && (obj.latitude = message.latitude);
        message.longitude !== undefined && (obj.longitude = message.longitude);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseLatLong();
        message.latitude = (_a = object.latitude) !== null && _a !== void 0 ? _a : 0;
        message.longitude = (_b = object.longitude) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseProjectBroadcastStatus() {
    return {
        collectionId: "",
        projectId: "",
        broadcastId: undefined,
        duration: undefined,
        start: undefined,
        stop: undefined,
        phase: ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_UNSPECIFIED,
        region: undefined,
        datacenter: undefined,
    };
}
exports.ProjectBroadcastStatus = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.broadcastId !== undefined) {
            writer.uint32(26).string(message.broadcastId);
        }
        if (message.duration !== undefined) {
            writer.uint32(32).uint32(message.duration);
        }
        if (message.start !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.start), writer.uint32(42).fork()).ldelim();
        }
        if (message.stop !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.stop), writer.uint32(50).fork()).ldelim();
        }
        if (message.phase !==
            ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_UNSPECIFIED) {
            writer.uint32(56).int32(projectBroadcastPhaseToNumber(message.phase));
        }
        if (message.region !== undefined) {
            writer.uint32(64).int32(regionToNumber(message.region));
        }
        if (message.datacenter !== undefined) {
            writer.uint32(74).string(message.datacenter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProjectBroadcastStatus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.broadcastId = reader.string();
                    break;
                case 4:
                    message.duration = reader.uint32();
                    break;
                case 5:
                    message.start = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.stop = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.phase = projectBroadcastPhaseFromJSON(reader.int32());
                    break;
                case 8:
                    message.region = regionFromJSON(reader.int32());
                    break;
                case 9:
                    message.datacenter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            broadcastId: isSet(object.broadcastId)
                ? String(object.broadcastId)
                : undefined,
            duration: isSet(object.duration) ? Number(object.duration) : undefined,
            start: isSet(object.start) ? String(object.start) : undefined,
            stop: isSet(object.stop) ? String(object.stop) : undefined,
            phase: isSet(object.phase)
                ? projectBroadcastPhaseFromJSON(object.phase)
                : ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_UNSPECIFIED,
            region: isSet(object.region) ? regionFromJSON(object.region) : undefined,
            datacenter: isSet(object.datacenter)
                ? String(object.datacenter)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.broadcastId !== undefined &&
            (obj.broadcastId = message.broadcastId);
        message.duration !== undefined &&
            (obj.duration = Math.round(message.duration));
        message.start !== undefined && (obj.start = message.start);
        message.stop !== undefined && (obj.stop = message.stop);
        message.phase !== undefined &&
            (obj.phase = projectBroadcastPhaseToJSON(message.phase));
        message.region !== undefined &&
            (obj.region =
                message.region !== undefined
                    ? regionToJSON(message.region)
                    : undefined);
        message.datacenter !== undefined && (obj.datacenter = message.datacenter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseProjectBroadcastStatus();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.broadcastId = (_c = object.broadcastId) !== null && _c !== void 0 ? _c : undefined;
        message.duration = (_d = object.duration) !== null && _d !== void 0 ? _d : undefined;
        message.start = (_e = object.start) !== null && _e !== void 0 ? _e : undefined;
        message.stop = (_f = object.stop) !== null && _f !== void 0 ? _f : undefined;
        message.phase =
            (_g = object.phase) !== null && _g !== void 0 ? _g : ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_UNSPECIFIED;
        message.region = (_h = object.region) !== null && _h !== void 0 ? _h : undefined;
        message.datacenter = (_j = object.datacenter) !== null && _j !== void 0 ? _j : undefined;
        return message;
    },
};
function createBaseSource() {
    return {
        collectionId: "",
        sourceId: "",
        metadata: undefined,
        preview: undefined,
        address: undefined,
    };
}
exports.Source = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.sourceId !== "") {
            writer.uint32(18).string(message.sourceId);
        }
        if (message.metadata !== undefined) {
            struct_1.Value.encode(struct_1.Value.wrap(message.metadata), writer.uint32(26).fork()).ldelim();
        }
        if (message.preview !== undefined) {
            exports.PreviewAddress.encode(message.preview, writer.uint32(34).fork()).ldelim();
        }
        if (message.address !== undefined) {
            exports.SourceAddress.encode(message.address, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSource();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.sourceId = reader.string();
                    break;
                case 3:
                    message.metadata = struct_1.Value.unwrap(struct_1.Value.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.preview = exports.PreviewAddress.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.address = exports.SourceAddress.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            sourceId: isSet(object.sourceId) ? String(object.sourceId) : "",
            metadata: isSet(object === null || object === void 0 ? void 0 : object.metadata) ? object.metadata : undefined,
            preview: isSet(object.preview)
                ? exports.PreviewAddress.fromJSON(object.preview)
                : undefined,
            address: isSet(object.address)
                ? exports.SourceAddress.fromJSON(object.address)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.sourceId !== undefined && (obj.sourceId = message.sourceId);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.preview !== undefined &&
            (obj.preview = message.preview
                ? exports.PreviewAddress.toJSON(message.preview)
                : undefined);
        message.address !== undefined &&
            (obj.address = message.address
                ? exports.SourceAddress.toJSON(message.address)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSource();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.sourceId = (_b = object.sourceId) !== null && _b !== void 0 ? _b : "";
        message.metadata = (_c = object.metadata) !== null && _c !== void 0 ? _c : undefined;
        message.preview =
            object.preview !== undefined && object.preview !== null
                ? exports.PreviewAddress.fromPartial(object.preview)
                : undefined;
        message.address =
            object.address !== undefined && object.address !== null
                ? exports.SourceAddress.fromPartial(object.address)
                : undefined;
        return message;
    },
};
function createBaseDestination() {
    return {
        collectionId: "",
        projectId: "",
        destinationId: "",
        metadata: undefined,
        enabled: undefined,
        address: undefined,
        timeout: undefined,
    };
}
exports.Destination = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.destinationId !== "") {
            writer.uint32(26).string(message.destinationId);
        }
        if (message.metadata !== undefined) {
            struct_1.Value.encode(struct_1.Value.wrap(message.metadata), writer.uint32(34).fork()).ldelim();
        }
        if (message.enabled !== undefined) {
            writer.uint32(40).bool(message.enabled);
        }
        if (message.address !== undefined) {
            exports.DestinationAddress.encode(message.address, writer.uint32(50).fork()).ldelim();
        }
        if (message.timeout !== undefined) {
            writer.uint32(56).uint32(message.timeout);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDestination();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.destinationId = reader.string();
                    break;
                case 4:
                    message.metadata = struct_1.Value.unwrap(struct_1.Value.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.enabled = reader.bool();
                    break;
                case 6:
                    message.address = exports.DestinationAddress.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.timeout = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            destinationId: isSet(object.destinationId)
                ? String(object.destinationId)
                : "",
            metadata: isSet(object === null || object === void 0 ? void 0 : object.metadata) ? object.metadata : undefined,
            enabled: isSet(object.enabled) ? Boolean(object.enabled) : undefined,
            address: isSet(object.address)
                ? exports.DestinationAddress.fromJSON(object.address)
                : undefined,
            timeout: isSet(object.timeout) ? Number(object.timeout) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.destinationId !== undefined &&
            (obj.destinationId = message.destinationId);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.address !== undefined &&
            (obj.address = message.address
                ? exports.DestinationAddress.toJSON(message.address)
                : undefined);
        message.timeout !== undefined &&
            (obj.timeout = Math.round(message.timeout));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseDestination();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.destinationId = (_c = object.destinationId) !== null && _c !== void 0 ? _c : "";
        message.metadata = (_d = object.metadata) !== null && _d !== void 0 ? _d : undefined;
        message.enabled = (_e = object.enabled) !== null && _e !== void 0 ? _e : undefined;
        message.address =
            object.address !== undefined && object.address !== null
                ? exports.DestinationAddress.fromPartial(object.address)
                : undefined;
        message.timeout = (_f = object.timeout) !== null && _f !== void 0 ? _f : undefined;
        return message;
    },
};
function createBaseProject() {
    return {
        collectionId: "",
        projectId: "",
        metadata: undefined,
        rendering: undefined,
        encoding: undefined,
        sources: [],
        destinations: [],
        composition: undefined,
        maxDuration: undefined,
        webrtc: undefined,
        triggers: [],
        location: undefined,
        guestCodes: [],
    };
}
exports.Project = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.metadata !== undefined) {
            struct_1.Value.encode(struct_1.Value.wrap(message.metadata), writer.uint32(26).fork()).ldelim();
        }
        if (message.rendering !== undefined) {
            exports.Rendering.encode(message.rendering, writer.uint32(34).fork()).ldelim();
        }
        if (message.encoding !== undefined) {
            exports.Encoding.encode(message.encoding, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.sources) {
            exports.Source.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.destinations) {
            exports.Destination.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.composition !== undefined) {
            exports.Composition.encode(message.composition, writer.uint32(66).fork()).ldelim();
        }
        if (message.maxDuration !== undefined) {
            writer.uint32(72).uint32(message.maxDuration);
        }
        if (message.webrtc !== undefined) {
            exports.WebRtc.encode(message.webrtc, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.triggers) {
            exports.ProjectTrigger.encode(v, writer.uint32(90).fork()).ldelim();
        }
        if (message.location !== undefined) {
            exports.LatLong.encode(message.location, writer.uint32(98).fork()).ldelim();
        }
        for (const v of message.guestCodes) {
            exports.GuestCode.encode(v, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProject();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.metadata = struct_1.Value.unwrap(struct_1.Value.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.rendering = exports.Rendering.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.encoding = exports.Encoding.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.sources.push(exports.Source.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.destinations.push(exports.Destination.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.composition = exports.Composition.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.maxDuration = reader.uint32();
                    break;
                case 10:
                    message.webrtc = exports.WebRtc.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.triggers.push(exports.ProjectTrigger.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.location = exports.LatLong.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.guestCodes.push(exports.GuestCode.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            metadata: isSet(object === null || object === void 0 ? void 0 : object.metadata) ? object.metadata : undefined,
            rendering: isSet(object.rendering)
                ? exports.Rendering.fromJSON(object.rendering)
                : undefined,
            encoding: isSet(object.encoding)
                ? exports.Encoding.fromJSON(object.encoding)
                : undefined,
            sources: Array.isArray(object === null || object === void 0 ? void 0 : object.sources)
                ? object.sources.map((e) => exports.Source.fromJSON(e))
                : [],
            destinations: Array.isArray(object === null || object === void 0 ? void 0 : object.destinations)
                ? object.destinations.map((e) => exports.Destination.fromJSON(e))
                : [],
            composition: isSet(object.composition)
                ? exports.Composition.fromJSON(object.composition)
                : undefined,
            maxDuration: isSet(object.maxDuration)
                ? Number(object.maxDuration)
                : undefined,
            webrtc: isSet(object.webrtc) ? exports.WebRtc.fromJSON(object.webrtc) : undefined,
            triggers: Array.isArray(object === null || object === void 0 ? void 0 : object.triggers)
                ? object.triggers.map((e) => exports.ProjectTrigger.fromJSON(e))
                : [],
            location: isSet(object.location)
                ? exports.LatLong.fromJSON(object.location)
                : undefined,
            guestCodes: Array.isArray(object === null || object === void 0 ? void 0 : object.guestCodes)
                ? object.guestCodes.map((e) => exports.GuestCode.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.rendering !== undefined &&
            (obj.rendering = message.rendering
                ? exports.Rendering.toJSON(message.rendering)
                : undefined);
        message.encoding !== undefined &&
            (obj.encoding = message.encoding
                ? exports.Encoding.toJSON(message.encoding)
                : undefined);
        if (message.sources) {
            obj.sources = message.sources.map((e) => e ? exports.Source.toJSON(e) : undefined);
        }
        else {
            obj.sources = [];
        }
        if (message.destinations) {
            obj.destinations = message.destinations.map((e) => e ? exports.Destination.toJSON(e) : undefined);
        }
        else {
            obj.destinations = [];
        }
        message.composition !== undefined &&
            (obj.composition = message.composition
                ? exports.Composition.toJSON(message.composition)
                : undefined);
        message.maxDuration !== undefined &&
            (obj.maxDuration = Math.round(message.maxDuration));
        message.webrtc !== undefined &&
            (obj.webrtc = message.webrtc ? exports.WebRtc.toJSON(message.webrtc) : undefined);
        if (message.triggers) {
            obj.triggers = message.triggers.map((e) => e ? exports.ProjectTrigger.toJSON(e) : undefined);
        }
        else {
            obj.triggers = [];
        }
        message.location !== undefined &&
            (obj.location = message.location
                ? exports.LatLong.toJSON(message.location)
                : undefined);
        if (message.guestCodes) {
            obj.guestCodes = message.guestCodes.map((e) => e ? exports.GuestCode.toJSON(e) : undefined);
        }
        else {
            obj.guestCodes = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseProject();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.metadata = (_c = object.metadata) !== null && _c !== void 0 ? _c : undefined;
        message.rendering =
            object.rendering !== undefined && object.rendering !== null
                ? exports.Rendering.fromPartial(object.rendering)
                : undefined;
        message.encoding =
            object.encoding !== undefined && object.encoding !== null
                ? exports.Encoding.fromPartial(object.encoding)
                : undefined;
        message.sources = ((_d = object.sources) === null || _d === void 0 ? void 0 : _d.map((e) => exports.Source.fromPartial(e))) || [];
        message.destinations =
            ((_e = object.destinations) === null || _e === void 0 ? void 0 : _e.map((e) => exports.Destination.fromPartial(e))) || [];
        message.composition =
            object.composition !== undefined && object.composition !== null
                ? exports.Composition.fromPartial(object.composition)
                : undefined;
        message.maxDuration = (_f = object.maxDuration) !== null && _f !== void 0 ? _f : undefined;
        message.webrtc =
            object.webrtc !== undefined && object.webrtc !== null
                ? exports.WebRtc.fromPartial(object.webrtc)
                : undefined;
        message.triggers =
            ((_g = object.triggers) === null || _g === void 0 ? void 0 : _g.map((e) => exports.ProjectTrigger.fromPartial(e))) || [];
        message.location =
            object.location !== undefined && object.location !== null
                ? exports.LatLong.fromPartial(object.location)
                : undefined;
        message.guestCodes =
            ((_h = object.guestCodes) === null || _h === void 0 ? void 0 : _h.map((e) => exports.GuestCode.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCollection() {
    return { collectionId: "", metadata: undefined, projects: [], sources: [] };
}
exports.Collection = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.metadata !== undefined) {
            struct_1.Value.encode(struct_1.Value.wrap(message.metadata), writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.projects) {
            exports.Project.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.sources) {
            exports.Source.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCollection();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.metadata = struct_1.Value.unwrap(struct_1.Value.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.projects.push(exports.Project.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.sources.push(exports.Source.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            metadata: isSet(object === null || object === void 0 ? void 0 : object.metadata) ? object.metadata : undefined,
            projects: Array.isArray(object === null || object === void 0 ? void 0 : object.projects)
                ? object.projects.map((e) => exports.Project.fromJSON(e))
                : [],
            sources: Array.isArray(object === null || object === void 0 ? void 0 : object.sources)
                ? object.sources.map((e) => exports.Source.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        if (message.projects) {
            obj.projects = message.projects.map((e) => e ? exports.Project.toJSON(e) : undefined);
        }
        else {
            obj.projects = [];
        }
        if (message.sources) {
            obj.sources = message.sources.map((e) => e ? exports.Source.toJSON(e) : undefined);
        }
        else {
            obj.sources = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCollection();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.metadata = (_b = object.metadata) !== null && _b !== void 0 ? _b : undefined;
        message.projects =
            ((_c = object.projects) === null || _c === void 0 ? void 0 : _c.map((e) => exports.Project.fromPartial(e))) || [];
        message.sources = ((_d = object.sources) === null || _d === void 0 ? void 0 : _d.map((e) => exports.Source.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCreateCollectionRequest() {
    return { metadata: undefined };
}
exports.CreateCollectionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.metadata !== undefined) {
            struct_1.Value.encode(struct_1.Value.wrap(message.metadata), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateCollectionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metadata = struct_1.Value.unwrap(struct_1.Value.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            metadata: isSet(object === null || object === void 0 ? void 0 : object.metadata) ? object.metadata : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCreateCollectionRequest();
        message.metadata = (_a = object.metadata) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseCreateCollectionResponse() {
    return { collection: undefined };
}
exports.CreateCollectionResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collection !== undefined) {
            exports.Collection.encode(message.collection, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateCollectionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collection = exports.Collection.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collection: isSet(object.collection)
                ? exports.Collection.fromJSON(object.collection)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collection !== undefined &&
            (obj.collection = message.collection
                ? exports.Collection.toJSON(message.collection)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCreateCollectionResponse();
        message.collection =
            object.collection !== undefined && object.collection !== null
                ? exports.Collection.fromPartial(object.collection)
                : undefined;
        return message;
    },
};
function createBaseGetCollectionRequest() {
    return {
        collectionId: "",
        populateProjects: undefined,
        populateSources: undefined,
    };
}
exports.GetCollectionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.populateProjects !== undefined) {
            writer.uint32(16).bool(message.populateProjects);
        }
        if (message.populateSources !== undefined) {
            writer.uint32(24).bool(message.populateSources);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetCollectionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.populateProjects = reader.bool();
                    break;
                case 3:
                    message.populateSources = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            populateProjects: isSet(object.populateProjects)
                ? Boolean(object.populateProjects)
                : undefined,
            populateSources: isSet(object.populateSources)
                ? Boolean(object.populateSources)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.populateProjects !== undefined &&
            (obj.populateProjects = message.populateProjects);
        message.populateSources !== undefined &&
            (obj.populateSources = message.populateSources);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGetCollectionRequest();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.populateProjects = (_b = object.populateProjects) !== null && _b !== void 0 ? _b : undefined;
        message.populateSources = (_c = object.populateSources) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseGetCollectionResponse() {
    return { collection: undefined };
}
exports.GetCollectionResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collection !== undefined) {
            exports.Collection.encode(message.collection, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetCollectionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collection = exports.Collection.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collection: isSet(object.collection)
                ? exports.Collection.fromJSON(object.collection)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collection !== undefined &&
            (obj.collection = message.collection
                ? exports.Collection.toJSON(message.collection)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetCollectionResponse();
        message.collection =
            object.collection !== undefined && object.collection !== null
                ? exports.Collection.fromPartial(object.collection)
                : undefined;
        return message;
    },
};
function createBaseUpdateCollectionRequest() {
    return { collectionId: "", updateMask: undefined, metadata: undefined };
}
exports.UpdateCollectionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(field_mask_1.FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).ldelim();
        }
        if (message.metadata !== undefined) {
            struct_1.Value.encode(struct_1.Value.wrap(message.metadata), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateCollectionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.updateMask = field_mask_1.FieldMask.unwrap(field_mask_1.FieldMask.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.metadata = struct_1.Value.unwrap(struct_1.Value.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            updateMask: isSet(object.updateMask)
                ? field_mask_1.FieldMask.unwrap(field_mask_1.FieldMask.fromJSON(object.updateMask))
                : undefined,
            metadata: isSet(object === null || object === void 0 ? void 0 : object.metadata) ? object.metadata : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.updateMask !== undefined &&
            (obj.updateMask = field_mask_1.FieldMask.toJSON(field_mask_1.FieldMask.wrap(message.updateMask)));
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseUpdateCollectionRequest();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.updateMask = (_b = object.updateMask) !== null && _b !== void 0 ? _b : undefined;
        message.metadata = (_c = object.metadata) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseUpdateCollectionResponse() {
    return { collection: undefined };
}
exports.UpdateCollectionResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collection !== undefined) {
            exports.Collection.encode(message.collection, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateCollectionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collection = exports.Collection.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collection: isSet(object.collection)
                ? exports.Collection.fromJSON(object.collection)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collection !== undefined &&
            (obj.collection = message.collection
                ? exports.Collection.toJSON(message.collection)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpdateCollectionResponse();
        message.collection =
            object.collection !== undefined && object.collection !== null
                ? exports.Collection.fromPartial(object.collection)
                : undefined;
        return message;
    },
};
function createBaseDeleteCollectionRequest() {
    return { collectionId: "", force: undefined };
}
exports.DeleteCollectionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.force !== undefined) {
            writer.uint32(16).bool(message.force);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteCollectionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.force = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            force: isSet(object.force) ? Boolean(object.force) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.force !== undefined && (obj.force = message.force);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDeleteCollectionRequest();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.force = (_b = object.force) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseDeleteCollectionResponse() {
    return { sourcesDeleted: 0, projectsDeleted: 0, projectIdsStopped: [] };
}
exports.DeleteCollectionResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sourcesDeleted !== 0) {
            writer.uint32(8).uint32(message.sourcesDeleted);
        }
        if (message.projectsDeleted !== 0) {
            writer.uint32(16).uint32(message.projectsDeleted);
        }
        for (const v of message.projectIdsStopped) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteCollectionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sourcesDeleted = reader.uint32();
                    break;
                case 2:
                    message.projectsDeleted = reader.uint32();
                    break;
                case 3:
                    message.projectIdsStopped.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            sourcesDeleted: isSet(object.sourcesDeleted)
                ? Number(object.sourcesDeleted)
                : 0,
            projectsDeleted: isSet(object.projectsDeleted)
                ? Number(object.projectsDeleted)
                : 0,
            projectIdsStopped: Array.isArray(object === null || object === void 0 ? void 0 : object.projectIdsStopped)
                ? object.projectIdsStopped.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.sourcesDeleted !== undefined &&
            (obj.sourcesDeleted = Math.round(message.sourcesDeleted));
        message.projectsDeleted !== undefined &&
            (obj.projectsDeleted = Math.round(message.projectsDeleted));
        if (message.projectIdsStopped) {
            obj.projectIdsStopped = message.projectIdsStopped.map((e) => e);
        }
        else {
            obj.projectIdsStopped = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseDeleteCollectionResponse();
        message.sourcesDeleted = (_a = object.sourcesDeleted) !== null && _a !== void 0 ? _a : 0;
        message.projectsDeleted = (_b = object.projectsDeleted) !== null && _b !== void 0 ? _b : 0;
        message.projectIdsStopped = ((_c = object.projectIdsStopped) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseGetCollectionsRequest() {
    return {};
}
exports.GetCollectionsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetCollectionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseGetCollectionsRequest();
        return message;
    },
};
function createBaseGetCollectionsResponse() {
    return { collections: [] };
}
exports.GetCollectionsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.collections) {
            exports.Collection.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetCollectionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collections.push(exports.Collection.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collections: Array.isArray(object === null || object === void 0 ? void 0 : object.collections)
                ? object.collections.map((e) => exports.Collection.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.collections) {
            obj.collections = message.collections.map((e) => e ? exports.Collection.toJSON(e) : undefined);
        }
        else {
            obj.collections = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetCollectionsResponse();
        message.collections =
            ((_a = object.collections) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Collection.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCreateProjectRequest() {
    return {
        collectionId: "",
        metadata: undefined,
        rendering: undefined,
        encoding: undefined,
        composition: undefined,
        maxDuration: undefined,
        webrtc: undefined,
        location: undefined,
    };
}
exports.CreateProjectRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.metadata !== undefined) {
            struct_1.Value.encode(struct_1.Value.wrap(message.metadata), writer.uint32(18).fork()).ldelim();
        }
        if (message.rendering !== undefined) {
            exports.Rendering.encode(message.rendering, writer.uint32(26).fork()).ldelim();
        }
        if (message.encoding !== undefined) {
            exports.Encoding.encode(message.encoding, writer.uint32(34).fork()).ldelim();
        }
        if (message.composition !== undefined) {
            exports.Composition.encode(message.composition, writer.uint32(42).fork()).ldelim();
        }
        if (message.maxDuration !== undefined) {
            writer.uint32(48).uint32(message.maxDuration);
        }
        if (message.webrtc !== undefined) {
            exports.WebRtc.encode(message.webrtc, writer.uint32(58).fork()).ldelim();
        }
        if (message.location !== undefined) {
            exports.LatLong.encode(message.location, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateProjectRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.metadata = struct_1.Value.unwrap(struct_1.Value.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.rendering = exports.Rendering.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.encoding = exports.Encoding.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.composition = exports.Composition.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.maxDuration = reader.uint32();
                    break;
                case 7:
                    message.webrtc = exports.WebRtc.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.location = exports.LatLong.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            metadata: isSet(object === null || object === void 0 ? void 0 : object.metadata) ? object.metadata : undefined,
            rendering: isSet(object.rendering)
                ? exports.Rendering.fromJSON(object.rendering)
                : undefined,
            encoding: isSet(object.encoding)
                ? exports.Encoding.fromJSON(object.encoding)
                : undefined,
            composition: isSet(object.composition)
                ? exports.Composition.fromJSON(object.composition)
                : undefined,
            maxDuration: isSet(object.maxDuration)
                ? Number(object.maxDuration)
                : undefined,
            webrtc: isSet(object.webrtc) ? exports.WebRtc.fromJSON(object.webrtc) : undefined,
            location: isSet(object.location)
                ? exports.LatLong.fromJSON(object.location)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.rendering !== undefined &&
            (obj.rendering = message.rendering
                ? exports.Rendering.toJSON(message.rendering)
                : undefined);
        message.encoding !== undefined &&
            (obj.encoding = message.encoding
                ? exports.Encoding.toJSON(message.encoding)
                : undefined);
        message.composition !== undefined &&
            (obj.composition = message.composition
                ? exports.Composition.toJSON(message.composition)
                : undefined);
        message.maxDuration !== undefined &&
            (obj.maxDuration = Math.round(message.maxDuration));
        message.webrtc !== undefined &&
            (obj.webrtc = message.webrtc ? exports.WebRtc.toJSON(message.webrtc) : undefined);
        message.location !== undefined &&
            (obj.location = message.location
                ? exports.LatLong.toJSON(message.location)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCreateProjectRequest();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.metadata = (_b = object.metadata) !== null && _b !== void 0 ? _b : undefined;
        message.rendering =
            object.rendering !== undefined && object.rendering !== null
                ? exports.Rendering.fromPartial(object.rendering)
                : undefined;
        message.encoding =
            object.encoding !== undefined && object.encoding !== null
                ? exports.Encoding.fromPartial(object.encoding)
                : undefined;
        message.composition =
            object.composition !== undefined && object.composition !== null
                ? exports.Composition.fromPartial(object.composition)
                : undefined;
        message.maxDuration = (_c = object.maxDuration) !== null && _c !== void 0 ? _c : undefined;
        message.webrtc =
            object.webrtc !== undefined && object.webrtc !== null
                ? exports.WebRtc.fromPartial(object.webrtc)
                : undefined;
        message.location =
            object.location !== undefined && object.location !== null
                ? exports.LatLong.fromPartial(object.location)
                : undefined;
        return message;
    },
};
function createBaseCreateProjectResponse() {
    return { project: undefined };
}
exports.CreateProjectResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.project !== undefined) {
            exports.Project.encode(message.project, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateProjectResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.project = exports.Project.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            project: isSet(object.project)
                ? exports.Project.fromJSON(object.project)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.project !== undefined &&
            (obj.project = message.project
                ? exports.Project.toJSON(message.project)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCreateProjectResponse();
        message.project =
            object.project !== undefined && object.project !== null
                ? exports.Project.fromPartial(object.project)
                : undefined;
        return message;
    },
};
function createBaseUpdateProjectRequest() {
    return {
        collectionId: "",
        projectId: "",
        updateMask: undefined,
        metadata: undefined,
        rendering: undefined,
        encoding: undefined,
        composition: undefined,
        maxDuration: undefined,
        webrtc: undefined,
        location: undefined,
    };
}
exports.UpdateProjectRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(field_mask_1.FieldMask.wrap(message.updateMask), writer.uint32(26).fork()).ldelim();
        }
        if (message.metadata !== undefined) {
            struct_1.Value.encode(struct_1.Value.wrap(message.metadata), writer.uint32(34).fork()).ldelim();
        }
        if (message.rendering !== undefined) {
            exports.Rendering.encode(message.rendering, writer.uint32(42).fork()).ldelim();
        }
        if (message.encoding !== undefined) {
            exports.Encoding.encode(message.encoding, writer.uint32(50).fork()).ldelim();
        }
        if (message.composition !== undefined) {
            exports.Composition.encode(message.composition, writer.uint32(58).fork()).ldelim();
        }
        if (message.maxDuration !== undefined) {
            writer.uint32(64).uint32(message.maxDuration);
        }
        if (message.webrtc !== undefined) {
            exports.WebRtc.encode(message.webrtc, writer.uint32(74).fork()).ldelim();
        }
        if (message.location !== undefined) {
            exports.LatLong.encode(message.location, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateProjectRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.updateMask = field_mask_1.FieldMask.unwrap(field_mask_1.FieldMask.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.metadata = struct_1.Value.unwrap(struct_1.Value.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.rendering = exports.Rendering.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.encoding = exports.Encoding.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.composition = exports.Composition.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.maxDuration = reader.uint32();
                    break;
                case 9:
                    message.webrtc = exports.WebRtc.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.location = exports.LatLong.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            updateMask: isSet(object.updateMask)
                ? field_mask_1.FieldMask.unwrap(field_mask_1.FieldMask.fromJSON(object.updateMask))
                : undefined,
            metadata: isSet(object === null || object === void 0 ? void 0 : object.metadata) ? object.metadata : undefined,
            rendering: isSet(object.rendering)
                ? exports.Rendering.fromJSON(object.rendering)
                : undefined,
            encoding: isSet(object.encoding)
                ? exports.Encoding.fromJSON(object.encoding)
                : undefined,
            composition: isSet(object.composition)
                ? exports.Composition.fromJSON(object.composition)
                : undefined,
            maxDuration: isSet(object.maxDuration)
                ? Number(object.maxDuration)
                : undefined,
            webrtc: isSet(object.webrtc) ? exports.WebRtc.fromJSON(object.webrtc) : undefined,
            location: isSet(object.location)
                ? exports.LatLong.fromJSON(object.location)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.updateMask !== undefined &&
            (obj.updateMask = field_mask_1.FieldMask.toJSON(field_mask_1.FieldMask.wrap(message.updateMask)));
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.rendering !== undefined &&
            (obj.rendering = message.rendering
                ? exports.Rendering.toJSON(message.rendering)
                : undefined);
        message.encoding !== undefined &&
            (obj.encoding = message.encoding
                ? exports.Encoding.toJSON(message.encoding)
                : undefined);
        message.composition !== undefined &&
            (obj.composition = message.composition
                ? exports.Composition.toJSON(message.composition)
                : undefined);
        message.maxDuration !== undefined &&
            (obj.maxDuration = Math.round(message.maxDuration));
        message.webrtc !== undefined &&
            (obj.webrtc = message.webrtc ? exports.WebRtc.toJSON(message.webrtc) : undefined);
        message.location !== undefined &&
            (obj.location = message.location
                ? exports.LatLong.toJSON(message.location)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseUpdateProjectRequest();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.updateMask = (_c = object.updateMask) !== null && _c !== void 0 ? _c : undefined;
        message.metadata = (_d = object.metadata) !== null && _d !== void 0 ? _d : undefined;
        message.rendering =
            object.rendering !== undefined && object.rendering !== null
                ? exports.Rendering.fromPartial(object.rendering)
                : undefined;
        message.encoding =
            object.encoding !== undefined && object.encoding !== null
                ? exports.Encoding.fromPartial(object.encoding)
                : undefined;
        message.composition =
            object.composition !== undefined && object.composition !== null
                ? exports.Composition.fromPartial(object.composition)
                : undefined;
        message.maxDuration = (_e = object.maxDuration) !== null && _e !== void 0 ? _e : undefined;
        message.webrtc =
            object.webrtc !== undefined && object.webrtc !== null
                ? exports.WebRtc.fromPartial(object.webrtc)
                : undefined;
        message.location =
            object.location !== undefined && object.location !== null
                ? exports.LatLong.fromPartial(object.location)
                : undefined;
        return message;
    },
};
function createBaseUpdateProjectResponse() {
    return { project: undefined, broadcastUpdated: false };
}
exports.UpdateProjectResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.project !== undefined) {
            exports.Project.encode(message.project, writer.uint32(10).fork()).ldelim();
        }
        if (message.broadcastUpdated === true) {
            writer.uint32(16).bool(message.broadcastUpdated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateProjectResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.project = exports.Project.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.broadcastUpdated = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            project: isSet(object.project)
                ? exports.Project.fromJSON(object.project)
                : undefined,
            broadcastUpdated: isSet(object.broadcastUpdated)
                ? Boolean(object.broadcastUpdated)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.project !== undefined &&
            (obj.project = message.project
                ? exports.Project.toJSON(message.project)
                : undefined);
        message.broadcastUpdated !== undefined &&
            (obj.broadcastUpdated = message.broadcastUpdated);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseUpdateProjectResponse();
        message.project =
            object.project !== undefined && object.project !== null
                ? exports.Project.fromPartial(object.project)
                : undefined;
        message.broadcastUpdated = (_a = object.broadcastUpdated) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseDeleteProjectRequest() {
    return { collectionId: "", projectId: "", force: undefined };
}
exports.DeleteProjectRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.force !== undefined) {
            writer.uint32(24).bool(message.force);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteProjectRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.force = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            force: isSet(object.force) ? Boolean(object.force) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.force !== undefined && (obj.force = message.force);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseDeleteProjectRequest();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.force = (_c = object.force) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseDeleteProjectResponse() {
    return { broadcastStopped: false, layoutsDeleted: 0 };
}
exports.DeleteProjectResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.broadcastStopped === true) {
            writer.uint32(8).bool(message.broadcastStopped);
        }
        if (message.layoutsDeleted !== 0) {
            writer.uint32(16).uint32(message.layoutsDeleted);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteProjectResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.broadcastStopped = reader.bool();
                    break;
                case 2:
                    message.layoutsDeleted = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            broadcastStopped: isSet(object.broadcastStopped)
                ? Boolean(object.broadcastStopped)
                : false,
            layoutsDeleted: isSet(object.layoutsDeleted)
                ? Number(object.layoutsDeleted)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.broadcastStopped !== undefined &&
            (obj.broadcastStopped = message.broadcastStopped);
        message.layoutsDeleted !== undefined &&
            (obj.layoutsDeleted = Math.round(message.layoutsDeleted));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDeleteProjectResponse();
        message.broadcastStopped = (_a = object.broadcastStopped) !== null && _a !== void 0 ? _a : false;
        message.layoutsDeleted = (_b = object.layoutsDeleted) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseStartProjectBroadcastRequest() {
    return { collectionId: "", projectId: "", webrtcStart: undefined };
}
exports.StartProjectBroadcastRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.webrtcStart !== undefined) {
            writer.uint32(24).bool(message.webrtcStart);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStartProjectBroadcastRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.webrtcStart = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            webrtcStart: isSet(object.webrtcStart)
                ? Boolean(object.webrtcStart)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.webrtcStart !== undefined &&
            (obj.webrtcStart = message.webrtcStart);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseStartProjectBroadcastRequest();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.webrtcStart = (_c = object.webrtcStart) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseStartProjectBroadcastResponse() {
    return { broadcastId: "" };
}
exports.StartProjectBroadcastResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.broadcastId !== "") {
            writer.uint32(10).string(message.broadcastId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStartProjectBroadcastResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.broadcastId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            broadcastId: isSet(object.broadcastId) ? String(object.broadcastId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.broadcastId !== undefined &&
            (obj.broadcastId = message.broadcastId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStartProjectBroadcastResponse();
        message.broadcastId = (_a = object.broadcastId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseStopProjectBroadcastRequest() {
    return { collectionId: "", projectId: "", webrtcStop: undefined };
}
exports.StopProjectBroadcastRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.webrtcStop !== undefined) {
            writer.uint32(24).bool(message.webrtcStop);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStopProjectBroadcastRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.webrtcStop = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            webrtcStop: isSet(object.webrtcStop)
                ? Boolean(object.webrtcStop)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.webrtcStop !== undefined && (obj.webrtcStop = message.webrtcStop);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseStopProjectBroadcastRequest();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.webrtcStop = (_c = object.webrtcStop) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseStopProjectBroadcastResponse() {
    return {};
}
exports.StopProjectBroadcastResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStopProjectBroadcastResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseStopProjectBroadcastResponse();
        return message;
    },
};
function createBaseGetProjectRequest() {
    return { collectionId: "", projectId: "", status: undefined };
}
exports.GetProjectRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.status !== undefined) {
            writer.uint32(24).bool(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetProjectRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.status = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            status: isSet(object.status) ? Boolean(object.status) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGetProjectRequest();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.status = (_c = object.status) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseGetProjectResponse() {
    return { project: undefined, status: undefined };
}
exports.GetProjectResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.project !== undefined) {
            exports.Project.encode(message.project, writer.uint32(10).fork()).ldelim();
        }
        if (message.status !== undefined) {
            exports.ProjectBroadcastStatus.encode(message.status, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetProjectResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.project = exports.Project.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.status = exports.ProjectBroadcastStatus.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            project: isSet(object.project)
                ? exports.Project.fromJSON(object.project)
                : undefined,
            status: isSet(object.status)
                ? exports.ProjectBroadcastStatus.fromJSON(object.status)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.project !== undefined &&
            (obj.project = message.project
                ? exports.Project.toJSON(message.project)
                : undefined);
        message.status !== undefined &&
            (obj.status = message.status
                ? exports.ProjectBroadcastStatus.toJSON(message.status)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetProjectResponse();
        message.project =
            object.project !== undefined && object.project !== null
                ? exports.Project.fromPartial(object.project)
                : undefined;
        message.status =
            object.status !== undefined && object.status !== null
                ? exports.ProjectBroadcastStatus.fromPartial(object.status)
                : undefined;
        return message;
    },
};
function createBaseGetProjectBroadcastSnapshotRequest() {
    return { collectionId: "", projectId: "", format: undefined };
}
exports.GetProjectBroadcastSnapshotRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.format !== undefined) {
            writer.uint32(24).int32(imageFormatToNumber(message.format));
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetProjectBroadcastSnapshotRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.format = imageFormatFromJSON(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            format: isSet(object.format)
                ? imageFormatFromJSON(object.format)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.format !== undefined &&
            (obj.format =
                message.format !== undefined
                    ? imageFormatToJSON(message.format)
                    : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGetProjectBroadcastSnapshotRequest();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.format = (_c = object.format) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseGetProjectBroadcastSnapshotResponse() {
    return {
        format: ImageFormat.IMAGE_FORMAT_UNSPECIFIED,
        image: new Uint8Array(),
    };
}
exports.GetProjectBroadcastSnapshotResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.format !== ImageFormat.IMAGE_FORMAT_UNSPECIFIED) {
            writer.uint32(8).int32(imageFormatToNumber(message.format));
        }
        if (message.image.length !== 0) {
            writer.uint32(18).bytes(message.image);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetProjectBroadcastSnapshotResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.format = imageFormatFromJSON(reader.int32());
                    break;
                case 2:
                    message.image = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            format: isSet(object.format)
                ? imageFormatFromJSON(object.format)
                : ImageFormat.IMAGE_FORMAT_UNSPECIFIED,
            image: isSet(object.image)
                ? bytesFromBase64(object.image)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.format !== undefined &&
            (obj.format = imageFormatToJSON(message.format));
        message.image !== undefined &&
            (obj.image = base64FromBytes(message.image !== undefined ? message.image : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetProjectBroadcastSnapshotResponse();
        message.format = (_a = object.format) !== null && _a !== void 0 ? _a : ImageFormat.IMAGE_FORMAT_UNSPECIFIED;
        message.image = (_b = object.image) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseGetProjectBroadcastStatusRequest() {
    return { collectionId: "", projectId: "" };
}
exports.GetProjectBroadcastStatusRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetProjectBroadcastStatusRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetProjectBroadcastStatusRequest();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetProjectBroadcastStatusResponse() {
    return { status: undefined };
}
exports.GetProjectBroadcastStatusResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.status !== undefined) {
            exports.ProjectBroadcastStatus.encode(message.status, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetProjectBroadcastStatusResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = exports.ProjectBroadcastStatus.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            status: isSet(object.status)
                ? exports.ProjectBroadcastStatus.fromJSON(object.status)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined &&
            (obj.status = message.status
                ? exports.ProjectBroadcastStatus.toJSON(message.status)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetProjectBroadcastStatusResponse();
        message.status =
            object.status !== undefined && object.status !== null
                ? exports.ProjectBroadcastStatus.fromPartial(object.status)
                : undefined;
        return message;
    },
};
function createBaseStartProjectWebRtcRequest() {
    return { collectionId: "", projectId: "" };
}
exports.StartProjectWebRtcRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStartProjectWebRtcRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStartProjectWebRtcRequest();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseStartProjectWebRtcResponse() {
    return {};
}
exports.StartProjectWebRtcResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStartProjectWebRtcResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseStartProjectWebRtcResponse();
        return message;
    },
};
function createBaseStopProjectWebRtcRequest() {
    return { collectionId: "", projectId: "" };
}
exports.StopProjectWebRtcRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStopProjectWebRtcRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStopProjectWebRtcRequest();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseStopProjectWebRtcResponse() {
    return {};
}
exports.StopProjectWebRtcResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStopProjectWebRtcResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseStopProjectWebRtcResponse();
        return message;
    },
};
function createBaseCreateDestinationRequest() {
    return {
        collectionId: "",
        projectId: "",
        metadata: undefined,
        address: undefined,
        enabled: undefined,
        timeout: undefined,
    };
}
exports.CreateDestinationRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.metadata !== undefined) {
            struct_1.Value.encode(struct_1.Value.wrap(message.metadata), writer.uint32(26).fork()).ldelim();
        }
        if (message.address !== undefined) {
            exports.DestinationAddress.encode(message.address, writer.uint32(42).fork()).ldelim();
        }
        if (message.enabled !== undefined) {
            writer.uint32(48).bool(message.enabled);
        }
        if (message.timeout !== undefined) {
            writer.uint32(56).uint32(message.timeout);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateDestinationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.metadata = struct_1.Value.unwrap(struct_1.Value.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.address = exports.DestinationAddress.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.enabled = reader.bool();
                    break;
                case 7:
                    message.timeout = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            metadata: isSet(object === null || object === void 0 ? void 0 : object.metadata) ? object.metadata : undefined,
            address: isSet(object.address)
                ? exports.DestinationAddress.fromJSON(object.address)
                : undefined,
            enabled: isSet(object.enabled) ? Boolean(object.enabled) : undefined,
            timeout: isSet(object.timeout) ? Number(object.timeout) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.address !== undefined &&
            (obj.address = message.address
                ? exports.DestinationAddress.toJSON(message.address)
                : undefined);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.timeout !== undefined &&
            (obj.timeout = Math.round(message.timeout));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseCreateDestinationRequest();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.metadata = (_c = object.metadata) !== null && _c !== void 0 ? _c : undefined;
        message.address =
            object.address !== undefined && object.address !== null
                ? exports.DestinationAddress.fromPartial(object.address)
                : undefined;
        message.enabled = (_d = object.enabled) !== null && _d !== void 0 ? _d : undefined;
        message.timeout = (_e = object.timeout) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
function createBaseCreateDestinationResponse() {
    return { destination: undefined };
}
exports.CreateDestinationResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.destination !== undefined) {
            exports.Destination.encode(message.destination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateDestinationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.destination = exports.Destination.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            destination: isSet(object.destination)
                ? exports.Destination.fromJSON(object.destination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.destination !== undefined &&
            (obj.destination = message.destination
                ? exports.Destination.toJSON(message.destination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCreateDestinationResponse();
        message.destination =
            object.destination !== undefined && object.destination !== null
                ? exports.Destination.fromPartial(object.destination)
                : undefined;
        return message;
    },
};
function createBaseGetDestinationRequest() {
    return { collectionId: "", projectId: "", destinationId: "" };
}
exports.GetDestinationRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.destinationId !== "") {
            writer.uint32(26).string(message.destinationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetDestinationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.destinationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            destinationId: isSet(object.destinationId)
                ? String(object.destinationId)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.destinationId !== undefined &&
            (obj.destinationId = message.destinationId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGetDestinationRequest();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.destinationId = (_c = object.destinationId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseGetDestinationResponse() {
    return { destination: undefined };
}
exports.GetDestinationResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.destination !== undefined) {
            exports.Destination.encode(message.destination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetDestinationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.destination = exports.Destination.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            destination: isSet(object.destination)
                ? exports.Destination.fromJSON(object.destination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.destination !== undefined &&
            (obj.destination = message.destination
                ? exports.Destination.toJSON(message.destination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetDestinationResponse();
        message.destination =
            object.destination !== undefined && object.destination !== null
                ? exports.Destination.fromPartial(object.destination)
                : undefined;
        return message;
    },
};
function createBaseDeleteDestinationRequest() {
    return {
        collectionId: "",
        projectId: "",
        destinationId: "",
        force: undefined,
    };
}
exports.DeleteDestinationRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.destinationId !== "") {
            writer.uint32(26).string(message.destinationId);
        }
        if (message.force !== undefined) {
            writer.uint32(32).bool(message.force);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteDestinationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.destinationId = reader.string();
                    break;
                case 4:
                    message.force = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            destinationId: isSet(object.destinationId)
                ? String(object.destinationId)
                : "",
            force: isSet(object.force) ? Boolean(object.force) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.destinationId !== undefined &&
            (obj.destinationId = message.destinationId);
        message.force !== undefined && (obj.force = message.force);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseDeleteDestinationRequest();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.destinationId = (_c = object.destinationId) !== null && _c !== void 0 ? _c : "";
        message.force = (_d = object.force) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBaseDeleteDestinationResponse() {
    return { broadcastUpdated: false };
}
exports.DeleteDestinationResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.broadcastUpdated === true) {
            writer.uint32(8).bool(message.broadcastUpdated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteDestinationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.broadcastUpdated = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            broadcastUpdated: isSet(object.broadcastUpdated)
                ? Boolean(object.broadcastUpdated)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.broadcastUpdated !== undefined &&
            (obj.broadcastUpdated = message.broadcastUpdated);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeleteDestinationResponse();
        message.broadcastUpdated = (_a = object.broadcastUpdated) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseUpdateDestinationRequest() {
    return {
        collectionId: "",
        projectId: "",
        destinationId: "",
        updateMask: undefined,
        metadata: undefined,
        address: undefined,
        enabled: undefined,
        timeout: undefined,
    };
}
exports.UpdateDestinationRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.destinationId !== "") {
            writer.uint32(26).string(message.destinationId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(field_mask_1.FieldMask.wrap(message.updateMask), writer.uint32(34).fork()).ldelim();
        }
        if (message.metadata !== undefined) {
            struct_1.Value.encode(struct_1.Value.wrap(message.metadata), writer.uint32(42).fork()).ldelim();
        }
        if (message.address !== undefined) {
            exports.DestinationAddress.encode(message.address, writer.uint32(50).fork()).ldelim();
        }
        if (message.enabled !== undefined) {
            writer.uint32(56).bool(message.enabled);
        }
        if (message.timeout !== undefined) {
            writer.uint32(64).uint32(message.timeout);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateDestinationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.destinationId = reader.string();
                    break;
                case 4:
                    message.updateMask = field_mask_1.FieldMask.unwrap(field_mask_1.FieldMask.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.metadata = struct_1.Value.unwrap(struct_1.Value.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.address = exports.DestinationAddress.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.enabled = reader.bool();
                    break;
                case 8:
                    message.timeout = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            destinationId: isSet(object.destinationId)
                ? String(object.destinationId)
                : "",
            updateMask: isSet(object.updateMask)
                ? field_mask_1.FieldMask.unwrap(field_mask_1.FieldMask.fromJSON(object.updateMask))
                : undefined,
            metadata: isSet(object === null || object === void 0 ? void 0 : object.metadata) ? object.metadata : undefined,
            address: isSet(object.address)
                ? exports.DestinationAddress.fromJSON(object.address)
                : undefined,
            enabled: isSet(object.enabled) ? Boolean(object.enabled) : undefined,
            timeout: isSet(object.timeout) ? Number(object.timeout) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.destinationId !== undefined &&
            (obj.destinationId = message.destinationId);
        message.updateMask !== undefined &&
            (obj.updateMask = field_mask_1.FieldMask.toJSON(field_mask_1.FieldMask.wrap(message.updateMask)));
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.address !== undefined &&
            (obj.address = message.address
                ? exports.DestinationAddress.toJSON(message.address)
                : undefined);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.timeout !== undefined &&
            (obj.timeout = Math.round(message.timeout));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseUpdateDestinationRequest();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.destinationId = (_c = object.destinationId) !== null && _c !== void 0 ? _c : "";
        message.updateMask = (_d = object.updateMask) !== null && _d !== void 0 ? _d : undefined;
        message.metadata = (_e = object.metadata) !== null && _e !== void 0 ? _e : undefined;
        message.address =
            object.address !== undefined && object.address !== null
                ? exports.DestinationAddress.fromPartial(object.address)
                : undefined;
        message.enabled = (_f = object.enabled) !== null && _f !== void 0 ? _f : undefined;
        message.timeout = (_g = object.timeout) !== null && _g !== void 0 ? _g : undefined;
        return message;
    },
};
function createBaseUpdateDestinationResponse() {
    return { destination: undefined, broadcastUpdated: false };
}
exports.UpdateDestinationResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.destination !== undefined) {
            exports.Destination.encode(message.destination, writer.uint32(10).fork()).ldelim();
        }
        if (message.broadcastUpdated === true) {
            writer.uint32(16).bool(message.broadcastUpdated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateDestinationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.destination = exports.Destination.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.broadcastUpdated = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            destination: isSet(object.destination)
                ? exports.Destination.fromJSON(object.destination)
                : undefined,
            broadcastUpdated: isSet(object.broadcastUpdated)
                ? Boolean(object.broadcastUpdated)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.destination !== undefined &&
            (obj.destination = message.destination
                ? exports.Destination.toJSON(message.destination)
                : undefined);
        message.broadcastUpdated !== undefined &&
            (obj.broadcastUpdated = message.broadcastUpdated);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseUpdateDestinationResponse();
        message.destination =
            object.destination !== undefined && object.destination !== null
                ? exports.Destination.fromPartial(object.destination)
                : undefined;
        message.broadcastUpdated = (_a = object.broadcastUpdated) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseCreateSourceRequest() {
    return {
        collectionId: "",
        metadata: undefined,
        address: undefined,
        preview: undefined,
    };
}
exports.CreateSourceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.metadata !== undefined) {
            struct_1.Value.encode(struct_1.Value.wrap(message.metadata), writer.uint32(18).fork()).ldelim();
        }
        if (message.address !== undefined) {
            exports.SourceAddress.encode(message.address, writer.uint32(26).fork()).ldelim();
        }
        if (message.preview !== undefined) {
            exports.PreviewAddress.encode(message.preview, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateSourceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.metadata = struct_1.Value.unwrap(struct_1.Value.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.address = exports.SourceAddress.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.preview = exports.PreviewAddress.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            metadata: isSet(object === null || object === void 0 ? void 0 : object.metadata) ? object.metadata : undefined,
            address: isSet(object.address)
                ? exports.SourceAddress.fromJSON(object.address)
                : undefined,
            preview: isSet(object.preview)
                ? exports.PreviewAddress.fromJSON(object.preview)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.address !== undefined &&
            (obj.address = message.address
                ? exports.SourceAddress.toJSON(message.address)
                : undefined);
        message.preview !== undefined &&
            (obj.preview = message.preview
                ? exports.PreviewAddress.toJSON(message.preview)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCreateSourceRequest();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.metadata = (_b = object.metadata) !== null && _b !== void 0 ? _b : undefined;
        message.address =
            object.address !== undefined && object.address !== null
                ? exports.SourceAddress.fromPartial(object.address)
                : undefined;
        message.preview =
            object.preview !== undefined && object.preview !== null
                ? exports.PreviewAddress.fromPartial(object.preview)
                : undefined;
        return message;
    },
};
function createBaseCreateSourceResponse() {
    return { source: undefined };
}
exports.CreateSourceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.source !== undefined) {
            exports.Source.encode(message.source, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateSourceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.source = exports.Source.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            source: isSet(object.source) ? exports.Source.fromJSON(object.source) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.source !== undefined &&
            (obj.source = message.source ? exports.Source.toJSON(message.source) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCreateSourceResponse();
        message.source =
            object.source !== undefined && object.source !== null
                ? exports.Source.fromPartial(object.source)
                : undefined;
        return message;
    },
};
function createBaseDeleteSourceRequest() {
    return { collectionId: "", sourceId: "", force: undefined };
}
exports.DeleteSourceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.sourceId !== "") {
            writer.uint32(18).string(message.sourceId);
        }
        if (message.force !== undefined) {
            writer.uint32(24).bool(message.force);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteSourceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.sourceId = reader.string();
                    break;
                case 3:
                    message.force = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            sourceId: isSet(object.sourceId) ? String(object.sourceId) : "",
            force: isSet(object.force) ? Boolean(object.force) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.sourceId !== undefined && (obj.sourceId = message.sourceId);
        message.force !== undefined && (obj.force = message.force);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseDeleteSourceRequest();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.sourceId = (_b = object.sourceId) !== null && _b !== void 0 ? _b : "";
        message.force = (_c = object.force) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseDeleteSourceResponse() {
    return { projectIdsUpdated: [] };
}
exports.DeleteSourceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.projectIdsUpdated) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteSourceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.projectIdsUpdated.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectIdsUpdated: Array.isArray(object === null || object === void 0 ? void 0 : object.projectIdsUpdated)
                ? object.projectIdsUpdated.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.projectIdsUpdated) {
            obj.projectIdsUpdated = message.projectIdsUpdated.map((e) => e);
        }
        else {
            obj.projectIdsUpdated = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeleteSourceResponse();
        message.projectIdsUpdated = ((_a = object.projectIdsUpdated) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseAddSourceToProjectRequest() {
    return { collectionId: "", projectId: "", sourceId: "", trigger: undefined };
}
exports.AddSourceToProjectRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.sourceId !== "") {
            writer.uint32(26).string(message.sourceId);
        }
        if (message.trigger !== undefined) {
            exports.SourceTrigger.encode(message.trigger, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddSourceToProjectRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.sourceId = reader.string();
                    break;
                case 4:
                    message.trigger = exports.SourceTrigger.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            sourceId: isSet(object.sourceId) ? String(object.sourceId) : "",
            trigger: isSet(object.trigger)
                ? exports.SourceTrigger.fromJSON(object.trigger)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.sourceId !== undefined && (obj.sourceId = message.sourceId);
        message.trigger !== undefined &&
            (obj.trigger = message.trigger
                ? exports.SourceTrigger.toJSON(message.trigger)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAddSourceToProjectRequest();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.sourceId = (_c = object.sourceId) !== null && _c !== void 0 ? _c : "";
        message.trigger =
            object.trigger !== undefined && object.trigger !== null
                ? exports.SourceTrigger.fromPartial(object.trigger)
                : undefined;
        return message;
    },
};
function createBaseAddSourceToProjectResponse() {
    return { project: undefined, broadcastUpdated: false };
}
exports.AddSourceToProjectResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.project !== undefined) {
            exports.Project.encode(message.project, writer.uint32(10).fork()).ldelim();
        }
        if (message.broadcastUpdated === true) {
            writer.uint32(16).bool(message.broadcastUpdated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddSourceToProjectResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.project = exports.Project.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.broadcastUpdated = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            project: isSet(object.project)
                ? exports.Project.fromJSON(object.project)
                : undefined,
            broadcastUpdated: isSet(object.broadcastUpdated)
                ? Boolean(object.broadcastUpdated)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.project !== undefined &&
            (obj.project = message.project
                ? exports.Project.toJSON(message.project)
                : undefined);
        message.broadcastUpdated !== undefined &&
            (obj.broadcastUpdated = message.broadcastUpdated);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAddSourceToProjectResponse();
        message.project =
            object.project !== undefined && object.project !== null
                ? exports.Project.fromPartial(object.project)
                : undefined;
        message.broadcastUpdated = (_a = object.broadcastUpdated) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseUpdateSourceInProjectRequest() {
    return {
        collectionId: "",
        projectId: "",
        sourceId: "",
        updateMask: undefined,
        trigger: undefined,
    };
}
exports.UpdateSourceInProjectRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.sourceId !== "") {
            writer.uint32(26).string(message.sourceId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(field_mask_1.FieldMask.wrap(message.updateMask), writer.uint32(34).fork()).ldelim();
        }
        if (message.trigger !== undefined) {
            exports.SourceTrigger.encode(message.trigger, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateSourceInProjectRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.sourceId = reader.string();
                    break;
                case 4:
                    message.updateMask = field_mask_1.FieldMask.unwrap(field_mask_1.FieldMask.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.trigger = exports.SourceTrigger.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            sourceId: isSet(object.sourceId) ? String(object.sourceId) : "",
            updateMask: isSet(object.updateMask)
                ? field_mask_1.FieldMask.unwrap(field_mask_1.FieldMask.fromJSON(object.updateMask))
                : undefined,
            trigger: isSet(object.trigger)
                ? exports.SourceTrigger.fromJSON(object.trigger)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.sourceId !== undefined && (obj.sourceId = message.sourceId);
        message.updateMask !== undefined &&
            (obj.updateMask = field_mask_1.FieldMask.toJSON(field_mask_1.FieldMask.wrap(message.updateMask)));
        message.trigger !== undefined &&
            (obj.trigger = message.trigger
                ? exports.SourceTrigger.toJSON(message.trigger)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseUpdateSourceInProjectRequest();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.sourceId = (_c = object.sourceId) !== null && _c !== void 0 ? _c : "";
        message.updateMask = (_d = object.updateMask) !== null && _d !== void 0 ? _d : undefined;
        message.trigger =
            object.trigger !== undefined && object.trigger !== null
                ? exports.SourceTrigger.fromPartial(object.trigger)
                : undefined;
        return message;
    },
};
function createBaseUpdateSourceInProjectResponse() {
    return { project: undefined };
}
exports.UpdateSourceInProjectResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.project !== undefined) {
            exports.Project.encode(message.project, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateSourceInProjectResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.project = exports.Project.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            project: isSet(object.project)
                ? exports.Project.fromJSON(object.project)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.project !== undefined &&
            (obj.project = message.project
                ? exports.Project.toJSON(message.project)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpdateSourceInProjectResponse();
        message.project =
            object.project !== undefined && object.project !== null
                ? exports.Project.fromPartial(object.project)
                : undefined;
        return message;
    },
};
function createBaseGetSourceRequest() {
    return { collectionId: "", sourceId: "" };
}
exports.GetSourceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.sourceId !== "") {
            writer.uint32(26).string(message.sourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetSourceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 3:
                    message.sourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            sourceId: isSet(object.sourceId) ? String(object.sourceId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.sourceId !== undefined && (obj.sourceId = message.sourceId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetSourceRequest();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.sourceId = (_b = object.sourceId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetSourceResponse() {
    return { source: undefined };
}
exports.GetSourceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.source !== undefined) {
            exports.Source.encode(message.source, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetSourceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.source = exports.Source.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            source: isSet(object.source) ? exports.Source.fromJSON(object.source) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.source !== undefined &&
            (obj.source = message.source ? exports.Source.toJSON(message.source) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetSourceResponse();
        message.source =
            object.source !== undefined && object.source !== null
                ? exports.Source.fromPartial(object.source)
                : undefined;
        return message;
    },
};
function createBaseGetSourcesRequest() {
    return { collectionId: "" };
}
exports.GetSourcesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetSourcesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetSourcesRequest();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetSourcesResponse() {
    return { sources: [] };
}
exports.GetSourcesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.sources) {
            exports.Source.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetSourcesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sources.push(exports.Source.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            sources: Array.isArray(object === null || object === void 0 ? void 0 : object.sources)
                ? object.sources.map((e) => exports.Source.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sources) {
            obj.sources = message.sources.map((e) => e ? exports.Source.toJSON(e) : undefined);
        }
        else {
            obj.sources = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetSourcesResponse();
        message.sources = ((_a = object.sources) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Source.fromPartial(e))) || [];
        return message;
    },
};
function createBaseUpdateSourceRequest() {
    return {
        collectionId: "",
        sourceId: "",
        updateMask: undefined,
        metadata: undefined,
        address: undefined,
        preview: undefined,
    };
}
exports.UpdateSourceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.sourceId !== "") {
            writer.uint32(26).string(message.sourceId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(field_mask_1.FieldMask.wrap(message.updateMask), writer.uint32(34).fork()).ldelim();
        }
        if (message.metadata !== undefined) {
            struct_1.Value.encode(struct_1.Value.wrap(message.metadata), writer.uint32(42).fork()).ldelim();
        }
        if (message.address !== undefined) {
            exports.SourceAddress.encode(message.address, writer.uint32(50).fork()).ldelim();
        }
        if (message.preview !== undefined) {
            exports.PreviewAddress.encode(message.preview, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateSourceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 3:
                    message.sourceId = reader.string();
                    break;
                case 4:
                    message.updateMask = field_mask_1.FieldMask.unwrap(field_mask_1.FieldMask.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.metadata = struct_1.Value.unwrap(struct_1.Value.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.address = exports.SourceAddress.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.preview = exports.PreviewAddress.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            sourceId: isSet(object.sourceId) ? String(object.sourceId) : "",
            updateMask: isSet(object.updateMask)
                ? field_mask_1.FieldMask.unwrap(field_mask_1.FieldMask.fromJSON(object.updateMask))
                : undefined,
            metadata: isSet(object === null || object === void 0 ? void 0 : object.metadata) ? object.metadata : undefined,
            address: isSet(object.address)
                ? exports.SourceAddress.fromJSON(object.address)
                : undefined,
            preview: isSet(object.preview)
                ? exports.PreviewAddress.fromJSON(object.preview)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.sourceId !== undefined && (obj.sourceId = message.sourceId);
        message.updateMask !== undefined &&
            (obj.updateMask = field_mask_1.FieldMask.toJSON(field_mask_1.FieldMask.wrap(message.updateMask)));
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.address !== undefined &&
            (obj.address = message.address
                ? exports.SourceAddress.toJSON(message.address)
                : undefined);
        message.preview !== undefined &&
            (obj.preview = message.preview
                ? exports.PreviewAddress.toJSON(message.preview)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseUpdateSourceRequest();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.sourceId = (_b = object.sourceId) !== null && _b !== void 0 ? _b : "";
        message.updateMask = (_c = object.updateMask) !== null && _c !== void 0 ? _c : undefined;
        message.metadata = (_d = object.metadata) !== null && _d !== void 0 ? _d : undefined;
        message.address =
            object.address !== undefined && object.address !== null
                ? exports.SourceAddress.fromPartial(object.address)
                : undefined;
        message.preview =
            object.preview !== undefined && object.preview !== null
                ? exports.PreviewAddress.fromPartial(object.preview)
                : undefined;
        return message;
    },
};
function createBaseUpdateSourceResponse() {
    return { source: undefined, broadcastUpdated: false };
}
exports.UpdateSourceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.source !== undefined) {
            exports.Source.encode(message.source, writer.uint32(10).fork()).ldelim();
        }
        if (message.broadcastUpdated === true) {
            writer.uint32(16).bool(message.broadcastUpdated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateSourceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.source = exports.Source.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.broadcastUpdated = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            source: isSet(object.source) ? exports.Source.fromJSON(object.source) : undefined,
            broadcastUpdated: isSet(object.broadcastUpdated)
                ? Boolean(object.broadcastUpdated)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.source !== undefined &&
            (obj.source = message.source ? exports.Source.toJSON(message.source) : undefined);
        message.broadcastUpdated !== undefined &&
            (obj.broadcastUpdated = message.broadcastUpdated);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseUpdateSourceResponse();
        message.source =
            object.source !== undefined && object.source !== null
                ? exports.Source.fromPartial(object.source)
                : undefined;
        message.broadcastUpdated = (_a = object.broadcastUpdated) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseRemoveSourceFromProjectRequest() {
    return { collectionId: "", projectId: "", sourceId: "", force: undefined };
}
exports.RemoveSourceFromProjectRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.sourceId !== "") {
            writer.uint32(26).string(message.sourceId);
        }
        if (message.force !== undefined) {
            writer.uint32(32).bool(message.force);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveSourceFromProjectRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.sourceId = reader.string();
                    break;
                case 4:
                    message.force = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            sourceId: isSet(object.sourceId) ? String(object.sourceId) : "",
            force: isSet(object.force) ? Boolean(object.force) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.sourceId !== undefined && (obj.sourceId = message.sourceId);
        message.force !== undefined && (obj.force = message.force);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseRemoveSourceFromProjectRequest();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.sourceId = (_c = object.sourceId) !== null && _c !== void 0 ? _c : "";
        message.force = (_d = object.force) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBaseRemoveSourceFromProjectResponse() {
    return { project: undefined, broadcastUpdated: false };
}
exports.RemoveSourceFromProjectResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.project !== undefined) {
            exports.Project.encode(message.project, writer.uint32(10).fork()).ldelim();
        }
        if (message.broadcastUpdated === true) {
            writer.uint32(16).bool(message.broadcastUpdated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveSourceFromProjectResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.project = exports.Project.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.broadcastUpdated = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            project: isSet(object.project)
                ? exports.Project.fromJSON(object.project)
                : undefined,
            broadcastUpdated: isSet(object.broadcastUpdated)
                ? Boolean(object.broadcastUpdated)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.project !== undefined &&
            (obj.project = message.project
                ? exports.Project.toJSON(message.project)
                : undefined);
        message.broadcastUpdated !== undefined &&
            (obj.broadcastUpdated = message.broadcastUpdated);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRemoveSourceFromProjectResponse();
        message.project =
            object.project !== undefined && object.project !== null
                ? exports.Project.fromPartial(object.project)
                : undefined;
        message.broadcastUpdated = (_a = object.broadcastUpdated) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseCreateAccessTokenRequest() {
    return {
        serviceUserId: "",
        displayName: undefined,
        role: undefined,
        maxDuration: undefined,
    };
}
exports.CreateAccessTokenRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.serviceUserId !== "") {
            writer.uint32(10).string(message.serviceUserId);
        }
        if (message.displayName !== undefined) {
            writer.uint32(34).string(message.displayName);
        }
        if (message.role !== undefined) {
            writer.uint32(16).int32(roleToNumber(message.role));
        }
        if (message.maxDuration !== undefined) {
            writer.uint32(24).uint32(message.maxDuration);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateAccessTokenRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceUserId = reader.string();
                    break;
                case 4:
                    message.displayName = reader.string();
                    break;
                case 2:
                    message.role = roleFromJSON(reader.int32());
                    break;
                case 3:
                    message.maxDuration = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            serviceUserId: isSet(object.serviceUserId)
                ? String(object.serviceUserId)
                : "",
            displayName: isSet(object.displayName)
                ? String(object.displayName)
                : undefined,
            role: isSet(object.role) ? roleFromJSON(object.role) : undefined,
            maxDuration: isSet(object.maxDuration)
                ? Number(object.maxDuration)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.serviceUserId !== undefined &&
            (obj.serviceUserId = message.serviceUserId);
        message.displayName !== undefined &&
            (obj.displayName = message.displayName);
        message.role !== undefined &&
            (obj.role =
                message.role !== undefined ? roleToJSON(message.role) : undefined);
        message.maxDuration !== undefined &&
            (obj.maxDuration = Math.round(message.maxDuration));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCreateAccessTokenRequest();
        message.serviceUserId = (_a = object.serviceUserId) !== null && _a !== void 0 ? _a : "";
        message.displayName = (_b = object.displayName) !== null && _b !== void 0 ? _b : undefined;
        message.role = (_c = object.role) !== null && _c !== void 0 ? _c : undefined;
        message.maxDuration = (_d = object.maxDuration) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBaseCreateAccessTokenResponse() {
    return { accessToken: "" };
}
exports.CreateAccessTokenResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accessToken !== "") {
            writer.uint32(10).string(message.accessToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateAccessTokenResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.accessToken !== undefined &&
            (obj.accessToken = message.accessToken);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCreateAccessTokenResponse();
        message.accessToken = (_a = object.accessToken) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGuestAccessTokenDirect() {
    return { displayName: "", serviceUserId: undefined };
}
exports.GuestAccessTokenDirect = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.displayName !== "") {
            writer.uint32(10).string(message.displayName);
        }
        if (message.serviceUserId !== undefined) {
            writer.uint32(18).string(message.serviceUserId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGuestAccessTokenDirect();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.displayName = reader.string();
                    break;
                case 2:
                    message.serviceUserId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            displayName: isSet(object.displayName) ? String(object.displayName) : "",
            serviceUserId: isSet(object.serviceUserId)
                ? String(object.serviceUserId)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.displayName !== undefined &&
            (obj.displayName = message.displayName);
        message.serviceUserId !== undefined &&
            (obj.serviceUserId = message.serviceUserId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGuestAccessTokenDirect();
        message.displayName = (_a = object.displayName) !== null && _a !== void 0 ? _a : "";
        message.serviceUserId = (_b = object.serviceUserId) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseGuestAccessTokenExchange() {
    return { maxDuration: undefined };
}
exports.GuestAccessTokenExchange = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.maxDuration !== undefined) {
            writer.uint32(8).uint32(message.maxDuration);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGuestAccessTokenExchange();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxDuration = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            maxDuration: isSet(object.maxDuration)
                ? Number(object.maxDuration)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.maxDuration !== undefined &&
            (obj.maxDuration = Math.round(message.maxDuration));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGuestAccessTokenExchange();
        message.maxDuration = (_a = object.maxDuration) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseGuestAccessToken() {
    return { direct: undefined, exchange: undefined };
}
exports.GuestAccessToken = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.direct !== undefined) {
            exports.GuestAccessTokenDirect.encode(message.direct, writer.uint32(10).fork()).ldelim();
        }
        if (message.exchange !== undefined) {
            exports.GuestAccessTokenExchange.encode(message.exchange, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGuestAccessToken();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.direct = exports.GuestAccessTokenDirect.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.exchange = exports.GuestAccessTokenExchange.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            direct: isSet(object.direct)
                ? exports.GuestAccessTokenDirect.fromJSON(object.direct)
                : undefined,
            exchange: isSet(object.exchange)
                ? exports.GuestAccessTokenExchange.fromJSON(object.exchange)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.direct !== undefined &&
            (obj.direct = message.direct
                ? exports.GuestAccessTokenDirect.toJSON(message.direct)
                : undefined);
        message.exchange !== undefined &&
            (obj.exchange = message.exchange
                ? exports.GuestAccessTokenExchange.toJSON(message.exchange)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGuestAccessToken();
        message.direct =
            object.direct !== undefined && object.direct !== null
                ? exports.GuestAccessTokenDirect.fromPartial(object.direct)
                : undefined;
        message.exchange =
            object.exchange !== undefined && object.exchange !== null
                ? exports.GuestAccessTokenExchange.fromPartial(object.exchange)
                : undefined;
        return message;
    },
};
function createBaseCreateGuestAccessTokenRequest() {
    return {
        collectionId: "",
        projectId: "",
        maxDuration: undefined,
        role: Role.ROLE_UNSPECIFIED,
        token: undefined,
        url: undefined,
    };
}
exports.CreateGuestAccessTokenRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.maxDuration !== undefined) {
            writer.uint32(24).uint32(message.maxDuration);
        }
        if (message.role !== Role.ROLE_UNSPECIFIED) {
            writer.uint32(32).int32(roleToNumber(message.role));
        }
        if (message.token !== undefined) {
            exports.GuestAccessToken.encode(message.token, writer.uint32(42).fork()).ldelim();
        }
        if (message.url !== undefined) {
            writer.uint32(50).string(message.url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateGuestAccessTokenRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.maxDuration = reader.uint32();
                    break;
                case 4:
                    message.role = roleFromJSON(reader.int32());
                    break;
                case 5:
                    message.token = exports.GuestAccessToken.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            maxDuration: isSet(object.maxDuration)
                ? Number(object.maxDuration)
                : undefined,
            role: isSet(object.role)
                ? roleFromJSON(object.role)
                : Role.ROLE_UNSPECIFIED,
            token: isSet(object.token)
                ? exports.GuestAccessToken.fromJSON(object.token)
                : undefined,
            url: isSet(object.url) ? String(object.url) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.maxDuration !== undefined &&
            (obj.maxDuration = Math.round(message.maxDuration));
        message.role !== undefined && (obj.role = roleToJSON(message.role));
        message.token !== undefined &&
            (obj.token = message.token
                ? exports.GuestAccessToken.toJSON(message.token)
                : undefined);
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseCreateGuestAccessTokenRequest();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.maxDuration = (_c = object.maxDuration) !== null && _c !== void 0 ? _c : undefined;
        message.role = (_d = object.role) !== null && _d !== void 0 ? _d : Role.ROLE_UNSPECIFIED;
        message.token =
            object.token !== undefined && object.token !== null
                ? exports.GuestAccessToken.fromPartial(object.token)
                : undefined;
        message.url = (_e = object.url) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
function createBaseCreateGuestAccessTokenResponse() {
    return { accessToken: "", url: undefined };
}
exports.CreateGuestAccessTokenResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accessToken !== "") {
            writer.uint32(10).string(message.accessToken);
        }
        if (message.url !== undefined) {
            writer.uint32(18).string(message.url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateGuestAccessTokenResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessToken = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
            url: isSet(object.url) ? String(object.url) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.accessToken !== undefined &&
            (obj.accessToken = message.accessToken);
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCreateGuestAccessTokenResponse();
        message.accessToken = (_a = object.accessToken) !== null && _a !== void 0 ? _a : "";
        message.url = (_b = object.url) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseCreateWebRtcAccessTokenRequest() {
    return { collectionId: "", projectId: "", displayName: "" };
}
exports.CreateWebRtcAccessTokenRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.displayName !== "") {
            writer.uint32(26).string(message.displayName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateWebRtcAccessTokenRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.displayName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            displayName: isSet(object.displayName) ? String(object.displayName) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.displayName !== undefined &&
            (obj.displayName = message.displayName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCreateWebRtcAccessTokenRequest();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.displayName = (_c = object.displayName) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseCreateWebRtcAccessTokenResponse() {
    return { webrtcAccess: undefined };
}
exports.CreateWebRtcAccessTokenResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.webrtcAccess !== undefined) {
            exports.WebRtcAccess.encode(message.webrtcAccess, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateWebRtcAccessTokenResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.webrtcAccess = exports.WebRtcAccess.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            webrtcAccess: isSet(object.webrtcAccess)
                ? exports.WebRtcAccess.fromJSON(object.webrtcAccess)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.webrtcAccess !== undefined &&
            (obj.webrtcAccess = message.webrtcAccess
                ? exports.WebRtcAccess.toJSON(message.webrtcAccess)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCreateWebRtcAccessTokenResponse();
        message.webrtcAccess =
            object.webrtcAccess !== undefined && object.webrtcAccess !== null
                ? exports.WebRtcAccess.fromPartial(object.webrtcAccess)
                : undefined;
        return message;
    },
};
function createBaseRefreshAccessTokenRequest() {
    return {};
}
exports.RefreshAccessTokenRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRefreshAccessTokenRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseRefreshAccessTokenRequest();
        return message;
    },
};
function createBaseRefreshAccessTokenResponse() {
    return {};
}
exports.RefreshAccessTokenResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRefreshAccessTokenResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseRefreshAccessTokenResponse();
        return message;
    },
};
function createBaseGuestCode() {
    return {
        collectionId: "",
        projectId: "",
        code: "",
        url: "",
        autoDelete: undefined,
    };
}
exports.GuestCode = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.code !== "") {
            writer.uint32(26).string(message.code);
        }
        if (message.url !== "") {
            writer.uint32(34).string(message.url);
        }
        if (message.autoDelete !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.autoDelete), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGuestCode();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.code = reader.string();
                    break;
                case 4:
                    message.url = reader.string();
                    break;
                case 5:
                    message.autoDelete = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            code: isSet(object.code) ? String(object.code) : "",
            url: isSet(object.url) ? String(object.url) : "",
            autoDelete: isSet(object.autoDelete)
                ? String(object.autoDelete)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.code !== undefined && (obj.code = message.code);
        message.url !== undefined && (obj.url = message.url);
        message.autoDelete !== undefined && (obj.autoDelete = message.autoDelete);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseGuestCode();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.code = (_c = object.code) !== null && _c !== void 0 ? _c : "";
        message.url = (_d = object.url) !== null && _d !== void 0 ? _d : "";
        message.autoDelete = (_e = object.autoDelete) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
function createBaseGuestCodeRedirectRequest() {
    return { serviceId: "", code: "" };
}
exports.GuestCodeRedirectRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.serviceId !== "") {
            writer.uint32(10).string(message.serviceId);
        }
        if (message.code !== "") {
            writer.uint32(18).string(message.code);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGuestCodeRedirectRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceId = reader.string();
                    break;
                case 2:
                    message.code = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            serviceId: isSet(object.serviceId) ? String(object.serviceId) : "",
            code: isSet(object.code) ? String(object.code) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.serviceId !== undefined && (obj.serviceId = message.serviceId);
        message.code !== undefined && (obj.code = message.code);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGuestCodeRedirectRequest();
        message.serviceId = (_a = object.serviceId) !== null && _a !== void 0 ? _a : "";
        message.code = (_b = object.code) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGuestCodeRedirectResponse() {
    return {};
}
exports.GuestCodeRedirectResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGuestCodeRedirectResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseGuestCodeRedirectResponse();
        return message;
    },
};
function createBaseJsonWebKey() {
    return { alg: "", kty: "", use: "", kid: "", e: "", n: "" };
}
exports.JsonWebKey = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.alg !== "") {
            writer.uint32(10).string(message.alg);
        }
        if (message.kty !== "") {
            writer.uint32(18).string(message.kty);
        }
        if (message.use !== "") {
            writer.uint32(26).string(message.use);
        }
        if (message.kid !== "") {
            writer.uint32(34).string(message.kid);
        }
        if (message.e !== "") {
            writer.uint32(42).string(message.e);
        }
        if (message.n !== "") {
            writer.uint32(50).string(message.n);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseJsonWebKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alg = reader.string();
                    break;
                case 2:
                    message.kty = reader.string();
                    break;
                case 3:
                    message.use = reader.string();
                    break;
                case 4:
                    message.kid = reader.string();
                    break;
                case 5:
                    message.e = reader.string();
                    break;
                case 6:
                    message.n = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            alg: isSet(object.alg) ? String(object.alg) : "",
            kty: isSet(object.kty) ? String(object.kty) : "",
            use: isSet(object.use) ? String(object.use) : "",
            kid: isSet(object.kid) ? String(object.kid) : "",
            e: isSet(object.e) ? String(object.e) : "",
            n: isSet(object.n) ? String(object.n) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.alg !== undefined && (obj.alg = message.alg);
        message.kty !== undefined && (obj.kty = message.kty);
        message.use !== undefined && (obj.use = message.use);
        message.kid !== undefined && (obj.kid = message.kid);
        message.e !== undefined && (obj.e = message.e);
        message.n !== undefined && (obj.n = message.n);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseJsonWebKey();
        message.alg = (_a = object.alg) !== null && _a !== void 0 ? _a : "";
        message.kty = (_b = object.kty) !== null && _b !== void 0 ? _b : "";
        message.use = (_c = object.use) !== null && _c !== void 0 ? _c : "";
        message.kid = (_d = object.kid) !== null && _d !== void 0 ? _d : "";
        message.e = (_e = object.e) !== null && _e !== void 0 ? _e : "";
        message.n = (_f = object.n) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseGetJsonWebKeySetRequest() {
    return {};
}
exports.GetJsonWebKeySetRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetJsonWebKeySetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseGetJsonWebKeySetRequest();
        return message;
    },
};
function createBaseGetJsonWebKeySetResponse() {
    return { keys: [] };
}
exports.GetJsonWebKeySetResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.keys) {
            exports.JsonWebKey.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetJsonWebKeySetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keys.push(exports.JsonWebKey.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            keys: Array.isArray(object === null || object === void 0 ? void 0 : object.keys)
                ? object.keys.map((e) => exports.JsonWebKey.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.keys) {
            obj.keys = message.keys.map((e) => e ? exports.JsonWebKey.toJSON(e) : undefined);
        }
        else {
            obj.keys = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetJsonWebKeySetResponse();
        message.keys = ((_a = object.keys) === null || _a === void 0 ? void 0 : _a.map((e) => exports.JsonWebKey.fromPartial(e))) || [];
        return message;
    },
};
function createBaseGetTestTokenRequest() {
    return {};
}
exports.GetTestTokenRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTestTokenRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseGetTestTokenRequest();
        return message;
    },
};
function createBaseGetTestTokenResponse() {
    return { accessToken: "" };
}
exports.GetTestTokenResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accessToken !== "") {
            writer.uint32(10).string(message.accessToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTestTokenResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.accessToken !== undefined &&
            (obj.accessToken = message.accessToken);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetTestTokenResponse();
        message.accessToken = (_a = object.accessToken) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDestinationCreateEvent() {
    return {
        collectionId: "",
        projectId: "",
        destinationId: "",
        destination: undefined,
    };
}
exports.DestinationCreateEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.destinationId !== "") {
            writer.uint32(26).string(message.destinationId);
        }
        if (message.destination !== undefined) {
            exports.Destination.encode(message.destination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDestinationCreateEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.destinationId = reader.string();
                    break;
                case 4:
                    message.destination = exports.Destination.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            destinationId: isSet(object.destinationId)
                ? String(object.destinationId)
                : "",
            destination: isSet(object.destination)
                ? exports.Destination.fromJSON(object.destination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.destinationId !== undefined &&
            (obj.destinationId = message.destinationId);
        message.destination !== undefined &&
            (obj.destination = message.destination
                ? exports.Destination.toJSON(message.destination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseDestinationCreateEvent();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.destinationId = (_c = object.destinationId) !== null && _c !== void 0 ? _c : "";
        message.destination =
            object.destination !== undefined && object.destination !== null
                ? exports.Destination.fromPartial(object.destination)
                : undefined;
        return message;
    },
};
function createBaseDestinationDeleteEvent() {
    return { collectionId: "", projectId: "", destinationId: "" };
}
exports.DestinationDeleteEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.destinationId !== "") {
            writer.uint32(26).string(message.destinationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDestinationDeleteEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.destinationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            destinationId: isSet(object.destinationId)
                ? String(object.destinationId)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.destinationId !== undefined &&
            (obj.destinationId = message.destinationId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseDestinationDeleteEvent();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.destinationId = (_c = object.destinationId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseDestinationUpdateEvent() {
    return {
        collectionId: "",
        projectId: "",
        destinationId: "",
        updateMask: [],
        destination: undefined,
    };
}
exports.DestinationUpdateEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.destinationId !== "") {
            writer.uint32(26).string(message.destinationId);
        }
        for (const v of message.updateMask) {
            writer.uint32(34).string(v);
        }
        if (message.destination !== undefined) {
            exports.Destination.encode(message.destination, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDestinationUpdateEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.destinationId = reader.string();
                    break;
                case 4:
                    message.updateMask.push(reader.string());
                    break;
                case 5:
                    message.destination = exports.Destination.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            destinationId: isSet(object.destinationId)
                ? String(object.destinationId)
                : "",
            updateMask: Array.isArray(object === null || object === void 0 ? void 0 : object.updateMask)
                ? object.updateMask.map((e) => String(e))
                : [],
            destination: isSet(object.destination)
                ? exports.Destination.fromJSON(object.destination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.destinationId !== undefined &&
            (obj.destinationId = message.destinationId);
        if (message.updateMask) {
            obj.updateMask = message.updateMask.map((e) => e);
        }
        else {
            obj.updateMask = [];
        }
        message.destination !== undefined &&
            (obj.destination = message.destination
                ? exports.Destination.toJSON(message.destination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseDestinationUpdateEvent();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.destinationId = (_c = object.destinationId) !== null && _c !== void 0 ? _c : "";
        message.updateMask = ((_d = object.updateMask) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.destination =
            object.destination !== undefined && object.destination !== null
                ? exports.Destination.fromPartial(object.destination)
                : undefined;
        return message;
    },
};
function createBaseDestinationStateEvent() {
    return {
        collectionId: "",
        projectId: "",
        destinationId: "",
        connect: undefined,
    };
}
exports.DestinationStateEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.destinationId !== "") {
            writer.uint32(26).string(message.destinationId);
        }
        if (message.connect !== undefined) {
            writer.uint32(32).int32(connectStateToNumber(message.connect));
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDestinationStateEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.destinationId = reader.string();
                    break;
                case 4:
                    message.connect = connectStateFromJSON(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            destinationId: isSet(object.destinationId)
                ? String(object.destinationId)
                : "",
            connect: isSet(object.connect)
                ? connectStateFromJSON(object.connect)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.destinationId !== undefined &&
            (obj.destinationId = message.destinationId);
        message.connect !== undefined &&
            (obj.connect =
                message.connect !== undefined
                    ? connectStateToJSON(message.connect)
                    : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseDestinationStateEvent();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.destinationId = (_c = object.destinationId) !== null && _c !== void 0 ? _c : "";
        message.connect = (_d = object.connect) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBaseProjectCreateEvent() {
    return { collectionId: "", projectId: "", project: undefined };
}
exports.ProjectCreateEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.project !== undefined) {
            exports.Project.encode(message.project, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProjectCreateEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.project = exports.Project.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            project: isSet(object.project)
                ? exports.Project.fromJSON(object.project)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.project !== undefined &&
            (obj.project = message.project
                ? exports.Project.toJSON(message.project)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseProjectCreateEvent();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.project =
            object.project !== undefined && object.project !== null
                ? exports.Project.fromPartial(object.project)
                : undefined;
        return message;
    },
};
function createBaseProjectDeleteEvent() {
    return { collectionId: "", projectId: "" };
}
exports.ProjectDeleteEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProjectDeleteEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseProjectDeleteEvent();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseProjectUpdateEvent() {
    return {
        collectionId: "",
        projectId: "",
        updateMask: [],
        project: undefined,
    };
}
exports.ProjectUpdateEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        for (const v of message.updateMask) {
            writer.uint32(26).string(v);
        }
        if (message.project !== undefined) {
            exports.Project.encode(message.project, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProjectUpdateEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.updateMask.push(reader.string());
                    break;
                case 4:
                    message.project = exports.Project.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            updateMask: Array.isArray(object === null || object === void 0 ? void 0 : object.updateMask)
                ? object.updateMask.map((e) => String(e))
                : [],
            project: isSet(object.project)
                ? exports.Project.fromJSON(object.project)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        if (message.updateMask) {
            obj.updateMask = message.updateMask.map((e) => e);
        }
        else {
            obj.updateMask = [];
        }
        message.project !== undefined &&
            (obj.project = message.project
                ? exports.Project.toJSON(message.project)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseProjectUpdateEvent();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.updateMask = ((_c = object.updateMask) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.project =
            object.project !== undefined && object.project !== null
                ? exports.Project.fromPartial(object.project)
                : undefined;
        return message;
    },
};
function createBaseProjectBroadcastStateEvent() {
    return {
        collectionId: "",
        projectId: "",
        broadcastId: "",
        phase: undefined,
        error: undefined,
    };
}
exports.ProjectBroadcastStateEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.broadcastId !== "") {
            writer.uint32(26).string(message.broadcastId);
        }
        if (message.phase !== undefined) {
            writer.uint32(32).int32(projectBroadcastPhaseToNumber(message.phase));
        }
        if (message.error !== undefined) {
            writer.uint32(40).int32(projectBroadcastErrorToNumber(message.error));
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProjectBroadcastStateEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.broadcastId = reader.string();
                    break;
                case 4:
                    message.phase = projectBroadcastPhaseFromJSON(reader.int32());
                    break;
                case 5:
                    message.error = projectBroadcastErrorFromJSON(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            broadcastId: isSet(object.broadcastId) ? String(object.broadcastId) : "",
            phase: isSet(object.phase)
                ? projectBroadcastPhaseFromJSON(object.phase)
                : undefined,
            error: isSet(object.error)
                ? projectBroadcastErrorFromJSON(object.error)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.broadcastId !== undefined &&
            (obj.broadcastId = message.broadcastId);
        message.phase !== undefined &&
            (obj.phase =
                message.phase !== undefined
                    ? projectBroadcastPhaseToJSON(message.phase)
                    : undefined);
        message.error !== undefined &&
            (obj.error =
                message.error !== undefined
                    ? projectBroadcastErrorToJSON(message.error)
                    : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseProjectBroadcastStateEvent();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.broadcastId = (_c = object.broadcastId) !== null && _c !== void 0 ? _c : "";
        message.phase = (_d = object.phase) !== null && _d !== void 0 ? _d : undefined;
        message.error = (_e = object.error) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
function createBaseCollectionCreateEvent() {
    return { collectionId: "", collection: undefined };
}
exports.CollectionCreateEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.collection !== undefined) {
            exports.Collection.encode(message.collection, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCollectionCreateEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.collection = exports.Collection.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            collection: isSet(object.collection)
                ? exports.Collection.fromJSON(object.collection)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.collection !== undefined &&
            (obj.collection = message.collection
                ? exports.Collection.toJSON(message.collection)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCollectionCreateEvent();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.collection =
            object.collection !== undefined && object.collection !== null
                ? exports.Collection.fromPartial(object.collection)
                : undefined;
        return message;
    },
};
function createBaseCollectionDeleteEvent() {
    return { collectionId: "" };
}
exports.CollectionDeleteEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCollectionDeleteEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCollectionDeleteEvent();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseCollectionUpdateEvent() {
    return { collectionId: "", updateMask: [], collection: undefined };
}
exports.CollectionUpdateEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        for (const v of message.updateMask) {
            writer.uint32(18).string(v);
        }
        if (message.collection !== undefined) {
            exports.Collection.encode(message.collection, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCollectionUpdateEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.updateMask.push(reader.string());
                    break;
                case 3:
                    message.collection = exports.Collection.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            updateMask: Array.isArray(object === null || object === void 0 ? void 0 : object.updateMask)
                ? object.updateMask.map((e) => String(e))
                : [],
            collection: isSet(object.collection)
                ? exports.Collection.fromJSON(object.collection)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        if (message.updateMask) {
            obj.updateMask = message.updateMask.map((e) => e);
        }
        else {
            obj.updateMask = [];
        }
        message.collection !== undefined &&
            (obj.collection = message.collection
                ? exports.Collection.toJSON(message.collection)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCollectionUpdateEvent();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.updateMask = ((_b = object.updateMask) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.collection =
            object.collection !== undefined && object.collection !== null
                ? exports.Collection.fromPartial(object.collection)
                : undefined;
        return message;
    },
};
function createBaseSourceCreateEvent() {
    return { collectionId: "", sourceId: "", source: undefined };
}
exports.SourceCreateEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.sourceId !== "") {
            writer.uint32(18).string(message.sourceId);
        }
        if (message.source !== undefined) {
            exports.Source.encode(message.source, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSourceCreateEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.sourceId = reader.string();
                    break;
                case 3:
                    message.source = exports.Source.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            sourceId: isSet(object.sourceId) ? String(object.sourceId) : "",
            source: isSet(object.source) ? exports.Source.fromJSON(object.source) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.sourceId !== undefined && (obj.sourceId = message.sourceId);
        message.source !== undefined &&
            (obj.source = message.source ? exports.Source.toJSON(message.source) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSourceCreateEvent();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.sourceId = (_b = object.sourceId) !== null && _b !== void 0 ? _b : "";
        message.source =
            object.source !== undefined && object.source !== null
                ? exports.Source.fromPartial(object.source)
                : undefined;
        return message;
    },
};
function createBaseSourceDeleteEvent() {
    return { collectionId: "", sourceId: "" };
}
exports.SourceDeleteEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.sourceId !== "") {
            writer.uint32(18).string(message.sourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSourceDeleteEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.sourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            sourceId: isSet(object.sourceId) ? String(object.sourceId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.sourceId !== undefined && (obj.sourceId = message.sourceId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSourceDeleteEvent();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.sourceId = (_b = object.sourceId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseSourceUpdateEvent() {
    return { collectionId: "", sourceId: "", updateMask: [], source: undefined };
}
exports.SourceUpdateEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.sourceId !== "") {
            writer.uint32(18).string(message.sourceId);
        }
        for (const v of message.updateMask) {
            writer.uint32(26).string(v);
        }
        if (message.source !== undefined) {
            exports.Source.encode(message.source, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSourceUpdateEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.sourceId = reader.string();
                    break;
                case 3:
                    message.updateMask.push(reader.string());
                    break;
                case 4:
                    message.source = exports.Source.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            sourceId: isSet(object.sourceId) ? String(object.sourceId) : "",
            updateMask: Array.isArray(object === null || object === void 0 ? void 0 : object.updateMask)
                ? object.updateMask.map((e) => String(e))
                : [],
            source: isSet(object.source) ? exports.Source.fromJSON(object.source) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.sourceId !== undefined && (obj.sourceId = message.sourceId);
        if (message.updateMask) {
            obj.updateMask = message.updateMask.map((e) => e);
        }
        else {
            obj.updateMask = [];
        }
        message.source !== undefined &&
            (obj.source = message.source ? exports.Source.toJSON(message.source) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSourceUpdateEvent();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.sourceId = (_b = object.sourceId) !== null && _b !== void 0 ? _b : "";
        message.updateMask = ((_c = object.updateMask) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.source =
            object.source !== undefined && object.source !== null
                ? exports.Source.fromPartial(object.source)
                : undefined;
        return message;
    },
};
function createBaseSourceAddEvent() {
    return { collectionId: "", sourceId: "", projectId: "", source: undefined };
}
exports.SourceAddEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.sourceId !== "") {
            writer.uint32(18).string(message.sourceId);
        }
        if (message.projectId !== "") {
            writer.uint32(26).string(message.projectId);
        }
        if (message.source !== undefined) {
            exports.Source.encode(message.source, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSourceAddEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.sourceId = reader.string();
                    break;
                case 3:
                    message.projectId = reader.string();
                    break;
                case 4:
                    message.source = exports.Source.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            sourceId: isSet(object.sourceId) ? String(object.sourceId) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            source: isSet(object.source) ? exports.Source.fromJSON(object.source) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.sourceId !== undefined && (obj.sourceId = message.sourceId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.source !== undefined &&
            (obj.source = message.source ? exports.Source.toJSON(message.source) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSourceAddEvent();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.sourceId = (_b = object.sourceId) !== null && _b !== void 0 ? _b : "";
        message.projectId = (_c = object.projectId) !== null && _c !== void 0 ? _c : "";
        message.source =
            object.source !== undefined && object.source !== null
                ? exports.Source.fromPartial(object.source)
                : undefined;
        return message;
    },
};
function createBaseSourceRemoveEvent() {
    return { collectionId: "", sourceId: "", projectId: "" };
}
exports.SourceRemoveEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.sourceId !== "") {
            writer.uint32(18).string(message.sourceId);
        }
        if (message.projectId !== "") {
            writer.uint32(26).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSourceRemoveEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.sourceId = reader.string();
                    break;
                case 3:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            sourceId: isSet(object.sourceId) ? String(object.sourceId) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.sourceId !== undefined && (obj.sourceId = message.sourceId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSourceRemoveEvent();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.sourceId = (_b = object.sourceId) !== null && _b !== void 0 ? _b : "";
        message.projectId = (_c = object.projectId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseSourceStateEvent() {
    return { collectionId: "", projectId: "", sourceId: "", connect: undefined };
}
exports.SourceStateEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.sourceId !== "") {
            writer.uint32(26).string(message.sourceId);
        }
        if (message.connect !== undefined) {
            writer.uint32(32).int32(connectStateToNumber(message.connect));
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSourceStateEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.sourceId = reader.string();
                    break;
                case 4:
                    message.connect = connectStateFromJSON(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            sourceId: isSet(object.sourceId) ? String(object.sourceId) : "",
            connect: isSet(object.connect)
                ? connectStateFromJSON(object.connect)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.sourceId !== undefined && (obj.sourceId = message.sourceId);
        message.connect !== undefined &&
            (obj.connect =
                message.connect !== undefined
                    ? connectStateToJSON(message.connect)
                    : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseSourceStateEvent();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.sourceId = (_c = object.sourceId) !== null && _c !== void 0 ? _c : "";
        message.connect = (_d = object.connect) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBaseCollectionEvent() {
    return { create: undefined, update: undefined, delete: undefined };
}
exports.CollectionEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.create !== undefined) {
            exports.CollectionCreateEvent.encode(message.create, writer.uint32(10).fork()).ldelim();
        }
        if (message.update !== undefined) {
            exports.CollectionUpdateEvent.encode(message.update, writer.uint32(18).fork()).ldelim();
        }
        if (message.delete !== undefined) {
            exports.CollectionDeleteEvent.encode(message.delete, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCollectionEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.create = exports.CollectionCreateEvent.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.update = exports.CollectionUpdateEvent.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.delete = exports.CollectionDeleteEvent.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            create: isSet(object.create)
                ? exports.CollectionCreateEvent.fromJSON(object.create)
                : undefined,
            update: isSet(object.update)
                ? exports.CollectionUpdateEvent.fromJSON(object.update)
                : undefined,
            delete: isSet(object.delete)
                ? exports.CollectionDeleteEvent.fromJSON(object.delete)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.create !== undefined &&
            (obj.create = message.create
                ? exports.CollectionCreateEvent.toJSON(message.create)
                : undefined);
        message.update !== undefined &&
            (obj.update = message.update
                ? exports.CollectionUpdateEvent.toJSON(message.update)
                : undefined);
        message.delete !== undefined &&
            (obj.delete = message.delete
                ? exports.CollectionDeleteEvent.toJSON(message.delete)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCollectionEvent();
        message.create =
            object.create !== undefined && object.create !== null
                ? exports.CollectionCreateEvent.fromPartial(object.create)
                : undefined;
        message.update =
            object.update !== undefined && object.update !== null
                ? exports.CollectionUpdateEvent.fromPartial(object.update)
                : undefined;
        message.delete =
            object.delete !== undefined && object.delete !== null
                ? exports.CollectionDeleteEvent.fromPartial(object.delete)
                : undefined;
        return message;
    },
};
function createBaseDestinationEvent() {
    return {
        create: undefined,
        update: undefined,
        delete: undefined,
        state: undefined,
    };
}
exports.DestinationEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.create !== undefined) {
            exports.DestinationCreateEvent.encode(message.create, writer.uint32(10).fork()).ldelim();
        }
        if (message.update !== undefined) {
            exports.DestinationUpdateEvent.encode(message.update, writer.uint32(18).fork()).ldelim();
        }
        if (message.delete !== undefined) {
            exports.DestinationDeleteEvent.encode(message.delete, writer.uint32(26).fork()).ldelim();
        }
        if (message.state !== undefined) {
            exports.DestinationStateEvent.encode(message.state, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDestinationEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.create = exports.DestinationCreateEvent.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.update = exports.DestinationUpdateEvent.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.delete = exports.DestinationDeleteEvent.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.state = exports.DestinationStateEvent.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            create: isSet(object.create)
                ? exports.DestinationCreateEvent.fromJSON(object.create)
                : undefined,
            update: isSet(object.update)
                ? exports.DestinationUpdateEvent.fromJSON(object.update)
                : undefined,
            delete: isSet(object.delete)
                ? exports.DestinationDeleteEvent.fromJSON(object.delete)
                : undefined,
            state: isSet(object.state)
                ? exports.DestinationStateEvent.fromJSON(object.state)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.create !== undefined &&
            (obj.create = message.create
                ? exports.DestinationCreateEvent.toJSON(message.create)
                : undefined);
        message.update !== undefined &&
            (obj.update = message.update
                ? exports.DestinationUpdateEvent.toJSON(message.update)
                : undefined);
        message.delete !== undefined &&
            (obj.delete = message.delete
                ? exports.DestinationDeleteEvent.toJSON(message.delete)
                : undefined);
        message.state !== undefined &&
            (obj.state = message.state
                ? exports.DestinationStateEvent.toJSON(message.state)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDestinationEvent();
        message.create =
            object.create !== undefined && object.create !== null
                ? exports.DestinationCreateEvent.fromPartial(object.create)
                : undefined;
        message.update =
            object.update !== undefined && object.update !== null
                ? exports.DestinationUpdateEvent.fromPartial(object.update)
                : undefined;
        message.delete =
            object.delete !== undefined && object.delete !== null
                ? exports.DestinationDeleteEvent.fromPartial(object.delete)
                : undefined;
        message.state =
            object.state !== undefined && object.state !== null
                ? exports.DestinationStateEvent.fromPartial(object.state)
                : undefined;
        return message;
    },
};
function createBaseProjectEvent() {
    return {
        create: undefined,
        update: undefined,
        delete: undefined,
        state: undefined,
    };
}
exports.ProjectEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.create !== undefined) {
            exports.ProjectCreateEvent.encode(message.create, writer.uint32(10).fork()).ldelim();
        }
        if (message.update !== undefined) {
            exports.ProjectUpdateEvent.encode(message.update, writer.uint32(18).fork()).ldelim();
        }
        if (message.delete !== undefined) {
            exports.ProjectDeleteEvent.encode(message.delete, writer.uint32(26).fork()).ldelim();
        }
        if (message.state !== undefined) {
            exports.ProjectBroadcastStateEvent.encode(message.state, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProjectEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.create = exports.ProjectCreateEvent.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.update = exports.ProjectUpdateEvent.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.delete = exports.ProjectDeleteEvent.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.state = exports.ProjectBroadcastStateEvent.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            create: isSet(object.create)
                ? exports.ProjectCreateEvent.fromJSON(object.create)
                : undefined,
            update: isSet(object.update)
                ? exports.ProjectUpdateEvent.fromJSON(object.update)
                : undefined,
            delete: isSet(object.delete)
                ? exports.ProjectDeleteEvent.fromJSON(object.delete)
                : undefined,
            state: isSet(object.state)
                ? exports.ProjectBroadcastStateEvent.fromJSON(object.state)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.create !== undefined &&
            (obj.create = message.create
                ? exports.ProjectCreateEvent.toJSON(message.create)
                : undefined);
        message.update !== undefined &&
            (obj.update = message.update
                ? exports.ProjectUpdateEvent.toJSON(message.update)
                : undefined);
        message.delete !== undefined &&
            (obj.delete = message.delete
                ? exports.ProjectDeleteEvent.toJSON(message.delete)
                : undefined);
        message.state !== undefined &&
            (obj.state = message.state
                ? exports.ProjectBroadcastStateEvent.toJSON(message.state)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProjectEvent();
        message.create =
            object.create !== undefined && object.create !== null
                ? exports.ProjectCreateEvent.fromPartial(object.create)
                : undefined;
        message.update =
            object.update !== undefined && object.update !== null
                ? exports.ProjectUpdateEvent.fromPartial(object.update)
                : undefined;
        message.delete =
            object.delete !== undefined && object.delete !== null
                ? exports.ProjectDeleteEvent.fromPartial(object.delete)
                : undefined;
        message.state =
            object.state !== undefined && object.state !== null
                ? exports.ProjectBroadcastStateEvent.fromPartial(object.state)
                : undefined;
        return message;
    },
};
function createBaseSourceEvent() {
    return {
        create: undefined,
        update: undefined,
        delete: undefined,
        add: undefined,
        remove: undefined,
        state: undefined,
    };
}
exports.SourceEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.create !== undefined) {
            exports.SourceCreateEvent.encode(message.create, writer.uint32(10).fork()).ldelim();
        }
        if (message.update !== undefined) {
            exports.SourceUpdateEvent.encode(message.update, writer.uint32(18).fork()).ldelim();
        }
        if (message.delete !== undefined) {
            exports.SourceDeleteEvent.encode(message.delete, writer.uint32(26).fork()).ldelim();
        }
        if (message.add !== undefined) {
            exports.SourceAddEvent.encode(message.add, writer.uint32(34).fork()).ldelim();
        }
        if (message.remove !== undefined) {
            exports.SourceDeleteEvent.encode(message.remove, writer.uint32(42).fork()).ldelim();
        }
        if (message.state !== undefined) {
            exports.SourceStateEvent.encode(message.state, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSourceEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.create = exports.SourceCreateEvent.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.update = exports.SourceUpdateEvent.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.delete = exports.SourceDeleteEvent.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.add = exports.SourceAddEvent.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.remove = exports.SourceDeleteEvent.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.state = exports.SourceStateEvent.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            create: isSet(object.create)
                ? exports.SourceCreateEvent.fromJSON(object.create)
                : undefined,
            update: isSet(object.update)
                ? exports.SourceUpdateEvent.fromJSON(object.update)
                : undefined,
            delete: isSet(object.delete)
                ? exports.SourceDeleteEvent.fromJSON(object.delete)
                : undefined,
            add: isSet(object.add) ? exports.SourceAddEvent.fromJSON(object.add) : undefined,
            remove: isSet(object.remove)
                ? exports.SourceDeleteEvent.fromJSON(object.remove)
                : undefined,
            state: isSet(object.state)
                ? exports.SourceStateEvent.fromJSON(object.state)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.create !== undefined &&
            (obj.create = message.create
                ? exports.SourceCreateEvent.toJSON(message.create)
                : undefined);
        message.update !== undefined &&
            (obj.update = message.update
                ? exports.SourceUpdateEvent.toJSON(message.update)
                : undefined);
        message.delete !== undefined &&
            (obj.delete = message.delete
                ? exports.SourceDeleteEvent.toJSON(message.delete)
                : undefined);
        message.add !== undefined &&
            (obj.add = message.add ? exports.SourceAddEvent.toJSON(message.add) : undefined);
        message.remove !== undefined &&
            (obj.remove = message.remove
                ? exports.SourceDeleteEvent.toJSON(message.remove)
                : undefined);
        message.state !== undefined &&
            (obj.state = message.state
                ? exports.SourceStateEvent.toJSON(message.state)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSourceEvent();
        message.create =
            object.create !== undefined && object.create !== null
                ? exports.SourceCreateEvent.fromPartial(object.create)
                : undefined;
        message.update =
            object.update !== undefined && object.update !== null
                ? exports.SourceUpdateEvent.fromPartial(object.update)
                : undefined;
        message.delete =
            object.delete !== undefined && object.delete !== null
                ? exports.SourceDeleteEvent.fromPartial(object.delete)
                : undefined;
        message.add =
            object.add !== undefined && object.add !== null
                ? exports.SourceAddEvent.fromPartial(object.add)
                : undefined;
        message.remove =
            object.remove !== undefined && object.remove !== null
                ? exports.SourceDeleteEvent.fromPartial(object.remove)
                : undefined;
        message.state =
            object.state !== undefined && object.state !== null
                ? exports.SourceStateEvent.fromPartial(object.state)
                : undefined;
        return message;
    },
};
function createBaseLiveEvent() {
    return {
        collection: undefined,
        destination: undefined,
        project: undefined,
        source: undefined,
        unspecified: undefined,
    };
}
exports.LiveEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collection !== undefined) {
            exports.CollectionEvent.encode(message.collection, writer.uint32(10).fork()).ldelim();
        }
        if (message.destination !== undefined) {
            exports.DestinationEvent.encode(message.destination, writer.uint32(18).fork()).ldelim();
        }
        if (message.project !== undefined) {
            exports.ProjectEvent.encode(message.project, writer.uint32(26).fork()).ldelim();
        }
        if (message.source !== undefined) {
            exports.SourceEvent.encode(message.source, writer.uint32(34).fork()).ldelim();
        }
        if (message.unspecified !== undefined) {
            writer.uint32(40).int32((0, struct_1.nullValueToNumber)(message.unspecified));
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLiveEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collection = exports.CollectionEvent.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.destination = exports.DestinationEvent.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.project = exports.ProjectEvent.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.source = exports.SourceEvent.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.unspecified = (0, struct_1.nullValueFromJSON)(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collection: isSet(object.collection)
                ? exports.CollectionEvent.fromJSON(object.collection)
                : undefined,
            destination: isSet(object.destination)
                ? exports.DestinationEvent.fromJSON(object.destination)
                : undefined,
            project: isSet(object.project)
                ? exports.ProjectEvent.fromJSON(object.project)
                : undefined,
            source: isSet(object.source)
                ? exports.SourceEvent.fromJSON(object.source)
                : undefined,
            unspecified: isSet(object.unspecified)
                ? (0, struct_1.nullValueFromJSON)(object.unspecified)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collection !== undefined &&
            (obj.collection = message.collection
                ? exports.CollectionEvent.toJSON(message.collection)
                : undefined);
        message.destination !== undefined &&
            (obj.destination = message.destination
                ? exports.DestinationEvent.toJSON(message.destination)
                : undefined);
        message.project !== undefined &&
            (obj.project = message.project
                ? exports.ProjectEvent.toJSON(message.project)
                : undefined);
        message.source !== undefined &&
            (obj.source = message.source
                ? exports.SourceEvent.toJSON(message.source)
                : undefined);
        message.unspecified !== undefined &&
            (obj.unspecified =
                message.unspecified !== undefined
                    ? (0, struct_1.nullValueToJSON)(message.unspecified)
                    : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseLiveEvent();
        message.collection =
            object.collection !== undefined && object.collection !== null
                ? exports.CollectionEvent.fromPartial(object.collection)
                : undefined;
        message.destination =
            object.destination !== undefined && object.destination !== null
                ? exports.DestinationEvent.fromPartial(object.destination)
                : undefined;
        message.project =
            object.project !== undefined && object.project !== null
                ? exports.ProjectEvent.fromPartial(object.project)
                : undefined;
        message.source =
            object.source !== undefined && object.source !== null
                ? exports.SourceEvent.fromPartial(object.source)
                : undefined;
        message.unspecified = (_a = object.unspecified) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
class CollectionServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateCollection = this.CreateCollection.bind(this);
        this.GetCollection = this.GetCollection.bind(this);
        this.GetCollections = this.GetCollections.bind(this);
        this.UpdateCollection = this.UpdateCollection.bind(this);
        this.DeleteCollection = this.DeleteCollection.bind(this);
    }
    CreateCollection(request) {
        const data = exports.CreateCollectionRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.CollectionService", "CreateCollection", data);
        return promise.then((data) => exports.CreateCollectionResponse.decode(new _m0.Reader(data)));
    }
    GetCollection(request) {
        const data = exports.GetCollectionRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.CollectionService", "GetCollection", data);
        return promise.then((data) => exports.GetCollectionResponse.decode(new _m0.Reader(data)));
    }
    GetCollections(request) {
        const data = exports.GetCollectionsRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.CollectionService", "GetCollections", data);
        return promise.then((data) => exports.GetCollectionsResponse.decode(new _m0.Reader(data)));
    }
    UpdateCollection(request) {
        const data = exports.UpdateCollectionRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.CollectionService", "UpdateCollection", data);
        return promise.then((data) => exports.UpdateCollectionResponse.decode(new _m0.Reader(data)));
    }
    DeleteCollection(request) {
        const data = exports.DeleteCollectionRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.CollectionService", "DeleteCollection", data);
        return promise.then((data) => exports.DeleteCollectionResponse.decode(new _m0.Reader(data)));
    }
}
exports.CollectionServiceClientImpl = CollectionServiceClientImpl;
/**
 * The Collection Service operates on collections, which contain projects and
 * collection live sources used in projects.
 */
exports.CollectionServiceDefinition = {
    name: "CollectionService",
    fullName: "live.v21.CollectionService",
    methods: {
        /**
         * Create Collection
         *
         * Create a new collection of related projects and collection live sources
         */
        createCollection: {
            name: "CreateCollection",
            requestType: exports.CreateCollectionRequest,
            requestStream: false,
            responseType: exports.CreateCollectionResponse,
            responseStream: false,
            options: {},
        },
        /**
         * Get Collection
         *
         * Get an existing collection of related projects and collection live
         * sources
         */
        getCollection: {
            name: "GetCollection",
            requestType: exports.GetCollectionRequest,
            requestStream: false,
            responseType: exports.GetCollectionResponse,
            responseStream: false,
            options: {},
        },
        /**
         * Get Collections
         *
         * Get all collections owned by the user
         */
        getCollections: {
            name: "GetCollections",
            requestType: exports.GetCollectionsRequest,
            requestStream: false,
            responseType: exports.GetCollectionsResponse,
            responseStream: false,
            options: {},
        },
        /**
         * Update Collection
         *
         * Update select collection document data
         */
        updateCollection: {
            name: "UpdateCollection",
            requestType: exports.UpdateCollectionRequest,
            requestStream: false,
            responseType: exports.UpdateCollectionResponse,
            responseStream: false,
            options: {},
        },
        /**
         * Delete Collection
         *
         * Delete a collection of related projects and collection live sources
         */
        deleteCollection: {
            name: "DeleteCollection",
            requestType: exports.DeleteCollectionRequest,
            requestStream: false,
            responseType: exports.DeleteCollectionResponse,
            responseStream: false,
            options: {},
        },
    },
};
class ProjectServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateProject = this.CreateProject.bind(this);
        this.GetProject = this.GetProject.bind(this);
        this.DeleteProject = this.DeleteProject.bind(this);
        this.UpdateProject = this.UpdateProject.bind(this);
        this.StartProjectBroadcast = this.StartProjectBroadcast.bind(this);
        this.StopProjectBroadcast = this.StopProjectBroadcast.bind(this);
        this.StartProjectWebRtc = this.StartProjectWebRtc.bind(this);
        this.StopProjectWebRtc = this.StopProjectWebRtc.bind(this);
        this.GetProjectBroadcastSnapshot =
            this.GetProjectBroadcastSnapshot.bind(this);
        this.GetProjectBroadcastStatus = this.GetProjectBroadcastStatus.bind(this);
    }
    CreateProject(request) {
        const data = exports.CreateProjectRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.ProjectService", "CreateProject", data);
        return promise.then((data) => exports.CreateProjectResponse.decode(new _m0.Reader(data)));
    }
    GetProject(request) {
        const data = exports.GetProjectRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.ProjectService", "GetProject", data);
        return promise.then((data) => exports.GetProjectResponse.decode(new _m0.Reader(data)));
    }
    DeleteProject(request) {
        const data = exports.DeleteProjectRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.ProjectService", "DeleteProject", data);
        return promise.then((data) => exports.DeleteProjectResponse.decode(new _m0.Reader(data)));
    }
    UpdateProject(request) {
        const data = exports.UpdateProjectRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.ProjectService", "UpdateProject", data);
        return promise.then((data) => exports.UpdateProjectResponse.decode(new _m0.Reader(data)));
    }
    StartProjectBroadcast(request) {
        const data = exports.StartProjectBroadcastRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.ProjectService", "StartProjectBroadcast", data);
        return promise.then((data) => exports.StartProjectBroadcastResponse.decode(new _m0.Reader(data)));
    }
    StopProjectBroadcast(request) {
        const data = exports.StopProjectBroadcastRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.ProjectService", "StopProjectBroadcast", data);
        return promise.then((data) => exports.StopProjectBroadcastResponse.decode(new _m0.Reader(data)));
    }
    StartProjectWebRtc(request) {
        const data = exports.StartProjectWebRtcRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.ProjectService", "StartProjectWebRtc", data);
        return promise.then((data) => exports.StartProjectWebRtcResponse.decode(new _m0.Reader(data)));
    }
    StopProjectWebRtc(request) {
        const data = exports.StopProjectWebRtcRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.ProjectService", "StopProjectWebRtc", data);
        return promise.then((data) => exports.StopProjectWebRtcResponse.decode(new _m0.Reader(data)));
    }
    GetProjectBroadcastSnapshot(request) {
        const data = exports.GetProjectBroadcastSnapshotRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.ProjectService", "GetProjectBroadcastSnapshot", data);
        return promise.then((data) => exports.GetProjectBroadcastSnapshotResponse.decode(new _m0.Reader(data)));
    }
    GetProjectBroadcastStatus(request) {
        const data = exports.GetProjectBroadcastStatusRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.ProjectService", "GetProjectBroadcastStatus", data);
        return promise.then((data) => exports.GetProjectBroadcastStatusResponse.decode(new _m0.Reader(data)));
    }
}
exports.ProjectServiceClientImpl = ProjectServiceClientImpl;
/** The Project Service operates on a Project. */
exports.ProjectServiceDefinition = {
    name: "ProjectService",
    fullName: "live.v21.ProjectService",
    methods: {
        /**
         * Create Project
         *
         * Create a new project
         */
        createProject: {
            name: "CreateProject",
            requestType: exports.CreateProjectRequest,
            requestStream: false,
            responseType: exports.CreateProjectResponse,
            responseStream: false,
            options: {},
        },
        /**
         * Get Project
         *
         * Get an existing project
         */
        getProject: {
            name: "GetProject",
            requestType: exports.GetProjectRequest,
            requestStream: false,
            responseType: exports.GetProjectResponse,
            responseStream: false,
            options: {},
        },
        /**
         * Delete Project
         *
         * Delete a project
         */
        deleteProject: {
            name: "DeleteProject",
            requestType: exports.DeleteProjectRequest,
            requestStream: false,
            responseType: exports.DeleteProjectResponse,
            responseStream: false,
            options: {},
        },
        /**
         * Update Project
         *
         * Updates a project
         */
        updateProject: {
            name: "UpdateProject",
            requestType: exports.UpdateProjectRequest,
            requestStream: false,
            responseType: exports.UpdateProjectResponse,
            responseStream: false,
            options: {},
        },
        /**
         * Start Broadcast
         *
         * Start broadcasting a project
         */
        startProjectBroadcast: {
            name: "StartProjectBroadcast",
            requestType: exports.StartProjectBroadcastRequest,
            requestStream: false,
            responseType: exports.StartProjectBroadcastResponse,
            responseStream: false,
            options: {},
        },
        /**
         * Stop Broadcast
         *
         * Stop broadcasting a project
         */
        stopProjectBroadcast: {
            name: "StopProjectBroadcast",
            requestType: exports.StopProjectBroadcastRequest,
            requestStream: false,
            responseType: exports.StopProjectBroadcastResponse,
            responseStream: false,
            options: {},
        },
        /**
         * Start WebRTC
         *
         * Start WebRTC services
         */
        startProjectWebRtc: {
            name: "StartProjectWebRtc",
            requestType: exports.StartProjectWebRtcRequest,
            requestStream: false,
            responseType: exports.StartProjectWebRtcResponse,
            responseStream: false,
            options: {},
        },
        /**
         * Stop WebRTC
         *
         * Stop WebRTC services
         */
        stopProjectWebRtc: {
            name: "StopProjectWebRtc",
            requestType: exports.StopProjectWebRtcRequest,
            requestStream: false,
            responseType: exports.StopProjectWebRtcResponse,
            responseStream: false,
            options: {},
        },
        /**
         * Get Snapshot
         *
         * Get a snapshot of the current output frame of the broadcast
         */
        getProjectBroadcastSnapshot: {
            name: "GetProjectBroadcastSnapshot",
            requestType: exports.GetProjectBroadcastSnapshotRequest,
            requestStream: false,
            responseType: exports.GetProjectBroadcastSnapshotResponse,
            responseStream: false,
            options: {},
        },
        /**
         * Get Broadcast Status
         *
         * Get the broadcast status of the project
         */
        getProjectBroadcastStatus: {
            name: "GetProjectBroadcastStatus",
            requestType: exports.GetProjectBroadcastStatusRequest,
            requestStream: false,
            responseType: exports.GetProjectBroadcastStatusResponse,
            responseStream: false,
            options: {},
        },
    },
};
class DestinationServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateDestination = this.CreateDestination.bind(this);
        this.GetDestination = this.GetDestination.bind(this);
        this.UpdateDestination = this.UpdateDestination.bind(this);
        this.DeleteDestination = this.DeleteDestination.bind(this);
    }
    CreateDestination(request) {
        const data = exports.CreateDestinationRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.DestinationService", "CreateDestination", data);
        return promise.then((data) => exports.CreateDestinationResponse.decode(new _m0.Reader(data)));
    }
    GetDestination(request) {
        const data = exports.GetDestinationRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.DestinationService", "GetDestination", data);
        return promise.then((data) => exports.GetDestinationResponse.decode(new _m0.Reader(data)));
    }
    UpdateDestination(request) {
        const data = exports.UpdateDestinationRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.DestinationService", "UpdateDestination", data);
        return promise.then((data) => exports.UpdateDestinationResponse.decode(new _m0.Reader(data)));
    }
    DeleteDestination(request) {
        const data = exports.DeleteDestinationRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.DestinationService", "DeleteDestination", data);
        return promise.then((data) => exports.DeleteDestinationResponse.decode(new _m0.Reader(data)));
    }
}
exports.DestinationServiceClientImpl = DestinationServiceClientImpl;
/**
 * The Destination Service operates on Project Destinations. Destinations
 * designate where a Broadcast associated with a Project is distributed
 * downstream.
 */
exports.DestinationServiceDefinition = {
    name: "DestinationService",
    fullName: "live.v21.DestinationService",
    methods: {
        /**
         * Create Destination
         *
         * Create a new Destination
         */
        createDestination: {
            name: "CreateDestination",
            requestType: exports.CreateDestinationRequest,
            requestStream: false,
            responseType: exports.CreateDestinationResponse,
            responseStream: false,
            options: {},
        },
        /**
         * Get Destination
         *
         * Get an existing Destination.
         */
        getDestination: {
            name: "GetDestination",
            requestType: exports.GetDestinationRequest,
            requestStream: false,
            responseType: exports.GetDestinationResponse,
            responseStream: false,
            options: {},
        },
        /**
         * Update Destination
         *
         * Update a destination
         */
        updateDestination: {
            name: "UpdateDestination",
            requestType: exports.UpdateDestinationRequest,
            requestStream: false,
            responseType: exports.UpdateDestinationResponse,
            responseStream: false,
            options: {},
        },
        /**
         * Delete Destination
         *
         * Delete a destination
         */
        deleteDestination: {
            name: "DeleteDestination",
            requestType: exports.DeleteDestinationRequest,
            requestStream: false,
            responseType: exports.DeleteDestinationResponse,
            responseStream: false,
            options: {},
        },
    },
};
class SourceServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateSource = this.CreateSource.bind(this);
        this.DeleteSource = this.DeleteSource.bind(this);
        this.UpdateSource = this.UpdateSource.bind(this);
        this.UpdateSourceInProject = this.UpdateSourceInProject.bind(this);
        this.GetSource = this.GetSource.bind(this);
        this.GetSources = this.GetSources.bind(this);
        this.AddSourceToProject = this.AddSourceToProject.bind(this);
        this.RemoveSourceFromProject = this.RemoveSourceFromProject.bind(this);
    }
    CreateSource(request) {
        const data = exports.CreateSourceRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.SourceService", "CreateSource", data);
        return promise.then((data) => exports.CreateSourceResponse.decode(new _m0.Reader(data)));
    }
    DeleteSource(request) {
        const data = exports.DeleteSourceRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.SourceService", "DeleteSource", data);
        return promise.then((data) => exports.DeleteSourceResponse.decode(new _m0.Reader(data)));
    }
    UpdateSource(request) {
        const data = exports.UpdateSourceRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.SourceService", "UpdateSource", data);
        return promise.then((data) => exports.UpdateSourceResponse.decode(new _m0.Reader(data)));
    }
    UpdateSourceInProject(request) {
        const data = exports.UpdateSourceInProjectRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.SourceService", "UpdateSourceInProject", data);
        return promise.then((data) => exports.UpdateSourceInProjectResponse.decode(new _m0.Reader(data)));
    }
    GetSource(request) {
        const data = exports.GetSourceRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.SourceService", "GetSource", data);
        return promise.then((data) => exports.GetSourceResponse.decode(new _m0.Reader(data)));
    }
    GetSources(request) {
        const data = exports.GetSourcesRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.SourceService", "GetSources", data);
        return promise.then((data) => exports.GetSourcesResponse.decode(new _m0.Reader(data)));
    }
    AddSourceToProject(request) {
        const data = exports.AddSourceToProjectRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.SourceService", "AddSourceToProject", data);
        return promise.then((data) => exports.AddSourceToProjectResponse.decode(new _m0.Reader(data)));
    }
    RemoveSourceFromProject(request) {
        const data = exports.RemoveSourceFromProjectRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.SourceService", "RemoveSourceFromProject", data);
        return promise.then((data) => exports.RemoveSourceFromProjectResponse.decode(new _m0.Reader(data)));
    }
}
exports.SourceServiceClientImpl = SourceServiceClientImpl;
/** The Source Service operates on Collection Live Sources and Project Sources. */
exports.SourceServiceDefinition = {
    name: "SourceService",
    fullName: "live.v21.SourceService",
    methods: {
        /**
         * Create Collection Live Source
         *
         * Create a new live source in a collection
         * ### Permissions
         * * scope: `SCOPE_VAPI_CREATE`
         */
        createSource: {
            name: "CreateSource",
            requestType: exports.CreateSourceRequest,
            requestStream: false,
            responseType: exports.CreateSourceResponse,
            responseStream: false,
            options: {},
        },
        /**
         * Delete Live Source
         *
         * Deletes a live source from a collection
         */
        deleteSource: {
            name: "DeleteSource",
            requestType: exports.DeleteSourceRequest,
            requestStream: false,
            responseType: exports.DeleteSourceResponse,
            responseStream: false,
            options: {},
        },
        /**
         * Update Source
         *
         * Update attributes of the Source.
         */
        updateSource: {
            name: "UpdateSource",
            requestType: exports.UpdateSourceRequest,
            requestStream: false,
            responseType: exports.UpdateSourceResponse,
            responseStream: false,
            options: {},
        },
        /**
         * Update Source
         *
         * Update attributes of the Source.
         */
        updateSourceInProject: {
            name: "UpdateSourceInProject",
            requestType: exports.UpdateSourceInProjectRequest,
            requestStream: false,
            responseType: exports.UpdateSourceInProjectResponse,
            responseStream: false,
            options: {},
        },
        /**
         * Get Source
         *
         * Get an existing source in a project
         */
        getSource: {
            name: "GetSource",
            requestType: exports.GetSourceRequest,
            requestStream: false,
            responseType: exports.GetSourceResponse,
            responseStream: false,
            options: {},
        },
        /**
         * Get Source
         *
         * Get existing sources in a collection
         */
        getSources: {
            name: "GetSources",
            requestType: exports.GetSourcesRequest,
            requestStream: false,
            responseType: exports.GetSourcesResponse,
            responseStream: false,
            options: {},
        },
        /**
         * Add Source to Project
         *
         * Add a source to a project
         */
        addSourceToProject: {
            name: "AddSourceToProject",
            requestType: exports.AddSourceToProjectRequest,
            requestStream: false,
            responseType: exports.AddSourceToProjectResponse,
            responseStream: false,
            options: {},
        },
        /**
         * Delete Source From Project
         *
         * Removes a source from a project.
         */
        removeSourceFromProject: {
            name: "RemoveSourceFromProject",
            requestType: exports.RemoveSourceFromProjectRequest,
            requestStream: false,
            responseType: exports.RemoveSourceFromProjectResponse,
            responseStream: false,
            options: {},
        },
    },
};
class BackendAuthenticationServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateAccessToken = this.CreateAccessToken.bind(this);
    }
    CreateAccessToken(request) {
        const data = exports.CreateAccessTokenRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.BackendAuthenticationService", "CreateAccessToken", data);
        return promise.then((data) => exports.CreateAccessTokenResponse.decode(new _m0.Reader(data)));
    }
}
exports.BackendAuthenticationServiceClientImpl = BackendAuthenticationServiceClientImpl;
/**
 * The Backend Authentication Service provides token services for partner
 * backend systems
 */
exports.BackendAuthenticationServiceDefinition = {
    name: "BackendAuthenticationService",
    fullName: "live.v21.BackendAuthenticationService",
    methods: {
        /**
         * Create Access Token
         *
         * Create an access token for a session host
         */
        createAccessToken: {
            name: "CreateAccessToken",
            requestType: exports.CreateAccessTokenRequest,
            requestStream: false,
            responseType: exports.CreateAccessTokenResponse,
            responseStream: false,
            options: {},
        },
    },
};
class AuthenticationServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateGuestAccessToken = this.CreateGuestAccessToken.bind(this);
        this.RefreshAccessToken = this.RefreshAccessToken.bind(this);
        this.CreateWebRtcAccessToken = this.CreateWebRtcAccessToken.bind(this);
    }
    CreateGuestAccessToken(request) {
        const data = exports.CreateGuestAccessTokenRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.AuthenticationService", "CreateGuestAccessToken", data);
        return promise.then((data) => exports.CreateGuestAccessTokenResponse.decode(new _m0.Reader(data)));
    }
    RefreshAccessToken(request) {
        const data = exports.RefreshAccessTokenRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.AuthenticationService", "RefreshAccessToken", data);
        return promise.then((data) => exports.RefreshAccessTokenResponse.decode(new _m0.Reader(data)));
    }
    CreateWebRtcAccessToken(request) {
        const data = exports.CreateWebRtcAccessTokenRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.AuthenticationService", "CreateWebRtcAccessToken", data);
        return promise.then((data) => exports.CreateWebRtcAccessTokenResponse.decode(new _m0.Reader(data)));
    }
}
exports.AuthenticationServiceClientImpl = AuthenticationServiceClientImpl;
/** The Authentication Service provides token services for clients */
exports.AuthenticationServiceDefinition = {
    name: "AuthenticationService",
    fullName: "live.v21.AuthenticationService",
    methods: {
        /**
         * Create Guest Access Token
         *
         * Create an access token for a guest
         */
        createGuestAccessToken: {
            name: "CreateGuestAccessToken",
            requestType: exports.CreateGuestAccessTokenRequest,
            requestStream: false,
            responseType: exports.CreateGuestAccessTokenResponse,
            responseStream: false,
            options: {},
        },
        /**
         * Refresh Access Token
         *
         * Forcibly refresh an access token prior to expiration
         */
        refreshAccessToken: {
            name: "RefreshAccessToken",
            requestType: exports.RefreshAccessTokenRequest,
            requestStream: false,
            responseType: exports.RefreshAccessTokenResponse,
            responseStream: false,
            options: {},
        },
        /**
         * Create WebRTC Access Token
         *
         * Create a WebRTC Access Token
         */
        createWebRtcAccessToken: {
            name: "CreateWebRtcAccessToken",
            requestType: exports.CreateWebRtcAccessTokenRequest,
            requestStream: false,
            responseType: exports.CreateWebRtcAccessTokenResponse,
            responseStream: false,
            options: {},
        },
    },
};
class PublicAuthenticationServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.GetJsonWebKeySet = this.GetJsonWebKeySet.bind(this);
        this.GuestCodeRedirect = this.GuestCodeRedirect.bind(this);
    }
    GetJsonWebKeySet(request) {
        const data = exports.GetJsonWebKeySetRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.PublicAuthenticationService", "GetJsonWebKeySet", data);
        return promise.then((data) => exports.GetJsonWebKeySetResponse.decode(new _m0.Reader(data)));
    }
    GuestCodeRedirect(request) {
        const data = exports.GuestCodeRedirectRequest.encode(request).finish();
        const promise = this.rpc.request("live.v21.PublicAuthenticationService", "GuestCodeRedirect", data);
        return promise.then((data) => exports.GuestCodeRedirectResponse.decode(new _m0.Reader(data)));
    }
}
exports.PublicAuthenticationServiceClientImpl = PublicAuthenticationServiceClientImpl;
/** The Public Authentication Service provides token verification services */
exports.PublicAuthenticationServiceDefinition = {
    name: "PublicAuthenticationService",
    fullName: "live.v21.PublicAuthenticationService",
    methods: {
        /**
         * Get Public Keys
         *
         * Get public keys used to sign access tokens
         */
        getJsonWebKeySet: {
            name: "GetJsonWebKeySet",
            requestType: exports.GetJsonWebKeySetRequest,
            requestStream: false,
            responseType: exports.GetJsonWebKeySetResponse,
            responseStream: false,
            options: {},
        },
        /**
         * Exchange Guest Access Token
         *
         * Exchange a guest access token with updated user identifiers
         */
        guestCodeRedirect: {
            name: "GuestCodeRedirect",
            requestType: exports.GuestCodeRedirectRequest,
            requestStream: false,
            responseType: exports.GuestCodeRedirectResponse,
            responseStream: false,
            options: {},
        },
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    arr.forEach((byte) => {
        bin.push(String.fromCharCode(byte));
    });
    return btoa(bin.join(""));
}
function toTimestamp(dateStr) {
    const date = new Date(dateStr);
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis).toISOString();
}
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=api.js.map