import { gql } from "@apollo/client";

const CREATE_PROJECT = gql`
  mutation CreateProject($input: project_insert_input!) {
    insert_project_one(object: $input) {
      id
      created_at
      description
      metadata_cid
      name
      updated_at
      user_id
    }
  }
`;

export default CREATE_PROJECT;
