import client from "@kubb/swagger-client/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetProfileQueryResponse } from "../types/GetProfile";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetProfileClient = typeof client<GetProfileQueryResponse, never, never>;
type GetProfile = {
    data: GetProfileQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetProfileQueryResponse;
    client: {
        parameters: Partial<Parameters<GetProfileClient>[0]>;
        return: Awaited<ReturnType<GetProfileClient>>;
    };
};
export const getProfileQueryKey = () => [{ url: "/profile" }] as const;
export type GetProfileQueryKey = ReturnType<typeof getProfileQueryKey>;
export function getProfileQueryOptions(options: GetProfile["client"]["parameters"] = {}) {
    const queryKey = getProfileQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetProfile["data"], GetProfile["error"]>({
                method: "get",
                url: `/profile`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Retrieve the profile
 * @link /profile
 */
export function useGetProfile<TData = GetProfile["response"], TQueryData = GetProfile["response"], TQueryKey extends QueryKey = GetProfileQueryKey>(options: {
    query?: Partial<QueryObserverOptions<GetProfile["response"], GetProfile["error"], TData, TQueryData, TQueryKey>>;
    client?: GetProfile["client"]["parameters"];
} = {}): UseQueryResult<TData, GetProfile["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getProfileQueryKey();
    const query = useQuery({
        ...getProfileQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetProfile["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getProfileSuspenseQueryKey = () => [{ url: "/profile" }] as const;
export type GetProfileSuspenseQueryKey = ReturnType<typeof getProfileSuspenseQueryKey>;
export function getProfileSuspenseQueryOptions(options: GetProfile["client"]["parameters"] = {}) {
    const queryKey = getProfileSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetProfile["data"], GetProfile["error"]>({
                method: "get",
                url: `/profile`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Retrieve the profile
 * @link /profile
 */
export function useGetProfileSuspense<TData = GetProfile["response"], TQueryKey extends QueryKey = GetProfileSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<GetProfile["response"], GetProfile["error"], TData, TQueryKey>>;
    client?: GetProfile["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetProfile["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getProfileSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...getProfileSuspenseQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetProfile["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}