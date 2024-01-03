import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, useTheme, Button, Typography } from "@mui/material";
import Iframe from "react-iframe";
import { useSelector, useDispatch } from "react-redux";
import { setGameState } from "../features/game/game";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MoneyCard from "../components/MoneyCard";
import PointSystemCard from "../components/PointSystemCard";
import DailyMissionCard from "../components/DailyMissionCard";
import GameCard from "../components/GameCard";

import ProfileIcon from "../assets/images/profile.png";
import Flag from "../assets/images/France_Flag.svg";
import MoneyIcon from "../assets/images/money_icon.svg";
import MoneyCardIcon from "../assets/images/money_card_icon.svg";
import CheckThemeIcon from "../assets/images/CheckThemeIcon.svg";
import Sunlight from "../assets/images/sunlight.svg";
import SSquare from "../assets/images/SmSquare.svg";
import BSquare from "../assets/images/BigSquare.svg";
import DSurveyIcon from "../assets/images/DSurveyIcon.svg";
import DViewRewardIcon from "../assets/images/DViewRewardIcon.png";
import DPlaytimeIcon from "../assets/images/DPlaytimeIcon.svg";
import FGame from "../assets/images/hexa.png";
import SGame from "../assets/images/farm.png";
import TGame from "../assets/images/ducky.png";
import FOGame from "../assets/images/hoppy.png";
import TapTap from "../assets/images/taptap.png";
import FFGame from "../assets/images/fifth_game.svg";
import SSGame from "../assets/images/sixth_game.svg";
import Lock from "../assets/images/Lock.svg";
import Extra from "../assets/images/Extra_2.svg";
import Star from "../assets/images/star.svg";
import Tournaments from "../assets/images/tournaments.svg";

import { PointSystems } from "../Constant";

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [iframeUrl, setIframeUrl] = React.useState("");
  const currentGameState = useSelector((state) => state.gameState.value);
  const dispatch = useDispatch();

  const handleSetGameState = (value, url) => {
    if (value === true) {
      setIframeUrl(url);
    }
    dispatch(setGameState(value));
  };

  return (
    <React.Fragment>
      <Navbar />
      {currentGameState === false ? (
        <>
          <Box
            sx={{
              py: "10px",
              background: "linear-gradient(90deg, #458CFE 0%, #7DD8FD 100%)",
            }}
          >
            <p
              className="poppines_font"
              style={{
                color: theme.palette.white[0],
                fontSize: "13px",
                textAlign: "center",
                lineHeight: "20px",
                fontWeight: theme.fontWeight.bold,
              }}
            >
              Hey John_user, welcome to TG Games!
            </p>
          </Box>
          <Box
            sx={{
              position: "relative",
              paddingLeft: "21px",
              textAlign: "center",
              margin: `${theme.gaps[1]} 0`,
              marginTop: "14px",
              maxWidth: "354px",
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
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "6px" }}
                  >
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
                  color="#542700"
                  iconColor="linear-gradient(199.44deg, #FFD612 16.3%, #F99C39 86.96%) "
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              overflow: "hidden",
              marginBottom: theme.gaps[1],
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: theme.gaps[0],
                px: "21px",
                overflowY: "hidden",
                overflowX: "auto",
                scrollbarWidth: "thin",
                scrollbarColor: "transparent transparent",
                msOverflowStyle: "none",
                transition: "all 0.7s",

                "&::-webkit-scrollbar": {
                  width: 4,
                },

                "&::-webkit-scrollbar-thumb": {
                  background: "transparent",
                },
              }}
            >
              {PointSystems.map((item, index) => (
                <PointSystemCard
                  key={index}
                  bgColor={item.bgColor}
                  amount={item.amount}
                  emptyIconNum={item.emptyIconNum}
                  fillIconNum={item.fillIconNum}
                  text={item.text}
                  icon={item.icon}
                  redirectUrl={item.url}
                  width={item.width}
                  left={item.left}
                  top={item.top}
                />
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              padding: "0 21px",
              overflow: "hidden",
              marginBottom: theme.gaps[1],
            }}
          >
            <Box
              sx={{
                padding: "8px 19px 15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                textAlign: "left",
                background:
                  "linear-gradient(0deg, rgba(14, 132, 196, 0.15), rgba(14, 132, 196, 0.15)),linear-gradient(82.05deg, #19A4FF 5.49%, #4992FE 48.57%, #FFF5C2 96.19%)",
                marginBottom: theme.gaps[0],
                position: "relative",
                borderRadius: "17.5px",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  width: "51px",
                  left: "103px",
                  top: "-13px",
                  opacity: 0.4,
                }}
                src={SSquare}
                alt="Square"
              />
              <img
                style={{
                  position: "absolute",
                  width: "51px",
                  top: "92px",
                  left: "136px",
                  opacity: 0.4,
                }}
                src={SSquare}
                alt="Square"
              />
              <img
                style={{
                  position: "absolute",
                  width: "122px",
                  left: "-44px",
                  top: "-12px",
                  opacity: 0.4,
                }}
                src={BSquare}
                alt="Square"
              />
              <img
                style={{
                  position: "absolute",
                  width: "122px",
                  top: "-49px",
                  left: "129px",
                  opacity: 0.4,
                }}
                src={BSquare}
                alt="Square"
              />
              <img
                style={{ position: "absolute", right: 0, bottom: 0, zIndex: 1 }}
                src={CheckThemeIcon}
                alt="Check Theme"
              />
              <img
                style={{ position: "absolute", right: 0, top: 0 }}
                src={Sunlight}
                alt="Check Theme"
              />
              <Box sx={{ zIndex: 1 }}>
                <p
                  style={{
                    fontSize: "15px",
                    color: theme.palette.white[0],
                    textTransform: "uppercase",
                    lineHeight: "29px",
                    fontWeight: "500",
                  }}
                >
                  prizes this week
                </p>
                <p
                  style={{
                    fontSize: theme.fontSize.big,
                    color: theme.palette.white[0],
                    marginBottom: theme.gaps[0],
                    fontWeight: "700",
                  }}
                >
                  $35,700
                </p>
                <Box
                  sx={{
                    background: theme.bgColor[2],
                    padding: "1.5px 12px",
                    borderRadius: "32px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "10.89px",
                      color: theme.palette.brown[0],
                      fontWeight: theme.fontWeight.bold,
                    }}
                  >
                    Ends in 0d 3h 27m
                  </p>
                </Box>
              </Box>

              <Box sx={{ zIndex: 1 }}>
                <Box
                  sx={{
                    background:
                      "linear-gradient(180deg, #FFD703 0%, #FFC704 100%)",
                    padding: "6.22px 18.67px",
                    borderRadius: "32px",
                    boxShadow: "0px 4px 4px 0px #A85C0A52",
                  }}
                >
                  <p
                    style={{
                      fontSize: "10.89px",
                      fontWeight: theme.fontWeight.bold,
                      lineHeight: "15.56px",
                    }}
                  >
                    Check Them
                  </p>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ padding: "0 21px", marginBottom: "44px" }}>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: theme.fontWeight.bold,
                lineHeight: "24px",
                marginBottom: "10px",
              }}
            >
              Daily Mission
            </h3>
            <Box
              sx={{
                background:
                  "linear-gradient(145.76deg, #07ACFF 0%, #468EFE 100%)",
                borderRadius: "25px",
                padding: theme.gaps[1],
              }}
            >
              <DailyMissionCard
                icon={DSurveyIcon}
                title="Daily Survey"
                amount="112"
              >
                <p
                  style={{
                    color: theme.palette.white[0],
                    fontSize: "15px",
                    fontWeight: theme.fontWeight.bold,
                    maxWidth: "170px",
                  }}
                >
                  Test your IQ <br /> with
                  <span style={{ color: theme.palette.yellow[0] }}> 35 </span>
                  questions!
                </p>
              </DailyMissionCard>
              <DailyMissionCard
                icon={DPlaytimeIcon}
                title="Playtime"
                amount="98"
              >
                <p
                  style={{
                    color: theme.palette.white[0],
                    fontSize: "15px",
                    maxWidth: "170px",
                    fontWeight: theme.fontWeight.bold,
                  }}
                >
                  Reach a total of
                  <span style={{ color: theme.palette.yellow[0] }}> 800 </span>
                  points!
                </p>
              </DailyMissionCard>
              <DailyMissionCard
                icon={DViewRewardIcon}
                title="Video Rewards"
                amount="98"
              >
                <p
                  style={{
                    color: theme.palette.white[0],
                    fontSize: "15px",
                    maxWidth: "170px",
                    fontWeight: theme.fontWeight.bold,
                  }}
                >
                  Watch to <br /> earn
                  <span style={{ color: theme.palette.yellow[0] }}> 100 </span>
                  points!
                </p>
              </DailyMissionCard>
              <Box
                sx={{
                  background: theme.palette.white[0],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  borderRadius: "10px",
                  padding: "9px 11px 9px 17px",
                  boxShadow: "0px 4px 4px 0px #0000001A",
                }}
              >
                <Box>
                  <p
                    style={{
                      fontSize: "16.99px",
                      color: theme.palette.blue[1],
                      fontWeight: theme.fontWeight.bold,
                    }}
                  >
                    Finish all
                  </p>
                  <p
                    style={{
                      fontSize: theme.fontSize.small,
                      fontWeight: theme.fontWeight.bold,
                    }}
                  >
                    in 02:30:00
                  </p>
                </Box>
                <Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                    <span
                      style={{
                        fontSize: theme.fontSize.mmedium,
                        marginRight: "2px",
                        fontWeight: theme.fontWeight.bold,
                      }}
                    >
                      140
                    </span>
                    <img src={MoneyCardIcon} alt="icon" />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "3.52px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "12.32px",
                        height: "12.32px",
                        border: "0.88px solid #3B93FE",
                        borderRadius: "50%",
                      }}
                    />
                    <Box
                      sx={{
                        width: "12.32px",
                        height: "12.32px",
                        border: "0.88px solid #3B93FE",
                        borderRadius: "50%",
                      }}
                    />
                    <Box
                      sx={{
                        width: "12.32px",
                        height: "12.32px",
                        border: "0.88px solid #3B93FE",
                        borderRadius: "50%",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ padding: "0 21px" }}>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: theme.fontWeight.bold,
                textAlign: "center",
                marginBottom: theme.gaps[0],
              }}
            >
              Games
            </h3>
            <Box>
              <Box
                sx={{
                  padding: "6px 9px 9px 11px",
                  background: "#F7F9FB",
                  borderRadius: "8px",
                  marginBottom: "12px",
                }}
              >
                <GameCard
                  icon={TapTap}
                  amount="0/196"
                  url="https://www.gamearter.com/game/tg-taptap/"
                  setGameState={handleSetGameState}
                >
                  <p
                    style={{
                      color: theme.palette.black[0],
                      fontSize: "13px",
                      maxWidth: "170px",
                      fontWeight: theme.fontWeight.medium,
                    }}
                  >
                    TapTap <br />{" "}
                    <span
                      style={{
                        fontSize: theme.fontSize.medium,
                        fontWeight: theme.fontWeight.bold,
                      }}
                    >
                      {" "}
                      Score{" "}
                      <span
                        style={{
                          color: "#3CA1FE",
                          fontWeight: theme.fontWeight.bold,
                        }}
                      >
                        {" "}
                        500{" "}
                      </span>
                      points!
                    </span>
                  </p>
                </GameCard>
              </Box>
              <Box
                sx={{
                  padding: "6px 9px 9px 11px",
                  background: "#F7F9FB",
                  borderRadius: "8px",
                  marginBottom: "12px",
                }}
              >
                <GameCard
                  icon={FGame}
                  amount="0/196"
                  setGameState={handleSetGameState}
                >
                  <p
                    style={{
                      color: theme.palette.black[0],
                      fontSize: "13px",
                      maxWidth: "170px",
                      fontWeight: theme.fontWeight.medium,
                    }}
                  >
                    Dominoes Cash <br />{" "}
                    <span
                      style={{
                        fontSize: theme.fontSize.medium,
                        fontWeight: theme.fontWeight.bold,
                      }}
                    >
                      {" "}
                      Score{" "}
                      <span
                        style={{
                          color: "#3CA1FE",
                          fontWeight: theme.fontWeight.bold,
                        }}
                      >
                        {" "}
                        500{" "}
                      </span>
                      points!
                    </span>
                  </p>
                </GameCard>
              </Box>
              <Box
                sx={{
                  padding: "6px 9px 9px 11px",
                  background: "#F7F9FB",
                  borderRadius: "8px",
                  marginBottom: "12px",
                }}
              >
                <GameCard
                  icon={SGame}
                  amount="0/196"
                  setGameState={handleSetGameState}
                >
                  <p
                    style={{
                      color: theme.palette.black[0],
                      fontSize: "13px",
                      maxWidth: "170px",
                      fontWeight: theme.fontWeight.medium,
                    }}
                  >
                    Paws: Connect Puzzle <br />{" "}
                    <span
                      style={{
                        fontSize: theme.fontSize.medium,
                        fontWeight: theme.fontWeight.bold,
                      }}
                    >
                      {" "}
                      Score{" "}
                      <span
                        style={{
                          color: "#3CA1FE",
                          fontWeight: theme.fontWeight.bold,
                        }}
                      >
                        {" "}
                        500{" "}
                      </span>
                      points!
                    </span>
                  </p>
                </GameCard>
              </Box>
              <Box
                sx={{
                  padding: "6px 9px 9px 11px",
                  background: "#F7F9FB",
                  borderRadius: "8px",
                  marginBottom: "12px",
                }}
              >
                <GameCard
                  icon={TGame}
                  amount="0/196"
                  setGameState={handleSetGameState}
                >
                  <p
                    style={{
                      color: theme.palette.black[0],
                      fontSize: "13px",
                      maxWidth: "170px",
                      fontWeight: theme.fontWeight.medium,
                    }}
                  >
                    Cooking Cash <br />{" "}
                    <span
                      style={{
                        fontSize: theme.fontSize.medium,
                        fontWeight: theme.fontWeight.bold,
                      }}
                    >
                      {" "}
                      Score{" "}
                      <span
                        style={{
                          color: "#3CA1FE",
                          fontWeight: theme.fontWeight.bold,
                        }}
                      >
                        {" "}
                        500{" "}
                      </span>
                      points!
                    </span>
                  </p>
                </GameCard>
              </Box>
              <Box
                sx={{
                  padding: "6px 9px 9px 11px",
                  background: "#F7F9FB",
                  borderRadius: "8px",
                  marginBottom: "12px",
                }}
              >
                <GameCard
                  icon={FOGame}
                  amount="0/196"
                  setGameState={handleSetGameState}
                >
                  <p
                    style={{
                      color: theme.palette.black[0],
                      fontSize: "13px",
                      fontWeight: theme.fontWeight.medium,
                    }}
                  >
                    Crazy 8s: Win Real Cash <br />{" "}
                    <span
                      style={{
                        fontSize: theme.fontSize.medium,
                        fontWeight: theme.fontWeight.bold,
                      }}
                    >
                      {" "}
                      Score{" "}
                      <span
                        style={{
                          color: "#3CA1FE",
                          fontWeight: theme.fontWeight.bold,
                        }}
                      >
                        {" "}
                        500{" "}
                      </span>
                      points!
                    </span>
                  </p>
                </GameCard>
              </Box>
              <Box
                sx={{
                  padding: "6px 9px 9px 11px",
                  background: "#F7F9FB",
                  borderRadius: "8px",
                  marginBottom: "12px",
                }}
              >
                <GameCard icon={FFGame} amount="0/196">
                  <p
                    style={{
                      color: theme.palette.black[0],
                      fontSize: "13px",
                      maxWidth: "170px",
                      fontWeight: theme.fontWeight.medium,
                    }}
                  >
                    Gin Rummy Cash <br />{" "}
                    <span
                      style={{
                        fontSize: theme.fontSize.medium,
                        fontWeight: theme.fontWeight.bold,
                      }}
                    >
                      {" "}
                      Score{" "}
                      <span
                        style={{
                          color: "#3CA1FE",
                          fontWeight: theme.fontWeight.bold,
                        }}
                      >
                        {" "}
                        500{" "}
                      </span>
                      points!
                    </span>
                  </p>
                </GameCard>
              </Box>
              <Box
                sx={{
                  padding: "6px 9px 9px 11px",
                  background: "#F7F9FB",
                  borderRadius: "8px",
                  marginBottom: "12px",
                }}
              >
                <GameCard icon={SSGame} amount="0/196">
                  <p
                    style={{
                      color: theme.palette.black[0],
                      fontSize: "13px",
                      maxWidth: "170px",
                      fontWeight: theme.fontWeight.medium,
                    }}
                  >
                    Skip Solitaire <br />{" "}
                    <span
                      style={{
                        fontSize: theme.fontSize.medium,
                        fontWeight: theme.fontWeight.bold,
                      }}
                    >
                      {" "}
                      Score{" "}
                      <span
                        style={{
                          color: "#3CA1FE",
                          fontWeight: theme.fontWeight.bold,
                        }}
                      >
                        {" "}
                        500{" "}
                      </span>
                      points!
                    </span>
                  </p>
                </GameCard>
              </Box>
            </Box>
          </Box>
          <Box sx={{ padding: "0 21px", marginBottom: "17px" }}>
            <Box sx={{ padding: "17px 3px 7px" }}>
              <h3 style={{ color: "#252946", fontSize: "18px" }}>
                Extra Games
              </h3>
              <p style={{ fontSize: "11px", marginBottom: "13px" }}>
                Reach level 5 and play more arcade!
              </p>
              <Box
                sx={{
                  background:
                    "linear-gradient(145.76deg, #21242D 0%, #3D4356 100%)",
                  padding: "16px 21px",
                  borderRadius: "25px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    marginBottom: "21px",
                    position: "relative",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/levels")}
                >
                  <img
                    style={{
                      position: "absolute",
                      opacity: 0.2,
                      top: "-4px",
                      left: "-24px",
                    }}
                    src={BSquare}
                    alt="Square"
                  />
                  <img
                    style={{
                      position: "absolute",
                      opacity: 0.2,
                      top: "-46px",
                      left: "157px",
                    }}
                    src={BSquare}
                    alt="Square"
                  />
                  <img
                    style={{
                      position: "absolute",
                      opacity: 0.2,
                      top: "-2px",
                      left: "127px",
                    }}
                    src={SSquare}
                    alt="Square"
                  />
                  <img
                    style={{
                      position: "absolute",
                      opacity: 0.2,
                      top: "131px",
                      left: "180px",
                    }}
                    src={SSquare}
                    alt="Square"
                  />
                  <img src={Lock} alt="Lock" />
                  <p
                    style={{ fontSize: "12px", color: theme.palette.white[0] }}
                  >
                    Unlock 2 extra games on level 5
                  </p>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "8px",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    style={{ width: "58px" }}
                    src={FOGame}
                    alt="Extra Game"
                  />
                  <img src={Extra} alt="Extra Game" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "8px",
                    marginBottom: "10px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "10px",
                        color: theme.palette.white[0],
                        lineHeight: "24px",
                      }}
                    >
                      Your level 4
                    </p>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <img src={Star} alt="Star Icon" />
                      <p
                        style={{
                          fontSize: "10px",
                          color: theme.palette.white[0],
                        }}
                      >
                        155/180
                      </p>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    background: "#FFFFFF30",
                    height: "15px",
                    borderRadius: "50px",
                    position: "relative",
                  }}
                >
                  <p
                    style={{
                      position: "absolute",
                      fontSize: "9px",
                      lineHeight: "24px",
                      color: theme.palette.white[0],
                      top: "-4px",
                      right: "5px",
                    }}
                  >
                    5
                  </p>
                  <Box
                    sx={{
                      width: "50%",
                      height: "100%",
                      background:
                        "linear-gradient(89.77deg, #FFB402 -1.89%, #FFD702 100%)",
                      borderRadius: "50px",
                      position: "relative",
                    }}
                  >
                    <p
                      style={{
                        position: "absolute",
                        fontSize: "9px",
                        lineHeight: "24px",
                        color: "#1E1E1E",
                        top: "-4px",
                        left: "5px",
                        fontWeight: theme.fontWeight.medium,
                      }}
                    >
                      4
                    </p>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ padding: "0 21px" }}>
            <Box sx={{ padding: "0px 3px 7px" }}>
              <h3 style={{ color: "#252946", fontSize: "18px" }}>
                Tournaments
              </h3>
              <p
                style={{
                  fontSize: "11px",
                  marginBottom: "33px",
                  lineHeight: "24px",
                }}
              >
                Complete with others & Win big!{" "}
              </p>
              <Box
                sx={{
                  background:
                    "linear-gradient(145.76deg, #0680EE 0%, #3940BE 100%)",
                  padding: "40px 21px 16px ",
                  borderRadius: "25px",
                  position: "relative",
                }}
              >
                <img
                  style={{
                    position: "absolute",
                    top: "-35px",
                    left: "207px",
                    opacity: 0.3,
                  }}
                  src={BSquare}
                  alt="Img"
                />
                <img
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    opacity: 0.3,
                  }}
                  src={BSquare}
                  alt="Img"
                />
                <img
                  style={{
                    position: "absolute",
                    top: "137px",
                    left: "200px",
                    opacity: 0.3,
                  }}
                  src={SSquare}
                  alt="Img"
                />
                <img
                  style={{
                    position: "absolute",
                    top: "11px",
                    left: "175px",
                    opacity: 0.3,
                  }}
                  src={SSquare}
                  alt="Img"
                />
                <img
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  src={Tournaments}
                  alt="Img"
                />
                <p
                  style={{
                    fontWeight: "700",
                    color: theme.palette.white[0],
                    width: "169px",
                    fontSize: "32px",
                    lineHeight: "36px",
                    margin: "auto",
                  }}
                >
                  Unlock on <br /> level 7
                </p>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "8px",
                    marginBottom: "10px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "10px",
                        color: theme.palette.white[0],
                        lineHeight: "24px",
                      }}
                    >
                      Your level 4
                    </p>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <img src={Star} alt="Star Icon" />
                      <p
                        style={{
                          fontSize: "10px",
                          color: theme.palette.white[0],
                        }}
                      >
                        155/180
                      </p>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    background: "#FFFFFF30",
                    height: "15px",
                    borderRadius: "50px",
                    position: "relative",
                  }}
                >
                  <p
                    style={{
                      position: "absolute",
                      fontSize: "9px",
                      lineHeight: "24px",
                      color: theme.palette.white[0],
                      top: "-4px",
                      right: "5px",
                    }}
                  >
                    5
                  </p>
                  <Box
                    sx={{
                      width: "50%",
                      height: "100%",
                      background:
                        "linear-gradient(89.77deg, #FFFFFF -1.89%, #E9E9E9 100%)",
                      borderRadius: "50px",
                      position: "relative",
                    }}
                  >
                    <p
                      style={{
                        position: "absolute",
                        fontSize: "9px",
                        lineHeight: "24px",
                        color: "#1E1E1E",
                        top: "-4px",
                        left: "5px",
                      }}
                    >
                      4
                    </p>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Footer />
        </>
      ) : (
        <>
          <Iframe
            url={iframeUrl}
            width="100%"
            height="598px"
            id=""
            className=""
            display="block"
            position="relative"
          />
          <Button
            className="poppines_font"
            variant="contained"
            sx={{
              ...theme.buttons.blue,
              boxShadow: "0px 4px 4px 0px #3795FE1F",
              borderRadius: "100px",
              width: "85%",
              textTransform: "capitalize",
              my: "16px",
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                paddingTop: "0.35em",
              }}
            >
              Share with Friends
            </Typography>
          </Button>
        </>
      )}
    </React.Fragment>
  );
};

export default Home;
