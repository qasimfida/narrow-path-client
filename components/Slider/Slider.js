import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";

import Slider from "react-slick";
import styles from "assets/jss/nextjs-material-kit-pro/components/sliderStyles.js";
import ScrollAnimation from "react-animate-on-scroll";

const useStyles = makeStyles(styles);

export default function Carousel() {
  const classes = useStyles();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h2> Responsive </h2>
      <GridContainer>
        <Slider {...settings} className={classes.slides}>
          <GridItem className={classes.slide}>
            <ScrollAnimation animateIn="Slide">
              Lorem asdfjalsd lasdkfj alsdkfj l;askdjf alsdjf alskdfj laskdfj
              als;dfj
            </ScrollAnimation>
          </GridItem>
          <GridItem className={classes.slide}>
            <ScrollAnimation animateIn="Slide">
              Lorem asdfjalsd lasdkfj alsdkfj l;askdjf alsdjf alskdfj laskdfj
              als;dfj
            </ScrollAnimation>
          </GridItem>
          <GridItem className={classes.slide}>
            <ScrollAnimation animateIn="Slide">
              Lorem asdfjalsd lasdkfj alsdkfj l;askdjf alsdjf alskdfj laskdfj
              als;dfj
            </ScrollAnimation>
          </GridItem>
          <GridItem className={classes.slide}>
            <ScrollAnimation animateIn="Slide">
              Lorem asdfjalsd lasdkfj alsdkfj l;askdjf alsdjf alskdfj laskdfj
              als;dfj
            </ScrollAnimation>
          </GridItem>
          <GridItem className={classes.slide}>
            <ScrollAnimation animateIn="Slide">
              Lorem asdfjalsd lasdkfj alsdkfj l;askdjf alsdjf alskdfj laskdfj
              als;dfj
            </ScrollAnimation>
          </GridItem>
        </Slider>
      </GridContainer>
    </div>
  );
}

Slider.defaultProps = {};

Slider.propTypes = {};
