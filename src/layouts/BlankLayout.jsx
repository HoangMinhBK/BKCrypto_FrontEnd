import { Box } from "@mui/material";
import { Fragment } from "react";
import { THEME_MODE } from "src/constants";
import { useSelector } from "react-redux";
export default function BlankLayout(props) {
  const { children } = props;
  const themeMode = useSelector((state) => state.themeSlice.themeMode);
  
  return (
    <Fragment>
      <Box
        component={"main"}
        sx={{ background: themeMode === THEME_MODE.DARK ? "#353535" : "white" }}
      >
        {children}
      </Box>
    </Fragment>
  );
}
