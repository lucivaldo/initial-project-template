import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { CreateCommentMutationRequest, CreateCommentMutationResponse } from "../types/CreateComment";
import type { UseMutationOptions } from "@tanstack/react-query";

 type CreateCommentClient = typeof client<CreateCommentMutationResponse, never, CreateCommentMutationRequest>;
type CreateComment = {
    data: CreateCommentMutationResponse;
    error: never;
    request: CreateCommentMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: CreateCommentMutationResponse;
    client: {
        parameters: Partial<Parameters<CreateCommentClient>[0]>;
        return: Awaited<ReturnType<CreateCommentClient>>;
    };
};
/**
 * @summary Create a new comment
 * @link /comments
 */
export function useCreateComment(options: {
    mutation?: UseMutationOptions<CreateComment["response"], CreateComment["error"], CreateComment["request"]>;
    client?: CreateComment["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<CreateComment["data"], CreateComment["error"], CreateComment["request"]>({
                method: "post",
                url: `/comments`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}