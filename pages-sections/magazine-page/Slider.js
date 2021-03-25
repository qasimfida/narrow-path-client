import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import contentStyle from "../../assets/jss/nextjs-material-kit-pro/pages/magazineSection/contentStyle.js";
import Slider from "../../components/Slider/Slider.js";

const useStyles = makeStyles(contentStyle);

export default function SectionContentRight() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center" alignItems="center">
          <Slider />
        </GridContainer>
      </div>
    </div>
  );
}
