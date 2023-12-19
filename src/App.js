import React, { useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Home from "./scenes/home";
import AnswerSurvey from "./scenes/AnswerSurvey";
import ShopEarn from "./scenes/ShopEarn";
import Tournaments from "./scenes/Tournaments";
import TournamentsDetail from "./scenes/TournamentsDetail";
import NFTExplain from "./scenes/NFTExplain";
import TGExplain from "./scenes/TGExplain";
import MyProfile from "./scenes/MyProfile";
import EditProfile from "./scenes/EditProfile";
import Levels from "./scenes/Levels";
import Deposit from "./scenes/Deposit";

import themeSettings from "./theme";

const App = () => {
  const theme = useMemo(() => createTheme(themeSettings));
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/answer_survey" element={<AnswerSurvey />} />
          <Route exact path="/tournaments" element={<Tournaments />} />
          <Route
            exact
            path="/tournaments_detail"
            element={<TournamentsDetail />}
          />
          <Route exact path="/nft_explain" element={<NFTExplain />} />
          <Route exact path="/telegram_explain" element={<TGExplain />} />
          <Route exact path="/my_profile" element={<MyProfile />} />
          <Route exact path="/edit_profile" element={<EditProfile />} />
          <Route exact path="/levels" element={<Levels />} />
          <Route exact path="/deposit" element={<Deposit />} />
          <Route
            exact
            path="/shop_earn_deals"
            element={<ShopEarn type="deals" />}
          />
          <Route
            exact
            path="/shop_earn_gift"
            element={<ShopEarn type="gift" />}
          />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
