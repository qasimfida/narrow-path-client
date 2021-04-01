import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// library used for cool animations
import ScrollAnimation from "react-animate-on-scroll";

import contentStyle from "../../assets/jss/nextjs-material-kit-pro/pages/magazineSection/contentStyle.js";
// images
import sky from "assets/img/icons/sky.jpg";

const useStyles = makeStyles(contentStyle);

export default function SectionContent() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center"  alignItems="center">
          <GridItem md={7}>
            <div className={classes.sectionDescription}>
              <h5 className={classes.title}>
                According to Google, 85% of leisure travelers finalize their
                activities after arriving at their destination. Due to this,
                they lose valuable travel time by picking up the spots to
                explore. Travelers also miss out on a few places on their
                itinerary due to time constraints. Therefore, there has ​been a
                dire need for travel planning that saves time so travelers can
                enjoy their trip.
              </h5>
              <h5 className={classes.title}>
                <b>
                  Choose a destination you want to explore and find points of
                  interest along the way you didn't know existed.
                </b>
              </h5>
              <h5 className={classes.title}>
                GetOutExploreMore is an interactive, map-based travel planning
                platform. Our platform has over 570,000 places of interest for
                you to explore. Narrow down this large amount of places using
                our 175 filters based on your particular interests in areas of
                North America that you want to visit and route your trip.
              </h5>
            </div>
          </GridItem>
          <GridItem md={5} className={classes.mlAuto}>
            <div className={classes.imageContainer}>
              <div className={classes.animeAreaImg}>
                <ScrollAnimation animateIn="fadeInUp">
                  <img
                    src={sky}
                    alt="iPad comments"
                    className={classes.areaImg}
                  />
                </ScrollAnimation>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
