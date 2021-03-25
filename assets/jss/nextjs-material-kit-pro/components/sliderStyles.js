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

const sliderStyles = {
  slides: {
    "& .slick-slide": {
      width: "400px !important",
      height: "400px !important",
      minWidth: "400px !important",
      minHeight: "400px !important",
      color: blackColor,
      background: primaryColor[0],
    },
  },
};

export default sliderStyles;
