import {
  container,
  section,
  title,
  sectionDescription,
  mlAuto,
  blackColor,
  grayColor,
  hexToRgb,
  primaryColor
} from "assets/jss/nextjs-material-kit-pro.js";

const contentStyle = (theme) => ({
  container,
  section: {
    ...section,
    paddingTop: "75px",
    "&.last-child": {
      paddingBottom: '75px'
    }
  },
  title: {
    color: grayColor[1],
    font: "normal normal normal 18px/22px Roboto",
    letterSpacing: "0px",
    color: "#B5B5B5",
    margin: '20px 0',
    "&:nth-child(2)": {
      color: blackColor,
    },
  },
  
  imageContainer: {
    maxWidth: "900px",
    position: "relative",
  },
  ipadImg: {
    width: "100%",
  },
  mlAuto,
  areaImg: {
    width: "auto",
    maxWidth: "100%",
    zIndex: 2,
    [theme.breakpoints.down("sm")]: {
      maxWidth: "130px",
      maxHeight: "170px",
    },
  }
});

export default contentStyle;
