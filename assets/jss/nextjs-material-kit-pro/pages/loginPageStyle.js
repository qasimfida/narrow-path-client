import {
  container,
  description,
  cardTitle,
  blackColor,
  whiteColor,
  grayColor,
  hexToRgb,
} from "assets/jss/nextjs-material-kit-pro.js";
import { primaryColor } from "../../nextjs-material-kit-pro";

const signupPageStyle = (theme) => ({
  cardTitle: {
    color: whiteColor + "  !important",
    font: "normal normal bold 24px/29px Roboto",
    letterSpacing: "0px",
    margin: "0 !important",
  },
  container: {
    ...container,
    zIndex: "4",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "100px",
    },
  },
  pageHeader: {
    color: whiteColor,
    border: "0",
    height: "100%",
    margin: "0",
    display: "flex!important",
    padding: "120px 0",
    position: "relative",
    minHeight: "100vh",
    alignItems: "center",
    "&:before": {
      background: "rgba(" + hexToRgb(blackColor) + ", 0.5)",
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""',
    },
  },
  form: {
    margin: "0",
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    background: primaryColor[0],
    padding: "72px 0 72px 0",
    marginBottom: "27px",
    boxShadow: "0px 13px 24px #6E00E366",
  },
  formItem: {
    marginTop: "8px",
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto",
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right",
    "&,& *,& *:hover,& *:focus": {
      color: whiteColor + "  !important",
    },
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative",
  },
  footer: {
    position: "absolute",
    width: "100%",
    background: "transparent",
    bottom: "0",
    color: whiteColor,
    zIndex: "2",
  },
  forgetBtn: {
    color: grayColor[33],
  },
  loginBtn: {
    border: `1px solid ${primaryColor[0]}`,
    borderRadius: "18px",
    padding: "0 32px",
    height: "35px",
    font: "normal normal normal 14px/35px Roboto",
    margin: "36px 30px",
  },
});

export default signupPageStyle;
