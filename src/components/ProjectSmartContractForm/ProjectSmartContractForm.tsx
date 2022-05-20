import { Divider, Paper, Stack, Typography } from "@mui/material";
import { Formik } from "formik";
import FormikSwitch from "../common/FormikSwitch/FormikSwitch";
import FormikTextField from "../common/FormikTextField/FormikTextField";

const ProjectSmartContractForm = () => {
  return (
    <>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Configure smart contract
      </Typography>
      <Divider />
      <Formik
        initialValues={{
          hasAllowlist: true,
          hasPresaleMintPrice: false,
          hasPresaleLimit: false,
          hasMintPrice: false,
          hasWalletMintLimit: false,
          mintPrice: 0.1,
          presaleMintPrice: 0.1,
          mintLimit: 10,
          presaleLimit: 1000,
        }}
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
                  title="Limit presale mints"
                  description="Set a limit on the number of mints during presale."
                  field="hasPresaleLimit"
                />
                {formik.values.hasPresaleLimit && (
                  <FormikTextField label="Presale limit" field="presaleLimit" />
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
              <FormikTextField label="Wallet mint limit" field="mintLimit" />
            )}
          </Stack>
        )}
      </Formik>
    </>
  );
};

export default ProjectSmartContractForm;
