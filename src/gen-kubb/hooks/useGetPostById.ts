import client from "@kubb/swagger-client/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetPostByIdQueryResponse, GetPostByIdPathParams } from "../types/GetPostById";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetPostByIdClient = typeof client<GetPostByIdQueryResponse, never, never>;
type GetPostById = {
    data: GetPostByIdQueryResponse;
    error: never;
    request: never;
    pathParams: GetPostByIdPathParams;
    queryParams: never;
    headerParams: never;
    response: GetPostByIdQueryResponse;
    client: {
        parameters: Partial<Parameters<GetPostByIdClient>[0]>;
        return: Awaited<ReturnType<GetPostByIdClient>>;
    };
};
export const getPostByIdQueryKey = (id: GetPostByIdPathParams["id"]) => [{ url: "/posts/:id", params: { id: id } }] as const;
export type GetPostByIdQueryKey = ReturnType<typeof getPostByIdQueryKey>;
export function getPostByIdQueryOptions(id: GetPostByIdPathParams["id"], options: GetPostById["client"]["parameters"] = {}) {
    const queryKey = getPostByIdQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetPostById["data"], GetPostById["error"]>({
                method: "get",
                url: `/posts/${id}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Retrieve a post by ID
 * @link /posts/:id
 */
export function useGetPostById<TData = GetPostById["response"], TQueryData = GetPostById["response"], TQueryKey extends QueryKey = GetPostByIdQueryKey>(id: GetPostByIdPathParams["id"], options: {
    query?: Partial<QueryObserverOptions<GetPostById["response"], GetPostById["error"], TData, TQueryData, TQueryKey>>;
    client?: GetPostById["client"]["parameters"];
} = {}): UseQueryResult<TData, GetPostById["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getPostByIdQueryKey(id);
    const query = useQuery({
        ...getPostByIdQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetPostById["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getPostByIdSuspenseQueryKey = (id: GetPostByIdPathParams["id"]) => [{ url: "/posts/:id", params: { id: id } }] as const;
export type GetPostByIdSuspenseQueryKey = ReturnType<typeof getPostByIdSuspenseQueryKey>;
export function getPostByIdSuspenseQueryOptions(id: GetPostByIdPathParams["id"], options: GetPostById["client"]["parameters"] = {}) {
    const queryKey = getPostByIdSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetPostById["data"], GetPostById["error"]>({
                method: "get",
                url: `/posts/${id}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Retrieve a post by ID
 * @link /posts/:id
 */
export function useGetPostByIdSuspense<TData = GetPostById["response"], TQueryKey extends QueryKey = GetPostByIdSuspenseQueryKey>(id: GetPostByIdPathParams["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetPostById["response"], GetPostById["error"], TData, TQueryKey>>;
    client?: GetPostById["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetPostById["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getPostByIdSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...getPostByIdSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetPostById["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}