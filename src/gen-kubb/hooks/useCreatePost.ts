import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { CreatePostMutationRequest, CreatePostMutationResponse } from "../types/CreatePost";
import type { UseMutationOptions } from "@tanstack/react-query";

 type CreatePostClient = typeof client<CreatePostMutationResponse, never, CreatePostMutationRequest>;
type CreatePost = {
    data: CreatePostMutationResponse;
    error: never;
    request: CreatePostMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: CreatePostMutationResponse;
    client: {
        parameters: Partial<Parameters<CreatePostClient>[0]>;
        return: Awaited<ReturnType<CreatePostClient>>;
    };
};
/**
 * @summary Create a new post
 * @link /posts
 */
export function useCreatePost(options: {
    mutation?: UseMutationOptions<CreatePost["response"], CreatePost["error"], CreatePost["request"]>;
    client?: CreatePost["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<CreatePost["data"], CreatePost["error"], CreatePost["request"]>({
                method: "post",
                url: `/posts`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}