import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6C63FF",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#f8f9fb",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h3: { fontWeight: 700, letterSpacing: "1px" },
    h4: { fontWeight: 600, letterSpacing: "0.5px" },
    h6: { fontWeight: 500 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          textTransform: "none",
          boxShadow: "0 4px 20px 0 rgba(108, 99, 255, 0.09)",
          transition: "0.3s",
          ":hover": {
            transform: "scale(1.05)",
            boxShadow: "0 6px 30px 0 rgba(108, 99, 255, 0.14)",
          },
        },
      },
    },
  },
});

export default theme;
