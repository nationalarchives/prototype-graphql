import { IResolvers } from "../generated/graphql";
import { Collection } from "../entities/Collection";
import { getRepository } from "typeorm";
import uuid4 from "uuid";

const collectionResolver: IResolvers = {
  Query: {
    getCollection: async (_, args, _context): Promise<Collection> => {
      return getRepository(Collection).findOne({ id: args.id });
    }
  },
  Mutation: {
    createCollection: async (_, args, _context): Promise<string> => {
      const collection: Collection = await getRepository(Collection).save({
        id: uuid4(),
        ...args.collection
      });
      return collection.id;
    }
  }
};

export { collectionResolver };
