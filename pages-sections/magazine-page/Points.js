import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// library used for cool animations
import ScrollAnimation from "react-animate-on-scroll";

import pointsStyle from "../../assets/jss/nextjs-material-kit-pro/pages/magazineSection/pointsStyle.js";
// images
import road from "assets/img/icons/explore/1.png";
import lighthouse from "assets/img/icons/explore/2.png";
import zoo from "assets/img/icons/explore/3.png";
import sea from "assets/img/icons/explore/4.png";
import mueseum from "assets/img/icons/explore/5.png";
import park from "assets/img/icons/explore/6.png";
import SectionHeading from "../../components/SectionHeading/SectionHeading.js";

const useStyles = makeStyles(pointsStyle);

const cards = [
  {
    label: "Roadside Attractions",
    number: "2,317",
    img: road,
  },
  {
    label: "Lighthouses",
    number: "1,842",
    img: lighthouse,
  },
  {
    label: "Aquariums | Zoos | Sanctuaries",
    number: "900",
    img: zoo,
  },
  {
    label: "Roadside Attractions",
    number: "2,735",
    img: sea,
  },
  {
    label: "Museums",
    number: "19,621",
    img: mueseum,
  },
  {
    label: "Other Points of Interest",
    number: "476,853",
    img: park,
  },
];

export default function SectionContent() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} md={4}>
            <SectionHeading
              className={classes.heading}
              text="Things to EXPLORE on your next trip"
            />
            <hr className={classes.divider} />
          </GridItem>
        </GridContainer>
        <div className={classes.boxWrapper}>
          <GridContainer justify="center">
            {cards.map((item) => (
              <GridItem
                key={item.label}
                xs={6}
                sm={6}
                md={6}
                lg={4}
                className={classes.mlAuto + " " + classes.gridSpacing}
              >
                <div className={classes.card}>
                  <ScrollAnimation animateIn="fadeInUp">
                    <img
                      src={item.img}
                      alt="iPad comments"
                      className={classes.cardMedia}
                    />
                    <h3 className={classes.cardTitle}>{item.label}</h3>
                    <p className={classes.cardNumber}>{item.number}</p>
                  </ScrollAnimation>
                </div>
              </GridItem>
            ))}
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
