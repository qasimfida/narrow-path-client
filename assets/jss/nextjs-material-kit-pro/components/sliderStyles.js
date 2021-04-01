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

const sliderStyles = (theme) => ({
  slider: {
    "& .slick-track": {
      paddingBottom: "90px",
    },
    "& .slick-prev": {
      left: "calc(25% - 80px)",
      [theme.breakpoints.down("sm")]: {
        top: "calc(100% - 32px)",
        left: "calc(100% - 160px)",
      },
    },
    "& .slick-next": {
      left: "25%",
      [theme.breakpoints.down("sm")]: {
        left: "calc(100% - 77px)",
        top: "calc(100% - 32px)",
      },
    },
    "& .slick-active.slick-current": {
      "& .slidebody": {
        opacity: 1,
        position: "absolute",
        left: "100%",
        width: "100%",
        [theme.breakpoints.down("sm")]: {
          left: "unset",
          top: "unset",
          position: "relative",
        },
      },
    },
    "& .slick-arrow": {
      zIndex: "3",
      top: "calc(70% - 77px)",
      border: "1px solid #fff",
      padding: "4px",
      height: "47px",
      width: "53px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      [theme.breakpoints.down("sm")]: {
        top: "calc(100% - 77px)",
      },
      "& img": {
        height: "26px",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .slick-dots": {
      zIndex: "2",
      top: "calc(70%)",
      width: "auto",
      left: "calc(31% - 124px)",
      [theme.breakpoints.down("sm")]: {
        left: "calc(100% - 140px)",
        top: "calc(100%)",
      },
      "& li": {
        width: "auto",
        margin: "-4px",
        transition: "0.3s all ease",
        "&.slick-active": {
          margin: "4px",
          "& button": {
            background: whiteColor,
            margin: "5px",
            transition: "0.3s all ease",
          },
        },
        "& button": {
          transition: "0.3s all ease",
          borderRadius: "4px",
          padding: "0",
          height: "4px",
          width: "18px",
          background: whiteColor,
          "&:before": {
            display: "none",
          },
        },
      },
    },
  },
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
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
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
    padding: 0,
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
    "& img": {
      height: "14px",
      width: "14px",
    },
  },
  slideBody: {
    opacity: 0,
    transition: "0.2s all ease-in",
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
});

export default sliderStyles;
