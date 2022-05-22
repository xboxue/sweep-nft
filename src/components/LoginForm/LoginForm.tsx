import { useSignIn } from "@clerk/clerk-react";
import { Alert, Button, Stack, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import FormikTextField from "../common/FormikTextField/FormikTextField";

interface Props {
  signInWithEmail: (email: string) => void;
  signInWithGoogle: () => void;
  error: string | null;
}

const LoginForm = ({ signInWithEmail, signInWithGoogle, error }: Props) => {
  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={values => signInWithEmail(values.email)}
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
          <Typography
            variant="subtitle2"
            color="textSecondary"
            sx={{ alignSelf: "center" }}
          >
            or
          </Typography>
          <Button onClick={signInWithGoogle} variant="contained" size="large">
            Continue with Google
          </Button>
        </Stack>
      )}
    </Formik>
  );
};

export default LoginForm;
