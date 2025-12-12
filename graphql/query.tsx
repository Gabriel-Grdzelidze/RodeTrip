import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      email
      password
    }
  }
`;

export const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      email
      password
    }
  }
`;

export const GET_DRIVERS = gql`
  query GetDrivers {
    drivers {
      id
      fullName
      email
      licenseNumber
      idNumber
      password
    }
  }
`;

export const GET_DRIVER = gql`
  query GetDriver($id: ID!) {
    driver(id: $id) {
      id
      fullName
      email
      licenseNumber
      idNumber
      password
    }
  }
`;

export const GET_TRIPS = gql`
  query GetTrips {
    trips {
      id
      locations
      date
      grade
    }
  }
`;

export const GET_TRIP = gql`
  query GetTrip($id: ID!) {
    trip(id: $id) {
      id
      locations
      date
      grade
    }
  }
`;
