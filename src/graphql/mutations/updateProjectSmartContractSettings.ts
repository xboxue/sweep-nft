import { gql } from "@apollo/client";

const UPDATE_PROJECT_SMART_CONTRACT_SETTINGS = gql`
  mutation UpdateProjectSmartContractSettings(
    $project_id: uuid!
    $input: smart_contract_settings_set_input!
  ) {
    update_smart_contract_settings(
      where: { project_id: { _eq: $project_id } }
      _set: $input
    ) {
      returning {
        has_allowlist
        id
        mint_price
        presale_mint_price
        presale_token_limit
        presale_wallet_mint_limit
        wallet_mint_limit
      }
    }
  }
`;

export default UPDATE_PROJECT_SMART_CONTRACT_SETTINGS;
