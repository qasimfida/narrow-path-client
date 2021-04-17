/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Favorite from "@material-ui/icons/Favorite";
import Face from "@material-ui/icons/Face";
// core components
import Header from "components/Header/CustomHeader.js";
import HeaderLinks from "components/Header/CustomLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import emailVerificationStyle from "assets/jss/nextjs-material-kit-pro/pages/emailVerificationStyle.js";
import email from "../assets/img/icons/email-flip.svg";
import whiteLogo from '../assets/img/icons/logo white.png'
import primaryLogo from '../assets/img/icons/logo primary.png'

const useStyles = makeStyles(emailVerificationStyle);

export default function LoginPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand={primaryLogo}
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="white"
        changeColorOnScroll={{
          height: 86,
          color: "white",
          brand: primaryLogo
        }}
      />
      <div
        className={classes.page}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={10} md={8}>
              <div className={classes.card}>
                <img src={email} />
                <h2 className={classes.title}>Email Confirmation</h2>
                <p className={classes.description}>
                  We just sent an email to tim@getoutexploremore.com to verify
                  your email address. you must{" "}
                  <b>click the link in that email</b> to finishing signing up:
                </p>
                <p className={classes.description + " " + classes.m0}>
                  If you don't receive the email in the next 2 minutes you can
                </p>
                <Button className={classes.verificationBtn} simple color="primary" >request another verification email.</Button>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
