import React from "react";
import like from "../../assets/img/icons/like.svg";
import comment from "../../assets/img/icons/comment.svg";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import styles from "../../assets/jss/nextjs-material-kit-pro/pages/dashboardSections/reviewStyle";
import { makeStyles } from "@material-ui/core";
import { Star } from "./Icons";
import Button from "../../components/CustomButtons/Button";
import Slider from "react-slick";

const useStyles = makeStyles(styles);
export default (props) => {
  const arr = [
    {
      title: "Twin Mills Campground",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper condimentum ultrices. Cras euismod ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper condimentum ultrices. Cras euismod ornare.",
      rate: 5,
      comments: 11,
      likes: 95,
    },
    {
      title: "Twin Mills Campground",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper condimentum ultrices. Cras euismod ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper condimentum ultrices. Cras euismod ornare.",
      rate: 5,
      comments: 11,
      likes: 95,
    },
    {
      title: "Twin Mills Campground",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper condimentum ultrices. Cras euismod ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper condimentum ultrices. Cras euismod ornare.",
      rate: 5,
      comments: 11,
      likes: 95,
    },
    {
      title: "Twin Mills Campground",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper condimentum ultrices. Cras euismod ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper condimentum ultrices. Cras euismod ornare.",
      rate: 5,
      comments: 11,
      likes: 95,
    },
    {
      title: "Twin Mills Campground",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper condimentum ultrices. Cras euismod ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper condimentum ultrices. Cras euismod ornare.",
      rate: 5,
      comments: 11,
      likes: 95,
    },
    {
      title: "Twin Mills Campground",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper condimentum ultrices. Cras euismod ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper condimentum ultrices. Cras euismod ornare.",
      rate: 5,
      comments: 11,
      likes: 95,
    },
    {
      title: "Twin Mills Campground",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper condimentum ultrices. Cras euismod ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper condimentum ultrices. Cras euismod ornare.",
      rate: 5,
      comments: 11,
      likes: 95,
    },
    {
      title: "Twin Mills Campground",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper condimentum ultrices. Cras euismod ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper condimentum ultrices. Cras euismod ornare.",
      rate: 5,
      comments: 11,
      likes: 95,
    },
  ];
  const classes = useStyles();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    sliderPerRow: 2,
    rows: 2,
    arrows: false,
    appendDots: (dots) => (
      <ul>
        {dots}
      </ul>
    ),
    customPaging: (i) => (
      <div className="slick__dots--custom">
       {i}
      </div>
    ),
    responsive: [
      {
        breakpoint: 960,
        settings: {
          rows: 1,
          sliderPerRow: 1,
          initialSlide: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={classes.slider}>
      {/* <div className={classes.profileCard}>
      <div className={classes.container}></div> */}
      <GridContainer>
        <GridItem xs={12}>
          <Slider {...settings}>
            {arr.map((slide, i) => (
              <div className={classes.wrapper}>
                <div className={classes.card}>
                  <div className={classes.header}>
                    <h2 className={classes.title}>{i + slide.title}</h2>
                    <div className={classes.rate}>
                      {slide.rate}
                      <Star className={classes.spaceLeft10}  color="#FF9900"></Star>
                    </div>
                  </div>
                  <p className={classes.para}>{slide.description}</p>
                  <div className={classes.rate}>
                    <div className={classes.dFlex}>
                      <img src={comment} alt="comment" className={classes.spaceRight6}   />
                      {slide.comments}
                    </div>
                    <div className={classes.spaceLeft + " " + classes.dFlex}>
                      <img src={like} alt="comment" className={classes.spaceRight6}   />
                      {slide.likes}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </GridItem>
      </GridContainer>
    </div>
  );
};
