import type { Comment } from "./Comment";

 /**
 * @description A list of comments
*/
export type GetComments200 = Comment[];
/**
 * @description A list of comments
*/
export type GetCommentsQueryResponse = Comment[];
export type GetCommentsQuery = {
    Response: GetCommentsQueryResponse;
};