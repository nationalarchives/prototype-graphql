import { ApolloServer, gql } from "apollo-server-lambda";
import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";
import { Collection } from "./entities/Collections";
import { CollectionFiles } from "./entities/CollectionFiles";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const setupConnection: () => Promise<void> = async () => {
  await createConnection({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "password",
    database: "tdr",
    synchronize: true,
    entities: [Collection, CollectionFiles]
  });
};

const resolvers = {
  Query: {
    hello: async () => {
      await setupConnection();
      const collection: Collection = new Collection({
        id: "cbcvbcvbvcbvc",
        name: "name",
        copyright: "asdasd",
        closure: "asdasd",
        legalStatus: "asdasd"
      });
      await getRepository(Collection).save(collection);

      const collectionFiles: CollectionFiles = new CollectionFiles({
        id: "asdasdasd",
        checksum: "asdasd",
        size: "asdasd",
        path: "asdasdasd",
        lastModifiedDate: "asdasdas",
        collectionId: "asdasd"
      });
      await getRepository(CollectionFiles).save(collectionFiles);
      return "OK";
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});
exports.hello = server.createHandler();
