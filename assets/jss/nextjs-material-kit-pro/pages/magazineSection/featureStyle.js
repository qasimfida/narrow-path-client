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

const featureStyle = (theme) => ({
  container,
  section: {
    padding: "98px 0",
    background: whiteColor,
  },
  pb75: {
    paddingBottom: "75px",
  },
  content: {
    padding: "0 70px",
  },
  contentMedia: {
    paddingTop: "32px",
  },
  divider: {
    background: `${primaryColor[0]}`,
    height: "5px",
    margin: "0 auto",
  },
  heading: {
    width: "210px",
    marginBottom: "10px",
    textAlign: "right",
    "& h2": {
      textAlign: "right",
      marginTop: "0",
      marginBottom: "9px",
    },
  },
  img: {
    width: '100%'
  },
  list: {
    marginLeft: "20px",
  },
  listItem: {
    font: "normal normal normal 18px/25px Roboto",
    marginTop: "24px",
    letterSpacing: "0px",
    color: blackColor,
    padding: 0,
  },
  bullet: {
    height: "24px",
    width: "24px",
    marginRight: "24px",
  },
  btnExplore : {
    font: 'normal normal bold 18px/25px Roboto',
    letterSpacing: '0px',
    padding: '17px 52px',
    marginTop: '40px'
  }
});

export default featureStyle;
