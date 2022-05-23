import { gql } from "@apollo/client";

const UPDATE_PROJECT_METADATA_CID = gql`
  mutation UpdateProjectMetadataCID($id: uuid!, $metadata_cid: String!) {
    update_project_by_pk(
      pk_columns: { id: $id }
      _set: { metadata_cid: $metadata_cid }
    ) {
      id
      metadata_cid
    }
  }
`;

export default UPDATE_PROJECT_METADATA_CID;
