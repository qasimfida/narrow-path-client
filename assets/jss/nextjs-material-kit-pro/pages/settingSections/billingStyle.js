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
  dangerColor,
  whiteColor,
  paypalColor,
} from "assets/jss/nextjs-material-kit-pro.js";
import { greenColor } from "../../../nextjs-material-kit-pro";

const btn = {
  borderRadius: "20px",
  height: "40px",
  padding: "0 32px",
  color: whiteColor,
};
const accountStyle = (theme) => ({
  wrapper: {
    padding: "0 30px",
  },
  paypalBtn: {
    height: "48px",
    width: "100%",
    background: paypalColor,
    color: blackColor,
    borderRadius: "2px",
    boxShadow: "none",
    padding: "0 12px",
    font: "normal normal bold 14px/13px Roboto",
    boxShadow: "0px 3px 0px #00000029",
    margin: "10px 0",
    "& img": {
      maxWidth: "90px",
      margin: "0 6px",
    },
  },
  appleGoogleBtn: {
    font: "normal normal bold 14px/14px Roboto",
    height: "53px",
    width: "100%",
    background: blackColor,
    color: whiteColor,
    borderRadius: "2px",
    boxShadow: "none",
    padding: "0 12px",
    margin: "10px 0",
    "& img": {
      maxWidth: "18px",
      margin: "0 6px",
    },
  },
  divider: {
    position: "relative",
    height: "24px",
    textAlign: "center",
    margin: "24px 0",
    "& hr ": {
      background: "#c7c7c7",
      marginTop: "12px",
    },
    "& span": {
      background: whiteColor,
      position: "absolute",
      left: 0,
      right: 0,
      top: "-11px",
      padding: "0 12px",
      display: "inline",
      width: "max-content",
      margin: "auto",
    },
  },
  title: {
    color: grayColor[4],
    font: "normal normal normal 18px/16px Roboto",
    marginBottom: "24px",
  },
  formItem: {
    display: "flex",
    border: `1px solid ${grayColor[37]}`,
    borderBottom: "none",
    "&:last-child": {
      borderBottom: `1px solid ${grayColor[37]}`,
    },
  },
  formLabel: {
    font: "normal normal 500 14px/16px Roboto",
    color: grayColor[26],
    background: "#f5f5f5",
    maxWidth: "180px",
    width: "180px",
    minWidth: "180px",
    padding: " 14px 24px",
  },
  dFlex: {
    display: "flex",
    width: "calc(100% - 180px)",
  },
  w50: {
    width: "calc(50%)!important",
    maxWidth: "calc(50%)!important",
  },
  w30: {
    width: "calc(33.33%)!important",
    maxWidth: "calc(33.33%)!important",
  },
  formField: {
    font: "normal normal normal 14px/16px Roboto",
    color: grayColor[26],
    padding: " 16px 8px 16px 24px",
    background: whiteColor,
    border: "none",
    boxShadow: "none",
    outline: "none",
    width: "calc(100% - 32px )",
  },
  formControl: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
  },
  input: {
    border: `1px solid ${grayColor[36]}`,
    borderRadius: "5px",
    font: "normal normal bold 16px/16px Roboto",
    height: "45px",
    padding: "0 32px",
    color: grayColor[36],
  },
  label: {
    marginBottom: "12px",
    font: "normal normal bold 14px/13px Roboto",
    letterSpacing: "0px",
    color: grayColor[34],
  },
  description: {
    font: "normal normal normal 12px/13px Roboto",
    margin: "14px 0",
  },
  dangerBtn: {
    marginTop: "16px",
    background: dangerColor[0],
    ...btn,
  },
  primaryBtn: {
    marginTop: "50px",
    background: primaryColor[0],
    ...btn,
  },
  mt30: {
    marginTop: "30px",
  },
  cardItem: {
    padding: "20px 0",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    borderTop: `1px solid ${grayColor[37]}`,
    "&:last-child": {
      borderBottom: `1px solid ${grayColor[37]}`,
    },
  },
  price: {
    width: "max-content",
    minWidth: "max-content",
  },
  name: {
    font: "normal normal normal 16px/13px Roboto",
    margin: 0,
    color: grayColor[15],
    marginBottom: "6px",
  },
  info: {
    color: grayColor[26],
    font: "normal normal normal 16px/13px Roboto",
    margin: 0,
  },
  price: {
    color: grayColor[26],
    font: "normal normal bold 14px/13px Roboto",
  },
  total: {
    padding: "20px 0",
    display: "flex",
    justifyContent: "space-between",
  },
  greenBtn: {
    font: "normal normal normal 16px/13px Roboto",
    width: "100%",
    padding: "12px",
    background: greenColor,
    color: whiteColor,
    margin: "10px 0",
    outline: "none",
    border: "none",
    boxShadow: "none",
  },
});

export default accountStyle;
