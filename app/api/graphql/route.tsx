import connectDB from "../../../mongoose/db";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { typeDefs } from "../../../graphql/typedefs";
import { resolvers } from "../../../graphql/resolvers";

await connectDB();

const server = new ApolloServer({ typeDefs, resolvers });

export const GET = startServerAndCreateNextHandler(server);
export const POST = startServerAndCreateNextHandler(server);
