import { whiteColor, grayColor } from "assets/jss/nextjs-material-kit-pro.js";

const styles = (theme) => ({
  page: {
    background: whiteColor,
    display: "flex",
    alignItems: "center",
    height: "100vh",
    justifyContent: "center",
  },
  card: {
    padding: "38px 72px",
    border: `1px solid ${grayColor[26]}`,
    borderRadius: "10px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "38px 54px",
      margin: "20px",
    },
  },
  title: {
    font: "normal normal bold 24px/29px Roboto",
    letterSpacing: "0.05px",
    color: grayColor[33],
    margin: "22px 0",
  },
  description: {
    font: "normal normal normal 18px/22px Roboto",
    letterSpacing: "0.04px",
    color: grayColor[33],
    marginTop: 0,
    marginBottom: "44px",
    padding: "0 20px",
  },
  m0: {
    margin: 0,
  },
  verificationBtn: {
    marginBottom: "44px",
    margin: 0,
    padding: 0,
    marginBtn: "60px",
    outline: "none",
    border: "none",
    boxShadow: "none",
    font: "normal normal bold 18px/22px Roboto",
  },
});

export default styles;
