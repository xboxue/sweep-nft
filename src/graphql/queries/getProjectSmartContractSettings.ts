import { gql } from "@apollo/client";

const GET_PROJECT_SMART_CONTRACT_SETTINGS = gql`
  query GetProjectSmartContractSettings($project_id: uuid!) {
    smart_contract_settings(where: { project_id: { _eq: $project_id } }) {
      id
      has_allowlist
      mint_price
      presale_mint_price
      presale_token_limit
      presale_wallet_mint_limit
      wallet_mint_limit
    }
    nft_metadata_aggregate(where: { project_id: { _eq: $project_id } }) {
      aggregate {
        count
      }
    }
  }
`;

export default GET_PROJECT_SMART_CONTRACT_SETTINGS;
