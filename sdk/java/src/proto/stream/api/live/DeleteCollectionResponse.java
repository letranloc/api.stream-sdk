/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: live/v21/api.proto

package stream.api.live;

/**
 * Protobuf type {@code live.v21.DeleteCollectionResponse}
 */
public final class DeleteCollectionResponse extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:live.v21.DeleteCollectionResponse)
    DeleteCollectionResponseOrBuilder {
private static final long serialVersionUID = 0L;
  // Use DeleteCollectionResponse.newBuilder() to construct.
  private DeleteCollectionResponse(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private DeleteCollectionResponse() {
    projectIdsStopped_ = com.google.protobuf.LazyStringArrayList.EMPTY;
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new DeleteCollectionResponse();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private DeleteCollectionResponse(
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
          case 8: {

            sourcesDeleted_ = input.readUInt32();
            break;
          }
          case 16: {

            projectsDeleted_ = input.readUInt32();
            break;
          }
          case 26: {
            java.lang.String s = input.readStringRequireUtf8();
            if (!((mutable_bitField0_ & 0x00000001) != 0)) {
              projectIdsStopped_ = new com.google.protobuf.LazyStringArrayList();
              mutable_bitField0_ |= 0x00000001;
            }
            projectIdsStopped_.add(s);
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
      if (((mutable_bitField0_ & 0x00000001) != 0)) {
        projectIdsStopped_ = projectIdsStopped_.getUnmodifiableView();
      }
      this.unknownFields = unknownFields.build();
      makeExtensionsImmutable();
    }
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return stream.api.live.Api.internal_static_live_v21_DeleteCollectionResponse_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return stream.api.live.Api.internal_static_live_v21_DeleteCollectionResponse_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            stream.api.live.DeleteCollectionResponse.class, stream.api.live.DeleteCollectionResponse.Builder.class);
  }

  public static final int SOURCES_DELETED_FIELD_NUMBER = 1;
  private int sourcesDeleted_;
  /**
   * <pre>
   * number of live sources owned by this collection which were deleted
   * </pre>
   *
   * <code>uint32 sources_deleted = 1 [json_name = "sourcesDeleted", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
   * @return The sourcesDeleted.
   */
  @java.lang.Override
  public int getSourcesDeleted() {
    return sourcesDeleted_;
  }

  public static final int PROJECTS_DELETED_FIELD_NUMBER = 2;
  private int projectsDeleted_;
  /**
   * <pre>
   * number of projects owned by this collection which were deleted
   * </pre>
   *
   * <code>uint32 projects_deleted = 2 [json_name = "projectsDeleted", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
   * @return The projectsDeleted.
   */
  @java.lang.Override
  public int getProjectsDeleted() {
    return projectsDeleted_;
  }

  public static final int PROJECT_IDS_STOPPED_FIELD_NUMBER = 3;
  private com.google.protobuf.LazyStringList projectIdsStopped_;
  /**
   * <pre>
   * project ids owned by this collection whose broadcasts were stopped
   * </pre>
   *
   * <code>repeated string project_ids_stopped = 3 [json_name = "projectIdsStopped", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
   * @return A list containing the projectIdsStopped.
   */
  public com.google.protobuf.ProtocolStringList
      getProjectIdsStoppedList() {
    return projectIdsStopped_;
  }
  /**
   * <pre>
   * project ids owned by this collection whose broadcasts were stopped
   * </pre>
   *
   * <code>repeated string project_ids_stopped = 3 [json_name = "projectIdsStopped", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
   * @return The count of projectIdsStopped.
   */
  public int getProjectIdsStoppedCount() {
    return projectIdsStopped_.size();
  }
  /**
   * <pre>
   * project ids owned by this collection whose broadcasts were stopped
   * </pre>
   *
   * <code>repeated string project_ids_stopped = 3 [json_name = "projectIdsStopped", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
   * @param index The index of the element to return.
   * @return The projectIdsStopped at the given index.
   */
  public java.lang.String getProjectIdsStopped(int index) {
    return projectIdsStopped_.get(index);
  }
  /**
   * <pre>
   * project ids owned by this collection whose broadcasts were stopped
   * </pre>
   *
   * <code>repeated string project_ids_stopped = 3 [json_name = "projectIdsStopped", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
   * @param index The index of the value to return.
   * @return The bytes of the projectIdsStopped at the given index.
   */
  public com.google.protobuf.ByteString
      getProjectIdsStoppedBytes(int index) {
    return projectIdsStopped_.getByteString(index);
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
    if (sourcesDeleted_ != 0) {
      output.writeUInt32(1, sourcesDeleted_);
    }
    if (projectsDeleted_ != 0) {
      output.writeUInt32(2, projectsDeleted_);
    }
    for (int i = 0; i < projectIdsStopped_.size(); i++) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 3, projectIdsStopped_.getRaw(i));
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (sourcesDeleted_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeUInt32Size(1, sourcesDeleted_);
    }
    if (projectsDeleted_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeUInt32Size(2, projectsDeleted_);
    }
    {
      int dataSize = 0;
      for (int i = 0; i < projectIdsStopped_.size(); i++) {
        dataSize += computeStringSizeNoTag(projectIdsStopped_.getRaw(i));
      }
      size += dataSize;
      size += 1 * getProjectIdsStoppedList().size();
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
    if (!(obj instanceof stream.api.live.DeleteCollectionResponse)) {
      return super.equals(obj);
    }
    stream.api.live.DeleteCollectionResponse other = (stream.api.live.DeleteCollectionResponse) obj;

    if (getSourcesDeleted()
        != other.getSourcesDeleted()) return false;
    if (getProjectsDeleted()
        != other.getProjectsDeleted()) return false;
    if (!getProjectIdsStoppedList()
        .equals(other.getProjectIdsStoppedList())) return false;
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
    hash = (37 * hash) + SOURCES_DELETED_FIELD_NUMBER;
    hash = (53 * hash) + getSourcesDeleted();
    hash = (37 * hash) + PROJECTS_DELETED_FIELD_NUMBER;
    hash = (53 * hash) + getProjectsDeleted();
    if (getProjectIdsStoppedCount() > 0) {
      hash = (37 * hash) + PROJECT_IDS_STOPPED_FIELD_NUMBER;
      hash = (53 * hash) + getProjectIdsStoppedList().hashCode();
    }
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static stream.api.live.DeleteCollectionResponse parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static stream.api.live.DeleteCollectionResponse parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static stream.api.live.DeleteCollectionResponse parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static stream.api.live.DeleteCollectionResponse parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static stream.api.live.DeleteCollectionResponse parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static stream.api.live.DeleteCollectionResponse parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static stream.api.live.DeleteCollectionResponse parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static stream.api.live.DeleteCollectionResponse parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static stream.api.live.DeleteCollectionResponse parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static stream.api.live.DeleteCollectionResponse parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static stream.api.live.DeleteCollectionResponse parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static stream.api.live.DeleteCollectionResponse parseFrom(
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
  public static Builder newBuilder(stream.api.live.DeleteCollectionResponse prototype) {
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
   * Protobuf type {@code live.v21.DeleteCollectionResponse}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:live.v21.DeleteCollectionResponse)
      stream.api.live.DeleteCollectionResponseOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return stream.api.live.Api.internal_static_live_v21_DeleteCollectionResponse_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return stream.api.live.Api.internal_static_live_v21_DeleteCollectionResponse_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              stream.api.live.DeleteCollectionResponse.class, stream.api.live.DeleteCollectionResponse.Builder.class);
    }

    // Construct using stream.api.live.DeleteCollectionResponse.newBuilder()
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
      }
    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      sourcesDeleted_ = 0;

      projectsDeleted_ = 0;

      projectIdsStopped_ = com.google.protobuf.LazyStringArrayList.EMPTY;
      bitField0_ = (bitField0_ & ~0x00000001);
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return stream.api.live.Api.internal_static_live_v21_DeleteCollectionResponse_descriptor;
    }

    @java.lang.Override
    public stream.api.live.DeleteCollectionResponse getDefaultInstanceForType() {
      return stream.api.live.DeleteCollectionResponse.getDefaultInstance();
    }

    @java.lang.Override
    public stream.api.live.DeleteCollectionResponse build() {
      stream.api.live.DeleteCollectionResponse result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public stream.api.live.DeleteCollectionResponse buildPartial() {
      stream.api.live.DeleteCollectionResponse result = new stream.api.live.DeleteCollectionResponse(this);
      int from_bitField0_ = bitField0_;
      result.sourcesDeleted_ = sourcesDeleted_;
      result.projectsDeleted_ = projectsDeleted_;
      if (((bitField0_ & 0x00000001) != 0)) {
        projectIdsStopped_ = projectIdsStopped_.getUnmodifiableView();
        bitField0_ = (bitField0_ & ~0x00000001);
      }
      result.projectIdsStopped_ = projectIdsStopped_;
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
      if (other instanceof stream.api.live.DeleteCollectionResponse) {
        return mergeFrom((stream.api.live.DeleteCollectionResponse)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(stream.api.live.DeleteCollectionResponse other) {
      if (other == stream.api.live.DeleteCollectionResponse.getDefaultInstance()) return this;
      if (other.getSourcesDeleted() != 0) {
        setSourcesDeleted(other.getSourcesDeleted());
      }
      if (other.getProjectsDeleted() != 0) {
        setProjectsDeleted(other.getProjectsDeleted());
      }
      if (!other.projectIdsStopped_.isEmpty()) {
        if (projectIdsStopped_.isEmpty()) {
          projectIdsStopped_ = other.projectIdsStopped_;
          bitField0_ = (bitField0_ & ~0x00000001);
        } else {
          ensureProjectIdsStoppedIsMutable();
          projectIdsStopped_.addAll(other.projectIdsStopped_);
        }
        onChanged();
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
      stream.api.live.DeleteCollectionResponse parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (stream.api.live.DeleteCollectionResponse) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }
    private int bitField0_;

    private int sourcesDeleted_ ;
    /**
     * <pre>
     * number of live sources owned by this collection which were deleted
     * </pre>
     *
     * <code>uint32 sources_deleted = 1 [json_name = "sourcesDeleted", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
     * @return The sourcesDeleted.
     */
    @java.lang.Override
    public int getSourcesDeleted() {
      return sourcesDeleted_;
    }
    /**
     * <pre>
     * number of live sources owned by this collection which were deleted
     * </pre>
     *
     * <code>uint32 sources_deleted = 1 [json_name = "sourcesDeleted", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
     * @param value The sourcesDeleted to set.
     * @return This builder for chaining.
     */
    public Builder setSourcesDeleted(int value) {
      
      sourcesDeleted_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * number of live sources owned by this collection which were deleted
     * </pre>
     *
     * <code>uint32 sources_deleted = 1 [json_name = "sourcesDeleted", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
     * @return This builder for chaining.
     */
    public Builder clearSourcesDeleted() {
      
      sourcesDeleted_ = 0;
      onChanged();
      return this;
    }

    private int projectsDeleted_ ;
    /**
     * <pre>
     * number of projects owned by this collection which were deleted
     * </pre>
     *
     * <code>uint32 projects_deleted = 2 [json_name = "projectsDeleted", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
     * @return The projectsDeleted.
     */
    @java.lang.Override
    public int getProjectsDeleted() {
      return projectsDeleted_;
    }
    /**
     * <pre>
     * number of projects owned by this collection which were deleted
     * </pre>
     *
     * <code>uint32 projects_deleted = 2 [json_name = "projectsDeleted", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
     * @param value The projectsDeleted to set.
     * @return This builder for chaining.
     */
    public Builder setProjectsDeleted(int value) {
      
      projectsDeleted_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * number of projects owned by this collection which were deleted
     * </pre>
     *
     * <code>uint32 projects_deleted = 2 [json_name = "projectsDeleted", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
     * @return This builder for chaining.
     */
    public Builder clearProjectsDeleted() {
      
      projectsDeleted_ = 0;
      onChanged();
      return this;
    }

    private com.google.protobuf.LazyStringList projectIdsStopped_ = com.google.protobuf.LazyStringArrayList.EMPTY;
    private void ensureProjectIdsStoppedIsMutable() {
      if (!((bitField0_ & 0x00000001) != 0)) {
        projectIdsStopped_ = new com.google.protobuf.LazyStringArrayList(projectIdsStopped_);
        bitField0_ |= 0x00000001;
       }
    }
    /**
     * <pre>
     * project ids owned by this collection whose broadcasts were stopped
     * </pre>
     *
     * <code>repeated string project_ids_stopped = 3 [json_name = "projectIdsStopped", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
     * @return A list containing the projectIdsStopped.
     */
    public com.google.protobuf.ProtocolStringList
        getProjectIdsStoppedList() {
      return projectIdsStopped_.getUnmodifiableView();
    }
    /**
     * <pre>
     * project ids owned by this collection whose broadcasts were stopped
     * </pre>
     *
     * <code>repeated string project_ids_stopped = 3 [json_name = "projectIdsStopped", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
     * @return The count of projectIdsStopped.
     */
    public int getProjectIdsStoppedCount() {
      return projectIdsStopped_.size();
    }
    /**
     * <pre>
     * project ids owned by this collection whose broadcasts were stopped
     * </pre>
     *
     * <code>repeated string project_ids_stopped = 3 [json_name = "projectIdsStopped", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
     * @param index The index of the element to return.
     * @return The projectIdsStopped at the given index.
     */
    public java.lang.String getProjectIdsStopped(int index) {
      return projectIdsStopped_.get(index);
    }
    /**
     * <pre>
     * project ids owned by this collection whose broadcasts were stopped
     * </pre>
     *
     * <code>repeated string project_ids_stopped = 3 [json_name = "projectIdsStopped", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
     * @param index The index of the value to return.
     * @return The bytes of the projectIdsStopped at the given index.
     */
    public com.google.protobuf.ByteString
        getProjectIdsStoppedBytes(int index) {
      return projectIdsStopped_.getByteString(index);
    }
    /**
     * <pre>
     * project ids owned by this collection whose broadcasts were stopped
     * </pre>
     *
     * <code>repeated string project_ids_stopped = 3 [json_name = "projectIdsStopped", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
     * @param index The index to set the value at.
     * @param value The projectIdsStopped to set.
     * @return This builder for chaining.
     */
    public Builder setProjectIdsStopped(
        int index, java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  ensureProjectIdsStoppedIsMutable();
      projectIdsStopped_.set(index, value);
      onChanged();
      return this;
    }
    /**
     * <pre>
     * project ids owned by this collection whose broadcasts were stopped
     * </pre>
     *
     * <code>repeated string project_ids_stopped = 3 [json_name = "projectIdsStopped", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
     * @param value The projectIdsStopped to add.
     * @return This builder for chaining.
     */
    public Builder addProjectIdsStopped(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  ensureProjectIdsStoppedIsMutable();
      projectIdsStopped_.add(value);
      onChanged();
      return this;
    }
    /**
     * <pre>
     * project ids owned by this collection whose broadcasts were stopped
     * </pre>
     *
     * <code>repeated string project_ids_stopped = 3 [json_name = "projectIdsStopped", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
     * @param values The projectIdsStopped to add.
     * @return This builder for chaining.
     */
    public Builder addAllProjectIdsStopped(
        java.lang.Iterable<java.lang.String> values) {
      ensureProjectIdsStoppedIsMutable();
      com.google.protobuf.AbstractMessageLite.Builder.addAll(
          values, projectIdsStopped_);
      onChanged();
      return this;
    }
    /**
     * <pre>
     * project ids owned by this collection whose broadcasts were stopped
     * </pre>
     *
     * <code>repeated string project_ids_stopped = 3 [json_name = "projectIdsStopped", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
     * @return This builder for chaining.
     */
    public Builder clearProjectIdsStopped() {
      projectIdsStopped_ = com.google.protobuf.LazyStringArrayList.EMPTY;
      bitField0_ = (bitField0_ & ~0x00000001);
      onChanged();
      return this;
    }
    /**
     * <pre>
     * project ids owned by this collection whose broadcasts were stopped
     * </pre>
     *
     * <code>repeated string project_ids_stopped = 3 [json_name = "projectIdsStopped", (.grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = { ... }</code>
     * @param value The bytes of the projectIdsStopped to add.
     * @return This builder for chaining.
     */
    public Builder addProjectIdsStoppedBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      ensureProjectIdsStoppedIsMutable();
      projectIdsStopped_.add(value);
      onChanged();
      return this;
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


    // @@protoc_insertion_point(builder_scope:live.v21.DeleteCollectionResponse)
  }

  // @@protoc_insertion_point(class_scope:live.v21.DeleteCollectionResponse)
  private static final stream.api.live.DeleteCollectionResponse DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new stream.api.live.DeleteCollectionResponse();
  }

  public static stream.api.live.DeleteCollectionResponse getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<DeleteCollectionResponse>
      PARSER = new com.google.protobuf.AbstractParser<DeleteCollectionResponse>() {
    @java.lang.Override
    public DeleteCollectionResponse parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new DeleteCollectionResponse(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<DeleteCollectionResponse> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<DeleteCollectionResponse> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public stream.api.live.DeleteCollectionResponse getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}
