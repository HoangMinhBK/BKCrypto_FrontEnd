import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { THEME_MODE } from "src/constants";
import TeamLogo from "src/components/TeamLogo";
import SwitchThemeButton from "src/components/SwitchThemeButton";
import EnterAppButton from "src/components/EnterAppButton";
import { SCREEN_SIZE } from "src/constants";

export default function Header() {
  const themeMode = useSelector((state) => state.themeSlice.themeMode);
  const mobile = useMediaQuery(SCREEN_SIZE.MOBILE);

  return (
    <Box
      sx={{
        background: themeMode === THEME_MODE.DARK ? "#353535" : "white",
        zIndex: 1205,
        maxWidth: "100%",
        width: "100%",
        height: 55,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 2,
      }}
    >
      <TeamLogo style={{ width: "222px", height: "auto" }} />
      <Box display="flex" alignItems="center">
        <SwitchThemeButton style={{ marginRight: 3 }} />
        {!mobile && <EnterAppButton />}
      </Box>
    </Box>
  );
}
