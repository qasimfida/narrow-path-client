import {
  grayColor,
  whiteColor,
  mlAuto,
  hexToRgb,
} from "assets/jss/nextjs-material-kit-pro.js";

import tooltip from "assets/jss/nextjs-material-kit-pro/tooltipsStyle.js";
import { blackColor, primaryColor } from "../../nextjs-material-kit-pro";

const headerLinksStyle = (theme) => ({
  profileImg: {
    border: `1px solid ${primaryColor[0]} `,
    borderRadius: "50%",
  },
  imageDropdownButton: {
    padding: "0 !important",
  },
  list: {
    [theme.breakpoints.up("md")]: {
      WebkitBoxAlign: "center",
      MsFlexAlign: "center",
      alignItems: "center",
      WebkitBoxOrient: "horizontal",
      WebkitBoxDirection: "normal",
      MsFlexDirection: "row",
      flexDirection: "row",
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    marginTop: "0px",
    display: "flex",
    paddingLeft: "0",
    marginBottom: "0",
    listStyle: "none",
    padding: "0",
  },
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      "& ul": {
        maxHeight: "300px",
        overflow: "scroll",
      },
      width: "100%",
      "&:not(:last-child)": {
        "&:after": {
          width: "calc(100% - 30px)",
          content: '""',
          display: "block",
          height: "1px",
          marginLeft: "15px",
          backgroundColor: grayColor[14],
        },
      },
    },
    "& a": {
      color: whiteColor,
    },
  },
  listItemText: {
    padding: "0 !important",
  },
  dropdownItem: {
    color: grayColor[8],
    font: "normal normal normal 16px/19px Roboto",
    letterSpacing: "0px",
    padding: "0",
    textAlign: "left",
    borderRadius: "10px",
  },
  navLink: {
    color: whiteColor,
    position: "relative",
    padding: "0 20px",
    font: "normal normal 500 16px/19px Roboto;",
    textTransform: "unset",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "inherit",
    },
    "& .fab,& .far,& .fal,& .fas,& .material-icons": {
      position: "relative",
      top: "2px",
      marginTop: "-4px",
      marginRight: "4px",
      marginBottom: "0px",
      fontSize: "1.25rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
    "& svg": {
      marginRight: "3px",
      width: "20px",
      height: "20px",
    },
  },
  navLinkJustIcon: {
    "& .fab,& .far,& .fal,& .fas,& .material-icons": {
      marginRight: "0px",
    },
    "& svg": {
      marginRight: "0px",
    },
  },
  navButton: {
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "5px",
      marginTop: "5px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
    "& $icons": {
      marginRight: "3px",
    },
  },
  notificationNavLink: {
    [theme.breakpoints.down("md")]: {
      top: "0",
      margin: "5px 15px",
    },
    color: whiteColor,
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
  },
  registerNavLink: {
    [theme.breakpoints.down("md")]: {
      top: "0",
      margin: "5px 15px",
    },
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
  },
  navLinkActive: {
    color: primaryColor[0],
    "&, &:hover, &:focus,&:active ": {
      color: "inherit",
      backgroundColor: "rgba(" + hexToRgb(whiteColor) + ", 0.1)",
    },
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "14px",
  },
  dropdownIcons: {
    width: "24px",
    height: "24px",
    marginRight: "14px",
    opacity: "0.5",
    marginTop: "-4px",
    top: "1px",
    verticalAlign: "middle",
    fontSize: "24px",
    position: "relative",
  },
  socialIcons: {
    position: "relative",
    fontSize: "1.25rem",
    maxWidth: "24px",
  },
  dropdownLink: {
    "&,&:hover,&:focus": {
      color: "inherit",
      textDecoration: "none",
      display: "flex",
      padding: "0.75rem 1.25rem 0.75rem 0.75rem",
    },
  },
  ...tooltip,
  marginRight5: {
    marginRight: "5px",
  },
  collapse: {
    [theme.breakpoints.up("md")]: {
      display: "flex !important",
      MsFlexPreferredSize: "auto",
      flexBasis: "auto",
    },
    WebkitBoxFlex: "1",
    MsFlexPositive: "1",
    flexGrow: "1",
    WebkitBoxAlign: "center",
    MsFlexAlign: "center",
    alignItems: "center",
  },
  mlAuto,
  navItemFlex: {
    display: "flex",
    width: "max-content",
  },
  clrDark: {
    color: grayColor[8] + " !important",
  },
  dropdown: {
    padding: "10px 4px",
  },
});

export default headerLinksStyle;
