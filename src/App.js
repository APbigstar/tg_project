import React, { useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Home from "./scenes/home";
import AnswerSurvey from "./scenes/AnswerSurvey";

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
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
