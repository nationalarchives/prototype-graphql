import { ApolloServer, gql } from "apollo-server-lambda";
import "reflect-metadata";
import { getRepository } from "typeorm";
import { Collection } from "./entities/Collections";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      getRepository(Collection).create({
        id: "",
        name: "asdasd",
        copyright: "asdasd",
        closure: "asdasd",
        legalStatus: "asdasd"
      });
      return "OK";
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});
exports.hello = server.createHandler();
