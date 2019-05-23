import { IResolvers, TdrFileInfo } from "../generated/graphql";
import { Repository, getRepository } from "typeorm";
import { FileTypeInfo } from "../entities/FileTypeInfo";
import uuid4 from "uuid";
import { CollectionFiles } from "../entities/CollectionFiles";

const fileInfoResolver: IResolvers = {
  Mutation: {
    createFileInfo: async (_, args, _context): Promise<TdrFileInfo> => {
      const { id, input } = args;
      const repository: Repository<CollectionFiles> = getRepository(
        CollectionFiles
      );
      const info: FileTypeInfo = await getRepository(FileTypeInfo).save({
        id: uuid4(),
        ...input
      });
      const file: CollectionFiles = await repository.findOne({ id });
      file.fileTypeInfo = info;
      repository.save(file);
      return info;
    }
  }
};

export { fileInfoResolver };
