import { Stack, Alert, AlertTitle, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const MuiAlter = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">This is an error message</Alert>
      <Alert severity="success">This is an success message</Alert>
      <Alert severity="warning">This is an warning message</Alert>
      <Alert severity="info">This is an info message</Alert>

      <Alert severity="error" variant="outlined">
        This is an success message
      </Alert>
      <Alert severity="success" variant="outlined">
        This is an error message
      </Alert>
      <Alert severity="warning" variant="outlined">
        This is an warning message
      </Alert>
      <Alert severity="info" variant="outlined">
        This is an info message
      </Alert>

      <Alert
        severity="error"
        variant="filled"
        onClose={() => alert("Close alter")}
      >
        <AlertTitle>Error</AlertTitle>
        This is an error message
      </Alert>
      <Alert
        severity="success"
        variant="filled"
        icon={<CheckIcon fontSize="inherit" />}
        action={<Button color='inherit' size='small'>UNDO</Button>}
      >
        <AlertTitle>Success</AlertTitle>
        This is an success message
      </Alert>
      <Alert severity="warning" variant="filled">
        <AlertTitle>Warning</AlertTitle>
        This is an warning message
      </Alert>
      <Alert severity="info" variant="filled">
        <AlertTitle>Info</AlertTitle>
        This is an info message
      </Alert>
    </Stack>
  );
};

export default MuiAlter;
