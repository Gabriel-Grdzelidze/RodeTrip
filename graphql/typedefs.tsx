import gql from "graphql-tag";

export const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String!
  }

  type Driver {
    id: ID!
    email: String!
    password: String!
    licenseNumber: String!
    idNumber: String!
    fullName: String!
  }

  type Trip {
    id: ID!
    locations: [String!]!
    date: String!
    driver: Driver!
    grade: Int
  }

  type Query {
    users: [User!]!
    user(id: ID!): User

    drivers: [Driver!]!
    driver(id: ID!): Driver

    trips: [Trip!]!
    trip(id: ID!): Trip
  }

  type Mutation {
    createUser(email: String!, password: String!): User!
    deleteUser(id: ID!): User

    createDriver(
      email: String!
      password: String!
      licenseNumber: String!
      idNumber: String!
      fullName: String!
    ): Driver!
    deleteDriver(id: ID!): Driver

    createTrip(
      locations: [String!]!
      date: String!
      grade: Int
    ): Trip!
    deleteTrip(id: ID!): Trip
  }
`;

module.exports = typeDefs;
