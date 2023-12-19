import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const RankingCard = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Box
        sx={{
          width: "100%",
          padding: "9px 12px",
          background: "white",
          borderRadius: "7px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "46px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: props?.type === "ranking" ? "14px" : "9px",
            flex: 1,
          }}
        >
          <p
            style={{
              fontSize: "13px",
              lineHeight: "20px",
              fontWeight: "600",
              color: props?.type === "ranking" ? "#252946" : "#0098EA",
            }}
          >
            {" "}
            {props.title}{" "}
          </p>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img src={props.avatar} alt="User Avatar" />
            <Box>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: "600",
                  lineHeight: "20px",
                  color: "#252946",
                }}
              >
                {" "}
                {props.username}{" "}
              </p>
              <Box sx={{ display: "flex", alignItems: "center", gap: "3.4px" }}>
                <img src={props.flag} alt="User Avatar" />
                <p
                  style={{
                    fontSize: "10.180px",
                    color: "#75757A",
                    lineHeight: "11.887px",
                  }}
                >
                  {" "}
                  {props.country}{" "}
                </p>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "14px",
            flex: 1,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "6.41px" }}>
            {props.tg_coin && <img src={props.tg_coin} alt="Coin Icon" />}
            <p
              style={{
                fontSize: "11.5px",
                color: props?.type === "ranking" ? "#252946" : "#0098EA",
              }}
            >
              {props.title_2}
            </p>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "6.41px" }}>
            <img src={props.coinIcon} alt="Coin Icon" />
            <p
              style={{
                fontSize: "11.5px",
                color: props?.type === "ranking" ? "#252946" : "#0098EA",
              }}
            >
              {props.amount}
            </p>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default RankingCard;
