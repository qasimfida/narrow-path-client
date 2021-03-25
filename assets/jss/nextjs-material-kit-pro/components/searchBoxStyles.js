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
  root: {
    width: "742px",
    height: "85px",
    background: `${whiteColor} 0% 0% no-repeat padding-box`,
    boxShadow: "0px 3px 6px #00000029",
    borderRadius: "43px",
    display: "flex",
    justifyContent: "space-between",
    margin: "0 auto",
  },
  searchItem: {
    borderRadius: "43px",
    padding: "18px 40px",
    width: "318px",
    textAlign: "left",
  },
  active: {
    boxShadow: "0px 3px 6px #00000029",
  },
  searchBtn: {
    margin: "9px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "67px",
    height: "67px",
    minWidth: "67px",
    minHeight: "67px",
    color: whiteColor,
    background: primaryColor[0],
    borderRadius: "50%",
  },
  searchItemTitle: {
    color: "#000000",
    textAlign: "left",
    font: "normal normal 500 16px/19px Roboto",
    letterSpacing: "0px",
    color: blackColor,
    margin: 0,
  },
  searchItemInput: {
    font: "normal normal normal 14px/17px Roboto",
    letterSpacing: "0px",
    color: "#565656",
    paddingTop: "12px",
    background: "transparent",
    border: "none",
    outline: "none",
  },
});

export default searchBoxStyle;
