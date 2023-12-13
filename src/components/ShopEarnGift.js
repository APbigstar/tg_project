import React from "react";
import { Box } from "@mui/material";

const ShopEarnGift = (props) => {
  return (
    <React.Fragment>
      <Box>
        <img src={props.icon} alt="Main" />
        <p
          style={{ fontWeight: "600", fontSize: "12px", lineHeight: "17.46px" }}
        >
          {props.title}
        </p>
        <p style={{ fontSize: "10px", lineHeight: "14.55px" }}>{props.desc}</p>
      </Box>
    </React.Fragment>
  );
};

export default ShopEarnGift;
