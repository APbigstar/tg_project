import { createTheme } from "@mui/material/styles";

const themeSettings = createTheme({
  palette: {
    blue: {
      0: "#3940BE",
    },
    white: {
      0: "#ffffff",
    },
    black: {
      0: "#000000",
    },
  },
  fontWeight: {
    bold: 600,
    medium: 500,
    thin: 400,
  },
  fontSize: {
    big: "24px",
    medium: "16px",
    small: "13px",
  },
});

export default themeSettings;
