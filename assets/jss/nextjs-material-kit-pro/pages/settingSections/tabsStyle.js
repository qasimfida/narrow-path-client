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
} from "assets/jss/nextjs-material-kit-pro.js";
import { lightColor } from "../../../nextjs-material-kit-pro";

const contentStyle = (theme) => ({
  title: {
    font: "normal normal bold 24px/29px Roboto",
    color: grayColor[33],
    margin: 0,
    marginBottom: "20px",
  },
  container,
  section: {
    ...section,
    paddingTop: "75px",
    "&.last-child": {
      paddingBottom: "75px",
    },
  },
  tabsWrapper: {
    display: "flex",
    background: whiteColor,
    borderRadius: "20px",
    width: "max-content",
    maxWidth: "100%",
    marginBottom: "44px",
    position: "relative",
    zIndex: 2,
  },
  tabs: {
    border: `1px solid ${grayColor[31]}`,
    borderRadius: "25px",
    background: whiteColor,
    padding: "46px 70px",
  },
  tabButton: {
    borderRadius: "0",
    height: "40px",
    position: "relative",
    
    color: grayColor[30],
    background: "transparent",
    padding: "8px 0",
    marginRight: "100px",
    textAlign: "left",
    boxShadow: "none",
    font: "normal normal bold 24px/29px Roboto",
    letterSpacing: "0px",
    color: grayColor[33],
    margin: 0,
    "&:hover": {
      boxShadow: "none",
      color: primaryColor[0],
      background: "transparent",
    },
    "&:focus": {
      boxShadow: "none",
      color: primaryColor[0],
      background: "transparent",
    },
  },
  active: {
    color: primaryColor[0],
    borderBottom: `2px solid ${primaryColor[0]}`,
  },
  tabIcon: {
    marginRight: "16px",
    lineHeight: 0,
  },
  panelBody: {
    background: whiteColor,
    minHeight: "400px",
    overflow: "hidden",
  },
  dropDownHeader: {
    borderBottom: `1px solid ${lightColor[0]}`,
    padding: "8px 0",
    marginBottom: "12px",
  },
  dropdownBtn: {
    background: "transparent",
    boxShadow: "none",
    borderRadius: "10px",
    color: grayColor[30],
    font: "normal normal normal 14px/17px Roboto",
    letterSpacing: "0px",
    height: "36px",
    margin: "0 8px",
    textAlign: "left",
    "&.active": {
      color: grayColor[30],
      background: primaryColor[1],
    },
    "&:hover": {
      boxShadow: "none",
      color: grayColor[30],
      background: primaryColor[1],
    },
  },
  editBtn: {
    width: "162px",
    height: "40px",
    background: grayColor[34],
    borderRadius: "20px",
    margin: "0",
    marginTop: "12px",
    textTransform: "uppercase",
  },
});

export default contentStyle;
