import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import sliderStyle from "../../assets/jss/nextjs-material-kit-pro/pages/magazineSection/sliderStyle.js";
import Slider from "../../components/Slider/Slider.js";
import SectionHeading from "../../components/SectionHeading/SectionHeading.js";

const useStyles = makeStyles(sliderStyle);

export default function SectionContentRight() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center" alignItems="center">
          <SectionHeading
            text="Read our Latest Articles"
            className={classes.heading}
          />
        </GridContainer>
        <GridContainer justify="center" alignItems="center">
          <GridItem xs={12}>
            <Slider />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
