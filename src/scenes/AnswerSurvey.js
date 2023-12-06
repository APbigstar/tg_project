import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import MoneyCardIcon from "../assets/images/money_card_icon.svg";
import Surveys from "../assets/images/Surveys.svg";
import Coins from "../assets/images/coins.svg";
import GameController from "../assets/images/gameController.svg";
import Vector from "../assets/images/vector.svg";
import VectorShape from "../assets/images/vector_shape.svg";
import UpTo from "../assets/images/Upto.svg";
import CPX from "../assets/images/cpx_research.svg";
import SSquare from "../assets/images/SmSquare.svg";
import BSquare from "../assets/images/BigSquare.svg";
import Bitlabs from "../assets/images/bitlabs.svg";
import TabResearch from "../assets/images/tabResearch.svg";
import Theoremeach from "../assets/images/theoremeach.svg";
import Polish from "../assets/images/polish.svg";

const AnswerSurvey = () => {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Navbar />
      <Box sx={{ width: "100%" }}>
        {/* <Box
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
              textShadow: "0px 4px 4px rgb(50, 163, 223)",
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
              background:
                "linear-gradient(88.83deg, #FFFFFF 7.84%, #FFFFFF 53.72%, #F5FCFF 94.99%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
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
                textAlign: "left",
                fontSize: "26.97px",
                fontWeight: "800",
                marginRight: "3px",
                background:
                  "linear-gradient(262.84deg, #54A0FE 7.38%, #3940BE 55.58%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                textShadow: "0px 4px 4px rgba(89, 168, 254, 0.22)",
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
        </Box> */}
        <img src={Surveys} alt="Fore Image" />
      </Box>
      <Box sx={{ padding: "0 20px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "31px",
          }}
        >
          <Box
            sx={{
              borderRadius: "24.89px",
              pt: "22.82px",
              px: "35px",
              pb: "11.14px",
              textAlign: "center",
              background:
                "linear-gradient(231.61deg, #73CDFF 8.44%, #26ADFF 74.37%)",
              boxShadow:
                "0px 4.1490678787231445px 4.1490678787231445px 0px rgba(74, 147, 254, 0.27)",
              position: "relative",
            }}
          >
            <img
              src={Coins}
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <p
              style={{
                fontWeight: "500",
                fontSize: "13.48px",
                lineHeight: "29.04px",
                color: theme.palette.white[0],
              }}
            >
              Total Won
            </p>
            <p
              style={{
                fontSize: "26.97px",
                lineHeight: "29.04px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              120,00
            </p>
          </Box>
          <Box
            sx={{
              borderRadius: "24.89px",
              pt: "22.82px",
              px: "35px",
              pb: "11.14px",
              textAlign: "center",
              background:
                "linear-gradient(231.61deg, #73CDFF 8.44%, #26ADFF 74.37%)",
              boxShadow:
                "0px 4.1490678787231445px 4.1490678787231445px 0px rgba(74, 147, 254, 0.27)",
              position: "relative",
            }}
          >
            <img
              src={GameController}
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <p
              style={{
                fontWeight: "500",
                fontSize: "13.48px",
                lineHeight: "29.04px",
                color: theme.palette.white[0],
              }}
            >
              Last 7 days
            </p>
            <p
              style={{
                fontSize: "26.97px",
                lineHeight: "29.04px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              $25,00
            </p>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            background:
              "linear-gradient(75deg, #027FCA 14.19%, #1FACF8 94.93%)",
            borderRadius: "19px",
            marginBottom: "9px",
            overflow: "hidden",
            position: "relative",
            paddingBottom: "12.79px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "12px",
              paddingBottom: "15px",
              zIndex: 1,
            }}
          >
            <p
              style={{
                fontSize: "21px",
                fontWeight: "600",
                color: "white",
                paddingLeft: "15.28px",
              }}
            >
              CPX Research
            </p>
            <p
              style={{
                background: "rgba(0, 0, 0, 0.4)",
                padding: "8px 20px",
                borderTopLeftRadius: "31.68px",
                borderBottomLeftRadius: "31.68px",
                fontSize: "10.9px",
                letterSpacing: "-0.4",
                lineHeight: "15.84px",
                color: "white",
              }}
            >
              12 Surveys
            </p>
          </Box>
          <img src={Vector} alt="Vector" />
          <img
            style={{ position: "absolute", top: "50px", left: "0" }}
            src={VectorShape}
            alt="Vector Shape"
          />
          <Box sx={{ width: "100%", textAlign: "right" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "3px",
                background: "rgba(0, 0, 0, 0.4)",
                width: "92px",
                borderRadius: "31.68px",
                float: "right",
                marginRight: "10px",
              }}
            >
              {/* <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "3px",
                }}
              >
                <p
                  style={{
                    fontSize: "11.9px",
                    lineHeight: "15.84px",
                    letterSpacing: "-0.4",
                    fontWeight: "400",
                    color: "white",
                  }}
                >
                  Up to
                </p>
                <p
                  style={{
                    fontSize: "14.43px",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  2000
                </p>
              </Box> */}
              <img src={UpTo} alt="Card" />
              <img src={MoneyCardIcon} alt="Card" />
            </Box>
          </Box>
          <img
            src={CPX}
            style={{ position: "absolute", top: "74px", left: "0", zIndex: 1 }}
            alt="Main Image"
          />
          <img
            src={SSquare}
            style={{
              position: "absolute",
              top: "162px",
              opacity: 0.3,
              left: "215px",
            }}
            alt="Main Image"
          />
          <img
            src={SSquare}
            style={{
              position: "absolute",
              top: "21px",
              opacity: 0.3,
              left: "182px",
            }}
            alt="Main Image"
          />
          <img
            src={BSquare}
            style={{
              position: "absolute",
              top: "-25px",
              opacity: 0.3,
              left: "214px",
            }}
            alt="Main Image"
          />
          <img
            src={BSquare}
            style={{
              position: "absolute",
              top: "12px",
              opacity: 0.3,
              left: "-27px",
            }}
            alt="Main Image"
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            background:
              "linear-gradient(0deg, rgba(14, 132, 196, 0.15), rgba(14, 132, 196, 0.15)), linear-gradient(258.65deg, #FD521B 1.01%, #FFC849 42.82%, #FFAA00 89.98%)",
            borderRadius: "19px",
            marginBottom: "9px",
            overflow: "hidden",
            position: "relative",
            paddingBottom: "12.79px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "12px",
              paddingBottom: "15px",
              zIndex: 1,
            }}
          >
            <p
              style={{
                fontSize: "21px",
                fontWeight: "600",
                color: "white",
                paddingLeft: "15.28px",
              }}
            >
              Bitlabs
            </p>
            <p
              style={{
                background: "rgba(0, 0, 0, 0.4)",
                padding: "8px 20px",
                borderTopLeftRadius: "31.68px",
                borderBottomLeftRadius: "31.68px",
                fontSize: "10.9px",
                letterSpacing: "-0.4",
                lineHeight: "15.84px",
                color: "white",
              }}
            >
              12 Surveys
            </p>
          </Box>
          <img src={Vector} alt="Vector" />
          <img
            style={{ position: "absolute", top: "50px", left: "0" }}
            src={VectorShape}
            alt="Vector Shape"
          />
          <Box sx={{ width: "100%", textAlign: "right" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "3px",
                background: "rgba(0, 0, 0, 0.4)",
                width: "92px",
                borderRadius: "31.68px",
                float: "right",
                marginRight: "10px",
              }}
            >
              {/* <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "3px",
                }}
              >
                <p
                  style={{
                    fontSize: "11.9px",
                    lineHeight: "15.84px",
                    letterSpacing: "-0.4",
                    fontWeight: "400",
                    color: "white",
                  }}
                >
                  Up to
                </p>
                <p
                  style={{
                    fontSize: "14.43px",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  2000
                </p>
              </Box> */}
              <img src={UpTo} alt="Card" />
              <img src={MoneyCardIcon} alt="Card" />
            </Box>
          </Box>
          <img
            src={Bitlabs}
            style={{ position: "absolute", top: "74px", left: "0", zIndex: 1 }}
            alt="Main Image"
          />
          <img
            src={SSquare}
            style={{
              position: "absolute",
              top: "162px",
              opacity: 0.3,
              left: "215px",
            }}
            alt="Main Image"
          />
          <img
            src={SSquare}
            style={{
              position: "absolute",
              top: "21px",
              opacity: 0.3,
              left: "182px",
            }}
            alt="Main Image"
          />
          <img
            src={BSquare}
            style={{
              position: "absolute",
              top: "-25px",
              opacity: 0.3,
              left: "214px",
            }}
            alt="Main Image"
          />
          <img
            src={BSquare}
            style={{
              position: "absolute",
              top: "12px",
              opacity: 0.3,
              left: "-27px",
            }}
            alt="Main Image"
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            background:
              "linear-gradient(0deg, rgba(14, 132, 196, 0.15), rgba(14, 132, 196, 0.15)), linear-gradient(81.99deg, #4C48F8 5.48%, #6D74FB 60.94%, #3C38EA 108.65%)",
            borderRadius: "19px",
            marginBottom: "9px",
            overflow: "hidden",
            position: "relative",
            paddingBottom: "12.79px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "12px",
              paddingBottom: "15px",
              zIndex: 1,
            }}
          >
            <p
              style={{
                fontSize: "21px",
                fontWeight: "600",
                color: "white",
                paddingLeft: "15.28px",
              }}
            >
              TabResearch
            </p>
            <p
              style={{
                background: "rgba(0, 0, 0, 0.4)",
                padding: "8px 20px",
                borderTopLeftRadius: "31.68px",
                borderBottomLeftRadius: "31.68px",
                fontSize: "10.9px",
                letterSpacing: "-0.4",
                lineHeight: "15.84px",
                color: "white",
              }}
            >
              12 Surveys
            </p>
          </Box>
          <img src={Vector} alt="Vector" />
          <img
            style={{ position: "absolute", top: "50px", left: "0" }}
            src={VectorShape}
            alt="Vector Shape"
          />
          <Box sx={{ width: "100%", textAlign: "right" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "3px",
                background: "rgba(0, 0, 0, 0.4)",
                width: "92px",
                borderRadius: "31.68px",
                float: "right",
                marginRight: "10px",
              }}
            >
              {/* <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "3px",
                }}
              >
                <p
                  style={{
                    fontSize: "11.9px",
                    lineHeight: "15.84px",
                    letterSpacing: "-0.4",
                    fontWeight: "400",
                    color: "white",
                  }}
                >
                  Up to
                </p>
                <p
                  style={{
                    fontSize: "14.43px",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  2000
                </p>
              </Box> */}
              <img src={UpTo} alt="Card" />
              <img src={MoneyCardIcon} alt="Card" />
            </Box>
          </Box>
          <img
            src={TabResearch}
            style={{ position: "absolute", top: "5px", left: "0", zIndex: 1 }}
            alt="Main Image"
          />
          <img
            src={SSquare}
            style={{
              position: "absolute",
              top: "162px",
              opacity: 0.3,
              left: "215px",
            }}
            alt="Main Image"
          />
          <img
            src={SSquare}
            style={{
              position: "absolute",
              top: "21px",
              opacity: 0.3,
              left: "182px",
            }}
            alt="Main Image"
          />
          <img
            src={BSquare}
            style={{
              position: "absolute",
              top: "-25px",
              opacity: 0.3,
              left: "214px",
            }}
            alt="Main Image"
          />
          <img
            src={BSquare}
            style={{
              position: "absolute",
              top: "12px",
              opacity: 0.3,
              left: "-27px",
            }}
            alt="Main Image"
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            background:
              "linear-gradient(0deg, rgba(14, 132, 196, 0.15), rgba(14, 132, 196, 0.15)), linear-gradient(241.65deg, #FE8990 24.56%, #FC425E 57.89%, #444B8C 93.21%)",
            borderRadius: "19px",
            marginBottom: "9px",
            overflow: "hidden",
            position: "relative",
            paddingBottom: "12.79px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "12px",
              paddingBottom: "15px",
              zIndex: 1,
            }}
          >
            <p
              style={{
                fontSize: "21px",
                fontWeight: "600",
                color: "white",
                paddingLeft: "15.28px",
              }}
            >
              Theoremeach
            </p>
            <p
              style={{
                background: "rgba(0, 0, 0, 0.4)",
                padding: "8px 20px",
                borderTopLeftRadius: "31.68px",
                borderBottomLeftRadius: "31.68px",
                fontSize: "10.9px",
                letterSpacing: "-0.4",
                lineHeight: "15.84px",
                color: "white",
              }}
            >
              12 Surveys
            </p>
          </Box>
          <img src={Vector} alt="Vector" />
          <img
            style={{ position: "absolute", top: "50px", left: "0" }}
            src={VectorShape}
            alt="Vector Shape"
          />
          <Box sx={{ width: "100%", textAlign: "right" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "3px",
                background: "rgba(0, 0, 0, 0.4)",
                width: "92px",
                borderRadius: "31.68px",
                float: "right",
                marginRight: "10px",
              }}
            >
              {/* <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "3px",
                }}
              >
                <p
                  style={{
                    fontSize: "11.9px",
                    lineHeight: "15.84px",
                    letterSpacing: "-0.4",
                    fontWeight: "400",
                    color: "white",
                  }}
                >
                  Up to
                </p>
                <p
                  style={{
                    fontSize: "14.43px",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  2000
                </p>
              </Box> */}
              <img src={UpTo} alt="Card" />
              <img src={MoneyCardIcon} alt="Card" />
            </Box>
          </Box>
          <img
            src={Theoremeach}
            style={{ position: "absolute", top: "76px", left: "0", zIndex: 1 }}
            alt="Main Image"
          />
          <img
            src={SSquare}
            style={{
              position: "absolute",
              top: "162px",
              opacity: 0.3,
              left: "215px",
            }}
            alt="Main Image"
          />
          <img
            src={SSquare}
            style={{
              position: "absolute",
              top: "21px",
              opacity: 0.3,
              left: "182px",
            }}
            alt="Main Image"
          />
          <img
            src={BSquare}
            style={{
              position: "absolute",
              top: "-25px",
              opacity: 0.3,
              left: "214px",
            }}
            alt="Main Image"
          />
          <img
            src={BSquare}
            style={{
              position: "absolute",
              top: "12px",
              opacity: 0.3,
              left: "-27px",
            }}
            alt="Main Image"
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            background:
              "linear-gradient(0deg, rgba(14, 132, 196, 0.15), rgba(14, 132, 196, 0.15)), linear-gradient(82.05deg, #F74527 5.49%, #FF8C11 48.11%, #FDA241 96.19%)",
            borderRadius: "19px",
            marginBottom: "9px",
            overflow: "hidden",
            position: "relative",
            paddingBottom: "12.79px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "12px",
              paddingBottom: "15px",
              zIndex: 1,
            }}
          >
            <p
              style={{
                fontSize: "21px",
                fontWeight: "600",
                color: "white",
                paddingLeft: "15.28px",
              }}
            >
              Pollfish
            </p>
            <p
              style={{
                background: "rgba(0, 0, 0, 0.4)",
                padding: "8px 20px",
                borderTopLeftRadius: "31.68px",
                borderBottomLeftRadius: "31.68px",
                fontSize: "10.9px",
                letterSpacing: "-0.4",
                lineHeight: "15.84px",
                color: "white",
              }}
            >
              12 Surveys
            </p>
          </Box>
          <img src={Vector} alt="Vector" />
          <img
            style={{ position: "absolute", top: "50px", left: "0" }}
            src={VectorShape}
            alt="Vector Shape"
          />
          <Box sx={{ width: "100%", textAlign: "right" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "3px",
                background: "rgba(0, 0, 0, 0.4)",
                width: "92px",
                borderRadius: "31.68px",
                float: "right",
                marginRight: "10px",
              }}
            >
              {/* <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "3px",
                }}
              >
                <p
                  style={{
                    fontSize: "11.9px",
                    lineHeight: "15.84px",
                    letterSpacing: "-0.4",
                    fontWeight: "400",
                    color: "white",
                  }}
                >
                  Up to
                </p>
                <p
                  style={{
                    fontSize: "14.43px",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  2000
                </p>
              </Box> */}
              <img src={UpTo} alt="Card" />
              <img src={MoneyCardIcon} alt="Card" />
            </Box>
          </Box>
          <img
            src={Polish}
            style={{ position: "absolute", top: "54px", left: "0", zIndex: 1 }}
            alt="Main Image"
          />
          <img
            src={SSquare}
            style={{
              position: "absolute",
              top: "162px",
              opacity: 0.3,
              left: "215px",
            }}
            alt="Main Image"
          />
          <img
            src={SSquare}
            style={{
              position: "absolute",
              top: "21px",
              opacity: 0.3,
              left: "182px",
            }}
            alt="Main Image"
          />
          <img
            src={BSquare}
            style={{
              position: "absolute",
              top: "-25px",
              opacity: 0.3,
              left: "214px",
            }}
            alt="Main Image"
          />
          <img
            src={BSquare}
            style={{
              position: "absolute",
              top: "12px",
              opacity: 0.3,
              left: "-27px",
            }}
            alt="Main Image"
          />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default AnswerSurvey;
