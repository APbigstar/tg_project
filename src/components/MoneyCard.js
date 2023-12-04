import React from "react";
import { Box, useTheme } from "@mui/material";

const MoneyCard = (props) => {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "inline-flex",
          padding: "0px 0px 1.344px 7px",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          borderRadius: "50px",
          background: props.bgColor,
        }}
      ></Box>
    </React.Fragment>
  );
};

export default MoneyCard;
