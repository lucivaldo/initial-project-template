import client from "@kubb/swagger-client/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetPostsQueryResponse } from "../types/GetPosts";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetPostsClient = typeof client<GetPostsQueryResponse, never, never>;
type GetPosts = {
    data: GetPostsQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetPostsQueryResponse;
    client: {
        parameters: Partial<Parameters<GetPostsClient>[0]>;
        return: Awaited<ReturnType<GetPostsClient>>;
    };
};
export const getPostsQueryKey = () => [{ url: "/posts" }] as const;
export type GetPostsQueryKey = ReturnType<typeof getPostsQueryKey>;
export function getPostsQueryOptions(options: GetPosts["client"]["parameters"] = {}) {
    const queryKey = getPostsQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetPosts["data"], GetPosts["error"]>({
                method: "get",
                url: `/posts`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Retrieve all posts
 * @link /posts
 */
export function useGetPosts<TData = GetPosts["response"], TQueryData = GetPosts["response"], TQueryKey extends QueryKey = GetPostsQueryKey>(options: {
    query?: Partial<QueryObserverOptions<GetPosts["response"], GetPosts["error"], TData, TQueryData, TQueryKey>>;
    client?: GetPosts["client"]["parameters"];
} = {}): UseQueryResult<TData, GetPosts["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getPostsQueryKey();
    const query = useQuery({
        ...getPostsQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetPosts["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getPostsSuspenseQueryKey = () => [{ url: "/posts" }] as const;
export type GetPostsSuspenseQueryKey = ReturnType<typeof getPostsSuspenseQueryKey>;
export function getPostsSuspenseQueryOptions(options: GetPosts["client"]["parameters"] = {}) {
    const queryKey = getPostsSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetPosts["data"], GetPosts["error"]>({
                method: "get",
                url: `/posts`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Retrieve all posts
 * @link /posts
 */
export function useGetPostsSuspense<TData = GetPosts["response"], TQueryKey extends QueryKey = GetPostsSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<GetPosts["response"], GetPosts["error"], TData, TQueryKey>>;
    client?: GetPosts["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetPosts["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getPostsSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...getPostsSuspenseQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetPosts["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}