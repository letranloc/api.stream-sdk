/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: apis/layout/v2/api.proto

package stream.api.layout;

/**
 * Protobuf type {@code apis.layout.v2.BatchDeleteLayerRequest}
 */
public final class BatchDeleteLayerRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:apis.layout.v2.BatchDeleteLayerRequest)
    BatchDeleteLayerRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use BatchDeleteLayerRequest.newBuilder() to construct.
  private BatchDeleteLayerRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private BatchDeleteLayerRequest() {
    id_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new BatchDeleteLayerRequest();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private BatchDeleteLayerRequest(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    this();
    if (extensionRegistry == null) {
      throw new java.lang.NullPointerException();
    }
    int mutable_bitField0_ = 0;
    com.google.protobuf.UnknownFieldSet.Builder unknownFields =
        com.google.protobuf.UnknownFieldSet.newBuilder();
    try {
      boolean done = false;
      while (!done) {
        int tag = input.readTag();
        switch (tag) {
          case 0:
            done = true;
            break;
          case 10: {
            java.lang.String s = input.readStringRequireUtf8();

            id_ = s;
            break;
          }
          case 802: {
            com.google.protobuf.Value.Builder subBuilder = null;
            if (((bitField0_ & 0x00000001) != 0)) {
              subBuilder = requestMetadata_.toBuilder();
            }
            requestMetadata_ = input.readMessage(com.google.protobuf.Value.parser(), extensionRegistry);
            if (subBuilder != null) {
              subBuilder.mergeFrom(requestMetadata_);
              requestMetadata_ = subBuilder.buildPartial();
            }
            bitField0_ |= 0x00000001;
            break;
          }
          default: {
            if (!parseUnknownField(
                input, unknownFields, extensionRegistry, tag)) {
              done = true;
            }
            break;
          }
        }
      }
    } catch (com.google.protobuf.InvalidProtocolBufferException e) {
      throw e.setUnfinishedMessage(this);
    } catch (java.io.IOException e) {
      throw new com.google.protobuf.InvalidProtocolBufferException(
          e).setUnfinishedMessage(this);
    } finally {
      this.unknownFields = unknownFields.build();
      makeExtensionsImmutable();
    }
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return stream.api.layout.Api.internal_static_apis_layout_v2_BatchDeleteLayerRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return stream.api.layout.Api.internal_static_apis_layout_v2_BatchDeleteLayerRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            stream.api.layout.BatchDeleteLayerRequest.class, stream.api.layout.BatchDeleteLayerRequest.Builder.class);
  }

  private int bitField0_;
  public static final int ID_FIELD_NUMBER = 1;
  private volatile java.lang.Object id_;
  /**
   * <pre>
   * ID of the layer deleted.
   * </pre>
   *
   * <code>string id = 1 [json_name = "id", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
   * @return The id.
   */
  @java.lang.Override
  public java.lang.String getId() {
    java.lang.Object ref = id_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      id_ = s;
      return s;
    }
  }
  /**
   * <pre>
   * ID of the layer deleted.
   * </pre>
   *
   * <code>string id = 1 [json_name = "id", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
   * @return The bytes for id.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getIdBytes() {
    java.lang.Object ref = id_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      id_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int REQUEST_METADATA_FIELD_NUMBER = 100;
  private com.google.protobuf.Value requestMetadata_;
  /**
   * <pre>
   * Metadata associated with the deletion of a layer
   * </pre>
   *
   * <code>optional .google.protobuf.Value request_metadata = 100 [json_name = "requestMetadata", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
   * @return Whether the requestMetadata field is set.
   */
  @java.lang.Override
  public boolean hasRequestMetadata() {
    return ((bitField0_ & 0x00000001) != 0);
  }
  /**
   * <pre>
   * Metadata associated with the deletion of a layer
   * </pre>
   *
   * <code>optional .google.protobuf.Value request_metadata = 100 [json_name = "requestMetadata", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
   * @return The requestMetadata.
   */
  @java.lang.Override
  public com.google.protobuf.Value getRequestMetadata() {
    return requestMetadata_ == null ? com.google.protobuf.Value.getDefaultInstance() : requestMetadata_;
  }
  /**
   * <pre>
   * Metadata associated with the deletion of a layer
   * </pre>
   *
   * <code>optional .google.protobuf.Value request_metadata = 100 [json_name = "requestMetadata", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
   */
  @java.lang.Override
  public com.google.protobuf.ValueOrBuilder getRequestMetadataOrBuilder() {
    return requestMetadata_ == null ? com.google.protobuf.Value.getDefaultInstance() : requestMetadata_;
  }

  private byte memoizedIsInitialized = -1;
  @java.lang.Override
  public final boolean isInitialized() {
    byte isInitialized = memoizedIsInitialized;
    if (isInitialized == 1) return true;
    if (isInitialized == 0) return false;

    memoizedIsInitialized = 1;
    return true;
  }

  @java.lang.Override
  public void writeTo(com.google.protobuf.CodedOutputStream output)
                      throws java.io.IOException {
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(id_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, id_);
    }
    if (((bitField0_ & 0x00000001) != 0)) {
      output.writeMessage(100, getRequestMetadata());
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(id_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, id_);
    }
    if (((bitField0_ & 0x00000001) != 0)) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(100, getRequestMetadata());
    }
    size += unknownFields.getSerializedSize();
    memoizedSize = size;
    return size;
  }

  @java.lang.Override
  public boolean equals(final java.lang.Object obj) {
    if (obj == this) {
     return true;
    }
    if (!(obj instanceof stream.api.layout.BatchDeleteLayerRequest)) {
      return super.equals(obj);
    }
    stream.api.layout.BatchDeleteLayerRequest other = (stream.api.layout.BatchDeleteLayerRequest) obj;

    if (!getId()
        .equals(other.getId())) return false;
    if (hasRequestMetadata() != other.hasRequestMetadata()) return false;
    if (hasRequestMetadata()) {
      if (!getRequestMetadata()
          .equals(other.getRequestMetadata())) return false;
    }
    if (!unknownFields.equals(other.unknownFields)) return false;
    return true;
  }

  @java.lang.Override
  public int hashCode() {
    if (memoizedHashCode != 0) {
      return memoizedHashCode;
    }
    int hash = 41;
    hash = (19 * hash) + getDescriptor().hashCode();
    hash = (37 * hash) + ID_FIELD_NUMBER;
    hash = (53 * hash) + getId().hashCode();
    if (hasRequestMetadata()) {
      hash = (37 * hash) + REQUEST_METADATA_FIELD_NUMBER;
      hash = (53 * hash) + getRequestMetadata().hashCode();
    }
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static stream.api.layout.BatchDeleteLayerRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static stream.api.layout.BatchDeleteLayerRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static stream.api.layout.BatchDeleteLayerRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static stream.api.layout.BatchDeleteLayerRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static stream.api.layout.BatchDeleteLayerRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static stream.api.layout.BatchDeleteLayerRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static stream.api.layout.BatchDeleteLayerRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static stream.api.layout.BatchDeleteLayerRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static stream.api.layout.BatchDeleteLayerRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static stream.api.layout.BatchDeleteLayerRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static stream.api.layout.BatchDeleteLayerRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static stream.api.layout.BatchDeleteLayerRequest parseFrom(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  @java.lang.Override
  public Builder newBuilderForType() { return newBuilder(); }
  public static Builder newBuilder() {
    return DEFAULT_INSTANCE.toBuilder();
  }
  public static Builder newBuilder(stream.api.layout.BatchDeleteLayerRequest prototype) {
    return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
  }
  @java.lang.Override
  public Builder toBuilder() {
    return this == DEFAULT_INSTANCE
        ? new Builder() : new Builder().mergeFrom(this);
  }

  @java.lang.Override
  protected Builder newBuilderForType(
      com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
    Builder builder = new Builder(parent);
    return builder;
  }
  /**
   * Protobuf type {@code apis.layout.v2.BatchDeleteLayerRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:apis.layout.v2.BatchDeleteLayerRequest)
      stream.api.layout.BatchDeleteLayerRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return stream.api.layout.Api.internal_static_apis_layout_v2_BatchDeleteLayerRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return stream.api.layout.Api.internal_static_apis_layout_v2_BatchDeleteLayerRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              stream.api.layout.BatchDeleteLayerRequest.class, stream.api.layout.BatchDeleteLayerRequest.Builder.class);
    }

    // Construct using stream.api.layout.BatchDeleteLayerRequest.newBuilder()
    private Builder() {
      maybeForceBuilderInitialization();
    }

    private Builder(
        com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
      super(parent);
      maybeForceBuilderInitialization();
    }
    private void maybeForceBuilderInitialization() {
      if (com.google.protobuf.GeneratedMessageV3
              .alwaysUseFieldBuilders) {
        getRequestMetadataFieldBuilder();
      }
    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      id_ = "";

      if (requestMetadataBuilder_ == null) {
        requestMetadata_ = null;
      } else {
        requestMetadataBuilder_.clear();
      }
      bitField0_ = (bitField0_ & ~0x00000001);
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return stream.api.layout.Api.internal_static_apis_layout_v2_BatchDeleteLayerRequest_descriptor;
    }

    @java.lang.Override
    public stream.api.layout.BatchDeleteLayerRequest getDefaultInstanceForType() {
      return stream.api.layout.BatchDeleteLayerRequest.getDefaultInstance();
    }

    @java.lang.Override
    public stream.api.layout.BatchDeleteLayerRequest build() {
      stream.api.layout.BatchDeleteLayerRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public stream.api.layout.BatchDeleteLayerRequest buildPartial() {
      stream.api.layout.BatchDeleteLayerRequest result = new stream.api.layout.BatchDeleteLayerRequest(this);
      int from_bitField0_ = bitField0_;
      int to_bitField0_ = 0;
      result.id_ = id_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        if (requestMetadataBuilder_ == null) {
          result.requestMetadata_ = requestMetadata_;
        } else {
          result.requestMetadata_ = requestMetadataBuilder_.build();
        }
        to_bitField0_ |= 0x00000001;
      }
      result.bitField0_ = to_bitField0_;
      onBuilt();
      return result;
    }

    @java.lang.Override
    public Builder clone() {
      return super.clone();
    }
    @java.lang.Override
    public Builder setField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return super.setField(field, value);
    }
    @java.lang.Override
    public Builder clearField(
        com.google.protobuf.Descriptors.FieldDescriptor field) {
      return super.clearField(field);
    }
    @java.lang.Override
    public Builder clearOneof(
        com.google.protobuf.Descriptors.OneofDescriptor oneof) {
      return super.clearOneof(oneof);
    }
    @java.lang.Override
    public Builder setRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        int index, java.lang.Object value) {
      return super.setRepeatedField(field, index, value);
    }
    @java.lang.Override
    public Builder addRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return super.addRepeatedField(field, value);
    }
    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof stream.api.layout.BatchDeleteLayerRequest) {
        return mergeFrom((stream.api.layout.BatchDeleteLayerRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(stream.api.layout.BatchDeleteLayerRequest other) {
      if (other == stream.api.layout.BatchDeleteLayerRequest.getDefaultInstance()) return this;
      if (!other.getId().isEmpty()) {
        id_ = other.id_;
        onChanged();
      }
      if (other.hasRequestMetadata()) {
        mergeRequestMetadata(other.getRequestMetadata());
      }
      this.mergeUnknownFields(other.unknownFields);
      onChanged();
      return this;
    }

    @java.lang.Override
    public final boolean isInitialized() {
      return true;
    }

    @java.lang.Override
    public Builder mergeFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      stream.api.layout.BatchDeleteLayerRequest parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (stream.api.layout.BatchDeleteLayerRequest) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }
    private int bitField0_;

    private java.lang.Object id_ = "";
    /**
     * <pre>
     * ID of the layer deleted.
     * </pre>
     *
     * <code>string id = 1 [json_name = "id", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
     * @return The id.
     */
    public java.lang.String getId() {
      java.lang.Object ref = id_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        id_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <pre>
     * ID of the layer deleted.
     * </pre>
     *
     * <code>string id = 1 [json_name = "id", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
     * @return The bytes for id.
     */
    public com.google.protobuf.ByteString
        getIdBytes() {
      java.lang.Object ref = id_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        id_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <pre>
     * ID of the layer deleted.
     * </pre>
     *
     * <code>string id = 1 [json_name = "id", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
     * @param value The id to set.
     * @return This builder for chaining.
     */
    public Builder setId(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      id_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * ID of the layer deleted.
     * </pre>
     *
     * <code>string id = 1 [json_name = "id", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
     * @return This builder for chaining.
     */
    public Builder clearId() {
      
      id_ = getDefaultInstance().getId();
      onChanged();
      return this;
    }
    /**
     * <pre>
     * ID of the layer deleted.
     * </pre>
     *
     * <code>string id = 1 [json_name = "id", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
     * @param value The bytes for id to set.
     * @return This builder for chaining.
     */
    public Builder setIdBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      id_ = value;
      onChanged();
      return this;
    }

    private com.google.protobuf.Value requestMetadata_;
    private com.google.protobuf.SingleFieldBuilderV3<
        com.google.protobuf.Value, com.google.protobuf.Value.Builder, com.google.protobuf.ValueOrBuilder> requestMetadataBuilder_;
    /**
     * <pre>
     * Metadata associated with the deletion of a layer
     * </pre>
     *
     * <code>optional .google.protobuf.Value request_metadata = 100 [json_name = "requestMetadata", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
     * @return Whether the requestMetadata field is set.
     */
    public boolean hasRequestMetadata() {
      return ((bitField0_ & 0x00000001) != 0);
    }
    /**
     * <pre>
     * Metadata associated with the deletion of a layer
     * </pre>
     *
     * <code>optional .google.protobuf.Value request_metadata = 100 [json_name = "requestMetadata", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
     * @return The requestMetadata.
     */
    public com.google.protobuf.Value getRequestMetadata() {
      if (requestMetadataBuilder_ == null) {
        return requestMetadata_ == null ? com.google.protobuf.Value.getDefaultInstance() : requestMetadata_;
      } else {
        return requestMetadataBuilder_.getMessage();
      }
    }
    /**
     * <pre>
     * Metadata associated with the deletion of a layer
     * </pre>
     *
     * <code>optional .google.protobuf.Value request_metadata = 100 [json_name = "requestMetadata", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
     */
    public Builder setRequestMetadata(com.google.protobuf.Value value) {
      if (requestMetadataBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        requestMetadata_ = value;
        onChanged();
      } else {
        requestMetadataBuilder_.setMessage(value);
      }
      bitField0_ |= 0x00000001;
      return this;
    }
    /**
     * <pre>
     * Metadata associated with the deletion of a layer
     * </pre>
     *
     * <code>optional .google.protobuf.Value request_metadata = 100 [json_name = "requestMetadata", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
     */
    public Builder setRequestMetadata(
        com.google.protobuf.Value.Builder builderForValue) {
      if (requestMetadataBuilder_ == null) {
        requestMetadata_ = builderForValue.build();
        onChanged();
      } else {
        requestMetadataBuilder_.setMessage(builderForValue.build());
      }
      bitField0_ |= 0x00000001;
      return this;
    }
    /**
     * <pre>
     * Metadata associated with the deletion of a layer
     * </pre>
     *
     * <code>optional .google.protobuf.Value request_metadata = 100 [json_name = "requestMetadata", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
     */
    public Builder mergeRequestMetadata(com.google.protobuf.Value value) {
      if (requestMetadataBuilder_ == null) {
        if (((bitField0_ & 0x00000001) != 0) &&
            requestMetadata_ != null &&
            requestMetadata_ != com.google.protobuf.Value.getDefaultInstance()) {
          requestMetadata_ =
            com.google.protobuf.Value.newBuilder(requestMetadata_).mergeFrom(value).buildPartial();
        } else {
          requestMetadata_ = value;
        }
        onChanged();
      } else {
        requestMetadataBuilder_.mergeFrom(value);
      }
      bitField0_ |= 0x00000001;
      return this;
    }
    /**
     * <pre>
     * Metadata associated with the deletion of a layer
     * </pre>
     *
     * <code>optional .google.protobuf.Value request_metadata = 100 [json_name = "requestMetadata", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
     */
    public Builder clearRequestMetadata() {
      if (requestMetadataBuilder_ == null) {
        requestMetadata_ = null;
        onChanged();
      } else {
        requestMetadataBuilder_.clear();
      }
      bitField0_ = (bitField0_ & ~0x00000001);
      return this;
    }
    /**
     * <pre>
     * Metadata associated with the deletion of a layer
     * </pre>
     *
     * <code>optional .google.protobuf.Value request_metadata = 100 [json_name = "requestMetadata", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
     */
    public com.google.protobuf.Value.Builder getRequestMetadataBuilder() {
      bitField0_ |= 0x00000001;
      onChanged();
      return getRequestMetadataFieldBuilder().getBuilder();
    }
    /**
     * <pre>
     * Metadata associated with the deletion of a layer
     * </pre>
     *
     * <code>optional .google.protobuf.Value request_metadata = 100 [json_name = "requestMetadata", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
     */
    public com.google.protobuf.ValueOrBuilder getRequestMetadataOrBuilder() {
      if (requestMetadataBuilder_ != null) {
        return requestMetadataBuilder_.getMessageOrBuilder();
      } else {
        return requestMetadata_ == null ?
            com.google.protobuf.Value.getDefaultInstance() : requestMetadata_;
      }
    }
    /**
     * <pre>
     * Metadata associated with the deletion of a layer
     * </pre>
     *
     * <code>optional .google.protobuf.Value request_metadata = 100 [json_name = "requestMetadata", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        com.google.protobuf.Value, com.google.protobuf.Value.Builder, com.google.protobuf.ValueOrBuilder> 
        getRequestMetadataFieldBuilder() {
      if (requestMetadataBuilder_ == null) {
        requestMetadataBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            com.google.protobuf.Value, com.google.protobuf.Value.Builder, com.google.protobuf.ValueOrBuilder>(
                getRequestMetadata(),
                getParentForChildren(),
                isClean());
        requestMetadata_ = null;
      }
      return requestMetadataBuilder_;
    }
    @java.lang.Override
    public final Builder setUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.setUnknownFields(unknownFields);
    }

    @java.lang.Override
    public final Builder mergeUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.mergeUnknownFields(unknownFields);
    }


    // @@protoc_insertion_point(builder_scope:apis.layout.v2.BatchDeleteLayerRequest)
  }

  // @@protoc_insertion_point(class_scope:apis.layout.v2.BatchDeleteLayerRequest)
  private static final stream.api.layout.BatchDeleteLayerRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new stream.api.layout.BatchDeleteLayerRequest();
  }

  public static stream.api.layout.BatchDeleteLayerRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<BatchDeleteLayerRequest>
      PARSER = new com.google.protobuf.AbstractParser<BatchDeleteLayerRequest>() {
    @java.lang.Override
    public BatchDeleteLayerRequest parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new BatchDeleteLayerRequest(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<BatchDeleteLayerRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<BatchDeleteLayerRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public stream.api.layout.BatchDeleteLayerRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}
