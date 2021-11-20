import { extendTheme } from "@chakra-ui/react";
import { mode, createBreakpoints } from "@chakra-ui/theme-tools";

const colors = {
  light_green: "#EAF6EA",
  main_green: "#439C33",
  secondary_green: "#3C6035",
  third_green: "#329521",
  hover_green: "#56794F",
  light_grey: "#E8E8E8",
  med_grey: "#95A5B9",
  subBody: "#646464",
  formText: "#585858",
  cardBgColor: "#F8F8F8",
  bg: "#FBFBFB",
};

const breakpoints = createBreakpoints({
  base: "0px",
  xs: "43rem",
  sm: "45rem",
  md: "62rem",
  lg: "81.25rem",
  xl: "100rem",
});

const styles = {
  global: (props) => ({
    body: {
      fontFamily: "VisbyCF",
    },
  }),
};

const theme = extendTheme({
  styles,
  colors,
  breakpoints,
});

export default theme;
