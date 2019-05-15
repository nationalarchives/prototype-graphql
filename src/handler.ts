import { ApolloServer } from "apollo-server-lambda";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { CollectionFiles } from "./entities/CollectionFiles";
import { Collection } from "./entities/Collection";
import { schema } from "./schema";

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

const runHandler = (event, context, handler) =>
  new Promise((resolve, reject) => {
    const callback = (error, body) => (error ? reject(error) : resolve(body));

    handler(event, context, callback);
  });

const run = async (event, context) => {
  await setupConnection();

  const server = new ApolloServer({
    schema
  });
  const handler = server.createHandler();
  const response = await runHandler(event, context, handler);

  return response;
};
exports.tdr = run;
