import { LoadingButton } from "@mui/lab";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useCreateProjectMutation } from "../../generated/graphql";
import FormikTextField from "../common/FormikTextField/FormikTextField";

const CreateProjectForm = () => {
  const [createProject, { loading, error }] = useCreateProjectMutation();
  const navigate = useNavigate();

  return (
    <Box sx={{ mx: "auto", maxWidth: 640 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Create a new project
      </Typography>
      <Divider />
      <Formik
        initialValues={{ name: "", description: "" }}
        onSubmit={async values => {
          const { data } = await createProject({
            variables: { input: values },
          });

          if (data?.insert_project_one?.id) {
            navigate(`/project/${data.insert_project_one.id}`);
          }
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
            <LoadingButton type="submit" variant="contained" loading={loading}>
              Create project
            </LoadingButton>
          </Stack>
        )}
      </Formik>
    </Box>
  );
};

export default CreateProjectForm;
