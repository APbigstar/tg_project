import React from "react";
import Navbar from "../components/Navbar";
import { Box, useTheme, Typography } from "@mui/material";

import MoneyCard from "../components/MoneyCard";

import ProfileIcon from "../assets/images/profile.png";
import Flag from "../assets/images/Flag.svg";
import MoneyIcon from "../assets/images/money_icon.svg";
import MoneyCardIcon from "../assets/images/money_card_icon.svg";

const Home = () => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Navbar />
      <Box sx={{ padding: "15px 0 0 21px" }}>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            padding: "9px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
          >
            <circle
              cx="25"
              cy="25"
              r="23.4375"
              stroke="url(#paint0_linear_640_3608)"
              stroke-width="3.125"
            />
            <defs>
              <linearGradient
                id="paint0_linear_640_3608"
                x1="2.34376"
                y1="32.0313"
                x2="22.2319"
                y2="-0.0348944"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0098EA" />
                <stop offset="0.861496" stop-color="#3940BE" />
              </linearGradient>
            </defs>
          </svg>
          <Box
            style={{
              position: "absolute",
              width: "43.75px",
              height: "43.75px",
              borderRadius: "64.1",
              flexShrink: 0,
              top: "12px",
              left: "12px",
              background: `url(${ProfileIcon}) lightgray 50% / cover no-repeat`,
              borderRadius: "50%",
            }}
          ></Box>
          <Box sx={{ marginLeft: "12px", marginRight: "32px" }}>
            <p
              className="poppines_font profile_name"
              style={{
                fontSize: theme.fontSize.medium,
                fontWeight: theme.fontWeight.bold,
              }}
            >
              John_user
            </p>
            <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <img src={Flag} alt="Flag Image" />
              <p>France</p>
            </Box>
          </Box>
          <Box>
            <MoneyCard
              amount="$1.35"
              icon={MoneyIcon}
              bgColor="#B5EBD0"
              fontColor="#414646"
              iconColor="linear-gradient(199deg, #B5EBD0 16.3%, #62BA8E 86.96%)"
            />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Home;
