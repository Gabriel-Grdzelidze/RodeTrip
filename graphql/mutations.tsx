import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      id
      email
      password
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      email
    }
  }
`;

export const CREATE_DRIVER = gql`
  mutation CreateDriver($fullName: String!, $email: String!, $password: String!, $licenseNumber: String!, $idNumber: String!) {
    createDriver(fullName: $fullName, email: $email, password: $password, licenseNumber: $licenseNumber, idNumber: $idNumber) {
      id
      fullName
      email
      password
      idNumber
      licenseNumber
    }
  }
`;

export const DELETE_DRIVER = gql`
  mutation DeleteDriver($id: ID!) {
    deleteDriver(id: $id) {
      id
      fullName
      email
    }
  }
`;

export const CREATE_TRIP = gql`
  mutation CreateTrip($date: String!, $locations: [String!]!, $grade: Int) {
    createTrip(date: $date, locations: $locations, grade: $grade) {
      id
      locations
      date
      grade
    }
  }
`;

export const DELETE_TRIP = gql`
  mutation DeleteTrip($id: ID!) {
    deleteTrip(id: $id) {
      id
      locations
      date
      grade
    }
  }
`;
