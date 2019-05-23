import {
  IResolvers,
  TdrCollectionFilesOutput,
  TdrCollectionFiles,
  TdrFilesStatus,
  TdrFileStatus
} from "../generated/graphql";
import { getRepository, Repository } from "typeorm";
import { CollectionFiles } from "../entities/CollectionFiles";
import { Collection } from "../entities/Collection";

const fileResolver: IResolvers = {
  Query: {
    getFilesStatus: async (_, args, _context): Promise<TdrFilesStatus> => {
      const { id } = args;
      const collection: Collection = await getRepository(Collection).findOne({
        id
      });
      const isSet: (check: string) => boolean = check => {
        return check !== undefined && check.length > 0;
      };
      const files: TdrFileStatus[] = collection.files.map(file => ({
        virusScanComplete: isSet(file.virusStatus),
        checksumCheckComplete: isSet(file.backendChecksum),
        fileFormatCheckComplete: file.fileTypeInfo !== undefined
      }));
      return { files };
    },
    getFiles: async (_, args, _context): Promise<TdrCollectionFiles> => {
      const collection: Collection = await getRepository(Collection).findOne({
        id: args.collectionId
      });
      return await getRepository(CollectionFiles).findOne({ collection });
    }
  },
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
    },
    updateFileVirusCheckStatus: async (
      _,
      args,
      _context
    ): Promise<TdrCollectionFiles> => {
      const { fileId } = args;
      const repository: Repository<CollectionFiles> = getRepository(
        CollectionFiles
      );
      const file: CollectionFiles = await repository.findOne({ id: fileId });
      file.virusStatus = args.virusStatus;
      return await repository.save(file);
    },
    updateFileChecksumStatus: async (
      _,
      args,
      _context
    ): Promise<TdrCollectionFiles> => {
      const { fileId } = args;
      const repository: Repository<CollectionFiles> = getRepository(
        CollectionFiles
      );
      const file: CollectionFiles = await repository.findOne({ id: fileId });
      file.backendChecksum = args.checksum;
      return await repository.save(file);
    }
  }
};

export { fileResolver };
