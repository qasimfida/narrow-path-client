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

const postsStyle = (theme) => ({
  container,
  section: {
    padding: "64px 0",
    background: whiteColor,
  },
  card: {
    margin: "30px auto 0 auto",
  },
  cardMedia: {
    height: "262px",
    boxShadow: "none",
  },
  cardTitle: {
    font: "normal normal bold 18px/22px Roboto",
    letterSpacing: "0px",
    color: blackColor,
    marginBottom: 0,
  },
  cardDate: {
    font: "normal normal 500 15px/22px Roboto",
    letterSpacing: "0px",
    color: grayColor[0],
    margin: "10px auto",
  },
  cardDescription: {
    font: "normal normal 400 14px/22px Roboto",
    letterSpacing: "0px",
    color: grayColor[0],
    margin: 0,
  },
  cardFooter: {
    padding: 0,
    margin: 0,
  },
  cardBtn: {
    margin: "20px  auto 0 auto",
    font: "normal normal 400 12px/22px Roboto",
    padding: "14px 35px",
  },
  divider: {
    width: "210px",
    background: `${primaryColor[0]}`,
    height: "5px",
    margin: "0 auto",
  },
  heading: {
    marginBottom: "32px",
    "& h2": {
      marginTop: 0,
      marginBottom: "25px",
    },
  },
});

export default postsStyle;
