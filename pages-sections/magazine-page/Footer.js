import React from "react";
// core components
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// library used for cool animations
import ScrollAnimation from "react-animate-on-scroll";

import footerStyle from "../../assets/jss/nextjs-material-kit-pro/pages/magazineSection/footerStyle.js";
import logo from "../../assets/img/icons/logo footer.png";
// images
import post1 from "assets/img/icons/posts/1.jpg";
import post2 from "assets/img/icons/posts/2.jpg";
import post3 from "assets/img/icons/posts/3.jpg";
import SectionHeading from "../../components/SectionHeading/SectionHeading.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import message from "../../assets/img/icons/mail.svg";

const useStyles = makeStyles(footerStyle);

export default function SectionContent() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer fluid>
        <GridItem className={classes.gridLine} xs={12} sm={12} md={3}>
          <ScrollAnimation animateIn="fadeIn">
            <a
              href="/"
              onClick={(e) => e.preventDefault()}
              className={classes.footerLogo}
            >
              <img src={logo} alt="logo" />
            </a>
            <p className={classes.paragraph}>
              Probably the best UI Kit in the world! We know you've been waiting
              for it, so don't be shy!
            </p>
          </ScrollAnimation>
        </GridItem>
        <GridItem className={classes.gridLine} xs={12} sm={4} md={2}>
          <ScrollAnimation animateIn="fadeIn">
            <h3 className={classes.heading}>About Us</h3>
            <a
              className={classes.footerLink}
              href="/"
              onClick={(e) => e.preventDefault()}
            >
              Blog
            </a>
            <a
              className={classes.footerLink}
              href="/"
              onClick={(e) => e.preventDefault()}
            >
              ABOUT US
            </a>
            <a
              className={classes.footerLink}
              href="/"
              onClick={(e) => e.preventDefault()}
            >
              PRESENTATION
            </a>
            <a
              className={classes.footerLink}
              href="/"
              onClick={(e) => e.preventDefault()}
            >
              CONTACT US
            </a>
          </ScrollAnimation>
        </GridItem>
        <GridItem className={classes.gridLine} xs={12} sm={4} md={2}>
          <ScrollAnimation animateIn="fadeIn">
            <h3 className={classes.heading}>Market</h3>
            <a
              className={classes.footerLink}
              href="/"
              onClick={(e) => e.preventDefault()}
            >
              SALES FAQ
            </a>
            <a
              className={classes.footerLink}
              href="/"
              onClick={(e) => e.preventDefault()}
            >
              HOW TO REGISTER
            </a>
            <a
              className={classes.footerLink}
              href="/"
              onClick={(e) => e.preventDefault()}
            >
              SELL GOODS
            </a>
            <a
              className={classes.footerLink}
              href="/"
              onClick={(e) => e.preventDefault()}
            >
              RECEIVE PAYMENT
            </a>
            <a
              className={classes.footerLink}
              href="/"
              onClick={(e) => e.preventDefault()}
            >
              TRANSACTIONS ISSUES
            </a>
          </ScrollAnimation>
        </GridItem>
        <GridItem className={classes.gridLine} xs={12} sm={4} md={2}>
          <ScrollAnimation animateIn="fadeIn">
            <h3 className={classes.heading}>Legal</h3>
            <a
              className={classes.footerLink}
              href="/"
              onClick={(e) => e.preventDefault()}
            >
              Support
            </a>
            <a
              className={classes.footerLink}
              href="/"
              onClick={(e) => e.preventDefault()}
            >
              TERMS & CONDITIONS
            </a>
            <a
              className={classes.footerLink}
              href="/"
              onClick={(e) => e.preventDefault()}
            >
              Privacy Policy
            </a>
          </ScrollAnimation>
        </GridItem>
        <GridItem className={classes.gridLine} xs={12} sm={12} md={3}>
          <ScrollAnimation animateIn="fadeIn">
            <h3 className={classes.heading}>Subscribe to Newsletter</h3>
            <p className={classes.paragraph}>
              Join our newsletter and get news in your inbox every week! We hate
              spam too, so no worries about this.!
            </p>
            <form className={classes.footerInput}>
              <input placeholder="Your Email..." />
              <Button color="primary" >
                {" "}
                <img src={message} />{" "}
              </Button>
            </form>
          </ScrollAnimation>
        </GridItem>
      </GridContainer>
      <hr className={classes.divider} />
      <GridContainer fluid>
        <GridItem>
          <p className={classes.copyRight}>
            Copyright © 2019 All Rights Reserved.
          </p>
        </GridItem>
      </GridContainer>
    </div>
  );
}
