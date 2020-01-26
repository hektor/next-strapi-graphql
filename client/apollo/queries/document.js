import gql from "graphql-tag";

const DOCUMENT_QUERY = gql`
  query Documents($id: ID!) {
    document(id: $id) {
      id
      Titel
      Beschrijving
      updated_at
    }
  }
`;

export default DOCUMENT_QUERY;
