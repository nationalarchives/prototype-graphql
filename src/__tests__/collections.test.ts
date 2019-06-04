const { createTestClient } = require("apollo-server-testing");
import { schema } from "../schema";
import {
  setupTestConnection,
  tearDownTestConnection,
  createCollection,
  deleteCollection
} from "../utils";
import { ApolloServer, gql } from "apollo-server-lambda";
import { Collection } from "../entities/Collection";

const server = new ApolloServer({
  schema
});

beforeAll(async done => {
  jest.setTimeout(30000);
  await setupTestConnection();
  done();
});

afterAll(async done => {
  await tearDownTestConnection();
  done();
});

describe("collection mutations", () => {
  test("get collection returns a collection if one exists", async done => {
    const {
      id,
      name,
      legalStatus,
      closure,
      copyright
    } = await createCollection();
    const { query } = createTestClient(server);
    const GET_COLLECTION = gql`
      query getCollection($id: ID!) {
        getCollection(id: $id) {
          id
          name
          legalStatus
          closure
          copyright
        }
      }
    `;
    const res = await query({
      query: GET_COLLECTION,
      variables: { id }
    });

    const collection: Collection = res.data.getCollection;
    expect(collection.id).toEqual(id);
    expect(collection.name).toEqual(name);
    expect(collection.legalStatus).toEqual(legalStatus);
    expect(collection.closure).toEqual(closure);
    expect(collection.copyright).toEqual(copyright);

    await deleteCollection(id);
    done();
  });
});
