import { createConnection, getConnection } from "typeorm";
import { Collection } from "../entities/Collection";
import { CollectionFiles } from "../entities/CollectionFiles";
import { FileTypeInfo } from "../entities/FileTypeInfo";
import { getRepository } from "typeorm";
import uuid4 from "uuid";
import * as faker from "faker";

const setupTestConnection: () => Promise<void> = async () => {
  const host = process.env.CI ? "mysql" : "127.0.0.1";
  await createConnection({
    type: "mysql",
    host,
    port: 3306,
    username: "root",
    password: "password",
    database: "tdr",
    synchronize: true,
    entities: [Collection, CollectionFiles, FileTypeInfo]
  });
};

const tearDownTestConnection: () => Promise<void> = async () => {
  await getConnection().close();
};

const createCollection: () => Promise<Collection> = async () => {
  const collection: Collection = {
    id: uuid4(),
    name: faker.company.companyName(),
    copyright: faker.commerce.department(),
    legalStatus: faker.commerce.productName(),
    closure: faker.internet.domainName()
  };
  return await getRepository(Collection).save(collection);
};

const deleteCollection: (id: string) => Promise<void> = async id => {
  await getRepository(Collection)
    .delete({ id })
    .catch(err => console.log(err));
};

export {
  createCollection,
  deleteCollection,
  setupTestConnection,
  tearDownTestConnection
};
