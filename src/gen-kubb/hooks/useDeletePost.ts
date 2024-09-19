import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { DeletePostMutationResponse, DeletePostPathParams } from "../types/DeletePost";
import type { UseMutationOptions } from "@tanstack/react-query";

 type DeletePostClient = typeof client<DeletePostMutationResponse, never, never>;
type DeletePost = {
    data: DeletePostMutationResponse;
    error: never;
    request: never;
    pathParams: DeletePostPathParams;
    queryParams: never;
    headerParams: never;
    response: DeletePostMutationResponse;
    client: {
        parameters: Partial<Parameters<DeletePostClient>[0]>;
        return: Awaited<ReturnType<DeletePostClient>>;
    };
};
/**
 * @summary Delete a post by ID
 * @link /posts/:id
 */
export function useDeletePost(id: DeletePostPathParams["id"], options: {
    mutation?: UseMutationOptions<DeletePost["response"], DeletePost["error"], DeletePost["request"]>;
    client?: DeletePost["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<DeletePost["data"], DeletePost["error"], DeletePost["request"]>({
                method: "delete",
                url: `/posts/${id}`,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}