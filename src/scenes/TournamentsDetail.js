import React from "react";
import { Box, useTheme, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import TournamentFooter from "../components/TournamentFooter";

import TMainIcon from "../assets/images/t_main_2.png";
import TSub from "../assets/images/t_sub.svg";
import Man1 from "../assets/images/man2.svg";
import Man2 from "../assets/images/man3.svg";
import Female1 from "../assets/images/female1.svg";
import Preview1 from "../assets/images/t_preview_1.svg";
import Preview2 from "../assets/images/t_preview_2.svg";
import Preview3 from "../assets/images/t_preview_3.svg";

import SecondMan from "../assets/images/2st_man.png";
import FirstMan from "../assets/images/1st_man.png";
import ThirdMan from "../assets/images/3st_man.png";
import SecondMark from "../assets/images/2st_mark.png";
import FirstMark from "../assets/images/1st_mark.png";
import ThirdMark from "../assets/images/3st_mark.png";
import SecondTower from "../assets/images/2st_tower.png";
import FirstTower from "../assets/images/1st_tower.png";
import ThirdTower from "../assets/images/3st_tower.png";
import USDTCard from "../assets/images/usdt_coin_card.png";
import RankingCardIcon from "../assets/images/ranking_card.png";
import FranceMan from "../assets/images/france_man.png";
import MoneyIcon from "../assets/images/group_money.png";

import { rankingData } from "../Contant";
import RankingCard from "../components/RankingCard";

const TournamentsDetail = () => {
  const theme = useTheme();
  const [moveRightState, setMoveRightState] = React.useState(false);
  const [selectedButton, setselectedButton] = React.useState("detail");

  return (
    <React.Fragment>
      <Navbar />
      <Box sx={{ px: "21px" }}>
        <Box
          sx={{
            mt: "45px",
            mb: "46px",
            height: "106px",
            width: "100%",
            background:
              "linear-gradient(105deg, #726CC7 13.62%, #342D73 60.7%)",
            borderRadius: "19px",
            position: "relative",
          }}
        >
          <img
            src={TMainIcon}
            style={{
              position: "absolute",
              right: "10px",
              top: "-31px",
            }}
            alt="Image"
          />
          <img
            style={{
              position: "absolute",
              left: "50%",
              bottom: "0",
              transform: "translate(-50%, 50%)",
            }}
            src={TSub}
            alt="Image"
          />
        </Box>
        <p
          style={{
            color: "#252946",
            fontSize: "18px",
            fontWeight: "600",
            lineHeight: "16px",
            height: "32px",
          }}
        >
          Cubie Dash Tournament
        </p>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "84.53px",
            py: "0",
            px: "7.53px",
            border: "1px solid #728A96",
            fontSize: "10.144px",
            fontWeight: "600",
            lineHeight: "20.20px",
            color: "#728A96",
            marginBottom: "12.09px",
            "&:hover": {
              border: "1px solid #728A96",
            },
          }}
        >
          sport
        </Button>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "4px",
            marginBottom: "22px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "-4px",
            }}
          >
            <img style={{ zIndex: 3 }} src={Man1} alt="People Icon" />
            <img
              style={{ zIndex: 2, marginLeft: "-10px" }}
              src={Man2}
              alt="People Icon"
            />
            <img
              style={{ zIndex: 1, marginLeft: "-10px" }}
              src={Female1}
              alt="People Icon"
            />
          </Box>
          <p style={{ fontSize: "12px", color: "#505057", lineHeight: "14px" }}>
            32 friends are playing
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
            marginBottom: "15px",
          }}
        >
          <Box
            sx={{
              flex: 1,
              borderRadius: "20px",
              background:
                selectedButton === "detail" ? "rgba(0, 152, 234, 1)" : "unset",
              cursor: "pointer",
              padding: "4px",
            }}
            onClick={() => setselectedButton("detail")}
          >
            <p
              style={{
                color:
                  selectedButton === "detail"
                    ? "white"
                    : "rgba(117, 117, 122, 1)",
                fontSize: "12px",
              }}
            >
              Detail
            </p>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "20px",
              background:
                selectedButton === "ranking" ? "rgba(0, 152, 234, 1)" : "unset",
              cursor: "pointer",
              padding: "4px",
            }}
            onClick={() => setselectedButton("ranking")}
          >
            <p
              style={{
                color:
                  selectedButton === "ranking"
                    ? "white"
                    : "rgba(117, 117, 122, 1)",
                fontSize: "12px",
              }}
            >
              Ranking
            </p>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "20px",
              background:
                selectedButton === "record" ? "rgba(0, 152, 234, 1)" : "unset",
              cursor: "pointer",
              padding: "4px",
            }}
            onClick={() => setselectedButton("record")}
          >
            <p
              style={{
                color:
                  selectedButton === "record"
                    ? "white"
                    : "rgba(117, 117, 122, 1)",
                fontSize: "12px",
              }}
            >
              Record
            </p>
          </Box>
        </Box>
      </Box>
      <Box sx={{ marginBottom: "28px" }}>
        {selectedButton === "detail" ? (
          <Box>
            <Box
              sx={{
                padding: "16px 0px 16px 21px",
                overflow: "hidden",
                background: "#F7F9FB",
                marginBottom: "16px",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  color: "#252946",
                  marginBottom: "16px",
                }}
              >
                Preview
              </p>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                }}
              >
                <img src={Preview1} alt="Preview Img" />
                <img src={Preview2} alt="Preview Img" />
                <img src={Preview3} alt="Preview Img" />
              </Box>
            </Box>
            <Box>
              <p
                style={{
                  fontSize: "18px",
                  color: "#252946",
                  fontWeight: "600",
                  lineHeight: "24px",
                  marginBottom: "16px",
                }}
              >
                About this game
              </p>
              <p
                style={{
                  padding: "0 21px",
                  fontSize: "13px",
                  lineHeight: "18px",
                  color: "#75757A",
                  textAlign: "left",
                }}
              >
                With Magic Tiles 3, you can play various types of music: pop,
                rap, acappella, EDM, jazz, instrumental. A thousand of songs is
                waiting for you. Let's explore more to find the rainbow in your
                mind.
                <br />
                Magic Tiles 3 key features: <br />
                1. Appealing, modern and diverse music genres to satisfy every
                music taste! We have over 1000 songs waiting for you to conquer.{" "}
                <br />
                2. Finely-built online mode – connect with countless players all
                around the world. You can also invite your friends/enemies into
                a room and battle each other.
                <br /> 3. Weekly tournament comes with irresistible rewards.
                <br /> 4. Band mode where you can play with additional
                instruments such as guitar, piano and so many more.
                <br /> Game’s rules:
                <br /> 1. Tap the black tiles <br />
                2. Avoid the white tiles <br />
                3. Expect to speed up with each song level
                <br /> Log in to your Facebook account and share data on
                multiple devices <br />
                So, get ready to try out the most challenging piano game for
                free!
                <br /> Besides, to improve the game’s performance and offer a
                customized user experience based on your location we do ask for
                permission to access to your storage and location.
                <br /> Become a real pianist now! <br />
                <br />
                Note:
                <br /> * Albums and their related contents are not included
                subscription privilege and may need separate purchases to
                unlock.
                <br /> * Price is equal to the value that "Apple's App Store
                Matrix" determines is the equivalent of the subscription price
                in USD.
                <br /> Magic Tiles 3 is from Amanotes, the number one music
                games publisher in the world, with over one billion downloads.
                Music lovers can interact with thousand of songs through our
                different apps. Why just listen to music, if you can also play
                with it? At Amanotes, we believe that “everyone can music!".
              </p>
            </Box>
          </Box>
        ) : selectedButton === "ranking" ? (
          <Box
            sx={{
              pt: "145px",
              px: "21px",
              background:
                "linear-gradient(180deg, #FFF 2.51%, #0098EA 37.22%, #0098EA 76.27%, #FFF 97.43%)",
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: "334px",
                position: "absolute",
                top: "0",
                left: "50%",
                transform: "translate(-50%, 0%)",
                py: "9px",
                background: "white",
                borderRadius: "24px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "15px",
                  marginBottom: "6px",
                }}
              >
                <img src={RankingCardIcon} alt="Ranking card" />
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    lineHeight: "24px",
                    color: "#252946",
                  }}
                >
                  My Ranking
                </p>
              </Box>
              <p
                style={{
                  fontSize: "10px",
                  color: "#252946",
                  fontWeight: "500",
                  marginBottom: "16px",
                }}
              >
                You are doing better than 10% of other players!
              </p>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "22px",
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <img src={FranceMan} alt="My Avatar" />
                  <Box
                    sx={{
                      width: "17px",
                      height: "17px",
                      border: "1px solid white",

                      position: "absolute",
                      bottom: "0",
                      left: "50%",
                      transform: "translate(-44%, 30%)",
                      background:
                        "linear-gradient(42deg, #0098EA 18.77%, #6CC2F1 100%)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "8px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "11px",
                        color: "white",
                        lineHeight: "18.118px",
                        fontWeight: "600",
                      }}
                    >
                      4
                    </p>
                  </Box>
                </Box>
                <Box>
                  <img src={MoneyIcon} alt="Money Icon" />
                  <p
                    style={{
                      fontWeight: "600",
                      fontSize: "15px",
                      lineHeight: "28px",
                      color: "#252946",
                    }}
                  >
                    2000k
                  </p>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                marginBottom: "16.19px",
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Box sx={{ px: "17.94px" }}>
                  <Box sx={{ position: "relative", marginBottom: "15.76px" }}>
                    <img src={SecondMan} alt="People Avatar" />
                    <img
                      style={{
                        position: "absolute",
                        bottom: "0",
                        left: "50%",
                        transform: "translate(-50%, 30%)",
                      }}
                      src={SecondMark}
                      alt="Ranking Mark"
                    />
                  </Box>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "white",
                      lineHeight: "20px",
                      fontWeight: "600",
                      marginBottom: "4px",
                    }}
                  >
                    Username
                  </p>
                  <Box
                    sx={{
                      background: "white",
                      px: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "3.5px",
                      borderRadius: "87.568px",
                      marginBottom: "20.55px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "11.09px",
                        fontWeight: "600",
                        lineHeight: "25.876px",
                        color: "#252946",
                      }}
                    >
                      3500K
                    </p>
                    <img src={USDTCard} alt="Coin Card" />
                  </Box>
                </Box>
                <img src={SecondTower} alt="Tower Icon" />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Box sx={{ px: "17.94px" }}>
                  <Box sx={{ position: "relative", marginBottom: "15.76px" }}>
                    <img src={FirstMan} alt="People Avatar" />
                    <img
                      style={{
                        position: "absolute",
                        bottom: "0",
                        left: "50%",
                        transform: "translate(-50%, 30%)",
                      }}
                      src={FirstMark}
                      alt="Ranking Mark"
                    />
                  </Box>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "white",
                      lineHeight: "20px",
                      fontWeight: "600",
                      marginBottom: "4px",
                    }}
                  >
                    Username
                  </p>
                  <Box
                    sx={{
                      background: "white",
                      px: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "3.5px",
                      borderRadius: "87.568px",
                      marginBottom: "20.55px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "11.09px",
                        fontWeight: "600",
                        lineHeight: "25.876px",
                        color: "#252946",
                      }}
                    >
                      4000K
                    </p>
                    <img src={USDTCard} alt="Coin Card" />
                  </Box>
                </Box>
                <img src={FirstTower} alt="Tower Icon" />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Box sx={{ px: "17.94px" }}>
                  <Box sx={{ position: "relative", marginBottom: "15.76px" }}>
                    <img src={ThirdMan} alt="People Avatar" />
                    <img
                      style={{
                        position: "absolute",
                        bottom: "0",
                        left: "50%",
                        transform: "translate(-50%, 30%)",
                      }}
                      src={ThirdMark}
                      alt="Ranking Mark"
                    />
                  </Box>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "white",
                      lineHeight: "20px",
                      fontWeight: "600",
                      marginBottom: "4px",
                    }}
                  >
                    Username
                  </p>
                  <Box
                    sx={{
                      background: "white",
                      px: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "3.5px",
                      borderRadius: "87.568px",
                      marginBottom: "20.55px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "11.09px",
                        fontWeight: "600",
                        lineHeight: "25.876px",
                        color: "#252946",
                      }}
                    >
                      3000K
                    </p>
                    <img src={USDTCard} alt="Coin Card" />
                  </Box>
                </Box>
                <img src={ThirdTower} alt="Tower Icon" />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {rankingData.map((item, index) => (
                <RankingCard
                  key={index}
                  avatar={item.avatar}
                  title={item.ranking}
                  username={item.username}
                  flag={item.flag}
                  country={item.country}
                  tg_coin={item.tgCoin}
                  title_2={item.tgAmount}
                  coinIcon={item.usdtCoin}
                  amount={item.usdtAmount}
                />
              ))}
            </Box>
          </Box>
        ) : (
          <Box>
            <h1>Record</h1>
          </Box>
        )}
      </Box>
      <TournamentFooter />
    </React.Fragment>
  );
};

export default TournamentsDetail;
