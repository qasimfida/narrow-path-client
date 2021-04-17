import {
  container,
  title,
  main,
  whiteColor,
  grayColor,
  mainRaised,
  hexToRgb,
} from "assets/jss/nextjs-material-kit-pro.js";
import footerStyle from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/footerStyle.js";

const dashboardStyle = (theme) => ({
  page: {
    height: "100vh",
    background: grayColor[29],
  },
  main: {
    ...main,
    background: "transparent",
  },
  container: {
    ...container,
    zIndex: 1,
  },

  heightFull: {
    height: "100%",
  },
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
});

export default dashboardStyle;
