import { gql } from "@apollo/client";

const GET_SMART_CONTRACT_SETTINGS = gql`
  query GetSmartContractSettings($project_id: uuid!) {
    smart_contract_settings(where: { project_id: { _eq: $project_id } }) {
      id
      has_allowlist
      mint_price
      presale_mint_price
      presale_token_limit
      presale_wallet_mint_limit
      wallet_mint_limit
    }
  }
`;

export default GET_SMART_CONTRACT_SETTINGS;
