import type { Post } from "./Post";

 /**
 * @description A list of posts
*/
export type GetPosts200 = Post[];
/**
 * @description A list of posts
*/
export type GetPostsQueryResponse = Post[];
export type GetPostsQuery = {
    Response: GetPostsQueryResponse;
};