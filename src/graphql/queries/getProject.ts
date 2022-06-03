import { gql } from "@apollo/client";

const GET_PROJECT = gql`
  query GetProject($id: uuid!) {
    project_by_pk(id: $id) {
      created_at
      description
      id
      metadata_cid
      name
      symbol
      updated_at
    }
  }
`;

export default GET_PROJECT;
