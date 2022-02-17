import { createContext } from "react";

export const theme = {
  light: {
    header: {
      color: "#1A1B22",
      background: "#FFFFFF",
      boxShadow: "inset 0px -1px 0px #D1D2D6",
    },
    mobile: {
      color: "#1A1B22",
      background: "#FFFFFF",
      borderColor: "#1A1B22",
      boxShadow: "#D1D2D6",
    },
    button: {
      color: "#1A1B22",
      background: "#FFFFFF",
      borderColor: "#D1D2D6",
      boxShadow: "#D1D2D6",
    },
    container: {
      color: "#1A1B22",
      borderColor: "#1A1B22",
    },
  },
  dark: {
    header: {
      color: "#FFFFFF",
      borderColor: "#FFFFFF",
      boxShadow: "inset 0px -1px 0px #D1D2D6",
      boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.2)",
    },
    mobile: {
      color: "#FFFFFF",
      borderColor: "#FFFFFF",
      background: "rgba(196, 196, 196, 0.01)",
      background: "#1A1B22",
      boxShadow: " rgba(255, 255, 255, 0.2)",
    },
    button: {
      color: "#FFFFFF",
      borderColor: "#FFFFFF",
      background: "rgba(196, 196, 196, 0.01)",

      boxShadow: " rgba(255, 255, 255, 0.2)",
    },
    container: {
      color: "#FFFFFF",
      borderColor: "#FFFFFF",
    },
  },
};

const ThemeContext = createContext(theme);

export default ThemeContext;
