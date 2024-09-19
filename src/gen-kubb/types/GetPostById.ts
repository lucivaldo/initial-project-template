import type { Post } from "./Post";

 export type GetPostByIdPathParams = {
    /**
     * @type string
    */
    id: string;
};
/**
 * @description A post object
*/
export type GetPostById200 = Post;
/**
 * @description A post object
*/
export type GetPostByIdQueryResponse = Post;
export type GetPostByIdQuery = {
    Response: GetPostByIdQueryResponse;
    PathParams: GetPostByIdPathParams;
};