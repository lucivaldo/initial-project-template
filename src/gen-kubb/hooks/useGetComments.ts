import client from "@kubb/swagger-client/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetCommentsQueryResponse } from "../types/GetComments";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetCommentsClient = typeof client<GetCommentsQueryResponse, never, never>;
type GetComments = {
    data: GetCommentsQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetCommentsQueryResponse;
    client: {
        parameters: Partial<Parameters<GetCommentsClient>[0]>;
        return: Awaited<ReturnType<GetCommentsClient>>;
    };
};
export const getCommentsQueryKey = () => [{ url: "/comments" }] as const;
export type GetCommentsQueryKey = ReturnType<typeof getCommentsQueryKey>;
export function getCommentsQueryOptions(options: GetComments["client"]["parameters"] = {}) {
    const queryKey = getCommentsQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetComments["data"], GetComments["error"]>({
                method: "get",
                url: `/comments`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Retrieve all comments
 * @link /comments
 */
export function useGetComments<TData = GetComments["response"], TQueryData = GetComments["response"], TQueryKey extends QueryKey = GetCommentsQueryKey>(options: {
    query?: Partial<QueryObserverOptions<GetComments["response"], GetComments["error"], TData, TQueryData, TQueryKey>>;
    client?: GetComments["client"]["parameters"];
} = {}): UseQueryResult<TData, GetComments["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getCommentsQueryKey();
    const query = useQuery({
        ...getCommentsQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetComments["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getCommentsSuspenseQueryKey = () => [{ url: "/comments" }] as const;
export type GetCommentsSuspenseQueryKey = ReturnType<typeof getCommentsSuspenseQueryKey>;
export function getCommentsSuspenseQueryOptions(options: GetComments["client"]["parameters"] = {}) {
    const queryKey = getCommentsSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetComments["data"], GetComments["error"]>({
                method: "get",
                url: `/comments`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Retrieve all comments
 * @link /comments
 */
export function useGetCommentsSuspense<TData = GetComments["response"], TQueryKey extends QueryKey = GetCommentsSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<GetComments["response"], GetComments["error"], TData, TQueryKey>>;
    client?: GetComments["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetComments["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getCommentsSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...getCommentsSuspenseQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetComments["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}