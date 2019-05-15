export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  createCollection?: Maybe<Scalars["ID"]>;
};

export type MutationCreateCollectionArgs = {
  collection?: Maybe<TdrCollectionInput>;
};

export type Query = {
  getCollection?: Maybe<TdrCollection>;
};

export type QueryGetCollectionArgs = {
  id: Scalars["ID"];
};

export type TdrCollection = {
  id: Scalars["String"];
  name: Scalars["String"];
  copyright: Scalars["String"];
  closure: Scalars["String"];
  legalStatus: Scalars["String"];
  files?: Maybe<Array<Maybe<TrdCollectionFiles>>>;
};

export type TdrCollectionInput = {
  name: Scalars["String"];
  copyright: Scalars["String"];
  closure: Scalars["String"];
  legalStatus: Scalars["String"];
};

export type TrdCollectionFiles = {
  id?: Maybe<Scalars["String"]>;
  checksum?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["String"]>;
  path?: Maybe<Scalars["String"]>;
  lastModifiedDate?: Maybe<Scalars["String"]>;
};

export type TrdCollectionFilesInput = {
  id?: Maybe<Scalars["String"]>;
  checksum?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["String"]>;
  path?: Maybe<Scalars["String"]>;
  lastModifiedDate?: Maybe<Scalars["String"]>;
};
import { IGraphQLContext } from "../context";

import { GraphQLResolveInfo } from "graphql";

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: {};
  ID: Scalars["ID"];
  TdrCollection: TdrCollection;
  String: Scalars["String"];
  TrdCollectionFiles: TrdCollectionFiles;
  Mutation: {};
  TdrCollectionInput: TdrCollectionInput;
  Boolean: Scalars["Boolean"];
  TrdCollectionFilesInput: TrdCollectionFilesInput;
}>;

export type MutationResolvers<
  ContextType = IGraphQLContext,
  ParentType = ResolversTypes["Mutation"]
> = ResolversObject<{
  createCollection?: Resolver<
    Maybe<ResolversTypes["ID"]>,
    ParentType,
    ContextType,
    MutationCreateCollectionArgs
  >;
}>;

export type QueryResolvers<
  ContextType = IGraphQLContext,
  ParentType = ResolversTypes["Query"]
> = ResolversObject<{
  getCollection?: Resolver<
    Maybe<ResolversTypes["TdrCollection"]>,
    ParentType,
    ContextType,
    QueryGetCollectionArgs
  >;
}>;

export type TdrCollectionResolvers<
  ContextType = IGraphQLContext,
  ParentType = ResolversTypes["TdrCollection"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  copyright?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  closure?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  legalStatus?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  files?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["TrdCollectionFiles"]>>>,
    ParentType,
    ContextType
  >;
}>;

export type TrdCollectionFilesResolvers<
  ContextType = IGraphQLContext,
  ParentType = ResolversTypes["TrdCollectionFiles"]
> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  checksum?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  lastModifiedDate?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
}>;

export type TrdCollectionFilesInputResolvers<
  ContextType = IGraphQLContext,
  ParentType = ResolversTypes["TrdCollectionFilesInput"]
> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  checksum?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  lastModifiedDate?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
}>;

export type Resolvers<ContextType = IGraphQLContext> = ResolversObject<{
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  TdrCollection?: TdrCollectionResolvers<ContextType>;
  TrdCollectionFiles?: TrdCollectionFilesResolvers<ContextType>;
  TrdCollectionFilesInput?: TrdCollectionFilesInputResolvers<ContextType>;
}>;

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = IGraphQLContext> = Resolvers<ContextType>;
