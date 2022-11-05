import { Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { THEME_MODE } from "src/constants";
import { NavLink } from "react-router-dom";

export default function EnterAppButton() {
  const themeMode = useSelector((state) => state.themeSlice.themeMode);
  return (
    <NavLink to={"/login"} style={{ textDecoration: "none" }}>
      <Button
        variant="contained"
        sx={{
          mr: 3,
          borderRadius: "10px 0px 10px 0px",
          minHeight: "50px",
          minWidth: "150px",

          background: themeMode === THEME_MODE.DARK ? "#D8D8D8" : "#353535",
          "&:hover": {
            background: themeMode === THEME_MODE.DARK ? "#D8D8D8" : "#353535",
          },
        }}
      >
        <Typography
          fontFamily="ubuntu"
          fontWeight="semi-bold"
          sx={{
            letterSpacing: "2px",
            color: themeMode === THEME_MODE.DARK ? "#353535" : "#D8D8D8",
          }}
        >
          ENTER APP
        </Typography>
      </Button>
    </NavLink>
  );
}
