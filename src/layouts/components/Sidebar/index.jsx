import { Drawer, Box } from "@mui/material";
import { Fragment } from "react";
import NavigationButton from "./NavigationButton";
import { THEME_MODE } from "src/constants";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const themeMode = useSelector((state) => state.themeSlice.themeMode);
  return (
    <Fragment>
      <Drawer
        variant="permanent"
        PaperProps={{
          sx: {
            background: themeMode === THEME_MODE.DARK ? "#353535" : "white",
            width: { xs: 80, md: 220 },
            transition: "width 300ms ease",
            pt: 10,
            height: "calc(100% - 55px)",
          },
        }}
      >
        <Box
          component="nav"
          aria-label="sidebar navigation"
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="100%"
          mt={2}
        >
          <NavigationButton label="IDENTITY" link="/home/identity" />
          <NavigationButton label="CLAIMS" link="/home/claims" />
          <NavigationButton label="VERIFICATIONS" link="/home/verifications" />
        </Box>
      </Drawer>
    </Fragment>
  );
}
