import { DefaultTheme } from "styled-components";

const defaultTheme = {
  fontsizes: {
    xxs: "16px",
    xs: "18px",
    sm: "20px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },
  fontweights: {
    regular: 400,
    bold: 500,
  },
  fonts: {
    primary: "Roboto",
  },
};

const lightTheme = {
  primary: "#c4f4e4",
  primarySub: "#91c1b1",
  secondary: "#bce3ff",
  secondarySub: "#89b0cc",

  text: "#000",
  textSub: "#8e8e93",
  background: "#fff",
  innerbackground: "#f4f4f5",
  shadow: "#000",

  white: "#fff",
  green: "#60bb95",
  orange: "#ffa300",
  danger: "#ff0e0e",
};

export const theme: DefaultTheme = {
  light: {
    colors: lightTheme,
    ...defaultTheme,
  },
};
