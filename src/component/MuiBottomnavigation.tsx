import { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

export const MuiBottomnavigation = () => {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      sx={{ width: "100%", position: "absolute", bottom: 0 }}
    //   showLabels
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Favortite" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Person" icon={<PersonIcon />} />
    </BottomNavigation>
  );
};
