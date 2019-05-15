import { IResolvers, TdrCollectionFilesOutput } from "../generated/graphql";
import { getRepository } from "typeorm";
import { CollectionFiles } from "../entities/CollectionFiles";
import { Collection } from "../entities/Collection";

const fileResolver: IResolvers = {
  Mutation: {
    updateFilesOnCollection: async (
      _,
      args,
      _context
    ): Promise<TdrCollectionFilesOutput> => {
      const collection: Collection = await getRepository(Collection).findOne({
        id: args.collectionId
      });
      const newFiles: CollectionFiles[] = args.files.map(file => ({
        ...file,
        collection
      }));

      const output: TdrCollectionFilesOutput = {
        files: await getRepository(CollectionFiles).save(newFiles)
      };
      return output;
    }
  }
};

export { fileResolver };
