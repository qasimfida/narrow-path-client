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
  profileCard: {},
  userInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "12px 0 30px 0",
  },
  userImg: {
    width: "157px",
    minWidth: "157px",
    height: "157px",
    "& img": {
      borderRadius: "50%",
      padding: "5px",
      border: `2px solid ${primaryColor[0]}`,
    },
  },
  info: {
    marginLeft: "46px",
  },
  infoTitle: {
    font: "normal normal bold 24px/29px Roboto",
    letterSpacing: "0px",
    color: grayColor[32],
    margin: 0,
  },
  username: {
    font: "normal normal normal 14px/17px Roboto",
    letterSpacing: "0px",
    color: grayColor[32],
    margin: "12px 0",
  },
  review: {
    font: "normal normal 500 18px/22px Roboto",
    letterSpacing: "0px",
    color: grayColor[32],
    display: "flex",
  },
  rating: {
    display: "flex",
    marginLeft: "20px",
  },
  avgRating: {
    font: "normal normal 500 18px/22px Roboto",
    letterSpacing: "0px",
    color: lightColor[0],
    marginBottom: "0",
    marginLeft: "6px",
  },
  iconLabel: {
    font: "normal normal normal 14px/17px Roboto",
    letterSpacing: "0px",
    color: grayColor[30],
    padding: "13px 0",
    display: "flex",
    alignItems: "center",
    "& img": {
      marginRight: "24px",
    },
  },
  divider: {
    width: "calc(100% + 170px)",
    marginLeft: "-70px",
    margin: 0,
    border: `1px solid ${grayColor[31]}`,
  },
  detailTitle: {
    font: "normal normal bold 18px/22px Roboto",
    letterSpacing: "0px",
    color: grayColor[33],
    paddingBottom: "10px",
    borderBottom: `2px solid ${primaryColor[0]}`,
    margin: 0,
    width: "max-content",
    paddingRight: "30px",
  },
  detailsWrapper: {
    paddingTop: "36px",
  },
  about: {
    marginTop: "14px",
    font: "normal normal normal 14px/17px Roboto",
    letterSpacing: "0px",
    color: grayColor[30],
    paddingRight: "30px",
  },
  editBtn: {
    height: "40px",
    background: grayColor[34],
    borderRadius: "20px",
    margin: "0",
    marginTop: "12px",
    padding: "0 38px",
    textTransform: "uppercase",
  },
  input: {
    border: "1px solid #707070",
    borderRadius: "18px",
    padding: "6px 12px",
    font: "normal normal normal 14px/17px Roboto",
  },
  textarea: {
    border: "1px solid #707070",
    borderRadius: "18px",
    padding: "14px 20px",
    font: "normal normal normal 14px/17px Roboto",
    width: "100%",
  },
});

export default profileStyle;
