import {
  Box,
  Divider,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import { useParams } from "react-router-dom";
import {
  Smart_Contract_Settings,
  useGetSmartContractSettingsQuery,
} from "../../generated/graphql";
import FormikSwitch from "../common/FormikSwitch/FormikSwitch";
import FormikTextField from "../common/FormikTextField/FormikTextField";

const getInitialValues = (settings: Smart_Contract_Settings) => {
  return {
    hasAllowlist: settings.has_allowlist,
    hasPresaleMintPrice: !!settings.presale_mint_price,
    hasPresaleTokenLimit: !!settings.presale_token_limit,
    hasMintPrice: !!settings.mint_price,
    hasWalletMintLimit: !!settings.wallet_mint_limit,
    mintPrice: settings.mint_price || 0.1,
    presaleMintPrice: settings.presale_mint_price || 0.1,
    walletMintLimit: settings.wallet_mint_limit || 10,
    presaleTokenLimit: settings.presale_token_limit || 1000,
  };
};

const ProjectSmartContractForm = () => {
  const { id } = useParams();
  const { data, loading, error } = useGetSmartContractSettingsQuery({
    variables: { project_id: id },
  });

  if (loading) return <Skeleton />;

  return (
    <Box sx={{ maxWidth: 640, mx: "auto" }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Configure smart contract
      </Typography>
      <Divider />
      <Formik
        initialValues={getInitialValues(data?.smart_contract_settings)}
        onSubmit={() => {
          console.log();
        }}
      >
        {formik => (
          <Stack
            spacing={2}
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{ mt: 2 }}
          >
            <FormikSwitch
              title="Use presale allowlist"
              description="Let allowlisted addresses mint before the public."
              field="hasAllowlist"
            />
            {formik.values.hasAllowlist && (
              <Stack
                spacing={1}
                sx={{
                  p: 2,
                  bgcolor: theme => theme.palette.grey[50],
                  borderRadius: 1,
                }}
              >
                <FormikSwitch
                  title="Charge to mint"
                  description="Set a minting price for the presale. We recommend between 0.05-0.1 ETH."
                  field="hasPresaleMintPrice"
                />
                {formik.values.hasPresaleMintPrice && (
                  <FormikTextField
                    label="Presale mint price"
                    field="presaleMintPrice"
                  />
                )}
                <FormikSwitch
                  title="Limit presale token mints"
                  description="Set a limit on the number of tokens that can be minted during presale."
                  field="hasPresaleTokenLimit"
                />
                {formik.values.hasPresaleTokenLimit && (
                  <FormikTextField
                    label="Presale token limit"
                    field="presaleTokenLimit"
                  />
                )}
              </Stack>
            )}
            <FormikSwitch
              title="Charge to mint"
              description="Set a minting price for the public sale. We recommend between 0.05-0.1 ETH."
              field="hasMintPrice"
            />
            {formik.values.hasMintPrice && (
              <FormikTextField label="Mint price" field="mintPrice" />
            )}
            <FormikSwitch
              title="Limit wallet mints"
              description="Set a limit for the number of mints per wallet. We recommend between 5-10."
              field="hasWalletMintLimit"
            />
            {formik.values.hasWalletMintLimit && (
              <FormikTextField
                label="Wallet mint limit"
                field="walletMintLimit"
              />
            )}
          </Stack>
        )}
      </Formik>
    </Box>
  );
};

export default ProjectSmartContractForm;
