import {
  container,
  section,
  title,
  sectionDescription,
  mlAuto,
  blackColor,
  grayColor,
  hexToRgb,
  primaryColor,
  whiteColor,
  lightColor,
} from "assets/jss/nextjs-material-kit-pro.js";

const postsStyle = (theme) => ({
  container,
  section: {
    padding: "32px 70px",
    background: grayColor[27],
    [theme.breakpoints.down("sm")]: {
      padding: "32px",
    },
  },
  divider: {
    background: whiteColor,
    height: "1px",
    margin: "14px auto 36px auto",
    [theme.breakpoints.down("sm")]: {
      opacity: "0",
      margin: "15px 0",
    },
  },
  heading: {
    font: "normal normal bold 17px/20px Roboto",
    letterSpacing: "0px",
    marginTop: "18px",
    marginBottom: "23px",
    color: whiteColor,
  },
  footerLogo: {
    marginBottom: "18px",
    display: "block",
  },
  footerLink: {
    color: lightColor[0],
    font: "normal normal 500 12px/15px Roboto",
    textTransform: "uppercase",
    display: "block",
    height: "24px",
    marginBottom: "9px",
  },
  paragraph: {
    color: lightColor[0],
    font: "normal normal 400 12px/15px Roboto",
  },
  copyRight: {
    color: whiteColor,
    font: "normal normal 400 14px/17px Roboto",
    textAlign: "center",
    marginBottom: 0,
  },
  gridLine: {
    [theme.breakpoints.down("sm")]: {
      borderBottom: `2px solid ${whiteColor}`,
    },
  },
  footerInput: {
    display: "flex",
    marginTop: '16px',
    "& input": {
      border: 'none',
      background: "transparent",
      borderBottom: "1px solid #fff",
      height: "40px",
      maxWidth: "calc(100% - 51px)",
      outline: "none",
      boxShadow: "none",
      color: whiteColor
    },
    "& button": {
      margin: 0,
      height: "41px",
      width: "51px",
      padding: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
});

export default postsStyle;
