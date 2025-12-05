export const typeDefs = `#graphql
  type Products {
    id: ID!
    title: String
    description: String
    grade: String
  }
  type Query {
   trips: [Trips!]!
  }

  type Mutation {
   addTrip(title: String!, description: String!, grade: String!): Trips!
  }
`;
