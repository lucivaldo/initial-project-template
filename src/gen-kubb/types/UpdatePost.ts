import type { Post } from "./Post";
import type { PostUpdate } from "./PostUpdate";

 export type UpdatePostPathParams = {
    /**
     * @type string
    */
    id: string;
};
/**
 * @description Post updated successfully
*/
export type UpdatePost200 = Post;
export type UpdatePostMutationRequest = PostUpdate;
/**
 * @description Post updated successfully
*/
export type UpdatePostMutationResponse = Post;
export type UpdatePostMutation = {
    Response: UpdatePostMutationResponse;
    Request: UpdatePostMutationRequest;
    PathParams: UpdatePostPathParams;
};