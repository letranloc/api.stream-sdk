/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: apis/layout/v2/api.proto

package stream.api.layout;

public interface ListLayoutsResponseOrBuilder extends
    // @@protoc_insertion_point(interface_extends:apis.layout.v2.ListLayoutsResponse)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * All layouts returned.
   * </pre>
   *
   * <code>repeated .apis.layout.v2.Layout layouts = 1 [json_name = "layouts"];</code>
   */
  java.util.List<stream.api.layout.Layout> 
      getLayoutsList();
  /**
   * <pre>
   * All layouts returned.
   * </pre>
   *
   * <code>repeated .apis.layout.v2.Layout layouts = 1 [json_name = "layouts"];</code>
   */
  stream.api.layout.Layout getLayouts(int index);
  /**
   * <pre>
   * All layouts returned.
   * </pre>
   *
   * <code>repeated .apis.layout.v2.Layout layouts = 1 [json_name = "layouts"];</code>
   */
  int getLayoutsCount();
  /**
   * <pre>
   * All layouts returned.
   * </pre>
   *
   * <code>repeated .apis.layout.v2.Layout layouts = 1 [json_name = "layouts"];</code>
   */
  java.util.List<? extends stream.api.layout.LayoutOrBuilder> 
      getLayoutsOrBuilderList();
  /**
   * <pre>
   * All layouts returned.
   * </pre>
   *
   * <code>repeated .apis.layout.v2.Layout layouts = 1 [json_name = "layouts"];</code>
   */
  stream.api.layout.LayoutOrBuilder getLayoutsOrBuilder(
      int index);
}