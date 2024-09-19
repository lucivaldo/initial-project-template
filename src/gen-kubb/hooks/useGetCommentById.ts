import client from "@kubb/swagger-client/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetCommentByIdQueryResponse, GetCommentByIdPathParams } from "../types/GetCommentById";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetCommentByIdClient = typeof client<GetCommentByIdQueryResponse, never, never>;
type GetCommentById = {
    data: GetCommentByIdQueryResponse;
    error: never;
    request: never;
    pathParams: GetCommentByIdPathParams;
    queryParams: never;
    headerParams: never;
    response: GetCommentByIdQueryResponse;
    client: {
        parameters: Partial<Parameters<GetCommentByIdClient>[0]>;
        return: Awaited<ReturnType<GetCommentByIdClient>>;
    };
};
export const getCommentByIdQueryKey = (id: GetCommentByIdPathParams["id"]) => [{ url: "/comments/:id", params: { id: id } }] as const;
export type GetCommentByIdQueryKey = ReturnType<typeof getCommentByIdQueryKey>;
export function getCommentByIdQueryOptions(id: GetCommentByIdPathParams["id"], options: GetCommentById["client"]["parameters"] = {}) {
    const queryKey = getCommentByIdQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetCommentById["data"], GetCommentById["error"]>({
                method: "get",
                url: `/comments/${id}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Retrieve a comment by ID
 * @link /comments/:id
 */
export function useGetCommentById<TData = GetCommentById["response"], TQueryData = GetCommentById["response"], TQueryKey extends QueryKey = GetCommentByIdQueryKey>(id: GetCommentByIdPathParams["id"], options: {
    query?: Partial<QueryObserverOptions<GetCommentById["response"], GetCommentById["error"], TData, TQueryData, TQueryKey>>;
    client?: GetCommentById["client"]["parameters"];
} = {}): UseQueryResult<TData, GetCommentById["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getCommentByIdQueryKey(id);
    const query = useQuery({
        ...getCommentByIdQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetCommentById["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getCommentByIdSuspenseQueryKey = (id: GetCommentByIdPathParams["id"]) => [{ url: "/comments/:id", params: { id: id } }] as const;
export type GetCommentByIdSuspenseQueryKey = ReturnType<typeof getCommentByIdSuspenseQueryKey>;
export function getCommentByIdSuspenseQueryOptions(id: GetCommentByIdPathParams["id"], options: GetCommentById["client"]["parameters"] = {}) {
    const queryKey = getCommentByIdSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetCommentById["data"], GetCommentById["error"]>({
                method: "get",
                url: `/comments/${id}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Retrieve a comment by ID
 * @link /comments/:id
 */
export function useGetCommentByIdSuspense<TData = GetCommentById["response"], TQueryKey extends QueryKey = GetCommentByIdSuspenseQueryKey>(id: GetCommentByIdPathParams["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetCommentById["response"], GetCommentById["error"], TData, TQueryKey>>;
    client?: GetCommentById["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetCommentById["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getCommentByIdSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...getCommentByIdSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetCommentById["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}