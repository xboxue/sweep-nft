import { Alert, Button, Stack, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import FormikTextField from "../common/FormikTextField/FormikTextField";

interface Props {
  onSubmit: (code: string) => void;
  onCancel: () => void;
  error: string | null;
}

const LoginCodeForm = ({ onSubmit, onCancel, error }: Props) => {
  return (
    <Formik
      initialValues={{ code: "" }}
      onSubmit={values => onSubmit(values.code)}
      validationSchema={yup.object().shape({
        code: yup
          .string()
          .required()
          .matches(/^[0-9]+$/, "Must be only digits"),
      })}
    >
      {formik => (
        <Stack
          component="form"
          onSubmit={formik.handleSubmit}
          spacing={2}
          sx={{ maxWidth: 400, mx: "auto" }}
        >
          <Typography variant="h6">Enter the verification code</Typography>
          <FormikTextField
            field="code"
            placeholder="Email verification code"
            helperText={undefined}
          />
          {error && <Alert severity="error">{error}</Alert>}
          <Button
            disabled={!formik.values.code || !!formik.errors.code}
            variant="contained"
            size="large"
            type="submit"
          >
            Continue
          </Button>
          <Button size="large" onClick={onCancel}>
            Cancel
          </Button>
        </Stack>
      )}
    </Formik>
  );
};

export default LoginCodeForm;
