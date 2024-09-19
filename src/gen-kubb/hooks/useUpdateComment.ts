import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { UpdateCommentMutationRequest, UpdateCommentMutationResponse, UpdateCommentPathParams } from "../types/UpdateComment";
import type { UseMutationOptions } from "@tanstack/react-query";

 type UpdateCommentClient = typeof client<UpdateCommentMutationResponse, never, UpdateCommentMutationRequest>;
type UpdateComment = {
    data: UpdateCommentMutationResponse;
    error: never;
    request: UpdateCommentMutationRequest;
    pathParams: UpdateCommentPathParams;
    queryParams: never;
    headerParams: never;
    response: UpdateCommentMutationResponse;
    client: {
        parameters: Partial<Parameters<UpdateCommentClient>[0]>;
        return: Awaited<ReturnType<UpdateCommentClient>>;
    };
};
/**
 * @summary Update a comment by ID
 * @link /comments/:id
 */
export function useUpdateComment(id: UpdateCommentPathParams["id"], options: {
    mutation?: UseMutationOptions<UpdateComment["response"], UpdateComment["error"], UpdateComment["request"]>;
    client?: UpdateComment["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<UpdateComment["data"], UpdateComment["error"], UpdateComment["request"]>({
                method: "put",
                url: `/comments/${id}`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}