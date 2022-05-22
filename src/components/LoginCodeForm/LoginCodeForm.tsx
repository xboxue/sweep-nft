import { Button, Stack, Typography } from "@mui/material";
import { Formik, useFormikContext } from "formik";
import { useEffect } from "react";
import FormikTextField from "../common/FormikTextField/FormikTextField";

interface Props {
  onSubmit: (code: string) => void;
}

const AutoSubmitCode = () => {
  const { values, submitForm } = useFormikContext<{ code: string }>();

  useEffect(() => {
    if (values.code.length === 6) {
      submitForm();
    }
  }, [values, submitForm]);

  return null;
};

const LoginCodeForm = ({ onSubmit }: Props) => {
  return (
    <Formik
      initialValues={{ code: "" }}
      onSubmit={values => onSubmit(values.code)}
    >
      {formik => (
        <Stack
          component="form"
          onSubmit={formik.handleSubmit}
          spacing={2}
          sx={{ maxWidth: 400, mx: "auto" }}
        >
          <AutoSubmitCode />
          <Typography variant="h6">Enter the confirmation code</Typography>
          <FormikTextField field="code" />
          <Button
            disabled={!formik.values.code || !!formik.errors.code}
            variant="contained"
            size="large"
            type="submit"
          >
            Continue
          </Button>
        </Stack>
      )}
    </Formik>
  );
};

export default LoginCodeForm;
