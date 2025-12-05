import { Context } from "../app/api/graphql/route";

export const resolvers = {
  Query: {
    trips: async (parent: any, args: any, context: Context) => {
      return await context.prisma.trip.findMany();
    },
  },
  Mutation: {
    addTrip: async (parent: any, args: any, context: Context) => {
      return await context.prisma.trip.create({
        data: {
          title: args.title,
          description: args.description,
          grade: args.grade,
        },
      });
    },
  },
};
