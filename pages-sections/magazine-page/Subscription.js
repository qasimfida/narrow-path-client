import React from "react";
// core components
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// library used for cool animations
import ScrollAnimation from "react-animate-on-scroll";

import subscriptionStyle from "../../assets/jss/nextjs-material-kit-pro/pages/magazineSection/subscriptionStyle.js";
// images
import presentationiPadComments from "assets/img/assets-for-demo/presentationViewSectionComponent/ipad-comments.jpg";
import SectionHeading from "../../components/SectionHeading/SectionHeading.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardAvatar from "components/Card/CardAvatar.js";
import Info from "components/Typography/Info.js";
import Danger from "components/Typography/Danger.js";
import Success from "components/Typography/Success.js";
import Warning from "components/Typography/Warning.js";
import Rose from "components/Typography/Rose.js";
import Button from "components/CustomButtons/Button.js";
import { TextField } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(subscriptionStyle);

export default function Subscription() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
          <img
            className={classes.imgDecor + " " + classes.imgLeft}
            src={presentationiPadComments}
            alt="..."
          />
          <img
            className={classes.imgDecor + " " + classes.imgRight}
            src={presentationiPadComments}
            alt="..."
          />
        <ScrollAnimation animateIn="fadeIn">
          <GridContainer justify="center">
            <div className={classes.content}>
              <div className={classes.heading}>
                <h2>
                  Get <span>Notified</span>
                </h2>
                <hr className={classes.divider} />
              </div>
            </div>
          </GridContainer>
          <GridContainer justify="center">
            <GridItem xs={12} md={4} lg={4}>
              <p
                className={
                  (!matches ? classes.shortTextMd : "") +
                  " " +
                  classes.shortText
                }
              >
                Sign up for our newsletter as we find more places to explore.
              </p>
            </GridItem>
            <GridItem xs={12} md={4} lg={4}>
              <form className={classes.form} noValidate autoComplete="off">
                <TextField
                  className={classes.input}
                  id="outlined-basic"
                  label="Email Address here"
                  variant="outlined"
                />
                <Button
                  className={
                    (!matches ? classes.formBtnMd : "") + " " + classes.formBtn
                  }
                  color="primary"
                  round
                >
                  Submit
                </Button>
              </form>
            </GridItem>
          </GridContainer>
        </ScrollAnimation>
      </div>
    </div>
  );
}
