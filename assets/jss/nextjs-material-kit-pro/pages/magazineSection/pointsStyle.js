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
    whiteColor
  } from "assets/jss/nextjs-material-kit-pro.js";
  
  const featureStyle = (theme) => ({
    container,
    section: {
      padding: "45px 0",
      background: grayColor[1],
    },
    boxWrapper: {
      padding: "60px 0",
    },
    card: {
      background: ` ${whiteColor} 0% 0% no-repeat padding-box`,
      boxShadow: "0px 3px 5px #00000029",
      textAlign: 'center',
      margin: '15px auto',
      padding: '28px 18px 18px'
    },
    cardMedia: {
      height: '58px',
      width: '58px',
      marginBottom: '20px'
    },
    cardTitle: {
      font: "normal normal bold 14px/17px Roboto",
      letterSpacing: "0px",
      color: blackColor,
      marginTop: 0,
      marginBottom: '8px',
    },
    cardNumber: {
      font: "normal normal bold 30px/37px Roboto",
      letterSpacing: "0px",
      color: blackColor,
      margin: 0,
    },
    title: {
      color: grayColor[1],
      font: "normal normal normal 18px/22px Roboto",
      letterSpacing: "0px",
      color: "#B5B5B5",
      margin: "20px 0",
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
    divider: {
      width: "210px",
      background: `${primaryColor[0]}`,
      height: "5px",
      margin: "0 auto",
    },
    heading: {
      marginBottom: "32px",
    },
  });
  
  export default featureStyle;
  