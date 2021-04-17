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

const categoryStyle = (theme) => ({
  wrapper: {
    padding: "0 30px",
  },
  title: {
    font: "normal normal bold 18px/22px Roboto",
    letterSpacing: "0",
    color: grayColor[32],
    width: "max-content",
    margin: 0,
    marginBottom: "10px",
  },
  divider: {
    margin: 0,
    height: "3px",
    width: "84px",
    background: primaryColor[0],
  },
  description: {
    margin: 0,
    marginTop: "22px",
    font: "normal normal normal 14px/17px Roboto",
    letterSpacing: "0px",
    color: grayColor[28],
  },
  saveBtn: {
    height: "40px",
    padding: "0 38px",
    background: primaryColor[0],
    borderRadius: "20px",
    margin: "0",
    marginTop: "24px",
    textTransform: "uppercase",
  },
  checkBoxBtn: {
    " & span": {
      width: "14px",
    },
  },
  deleteBtn: {
    height: "40px",
    borderRadius: "20px",
    margin: "0 auto",
    background: grayColor[34],
    textTransform: "uppercase",
    color: whiteColor,
    padding: "0 38px",
  },
  addBtn: {
    background: "transparent",
    color: primaryColor[0],
    width: "100%",
    textAlign: "left",
    display: "flex",
    justifyContent: "flex-start",
    border: "none",
    outline: "none",
    boxShadow: "none",
    height: "40px",
    borderRadius: "10px",
    margin: "0",
    marginTop: "6px",
    textTransform: "uppercase",
    "&:hover, &:focus": {
      background: "transparent",
      color: primaryColor[0],
    },
  },
  selectMenu: {
    "& .MuiList-root.MuiMenu-list.MuiList-padding": {
      padding: "6px",
    },
    "& .MuiPopover-paper.MuiPaper-elevation8": {
      marginTop: "136px",
      borderRadius: "5px",
      boxShadow: "0px 0px 6px #0000003D",
    },
  },
  select: {
    color: grayColor[30],
    textTransform: "uppercase",
  },
  selectLabel: {
    color: grayColor[30] + " !important",
    textTransform: "uppercase",
  },
  selectMenuItem: {
    color: grayColor[30],
    borderRadius: "5px",
    textTransform: "uppercase",
    padding: "24px 22px",
    "&:hover, &:focus": {
      background: primaryColor[0],
      color: whiteColor,
    },
    "&.Mui-selected": {
      background: primaryColor[0],
      color: whiteColor,
    },
  },
  spaceTop: {
    marginTop: "30px",
  },
});

export default categoryStyle;
