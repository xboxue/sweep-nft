import { Divider, Stack, Typography } from "@mui/material";
import { Formik } from "formik";
import FormikTextField from "../common/FormikTextField/FormikTextField";

const ProjectDetailsForm = () => {
  return (
    <>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Project Details
      </Typography>
      <Divider />
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
            sx={{ mt: 2 }}
          >
            <FormikTextField label="Name" field="name" />
            <FormikTextField label="Description" field="description" />
          </Stack>
        )}
      </Formik>
    </>
  );
};

export default ProjectDetailsForm;
