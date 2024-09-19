import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { UpdateProfileMutationRequest, UpdateProfileMutationResponse } from "../types/UpdateProfile";
import type { UseMutationOptions } from "@tanstack/react-query";

 type UpdateProfileClient = typeof client<UpdateProfileMutationResponse, never, UpdateProfileMutationRequest>;
type UpdateProfile = {
    data: UpdateProfileMutationResponse;
    error: never;
    request: UpdateProfileMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: UpdateProfileMutationResponse;
    client: {
        parameters: Partial<Parameters<UpdateProfileClient>[0]>;
        return: Awaited<ReturnType<UpdateProfileClient>>;
    };
};
/**
 * @summary Update the profile
 * @link /profile
 */
export function useUpdateProfile(options: {
    mutation?: UseMutationOptions<UpdateProfile["response"], UpdateProfile["error"], UpdateProfile["request"]>;
    client?: UpdateProfile["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<UpdateProfile["data"], UpdateProfile["error"], UpdateProfile["request"]>({
                method: "put",
                url: `/profile`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}