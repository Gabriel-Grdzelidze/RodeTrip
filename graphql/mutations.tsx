import gql from "graphql-tag";

export const ADD_PRODUCT = gql`
  mutation addTrip(
    $title: String!
    $description: String!
    $grade: String!
  ) {
    addProduct(
      title: $title
      description: $description
      grade: $grade
    ) {
      id
      title
      description
      grade
    }
  }
`;

