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

const reviewStyle = (theme) => ({
  slider: {
    "& .slick-dots": {
      position: "relative",
      marginTop: "20px",
      "& li": {
        width: "27px",
        height: "27px",
        background: "transparent",
        borderRadius: "50%",
        lineHeight: "27px",
        font: " normal normal 500 18px/22px Roboto",
        letterSpacing: "0px",
        color: grayColor[33],
        "&.slick-active": {
          background: primaryColor[0],
          color: whiteColor,
        },
      },
    },
  },
  wrapper: {
    padding: "15px",
  },
  card: {
    borderRadius: "10px",
    padding: "22px 25px",
    background: "#F6F6F6",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  rate: {
    color: lightColor[0],
    font: "normal normal medium 18px/22px Roboto",
    letterSpacing: "0px",
    display: "flex",
  },
  dFlex: {
    display: "flex",
  },
  title: {
    font: "normal normal bold 24px/13px Roboto",
    letterSpacing: "0px",
    color: grayColor[32],
    margin: 0,
  },
  para: {
    font: "normal normal normal 14px/20px Roboto",
    letterSpacing: "0px",
    color: grayColor[30],
    margin: "30px 0",
  },
  spaceLeft: {
    marginLeft: "52px",
  },
  spaceRight6: {
    marginRight: "6px",
  },
  spaceLeft10: {
    marginLeft: "10px",
  },
});

export default reviewStyle;
