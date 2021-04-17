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
  dangerColor,
  whiteColor,
} from "assets/jss/nextjs-material-kit-pro.js";

const btn = {
  borderRadius: "20px",
  height: "40px",
  padding: "0 32px",
  color: whiteColor,
};
const accountStyle = (theme) => ({
  wrapper: {
    padding: "0 30px",
  },
  formControl: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
  },
  input: {
    border: `1px solid ${grayColor[36]}`,
    borderRadius: "5px",
    font: "normal normal bold 14px/13px Roboto",
    height: "45px",
    padding: "0 32px",
    color: grayColor[36],
  },
  label: {
    marginBottom: "12px",
    font: "normal normal bold 14px/13px Roboto",
    letterSpacing: "0px",
    color: grayColor[34],
  },
  divider: {
    // height: "1px",
    background: grayColor[26],
    marginBottom: "30px",
    marginTop: "50px",
  },
  title: {
    font: "normal normal bold 14px/13px Roboto",
    letterSpacing: "0px",
    color: grayColor[35],
    margin: 0,
  },
  description: {
    font: "normal normal normal 12px/13px Roboto",
    margin: "14px 0",
  },
  dangerBtn: {
    marginTop: "16px",
    background: dangerColor[0],
    ...btn,
  },
  primaryBtn: {
    marginTop: "50px",
    background: primaryColor[0],
    ...btn,
  },
});

export default accountStyle;
