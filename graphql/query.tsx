import gql from "graphql-tag";

export const GET_TRIPS = gql`
  query Products {
    products {
      id
      title
      description
      grade
    }
  }
`;

