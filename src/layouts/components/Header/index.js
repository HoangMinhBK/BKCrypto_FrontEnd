import { Box, useMediaQuery, Drawer } from "@mui/material";
import { useSelector } from "react-redux";
import { THEME_MODE } from "src/constants";
import TeamLogo from "src/components/TeamLogo";
import SwitchThemeButton from "src/components/SwitchThemeButton";
import EnterAppButton from "src/components/EnterAppButton";
import { SCREEN_SIZE } from "src/constants";
import { useLocation, NavLink } from "react-router-dom";

export default function Header() {
  const themeMode = useSelector((state) => state.themeSlice.themeMode);
  const mobile = useMediaQuery(SCREEN_SIZE.MOBILE);
  const path = useLocation().pathname;

  return (
    <Drawer
      variant="permanent"
      anchor="top"
      PaperProps={{
        sx: {
          background: themeMode === THEME_MODE.DARK ? "#353535" : "white",
          zIndex: 1205,
          height: "55px",
          paddingTop: 2,
          overflow: "hidden",
        },
      }}
      sx={{ width: "100%", height: 55, maxHeight: 55 }}
    >
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        sx={{ marginTop: -5 }}
      >
        <NavLink to="/welcome">
          <TeamLogo style={{ width: "222px", height: "auto" }} />
        </NavLink>
        <Box display="flex" alignItems="center">
          <SwitchThemeButton style={{ marginRight: 3 }} />
          {!mobile && path === "/welcome" && <EnterAppButton />}
        </Box>
      </Box>
    </Drawer>
  );
}
