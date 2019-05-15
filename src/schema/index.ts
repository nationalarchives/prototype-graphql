import * as queriesSchema from "../graphql/queries.graphql";
import * as collectionSchema from "../graphql/collection.graphql";
import * as mutationSchema from "../graphql/mutations.graphql";
import { collectionResolver } from "../resolvers/collectionResolvers";

import { mergeResolvers } from "merge-graphql-schemas";
import { makeExecutableSchema } from "graphql-tools";
import { IResolvers } from "../generated/graphql";

const resolvers: IResolvers = mergeResolvers([collectionResolver]);

const schema = makeExecutableSchema({
  typeDefs: [collectionSchema, queriesSchema, mutationSchema],
  resolvers
});

export { schema };
