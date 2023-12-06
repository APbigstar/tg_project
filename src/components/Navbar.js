import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "../assets/images/menu_icon.svg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
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
            fontSize: theme.fontSize.mmedium,
            fontWeight: theme.fontWeight.thin,
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          <ArrowBackIosIcon
            sx={{
              fontSize: theme.fontSize.mmedium,
              fontWeight: theme.fontWeight.thin,
            }}
          />
          {"Back"}
        </Typography>
        <Box>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: theme.fontWeight.bold,
              fontSize: theme.fontSize.medium,
              lineHeight: "16px",
            }}
          >
            TG GAMES
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: theme.fontWeight.medium,
              fontSize: "15px",
              color: "#9A9A9A",
            }}
          >
            Bot
          </Typography>
        </Box>
        <img src={MenuIcon} alt="Menu Icon" />
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
