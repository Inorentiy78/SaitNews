import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RocketLaunch from "@mui/icons-material/RocketLaunch";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Footer() {
  const [value, setValue] = React.useState(0);

  /*
  xs - x small очень маленький 900px по ширине
  sm -  small маленький 
  md - medium средний
  lg - large большой
  xl - x large очень больший
  */
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        bottom: 0,

        display: { xs: "flex", md: "none", lg: "none", xl: "none" },
      }}
    >
      <BottomNavigation
        showLabels
        sx={{ width: "100%" }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Новости" icon={<RocketLaunch />} />
        <BottomNavigationAction label="Расписание" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Оценки" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}
