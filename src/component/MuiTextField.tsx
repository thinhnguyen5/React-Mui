import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={2}>
      <Stack spacing={4}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? 'Required' : 'Do not share your password with anyone'
          }
        >
          Form Input
        </TextField>
        <TextField
          label="Password"
          type="password"
          helperText="Do not share your password with anyone"
        >
          Password
        </TextField>
        <TextField label="Read only" InputProps={{ readOnly: true }}>
          Password
        </TextField>
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="small label" size="small" color="secondary" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
