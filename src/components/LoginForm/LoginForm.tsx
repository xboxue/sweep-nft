import { Button, Stack, Typography } from "@mui/material";
import { Formik } from "formik";
import FormikTextField from "../common/FormikTextField/FormikTextField";

interface Props {
  onSubmit: (email: string) => void;
}

const LoginForm = ({ onSubmit }: Props) => {
  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={values => onSubmit(values.email)}
    >
      {formik => (
        <Stack
          component="form"
          onSubmit={formik.handleSubmit}
          spacing={2}
          sx={{ maxWidth: 400, mx: "auto" }}
        >
          <>
            <Typography variant="h6">Sign in</Typography>
            <FormikTextField
              field="email"
              placeholder="Email"
              // error={}
            />
            <Button
              disabled={!formik.values.email || !!formik.errors.email}
              type="submit"
              variant="contained"
              size="large"
            >
              Continue with Email
            </Button>
          </>
        </Stack>
      )}
    </Formik>
  );
};

export default LoginForm;
