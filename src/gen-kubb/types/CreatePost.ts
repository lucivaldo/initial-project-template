import type { Post } from "./Post";
import type { PostCreate } from "./PostCreate";

 /**
 * @description Post created successfully
*/
export type CreatePost201 = Post;
export type CreatePostMutationRequest = PostCreate;
/**
 * @description Post created successfully
*/
export type CreatePostMutationResponse = Post;
export type CreatePostMutation = {
    Response: CreatePostMutationResponse;
    Request: CreatePostMutationRequest;
};