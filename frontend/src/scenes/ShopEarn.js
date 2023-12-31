import React, { useState, useEffect } from "react";
import { Box, useTheme, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MoneyCard from "../components/MoneyCard";
import ProfileIcon from "../assets/images/profile.png";
import Flag from "../assets/images/France_Flag.svg";
import MoneyIcon from "../assets/images/money_icon.svg";
import MoneyCardIcon from "../assets/images/money_card_icon.svg";
import Crown from "../assets/images/Crown.svg";
import HalfCrown from "../assets/images/HalfCrown.svg";
import Sunlight from "../assets/images/sunlight.svg";
import CoinsGroup from "../assets/images/coin_group.png";
import SSquare from "../assets/images/SmSquare.svg";
import BSquare from "../assets/images/BigSquare.svg";

import ShopEarnCard from "../components/ShopEarnCard";
import ShopEarnGift from "../components/ShopEarnGift";
import { ShopEarnData, ShopEarnGiftData } from "../Constant";

const ShopEarn = (props) => {
  const theme = useTheme();
  const [selectedButton, setSelectedButton] = useState(props.type);

  const handleSetSelectedButton = (button) => {
    setSelectedButton(button);
  };

  return (
    <React.Fragment>
      <Navbar />
      <Box
        sx={{
          position: "relative",
          paddingLeft: "21px",
          textAlign: "center",
          margin: `${theme.gaps[1]} 0`,
          marginTop: "14px",
          maxWidth: "354px",
          marginBottom: "8px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            background: theme.bgColor[0],
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "24px",
            padding: "9px 9px 12px 10px",
          }}
        >
          <Box sx={{ display: "flex" }}>
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
                strokeWidth="3.125"
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
                  <stop stopColor="#0098EA" />
                  <stop offset="0.861496" stopColor="#3940BE" />
                </linearGradient>
              </defs>
            </svg>
            <Box
              style={{
                position: "absolute",
                width: "43.75px",
                height: "43.75px",
                flexShrink: 0,
                top: "12px",
                left: "34px",
                background: `url(${ProfileIcon}) lightgray 50% / cover no-repeat`,
                borderRadius: "50%",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "49px",
                left: "47px",
                width: "18px",
                height: "18px",
                background:
                  "linear-gradient(199.44deg, #FFD612 16.3%, #F99C39 86.96%)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "4",
                fontSize: theme.fontSize.verySmall,
              }}
            >
              <p
                className="poppines_font"
                style={{
                  fontSize: "12.12px",
                  color: theme.palette.white[0],
                  fontWeight: theme.fontWeight.bold,
                }}
              >
                4
              </p>
            </Box>
            <Box sx={{ marginLeft: "12px" }}>
              <p
                className="poppines_font profile_name"
                style={{
                  fontSize: "15px",
                  fontWeight: theme.fontWeight.bold,
                  lineHeight: "22.5px",
                }}
              >
                John_user
              </p>
              <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <img src={Flag} alt="Flag Image" />
                <p
                  style={{
                    color: "#75757A",
                    fontWeight: theme.fontWeight.small,
                    fontSize: "11px",
                  }}
                >
                  France
                </p>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <MoneyCard
              amount="$1.35"
              icon={MoneyIcon}
              bgColor="#B5EBD0"
              color="#414646"
              iconColor="linear-gradient(to right, #B5EBD0, #62BA8E)"
            />

            <MoneyCard
              amount="2430"
              icon={MoneyCardIcon}
              bgColor="#FFEC83"
              color="#414646"
              iconColor="linear-gradient(199.44deg, #FFD612 16.3%, #F99C39 86.96%) "
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "100%", padding: "0 21px", textAlign: "center" }}>
        <Box sx={{ my: "20px" }}>
          <p
            style={{
              lineHeight: "24px",
              fontSize: "18px",
              fontWeight: "600",
              color: "rgba(37, 41, 70, 1)",
            }}
          >
            Shop to Earn
          </p>
        </Box>
        <Box
          sx={{
            borderRadius: "100px",
            padding: "4px 6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(241, 241, 242, 1)",
            marginBottom: "25px",
          }}
        >
          <Box
            sx={{
              width: "50%",
              borderRadius: "20px",
              background:
                selectedButton === "deals" ? "rgba(0, 152, 234, 1)" : "unset",
              cursor: "pointer",
              padding: "4px",
            }}
            onClick={() => handleSetSelectedButton("deals")}
          >
            <p
              style={{
                color:
                  selectedButton === "deals"
                    ? "white"
                    : "rgba(117, 117, 122, 1)",
                fontSize: "12px",
              }}
            >
              Deals
            </p>
          </Box>
          <Box
            sx={{
              width: "50%",
              borderRadius: "20px",
              background:
                selectedButton === "gift" ? "rgba(0, 152, 234, 1)" : "unset",
              cursor: "pointer",
              padding: "4px",
            }}
            onClick={() => handleSetSelectedButton("gift")}
          >
            <p
              style={{
                color:
                  selectedButton === "gift"
                    ? "white"
                    : "rgba(117, 117, 122, 1)",
                fontSize: "12px",
              }}
            >
              Gift-cards
            </p>
          </Box>
        </Box>
        {selectedButton === "deals" ? (
          <>
            <Box
              sx={{
                width: "100%",
                padding: "7px 150px 18px 16px",
                background:
                  "linear-gradient(0deg, rgba(14, 132, 196, 0.15), rgba(14, 132, 196, 0.15)),linear-gradient(82.05deg, #19A4FF 5.49%, #4992FE 48.57%, #FFF5C2 96.19%)",
                borderRadius: "18px",
                overflow: "hidden",
                position: "relative",
                marginBottom: "23px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    lineHeight: "29px",
                    color: "white",
                    marginRight: "10px",
                    textTransform: "uppercase",
                  }}
                >
                  Category{" "}
                </p>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img style={{ width: "11.93" }} src={Crown} alt="Crown" />
                  <img style={{ width: "10.11" }} src={HalfCrown} alt="Crown" />
                  <img style={{ width: "10.11" }} src={HalfCrown} alt="Crown" />
                </Box>
              </Box>
              <Box>
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "19px",
                    lineHeight: "25px",
                    fontWeight: "700",
                    color: "white",
                    textTransform: "uppercase",
                  }}
                >
                  Earn coins <br />
                  while you shop!
                </p>
              </Box>
              <img
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  zIndex: 2,
                }}
                src={Sunlight}
                alt="SunLight"
              />
              <img
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "0",
                  zIndex: 3,
                }}
                src={CoinsGroup}
                alt="SunLight"
              />
              <img
                style={{
                  position: "absolute",
                  opacity: 0.2,
                  top: "-17px",
                  right: "160",
                  zIndex: 1,
                }}
                src={SSquare}
                alt="SunLight"
              />
              <img
                style={{
                  position: "absolute",
                  opacity: 0.2,
                  top: "85px",
                  right: "153px",
                  zIndex: 1,
                }}
                src={SSquare}
                alt="SunLight"
              />
              <img
                style={{
                  position: "absolute",
                  opacity: 0.2,
                  top: "-61px",
                  right: "53px",
                  zIndex: 1,
                }}
                src={BSquare}
                alt="SunLight"
              />
              <img
                style={{
                  position: "absolute",
                  opacity: 0.2,
                  top: "-23px",
                  left: "-71px",
                  zIndex: 1,
                }}
                src={BSquare}
                alt="SunLight"
              />
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns:
                  "minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)",
                gap: "7px",
              }}
            >
              {ShopEarnData.map((item, index) => (
                <ShopEarnCard
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  top={item.top}
                  left={item.left}
                  bgColor={item.bgColor}
                  url={item.url}
                  width={item?.width}
                />
              ))}
            </Box>
          </>
        ) : (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
              gap: "10px",
            }}
          >
            {ShopEarnGiftData.map((item, index) => (
              <ShopEarnGift
                key={index}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </Box>
        )}
      </Box>
      {selectedButton === "deals" && <Footer />}
    </React.Fragment>
  );
};

export default ShopEarn;
