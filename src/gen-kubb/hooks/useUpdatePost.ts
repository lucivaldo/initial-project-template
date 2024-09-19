import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { UpdatePostMutationRequest, UpdatePostMutationResponse, UpdatePostPathParams } from "../types/UpdatePost";
import type { UseMutationOptions } from "@tanstack/react-query";

 type UpdatePostClient = typeof client<UpdatePostMutationResponse, never, UpdatePostMutationRequest>;
type UpdatePost = {
    data: UpdatePostMutationResponse;
    error: never;
    request: UpdatePostMutationRequest;
    pathParams: UpdatePostPathParams;
    queryParams: never;
    headerParams: never;
    response: UpdatePostMutationResponse;
    client: {
        parameters: Partial<Parameters<UpdatePostClient>[0]>;
        return: Awaited<ReturnType<UpdatePostClient>>;
    };
};
/**
 * @summary Update a post by ID
 * @link /posts/:id
 */
export function useUpdatePost(id: UpdatePostPathParams["id"], options: {
    mutation?: UseMutationOptions<UpdatePost["response"], UpdatePost["error"], UpdatePost["request"]>;
    client?: UpdatePost["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<UpdatePost["data"], UpdatePost["error"], UpdatePost["request"]>({
                method: "put",
                url: `/posts/${id}`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}