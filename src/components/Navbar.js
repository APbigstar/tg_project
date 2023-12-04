import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import MenuIcon from "../assets/images/menu_icon.svg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Navbar = () => {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "9px 17px",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          style={{
            display: "flex",
            alignItems: "center",
            color: theme.palette.blue[0],
            fontSize: theme.fontSize.small,
          }}
        >
          <ArrowBackIosIcon sx={{ fontSize: theme.fontSize.small }} />
          {"Back"}
        </Typography>
        <Box>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: theme.fontWeight.bold,
              fontSize: theme.fontSize.small,
            }}
          >
            TG GAMES
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              opacity: 0.7,
              fontWeight: theme.fontWeight.medium,
              fontSize: theme.fontSize.small,
            }}
          >
            Bot
          </Typography>
        </Box>
        <img src={MenuIcon} alt="Menu Icon" />
      </Box>
      <Box
        sx={{
          padding: "10px 57px",
          background: "linear-gradient(90deg, #458CFE 0%, #7DD8FD 100%)",
        }}
      >
        <p
          className="poppines_font"
          style={{
            color: theme.palette.white[0],
            fontSize: theme.fontSize.small,
            textAlign: "center",
            lineHeight: "20px",
            fontWeight: theme.fontWeight.bold,
          }}
        >
          Hey John_user, welcome to TG Games!
        </p>
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
