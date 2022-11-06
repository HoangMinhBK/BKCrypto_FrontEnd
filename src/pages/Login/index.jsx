import { Box, TextField, useMediaQuery } from "@mui/material";
import { THEME_MODE, SCREEN_SIZE } from "src/constants";
import Header from "src/layouts/components/Header";

export default function Login() {
  const mobile = useMediaQuery(SCREEN_SIZE.MOBILE);
  const tablet = useMediaQuery(SCREEN_SIZE.TABLET);

  return (
    <Box
    // width="100%"
    // height="100vh"
    // display="flex"
    // flexDirection="column"
    // alignItems="center"
    >
      {/* <Box
        width={mobile ? "90%" : tablet ? "50%" : "30%"}
        height="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <TextField fullWidth />
      </Box> */}
    </Box>
  );
}
