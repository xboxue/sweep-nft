import { Toolbar, Typography } from "@mui/material";

interface Props {
  title: string;
}

const AppHeader = ({ title }: Props) => {
  return (
    <Toolbar
      component="header"
      sx={{ borderBottom: 1, borderColor: theme => theme.palette.divider }}
    >
      <Typography>{title}</Typography>
    </Toolbar>
  );
};

export default AppHeader;
