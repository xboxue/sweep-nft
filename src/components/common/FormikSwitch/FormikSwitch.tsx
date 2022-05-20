import { Box, Switch, Typography } from "@mui/material";
import { useFormikContext } from "formik";

interface Props {
  title: string;
  description: string;
  field: string;
}

const FormikSwitch = ({ title, description, field }: Props) => {
  const formik = useFormikContext<any>();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </Box>
      <Switch
        checked={formik.values[field]}
        onChange={event => formik.setFieldValue(field, event.target.checked)}
        inputProps={{ "aria-label": "controlled" }}
      />
    </Box>
  );
};

export default FormikSwitch;
