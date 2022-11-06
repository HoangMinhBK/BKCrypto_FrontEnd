import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { saveIdentityToRedux } from "src/redux/identitySlice";
import { THEME_MODE } from "src/constants";
import { SCREEN_SIZE } from "src/constants";

export default function Identity() {
  const identity = useSelector((state) => state.identitySlice.identity);
  const themeMode = useSelector((state) => state.themeSlice.themeMode);
  const mobile = useMediaQuery(SCREEN_SIZE.MOBILE);
  const tablet = useMediaQuery(SCREEN_SIZE.TABLET);

  const dp = useDispatch();

  return (
    <Box>
      <Typography
        fontFamily="ubuntu"
        variant="h4"
        sx={{
          color: themeMode === THEME_MODE.DARK ? "#D8D8D8" : "#000000",
          mb: 3,
        }}
      >
        My Identity
      </Typography>
      <Box
        width={mobile ? "100%" : tablet ? "70%" : "50%"}
        sx={{
          borderRadius: "10px",
          border:
            themeMode === THEME_MODE.DARK
              ? "2px solid #D8D8D8"
              : "2px solid #353535",
          padding: 4,
          mb: 3,
        }}
      >
        {identity === undefined && "Undefined"}
        {identity !== undefined && (
          <>
            <Box display="flex" alignItems="baseline">
              <Typography
                fontFamily="ubuntu"
                fontWeight="bold"
                variant="h6"
                sx={{
                  color: themeMode === THEME_MODE.DARK ? "#D8D8D8" : "#000000",
                  mr: 1,
                }}
              >
                Name:
              </Typography>
              <Typography
                variant="h6"
                fontStyle="italic"
                sx={{
                  color: themeMode === THEME_MODE.DARK ? "#D8D8D8" : "#000000",
                  mr: 1,
                }}
              >
                {identity?.name}
              </Typography>
            </Box>
            <Box display="flex" alignItems="baseline">
              <Typography
                fontFamily="ubuntu"
                fontWeight="bold"
                variant="h6"
                sx={{
                  color: themeMode === THEME_MODE.DARK ? "#D8D8D8" : "#000000",
                  mr: 1,
                }}
              >
                Gender:{" "}
              </Typography>
              <Typography
                fontStyle="italic"
                variant="h6"
                sx={{
                  color: themeMode === THEME_MODE.DARK ? "#D8D8D8" : "#000000",
                  mr: 1,
                }}
              >
                {identity?.gender}
              </Typography>
            </Box>
            <Box display="flex" alignItems="baseline">
              <Typography
                fontFamily="ubuntu"
                fontWeight="bold"
                variant="h6"
                sx={{
                  color: themeMode === THEME_MODE.DARK ? "#D8D8D8" : "#000000",
                  mr: 1,
                }}
              >
                Date Of Birth:{" "}
              </Typography>
              <Typography
                fontStyle="italic"
                variant="h6"
                sx={{
                  color: themeMode === THEME_MODE.DARK ? "#D8D8D8" : "#000000",
                  mr: 1,
                }}
              >
                {identity?.dateOfBirth}
              </Typography>
            </Box>
            <Box display="flex" alignItems="baseline">
              <Typography
                fontFamily="ubuntu"
                fontWeight="bold"
                variant="h6"
                sx={{
                  color: themeMode === THEME_MODE.DARK ? "#D8D8D8" : "#000000",
                  mr: 1,
                }}
              >
                Birth Place:{" "}
              </Typography>
              <Typography
                fontStyle="italic"
                variant="h6"
                sx={{
                  color: themeMode === THEME_MODE.DARK ? "#D8D8D8" : "#000000",
                  mr: 1,
                }}
              >
                {identity?.birthPlace}
              </Typography>
            </Box>
          </>
        )}
      </Box>
      {identity === undefined && (
        <Button
          variant="contained"
          sx={{
            mr: 3,
            borderRadius: "5px 5px 5px 5px",
            minHeight: "50px",
            minWidth: "150px",

            background: themeMode === THEME_MODE.DARK ? "#ffffff" : "#353535",
            "&:hover": {
              background: themeMode === THEME_MODE.DARK ? "#ffffff" : "#353535",
            },
          }}
        >
          <Typography
            sx={{
              color: themeMode === THEME_MODE.DARK ? "#353535" : "#D8D8D8",
            }}
          >
            Create Identity
          </Typography>
        </Button>
      )}
      {identity === undefined && (
        <Button
          variant="contained"
          sx={{
            mr: 3,
            borderRadius: "5px 5px 5px 5px",
            minHeight: "50px",
            minWidth: "150px",

            background: themeMode === THEME_MODE.DARK ? "#ffffff" : "#353535",
            "&:hover": {
              background: themeMode === THEME_MODE.DARK ? "#ffffff" : "#353535",
            },
          }}
        >
          <Typography
            sx={{
              color: themeMode === THEME_MODE.DARK ? "#353535" : "#D8D8D8",
            }}
          >
            Import Identity
          </Typography>
        </Button>
      )}
      {identity !== undefined && (
        <Button
          variant="contained"
          sx={{
            mr: 3,
            borderRadius: "5px 5px 5px 5px",
            minHeight: "50px",
            minWidth: "150px",

            background: themeMode === THEME_MODE.DARK ? "#ffffff" : "#353535",
            "&:hover": {
              background: themeMode === THEME_MODE.DARK ? "#ffffff" : "#353535",
            },
          }}
        >
          <Typography
            sx={{
              color: themeMode === THEME_MODE.DARK ? "#353535" : "#D8D8D8",
            }}
          >
            Claim Identity
          </Typography>
        </Button>
      )}
      <Button
        onClick={() => {
          dp(saveIdentityToRedux("minh", "Male", 2001, "Nam Dinh"));
          console.log(identity);
        }}
      >
        CLICK ME
      </Button>
    </Box>
  );
}
