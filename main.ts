import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Query } from "./resolvers/Query.ts";
import { Mutation } from "./resolvers/Mutation.ts";
import { Client } from "./resolvers/Client.ts";
import { Distributor } from "./resolvers/Distributor.ts";
import { Order } from "./resolvers/Order.ts"
import { typeDefs } from "./gql/schema.ts";
import montoose from "mongoose";

try {
  const MONGO_URL = Deno.env.get("MONGO_URL");
  if (!MONGO_URL) {
    throw new Error("Please provide a MongoDB connection string");
  }

  // Connect to MongoDB
  await montoose.connect(MONGO_URL);

  console.info("🚀 Connected to MongoDB");

  const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
      Mutation,
      Client,
      Distributor,
      Order,
    },
  });

  const { url } = await startStandaloneServer(server);
  console.info(`🚀 Server ready at ${url}`);
} catch {
  console.log("Error");
}