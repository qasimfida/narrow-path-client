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

const profileStyle = (theme) => ({
  drawerWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  button: {
    padding: "9px 0",
    borderRadius: "10px",
    boxShadow: "0px 0px 6px #00000029",
    maxWidth: "100%",
    background: "transparent",
    color: grayColor[28],
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    textAlign: "left",
    width: "100%",
    margin: 0,
    display: "flex",
    justifyContent: "flex-start",
    "&:hover": {
      background: primaryColor[0],
    },
    "&:focus": {
      background: primaryColor[0],
    },
  },
  active: {
    background: primaryColor[0],
    color: whiteColor,
  },
  checkbox: {
    marginBottom: "12px",
    "&:lastChild": {
      paddingBottom: "0",
    },
  },
  drawer: {
    paddingLeft: "16px",
    paddingRight: "16px",
    transition: "0.2s all ease-in-out",
    height: 0,
    overflow: "hidden",
  },
  drawerOpen: {
    height: "auto",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  iconLeft: {
    paddingRight: "12px",
    paddingLeft: "12px",
  },
  btnLabel: {
    paddingRight: "12px",
  },
});

export default profileStyle;
