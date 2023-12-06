import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import MoneyCardIcon from "../assets/images/money_card_icon.svg";

const AnswerSurvey = () => {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Navbar />
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            background:
              "linear-gradient(180deg, #1EA9FF -125.88%, #1DAAFF 2.14%, #FFFFFF 89.41%)",
            paddingTop: "30px",
            paddingLeft: "71px",
            paddingBottom: "54px",
          }}
        >
          <h2
            style={{
              fontSize: "26.97px",
              fontWeight: "700",
              color: theme.palette.white[0],
              textAlign: "left",
              textShadow: "0px 4px 4px 0px #32A3DF",
            }}
          >
            ANSWER
          </h2>
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "900",
              color: theme.palette.white[0],
              textAlign: "left",
              textShadow: "0px 4px 4px 0px #32A3DF",
            }}
          >
            SURVEYS
          </h1>
          <Box
            sx={{ display: "flex", alignItems: "center", position: "relative" }}
          >
            <p
              style={{
                paddingLeft: "28px",
                color:
                  "linear-gradient(262.84deg, #54A0FE 7.38%, #3940BE 55.58%)",
                textAlign: "left",
                fontSize: "26.97px",
                fontWeight: "800",
                textShadowhadow: "0px 4px 4px 0px #59A8FE38",
                marginRight: "3px",
              }}
            >
              AND WIN
            </p>
            <img
              style={{ width: "26.22px", height: "33.56px" }}
              src={MoneyCardIcon}
              alt="Money Card"
            ></img>
            <img
              style={{
                width: "26.22px",
                height: "33.56px",
                position: "absolute",
                transform: "rotate(-28.13deg)",
              }}
              src={MoneyCardIcon}
              alt="Money Card"
            ></img>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default AnswerSurvey;
