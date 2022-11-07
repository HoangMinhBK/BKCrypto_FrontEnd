import { Box, useMediaQuery } from "@mui/material";
import { SCREEN_SIZE } from "src/constants";
import Header from "src/layouts/components/Header";
import CustomTypography from "src/components/CustomTypography";
import CustomButton from "src/components/CustomButton";
import { NavLink } from "react-router-dom";

export default function Login() {
  const mobile = useMediaQuery(SCREEN_SIZE.MOBILE);
  const tablet = useMediaQuery(SCREEN_SIZE.TABLET);

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Header />
      <Box
        width={mobile ? "90%" : tablet ? "50%" : "30%"}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <CustomTypography variant="h5" mb={5}>
          Login to BKCrypt0 Platform
        </CustomTypography>
        <CustomButton fullWidth={true} minHeight="50px" mb={3}>
          <CustomTypography buttonText>Import Account</CustomTypography>
        </CustomButton>
        <NavLink
          to="/register"
          style={{ width: "100%", textDecoration: "none" }}
        >
          <CustomButton fullWidth={true} minHeight="50px" mb={3}>
            <CustomTypography buttonText>Create a new account</CustomTypography>
          </CustomButton>
        </NavLink>
      </Box>
    </Box>
  );
}
