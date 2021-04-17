import {
  container,
  title,
  cardTitle,
  description,
  mlAuto,
  mrAuto,
  blackColor,
  whiteColor,
  grayColor,
  hexToRgb,
  primaryColor,
} from "assets/jss/nextjs-material-kit-pro.js";

import modalStyle from "assets/jss/nextjs-material-kit-pro/modalStyle.js";
import tooltipsStyle from "assets/jss/nextjs-material-kit-pro/tooltipsStyle.js";
import popoverStyles from "assets/jss/nextjs-material-kit-pro/popoverStyles.js";
import customCheckboxRadioSwitch from "assets/jss/nextjs-material-kit-pro/customCheckboxRadioSwitchStyle.js";
import { dangerColor } from "../../../nextjs-material-kit-pro";

const btn = {
  width: "180px",
  height: "40px",
  borderRadius: "20px",
  color: whiteColor,
  margin: "0 12px",
  font: "normal normal normal 14px/46px Roboto",
  letterSpacing: "0px",
  textTransform: "uppercase",
};
const javascriptStyles = (theme) => ({
  container,
  description,
  cardTitle,
  mlAuto,
  mrAuto,
  ...tooltipsStyle,
  ...popoverStyles,
  ...modalStyle(theme),
  section: {
    padding: "70px 0 0",
  },
  modal: {
    width: "582px",
    border: `1px solid ${grayColor[26]}`,
    borderRadius: "10px",
    padding: "0 44px",
  },
  title: {
    font: "normal normal bold 24px/29px Roboto",
    letterSpacing: "0.05px",
    color: grayColor[33],
    marginTop: "44px",
    marginBottom: 0,
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
  },
  divider: {
    border: `2px solid ${primaryColor[0]}`,
    borderRadius: "10px",
    width: "206px",
    margin: "18px auto 12px auto",
  },
  label: {
    font: "normal normal normal 18px/22px Roboto",
    letterSpacing: "0.04px",
    color: grayColor[33],
    margin: 0,
    textAlign: "center",
  },
  btnDanger: {
    background: dangerColor[0],
    ...btn,
  },
  btnPrimary: {
    background: primaryColor[0],
    ...btn,
  },
  modalFooter: {
    display: "flex",
    justifyContent: "center",
    margin: "48px 0",
  },
});

export default javascriptStyles;
