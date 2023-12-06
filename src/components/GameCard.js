import React from "react";
import { Box, useTheme, Button } from "@mui/material";
import MoneyCard from "../assets/images/money_card_icon.svg";

const GameCard = (props) => {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: "left",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={props.icon} alt="Icon" style={{ marginRight: "12px" }} />
            <Box>{props.children}</Box>
          </Box>
          <Button
            className="poppines_font"
            variant="contained"
            sx={{ ...theme.buttons.blue }}
          >
            Play
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "237px",
              height: "7px",
              borderRadius: "50px",
              background: "#E2EDF9",
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: theme.fontWeight.bold,
                color: theme.palette.black[0],
                marginRight: "4px",
                marginLeft: "7px",
              }}
            >
              {props.amount}
            </p>
            <img src={MoneyCard} alt="Card" />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default GameCard;
