import { gql } from "@apollo/client";

const SET_PROJECT_NFT_METADATA = gql`
  mutation SetProjectNFTMetadata(
    $objects: [nft_metadata_insert_input!]!
    $id: uuid!
    $metadata_cid: String!
  ) {
    insert_nft_metadata(objects: $objects) {
      returning {
        id
      }
    }
    update_project_by_pk(
      pk_columns: { id: $id }
      _set: { metadata_cid: $metadata_cid }
    ) {
      id
      metadata_cid
    }
  }
`;

export default SET_PROJECT_NFT_METADATA;
