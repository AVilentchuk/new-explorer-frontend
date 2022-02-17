import { createContext } from "react";

export const theme = {
  light: {
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
      background: "#FFFFFF",
      borderColor: "#1A1B22",
      boxShadow: "#838383",
    },
  },
  dark: {
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
