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
import sea from "assets/img/icons/sea.jpg";

const useStyles = makeStyles(contentStyle);

export default function Slider() {
  const classes = useStyles();
  return (
    <div className={"last-child " + classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center" alignItems="center">
          <GridItem xs={12} md={5} className={classes.mlAuto}>
            <div className={classes.imageContainer}>
              <div className={classes.animeAreaImg}>
                <ScrollAnimation animateIn="fadeInUp">
                  <img
                    src={sea}
                    alt="iPad comments"
                    className={classes.areaImg}
                  />
                </ScrollAnimation>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} md={7}>
            <div className={classes.sectionDescription}>
              <h5 className={classes.title}>
                Not planning on traveling for a while? No problem, explore
                places and save them to your "Bucket List" in personalized
                "Buckets." When you are ready to travel, open your "Bucket List"
                and let our platform automatically create an internary and guide
                you down the road with turn-by-turn directions. Are you an RVer?
                Choose a campground from our database of more than 23,000
                campgrounds and add it into your interary, letting our routing
                engine keep you on roads safe for your rig.
              </h5>
              <br />
              <h5 className={classes.title}>
                GetOutExploreMore is here for you to plan your next vacation,
                road trip, or day trip.
              </h5>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
