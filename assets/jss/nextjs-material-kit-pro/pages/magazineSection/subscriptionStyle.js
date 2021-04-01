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

const subscriptionStyle = (theme) => ({
  container,
  section: {
    padding: "92px 0 48px 0",
    background: grayColor[1],
    position: "relative",
    overflow: "hidden",
  },
  title: {
    font: "normal normal 900 36px/35px Montserrat",
    letterSpacing: "0px",
    color: blackColor,
    margin: "0",
  },
  imgDecor: {
    width: "126px",
    height: "100px",
    position: "absolute",
  },
  imgRight: {
    top: "40px",
    right: "90px",
    [theme.breakpoints.down("sm")]: {
      top: "-44px",
      right: "10px",
    },
  },
  imgLeft: {
    bottom: "36px",
    left: "90px",
    [theme.breakpoints.down("sm")]: {
      bottom: "-44px",
      left: "10px",
    },
  },
  divider: {
    width: "70px",
    background: `${primaryColor[0]}`,
    height: "5px",
    margin: "0 auto",
    position: "absolute",
    right: "calc(100% + 25px)",
    top: "20px",
  },
  heading: {
    position: "relative",
    width: "242px",
    marginBottom: "72px",
    "& h2": {
      textTransform: 'uppercase',
      font: "normal normal 900 36px/35px Montserrat",
      letterSpacing: "0px",
      color: grayColor[27],
      margin: "0",
      textAlign: "left",
      "& span": {
        textAlign: "right",
        display: "block",
      },
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: '20px'
    },
  },
  shortText: {
    font: "normal normal 500 18px/28px Montserrat",
    letterSpacing: "0px",
    color: blackColor,
    padding: "0 40px 0 60px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    "& .MuiOutlinedInput-input": {
      borderRadius: "30px",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "30px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: grayColor[26],
    },
    "& input": {
      borderRadius: "30px",
      padding: "18px 30px",
    },
    "& label": {
      paddingRight: "20px",
      paddingLeft: "20px",
      background: grayColor[1],
      color: blackColor,
      font: " normal normal bold 14px/50px Roboto",
      lineHeight: "17px",
    },
  },
  formBtn: {
    padding: "14px 36px",
    textTransform: "uppercase",
    marginTop: "18px",
    width: "fit-content",
  },
  formBtnMd: {
    margin: "30px auto",
    width: "100%",
  },
  shortTextMd: {
    padding: "30px 0",
    textAlign: "center",
  },
});

export default subscriptionStyle;
