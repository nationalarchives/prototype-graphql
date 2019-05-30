import { GraphQLResolveInfo } from "graphql";
import { IGraphQLContext } from "../context";
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: "Mutation";
  createCollection?: Maybe<TdrCollection>;
  updateFilesOnCollection?: Maybe<TdrCollectionFilesOutput>;
  updateFileVirusCheckStatus?: Maybe<TdrCollectionFiles>;
  updateFileChecksumStatus?: Maybe<TdrCollectionFiles>;
  createFileInfo?: Maybe<TdrFileInfo>;
};

export type MutationCreateCollectionArgs = {
  collection?: Maybe<TdrCollectionInput>;
};

export type MutationUpdateFilesOnCollectionArgs = {
  collectionId?: Maybe<Scalars["ID"]>;
  files?: Maybe<Array<Maybe<TdrCollectionFilesInput>>>;
};

export type MutationUpdateFileVirusCheckStatusArgs = {
  fileId?: Maybe<Scalars["ID"]>;
  virusStatus?: Maybe<Scalars["String"]>;
};

export type MutationUpdateFileChecksumStatusArgs = {
  fileId?: Maybe<Scalars["ID"]>;
  checksum?: Maybe<Scalars["String"]>;
};

export type MutationCreateFileInfoArgs = {
  id?: Maybe<Scalars["ID"]>;
  input?: Maybe<TdrFileInfoInput>;
};

export type Query = {
  __typename?: "Query";
  getCollection?: Maybe<TdrCollection>;
  getFiles?: Maybe<TdrCollectionFiles>;
  getFilesStatus?: Maybe<TdrFilesStatus>;
  getCollections?: Maybe<Array<Maybe<TdrCollection>>>;
};

export type QueryGetCollectionArgs = {
  id: Scalars["ID"];
};

export type QueryGetFilesArgs = {
  collectionId: Scalars["ID"];
};

export type QueryGetFilesStatusArgs = {
  collectionId: Scalars["ID"];
};

export type QueryGetCollectionsArgs = {
  offset?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type TdrCollection = {
  __typename?: "TdrCollection";
  id: Scalars["String"];
  name: Scalars["String"];
  copyright: Scalars["String"];
  closure: Scalars["String"];
  legalStatus: Scalars["String"];
  files?: Maybe<Array<Maybe<TdrCollectionFiles>>>;
};

export type TdrCollectionFiles = {
  __typename?: "TdrCollectionFiles";
  id?: Maybe<Scalars["String"]>;
  checksum?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["String"]>;
  hasVirus?: Maybe<Scalars["Boolean"]>;
  checksumMatches?: Maybe<Scalars["Boolean"]>;
  path?: Maybe<Scalars["String"]>;
  lastModifiedDate?: Maybe<Scalars["String"]>;
};

export type TdrCollectionFilesInput = {
  id: Scalars["String"];
  checksum: Scalars["String"];
  size: Scalars["String"];
  path: Scalars["String"];
  lastModifiedDate: Scalars["String"];
};

export type TdrCollectionFilesOutput = {
  __typename?: "TdrCollectionFilesOutput";
  files?: Maybe<Array<Maybe<TdrCollectionFiles>>>;
};

export type TdrCollectionInput = {
  name: Scalars["String"];
  copyright: Scalars["String"];
  closure: Scalars["String"];
  legalStatus: Scalars["String"];
};

export type TdrFileInfo = {
  __typename?: "TdrFileInfo";
  id?: Maybe<Scalars["ID"]>;
  format?: Maybe<Scalars["String"]>;
  mime?: Maybe<Scalars["String"]>;
  basis?: Maybe<Scalars["String"]>;
  warning?: Maybe<Scalars["String"]>;
};

export type TdrFileInfoInput = {
  format: Scalars["String"];
  mime: Scalars["String"];
  basis: Scalars["String"];
  warning: Scalars["String"];
};

export type TdrFilesStatus = {
  __typename?: "TdrFilesStatus";
  name: Scalars["String"];
  files?: Maybe<Array<Maybe<TdrFileStatus>>>;
};

export type TdrFileStatus = {
  __typename?: "TdrFileStatus";
  fileName: Scalars["String"];
  virusScanComplete?: Maybe<Scalars["Boolean"]>;
  fileFormatCheckComplete?: Maybe<Scalars["Boolean"]>;
  checksumCheckComplete?: Maybe<Scalars["Boolean"]>;
};
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
  TdrCollectionFiles: TdrCollectionFiles;
  Boolean: Scalars["Boolean"];
  TdrFilesStatus: TdrFilesStatus;
  TdrFileStatus: TdrFileStatus;
  Int: Scalars["Int"];
  Mutation: {};
  TdrCollectionInput: TdrCollectionInput;
  TdrCollectionFilesInput: TdrCollectionFilesInput;
  TdrCollectionFilesOutput: TdrCollectionFilesOutput;
  TdrFileInfoInput: TdrFileInfoInput;
  TdrFileInfo: TdrFileInfo;
}>;

export type MutationResolvers<
  ContextType = IGraphQLContext,
  ParentType = ResolversTypes["Mutation"]
> = ResolversObject<{
  createCollection?: Resolver<
    Maybe<ResolversTypes["TdrCollection"]>,
    ParentType,
    ContextType,
    MutationCreateCollectionArgs
  >;
  updateFilesOnCollection?: Resolver<
    Maybe<ResolversTypes["TdrCollectionFilesOutput"]>,
    ParentType,
    ContextType,
    MutationUpdateFilesOnCollectionArgs
  >;
  updateFileVirusCheckStatus?: Resolver<
    Maybe<ResolversTypes["TdrCollectionFiles"]>,
    ParentType,
    ContextType,
    MutationUpdateFileVirusCheckStatusArgs
  >;
  updateFileChecksumStatus?: Resolver<
    Maybe<ResolversTypes["TdrCollectionFiles"]>,
    ParentType,
    ContextType,
    MutationUpdateFileChecksumStatusArgs
  >;
  createFileInfo?: Resolver<
    Maybe<ResolversTypes["TdrFileInfo"]>,
    ParentType,
    ContextType,
    MutationCreateFileInfoArgs
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
  getFiles?: Resolver<
    Maybe<ResolversTypes["TdrCollectionFiles"]>,
    ParentType,
    ContextType,
    QueryGetFilesArgs
  >;
  getFilesStatus?: Resolver<
    Maybe<ResolversTypes["TdrFilesStatus"]>,
    ParentType,
    ContextType,
    QueryGetFilesStatusArgs
  >;
  getCollections?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["TdrCollection"]>>>,
    ParentType,
    ContextType,
    QueryGetCollectionsArgs
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
    Maybe<Array<Maybe<ResolversTypes["TdrCollectionFiles"]>>>,
    ParentType,
    ContextType
  >;
}>;

export type TdrCollectionFilesResolvers<
  ContextType = IGraphQLContext,
  ParentType = ResolversTypes["TdrCollectionFiles"]
> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  checksum?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  hasVirus?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  checksumMatches?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  path?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  lastModifiedDate?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
}>;

export type TdrCollectionFilesOutputResolvers<
  ContextType = IGraphQLContext,
  ParentType = ResolversTypes["TdrCollectionFilesOutput"]
> = ResolversObject<{
  files?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["TdrCollectionFiles"]>>>,
    ParentType,
    ContextType
  >;
}>;

export type TdrFileInfoResolvers<
  ContextType = IGraphQLContext,
  ParentType = ResolversTypes["TdrFileInfo"]
> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  format?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  mime?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  basis?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  warning?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
}>;

export type TdrFilesStatusResolvers<
  ContextType = IGraphQLContext,
  ParentType = ResolversTypes["TdrFilesStatus"]
> = ResolversObject<{
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  files?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["TdrFileStatus"]>>>,
    ParentType,
    ContextType
  >;
}>;

export type TdrFileStatusResolvers<
  ContextType = IGraphQLContext,
  ParentType = ResolversTypes["TdrFileStatus"]
> = ResolversObject<{
  fileName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  virusScanComplete?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  fileFormatCheckComplete?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  checksumCheckComplete?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
}>;

export type Resolvers<ContextType = IGraphQLContext> = ResolversObject<{
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  TdrCollection?: TdrCollectionResolvers<ContextType>;
  TdrCollectionFiles?: TdrCollectionFilesResolvers<ContextType>;
  TdrCollectionFilesOutput?: TdrCollectionFilesOutputResolvers<ContextType>;
  TdrFileInfo?: TdrFileInfoResolvers<ContextType>;
  TdrFilesStatus?: TdrFilesStatusResolvers<ContextType>;
  TdrFileStatus?: TdrFileStatusResolvers<ContextType>;
}>;

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = IGraphQLContext> = Resolvers<ContextType>;
