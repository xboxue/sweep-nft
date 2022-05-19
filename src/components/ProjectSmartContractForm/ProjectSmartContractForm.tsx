import { Stack } from "@mui/material";
import { Formik } from "formik";
import AppHeader from "../AppHeader/AppHeader";
import FormikTextField from "../common/FormikTextField/FormikTextField";

const ProjectSmartContractForm = () => {
  return (
    <>
      <AppHeader title="Configure smart contract" />
      <Formik
        initialValues={{ name: "", description: "" }}
        onSubmit={() => {
          console.log();
        }}
      >
        {formik => (
          <Stack
            spacing={2}
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{ p: 2 }}
          >
            <FormikTextField label="Name" field="name" />
            <FormikTextField label="Description" field="description" />
          </Stack>
        )}
      </Formik>
    </>
  );
};

export default ProjectSmartContractForm;
