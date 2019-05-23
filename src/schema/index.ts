import * as queriesSchema from "../graphql/queries.graphql";
import * as collectionSchema from "../graphql/collection.graphql";
import * as fileSchema from "../graphql/files.graphql";
import * as fileInfoSchema from "../graphql/fileinfo.graphql";
import * as mutationSchema from "../graphql/mutations.graphql";
import { collectionResolver } from "../resolvers/collectionResolvers";
import { fileResolver } from "../resolvers/fileResolvers";

import { mergeResolvers } from "merge-graphql-schemas";
import { makeExecutableSchema } from "graphql-tools";
import { IResolvers } from "../generated/graphql";
import { fileInfoResolver } from "../resolvers/fileInfoResolvers";

const resolvers: IResolvers = mergeResolvers([
  collectionResolver,
  fileResolver,
  fileInfoResolver
]);

const schema = makeExecutableSchema({
  typeDefs: [
    collectionSchema,
    queriesSchema,
    mutationSchema,
    fileSchema,
    fileInfoSchema
  ],
  resolvers
});

export { schema };
