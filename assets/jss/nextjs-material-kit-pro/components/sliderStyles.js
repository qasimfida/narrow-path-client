import {
  warningColor,
  primaryColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  defaultFont,
  blackColor,
} from "assets/jss/nextjs-material-kit-pro.js";
import { whiteColor } from "../../nextjs-material-kit-pro";

const sliderStyles = {
  slides: {
    "& .rec-carousel-item:focus": {
      outline: "none",
      boxShadow: "inset 0 0 1px 0px violet",
    },
    "& .rec-carousel-item-visible": {
      background: "red",
    },
    "& .rec-item-wrapper .content": {
      height: "auto",
    },

    "& .rec-carousel-item-next .content": {
      height: 0,
    },
    "& .rec-carousel-item-prev .content": {
      height: 0,
    },
  },
  slide: {
    color: "#fff",
    fontSize: "4em",
  },
  sliderImg: {
    marginBottom: "20px",
    width: "100%",
  },
  slideSlogan: {
    font: "normal normal 300 18px/55px Montserrat",
    letterSpacing: "0",
    color: whiteColor,
    margin: 0,
    lineHeight: "24px",
  },
  slideTitle: {
    font: "normal normal 900 24px/26px Roboto",
    letterSpacing: "0px",
    color: whiteColor,
    margin: 0,
  },
  slideDescription: {
    font: "normal normal 300 12px/16px Montserrat",
    letterSpacing: "0px",
    color: whiteColor,
    margin: "10px 0;",
  },
  readButton: {
    font: "normal normal normal 16px/55px Montserrat",
    letterSpacing: "0px",
    color: whiteColor,
    textTransform: "capitalize",
    padding: 0
  },
  readIcon: {
    width: "32px",
    height: "32px",
    border: `1px solid ${whiteColor} `,
    borderRadius: "50%",
    marginLeft: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  slideBody: {
    opacity: 0,
    transition: '0.2s all ease-in' 
  },
  active: {
    opacity: 1,
    transition: '0.2s all ease-in' 
  }
};

export default sliderStyles;
