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
import img1 from "assets/img/icons/slider/1.jpg";
import img2 from "assets/img/icons/slider/2.jpg";
import img3 from "assets/img/icons/slider/3.jpg";
import arrow from "../../assets/img/icons/arrow.svg";
import arrowLeft from "../../assets/img/icons/arrowleft.svg";
import arrowRight from "../../assets/img/icons/arrowright.svg";
import ScrollAnimation from "react-animate-on-scroll";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(styles);

const content = [
  {
    title: "Things to do while traveling a trip",
    slogan: "Guide",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem...",
    img: img1,
  },
  {
    title: "Things to do while traveling a trip",
    slogan: "Guide",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem...",
    img: img2,
  },
  {
    title: "Things to do while traveling a trip",
    slogan: "Guide",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem...",
    img: img3,
  },
  {
    title: "Things to do while traveling a trip",
    slogan: "Guide",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem...",
    img: img2,
  },
  {
    title: "Things to do while traveling a trip",
    slogan: "Guide",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem...",
    img: img3,
  },
];

const Card = ({ slogan, title, img, description, active }) => {
  const classes = useStyles();
  return (
    <div>
      <img className={classes.sliderImg} src={img} alt="slider img" />
      <div className={classes.slideBody + " slidebody"}>
        <h2 className={classes.slideSlogan}>{slogan}</h2>
        <h3 className={classes.slideTitle}>{title}</h3>
        <p className={classes.slideDescription}>{description}</p>
        <Button simple className={classes.readButton}>
          read more{" "}
          <span className={classes.readIcon}>
            <img src={arrow} />
          </span>{" "}
        </Button>
      </div>
    </div>
  );
};

function NextArrow(props) {
  const classes = useStyles();
  const { className, style, onClick } = props;
  return (
    <div className={classes.arrow + " " + className} onClick={onClick}>
      <img src={arrowRight} />
    </div>
  );
}

function PrevArrow(props) {
  const classes = useStyles();
  const { className, style, onClick } = props;
  return (
    <div className={classes.arrow + " " + className} onClick={onClick}>
      <img src={arrowLeft} />
    </div>
  );
}

export default function Carousel() {
  const classes = useStyles();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          initialSlide: 1,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 959,
        settings: {
          initialSlide: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings} className={classes.slider}>
        {content.map((slid, index) => (
          <div key={index} className={classes.slide}>
            <ScrollAnimation animateIn="Slide">
              <Card {...slid} active={index} />
            </ScrollAnimation>
          </div>
        ))}
      </Slider>
    </div>
  );
}

Slider.defaultProps = {};

Slider.propTypes = {};
