import { gql } from "@apollo/client";

const UPDATE_NFT_METADATA = gql`
  mutation UpdateNFTMetadata($id: uuid!, $metadata_cid: String!) {
    update_project_by_pk(
      pk_columns: { id: $id }
      _set: { metadata_cid: $metadata_cid }
    ) {
      id
      metadata_cid
    }
  }
`;

export default UPDATE_NFT_METADATA;
