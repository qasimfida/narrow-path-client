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

const magazineStyle = (theme) => ({
  ...footerStyle,
  main: {
    ...main,
    /*overflow: "hidden"*/
  },
  mainRaised,
  parallax: {
    height: "80vh",
    overflow: "hidden",
    backgroundPosition: "center top",
  },
  container: {
    ...container,
    zIndex: 1,
  },
  title: {
    ...title,
    color: whiteColor,
  },
  brand: {
    color: whiteColor,
    textAlign: "center",
    width: "475px",
    "& h1": {
      display: "inline-block",
      position: "relative",
      font: "normal normal 900 80px/73px Roboto",
      letterSpacing: "0px",
      [theme.breakpoints.down("sm")]: {
        font: "normal normal 900 54px/56px Roboto",
      },
    },
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

export default magazineStyle;
