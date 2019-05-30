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
import { FileTypeInfo } from "../entities/FileTypeInfo";

const fileResolver: IResolvers = {
  Query: {
    getFilesStatus: async (_, args, _context): Promise<TdrFilesStatus> => {
      const { collectionId } = args;
      const collection: Collection = await getRepository(Collection).findOne({
        id: collectionId
      });
      const isSet: (check: string) => boolean = check => {
        return check && check.length > 0;
      };
      const collectionFiles: CollectionFiles[] = await collection.files;
      const files: TdrFileStatus[] = await Promise.all(
        collectionFiles.map(async file => {
          const fileTypeInfo: FileTypeInfo = await file.fileTypeInfo;
          console.log(
            `file id ${file.id} file type id ${
              fileTypeInfo ? fileTypeInfo.id : null
            }`
          );
          return {
            fileName: file.path,
            virusScanComplete: isSet(file.virusStatus),
            checksumCheckComplete: isSet(file.backendChecksum),
            fileFormatCheckComplete: fileTypeInfo !== null
          };
        })
      );
      return { name: collection.name, files };
    },
    getFiles: async (_, args, _context): Promise<TdrCollectionFiles[]> => {
      const collection: Collection = await getRepository(Collection).findOne({
        id: args.collectionId
      });
      return await getRepository(CollectionFiles).find({ collection });
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
