import type { Comment } from "./Comment";
import type { CommentUpdate } from "./CommentUpdate";

 export type UpdateCommentPathParams = {
    /**
     * @type string
    */
    id: string;
};
/**
 * @description Comment updated successfully
*/
export type UpdateComment200 = Comment;
export type UpdateCommentMutationRequest = CommentUpdate;
/**
 * @description Comment updated successfully
*/
export type UpdateCommentMutationResponse = Comment;
export type UpdateCommentMutation = {
    Response: UpdateCommentMutationResponse;
    Request: UpdateCommentMutationRequest;
    PathParams: UpdateCommentPathParams;
};