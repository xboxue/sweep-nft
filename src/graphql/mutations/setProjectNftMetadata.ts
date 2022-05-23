import { gql } from "@apollo/client";

const SET_PROJECT_NFT_METADATA = gql`
  mutation SetProjectNFTMetadata($input: [nft_metadata_insert_input!]!) {
    insert_nft_metadata(objects: $input) {
      returning {
        id
      }
    }
  }
`;

export default SET_PROJECT_NFT_METADATA;
