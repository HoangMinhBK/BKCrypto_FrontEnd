import { generatePairKeys } from "src/redux/accountSlice";
import { Box, Grid, styled, useMediaQuery } from "@mui/material";
import CustomTypography from "src/components/CustomTypography";
import CustomButton from "src/components/CustomButton";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { SCREEN_SIZE, THEME_MODE } from "src/constants";
import { NavLink } from "react-router-dom";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";

export default function CreateMnemonic({ setActiveStep, activeStep }) {
  const mnemonic = useSelector((state) => state.accountSlice.mnemonic);
  const themeMode = useSelector((state) => state.themeSlice.themeMode);
  const mobile = useMediaQuery(SCREEN_SIZE.MOBILE);
  const tablet = useMediaQuery(SCREEN_SIZE.TABLET);

  const dp = useDispatch();
  useEffect(() => {
    if (mnemonic === undefined) dp(generatePairKeys());
  }, [mnemonic, dp]);
  
  const mnemonicArray =
    mnemonic !== undefined ? mnemonic.split(" ") : undefined;

  const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
  }));

  return (
    <Box
      width={mobile ? "95%" : tablet ? "60%" : "50%"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ display: activeStep === 1 ? "block" : "none" }}
    >
      <Box
        width="100%"
        sx={{
          borderRadius: "10px",
          pt: 3,
          pb: 3,
          border: !mobile
            ? themeMode === THEME_MODE.DARK
              ? "3px solid #D8D8D8"
              : "3px solid #353535"
            : undefined,
        }}
      >
        <Grid container spacing={1}>
          {mnemonicArray?.map((e, index) => (
            <Grid
              item
              display="flex"
              justifyContent="center"
              xs={4}
              key={index}
            >
              <Item>
                <CustomTypography>
                  {index + 1}. {e}
                </CustomTypography>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
      <CustomButton
        mt={3}
        fullWidth={true}
        minHeight="50px"
        onClick={() => {
          setActiveStep(2);
        }}
      >
        <CustomTypography buttonText>Next step</CustomTypography>
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
  );
}
