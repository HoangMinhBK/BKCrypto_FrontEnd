import { Box, useMediaQuery } from "@mui/material";
import { SCREEN_SIZE, THEME_MODE } from "src/constants";
import Header from "src/layouts/components/Header";
import CustomTypography from "src/components/CustomTypography";
import CustomButton from "src/components/CustomButton";
import { NavLink } from "react-router-dom";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import { useSelector, useDispatch } from "react-redux";
import CustomForm from "src/components/CustomForm";
import { useState, useEffect } from "react";
import { createNewPassword } from "src/redux/accountSlice";

export default function Register() {
  const mobile = useMediaQuery(SCREEN_SIZE.MOBILE);
  const tablet = useMediaQuery(SCREEN_SIZE.TABLET);
  const themeMode = useSelector((state) => state.themeSlice.themeMode);
  const [password, setPassword] = useState(undefined);
  const [confirmPassword, setConfirmPassword] = useState(undefined);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("Password is required!");
  const dp = useDispatch();

  useEffect(() => {
    setError(confirmPassword !== password);
    setErrorText("Passwords do not match!");
  }, [confirmPassword, password]);

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
        <CustomTypography variant="h5" mb={3}>
          Create a password for your account
        </CustomTypography>
        <CustomForm
          label="Enter password"
          type="password"
          id="passwd"
          name="password"
          placeHolder="Password..."
          handleForm={setPassword}
          error={error}
          errorText={errorText}
        />
        <Box mb={1} />
        <CustomForm
          label="Confirm Password"
          type="password"
          id="cfpasswd"
          name="confirm password"
          placeHolder="Confirm password..."
          handleForm={setConfirmPassword}
          error={error}
          errorText={errorText}
        />
        <Box mb={1} />
        <CustomButton
          fullWidth={true}
          minHeight="50px"
          disabled={error}
          onClick={() => {
            if (password === undefined || confirmPassword === undefined)
              setError(true);
            else dp(createNewPassword(password));
          }}
        >
          <CustomTypography buttonText>Continue</CustomTypography>
        </CustomButton>
        <Box mb={2} />
        <NavLink
          to="/login"
          style={{
            width: "100%",
            textDecoration: "none",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowBackTwoToneIcon
            sx={{
              color: themeMode === THEME_MODE.DARK ? "white" : "black",
              mr: 0.5,
            }}
          />
          <CustomTypography>Back to login page</CustomTypography>
        </NavLink>
      </Box>
    </Box>
  );
}
