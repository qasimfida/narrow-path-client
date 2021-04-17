import {
  primaryColor,
  secondaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  whiteColor,
} from "assets/jss/nextjs-material-kit-pro.js";
import { blackColor } from "../../nextjs-material-kit-pro";

const searchBoxStyle = (theme) => ({
  wrapper: {
    boxShadow: "0px 3px 6px #00000029",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "space-between",
    padding: "5px",
    font: "normal normal normal 14px/17px Roboto",
    letterSpacing: "0px",
    color: grayColor[28],
  },
  input: {
    background: whiteColor,
    outline: "none",
    boxShadow: "none",
    border: "none",
    padding: "0 12px",
  },
  searchIcon: {
    width: "29px",
    height: "29px",
    borderRadius: "50%",
    background: primaryColor[0],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& img": {
      maxWIdth: "100%",
    },
  },
});

export default searchBoxStyle;
