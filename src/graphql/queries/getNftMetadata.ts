import { gql } from "@apollo/client";

const GET_NFT_METADATA = gql`
  query GetNFTMetadata(
    $project_id: uuid!
    $limit: Int = 50
    $offset: Int = 0
    $order_by: [nft_metadata_order_by!] = {}
  ) {
    nft_metadata(
      where: { project_id: { _eq: $project_id } }
      order_by: $order_by
      limit: $limit
      offset: $offset
    ) {
      description
      external_url
      id
      image
      name
      token_id
      nft_attributes {
        display_type
        id
        trait_type
        value
      }
    }
    nft_attribute_aggregate(
      distinct_on: trait_type
      where: { nft_metadatum: { project_id: { _eq: $project_id } } }
    ) {
      nodes {
        trait_type
      }
    }
  }
`;

export default GET_NFT_METADATA;
