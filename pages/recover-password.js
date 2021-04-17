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

import loginPageStyle from "assets/jss/nextjs-material-kit-pro/pages/loginPageStyle.js";
import facebook from "../assets/img/icons/facebook.svg";
import twitter from "../assets/img/icons/twitter.svg";
import { primaryColor } from "../assets/jss/nextjs-material-kit-pro";
import whiteLogo from '../assets/img/icons/logo white.png'
import primaryLogo from '../assets/img/icons/logo primary.png'
import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(loginPageStyle);

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
        className={classes.pageHeader}
        style={{
          background: `url(${image})`,
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={8} md={5}>
              <Card>
                <form className={classes.form}>
                  <CardHeader
                    color="primary"
                    signup
                    className={classes.cardHeader}
                  >
                    <h4 className={classes.cardTitle}>New Password</h4>
                  </CardHeader>
                  <CardBody signup>
                    <CustomInput
                      id="password"
                      formControlProps={{
                        fullWidth: true,
                        className: classes.formItem,
                      }}
                      inputProps={{
                        placeholder: "New Password",
                        type: "text",
                      }}
                    />
                    <CustomInput
                      id="confirm-pass"
                      formControlProps={{
                        fullWidth: true,
                        className: classes.formItem,
                      }}
                      inputProps={{
                        placeholder: "Confirm Password",
                        type: "text",
                      }}
                    />
                   
                  </CardBody>
                    <Button
                      color="primary"
                      size="lg"
                      className={classes.loginBtn}
                    >
                      SUBMIT
                    </Button>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
