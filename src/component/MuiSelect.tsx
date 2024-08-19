import { Box, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  console.log({countries})

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCountries(typeof value === 'string' ? value.split(',') : value)
  }

  return (
    <Box width="250px">
      <TextField
        label="Select country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
            multiple: true
        }}
        helperText="Please choose your country"
      >
        <MenuItem value="VI">Viet Nam</MenuItem>
        <MenuItem value="FI">Finland</MenuItem>
        <MenuItem value="EN">England</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
