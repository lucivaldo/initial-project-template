import type { Comment } from "./Comment";

 export type GetCommentByIdPathParams = {
    /**
     * @type string
    */
    id: string;
};
/**
 * @description A comment object
*/
export type GetCommentById200 = Comment;
/**
 * @description A comment object
*/
export type GetCommentByIdQueryResponse = Comment;
export type GetCommentByIdQuery = {
    Response: GetCommentByIdQueryResponse;
    PathParams: GetCommentByIdPathParams;
};