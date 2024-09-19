import type { Comment } from "./Comment";
import type { CommentCreate } from "./CommentCreate";

 /**
 * @description Comment created successfully
*/
export type CreateComment201 = Comment;
export type CreateCommentMutationRequest = CommentCreate;
/**
 * @description Comment created successfully
*/
export type CreateCommentMutationResponse = Comment;
export type CreateCommentMutation = {
    Response: CreateCommentMutationResponse;
    Request: CreateCommentMutationRequest;
};