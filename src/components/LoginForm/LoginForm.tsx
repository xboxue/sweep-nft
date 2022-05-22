import { Alert, Button, Stack, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import FormikTextField from "../common/FormikTextField/FormikTextField";

interface Props {
  onSubmit: (email: string) => void;
  error: string | null;
}

const LoginForm = ({ onSubmit, error }: Props) => {
  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={values => onSubmit(values.email)}
      validationSchema={yup.object().shape({
        email: yup.string().email("Invalid email").required("Required"),
      })}
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
              helperText={undefined}
            />
            {error && <Alert severity="error">{error}</Alert>}
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
