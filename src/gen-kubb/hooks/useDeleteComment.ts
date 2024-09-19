import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { DeleteCommentMutationResponse, DeleteCommentPathParams } from "../types/DeleteComment";
import type { UseMutationOptions } from "@tanstack/react-query";

 type DeleteCommentClient = typeof client<DeleteCommentMutationResponse, never, never>;
type DeleteComment = {
    data: DeleteCommentMutationResponse;
    error: never;
    request: never;
    pathParams: DeleteCommentPathParams;
    queryParams: never;
    headerParams: never;
    response: DeleteCommentMutationResponse;
    client: {
        parameters: Partial<Parameters<DeleteCommentClient>[0]>;
        return: Awaited<ReturnType<DeleteCommentClient>>;
    };
};
/**
 * @summary Delete a comment by ID
 * @link /comments/:id
 */
export function useDeleteComment(id: DeleteCommentPathParams["id"], options: {
    mutation?: UseMutationOptions<DeleteComment["response"], DeleteComment["error"], DeleteComment["request"]>;
    client?: DeleteComment["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<DeleteComment["data"], DeleteComment["error"], DeleteComment["request"]>({
                method: "delete",
                url: `/comments/${id}`,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}