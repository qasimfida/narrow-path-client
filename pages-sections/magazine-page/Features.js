import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// library used for cool animations
import ScrollAnimation from "react-animate-on-scroll";

import featureStyle from "../../assets/jss/nextjs-material-kit-pro/pages/magazineSection/featureStyle.js";
// images
import right from "assets/img/icons/features/1.jpg";
import left from "assets/img/icons/features/2.jpg";
import mark from "assets/img/icons/features/mark.svg";
import SectionHeading from "../../components/SectionHeading/SectionHeading.js";
import Button from "../../components/CustomButtons/Button.js";

import { List, ListItem } from "@material-ui/core";

const useStyles = makeStyles(featureStyle);

export default function SectionContent() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer className={classes.pb75} justify="center">
        <GridItem md={7}>
          <div className={classes.content}>
            <div className={classes.heading}>
              <SectionHeading type="section" text="Features" />
              <hr className={classes.divider} />
            </div>
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <img src={mark} alt="icon" className={classes.bullet} />
                <span>
                  Filter through thousands of points of interest based on your
                  interest.
                </span>
              </ListItem>
              <ListItem className={classes.listItem}>
                <img src={mark} alt="icon" className={classes.bullet} />
                <span>
                  Create multiple bucket lists and name them the way you want.
                </span>
              </ListItem>
              <ListItem className={classes.listItem}>
                <img src={mark} alt="icon" className={classes.bullet} />
                <span>
                  When you are ready to take your trip, let our routing engine
                  automatically organize your selections getting you efficnetly
                  to the places that you selected providing you more time to
                  explore.
                </span>
              </ListItem>
              <ListItem className={classes.listItem}>
                <img src={mark} alt="icon" className={classes.bullet} />
                <span>
                  If you own or rent an RV, select a campground that is close to
                  the items on your bucket list and add it to your itinerary.
                </span>
              </ListItem>
            </List>
          </div>
        </GridItem>
        <GridItem md={5} className={classes.mlAuto}>
          <div className={classes.contentMedia}>
            <div className={classes.animeAreaImg}>
              <ScrollAnimation animateIn="fadeInUp">
                <img
                  src={right}
                  alt="iPad comments"
                  className={classes.img}
                />
              </ScrollAnimation>
            </div>
          </div>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem md={5} className={classes.mlAuto}>
          <div className={classes.contentMedia}>
            <div className={classes.animeAreaImg}>
              <ScrollAnimation animateIn="fadeInUp">
                <img
                  src={left}
                  alt="iPad comments"
                  className={classes.img}
                />
              </ScrollAnimation>
            </div>
          </div>
        </GridItem>
        <GridItem md={7}>
          <div className={classes.content}>
            <div className={classes.heading}>
              <SectionHeading type="section" text="Benefits" />
              <hr className={classes.divider} />
            </div>
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <img src={mark} alt="icon" className={classes.bullet} />
                <span>
                  Find out about places that match your interests before you
                  travel, not as you are leaving a place.
                </span>
              </ListItem>
              <ListItem className={classes.listItem}>
                <img src={mark} alt="icon" className={classes.bullet} />
                <span>
                  No need to visit multiple websites to plan your trip. Read the
                  description on each location, photos, ratings and comments to
                  know about the location before you put it in your bucket list.
                </span>
              </ListItem>
              <ListItem className={classes.listItem}>
                <img src={mark} alt="icon" className={classes.bullet} />
                <span>
                  Our optimized routing engine gives you more time to explore.
                </span>
              </ListItem>
              <ListItem className={classes.listItem}>
                <img src={mark} alt="icon" className={classes.bullet} />
                <span>
                  Select the button below to visit our free interactive map and
                  see how much fun planning your trip can be.
                </span>
              </ListItem>
              <Button
                className={classes.btnExplore}
                color="primary"
                round
                size="lg"
              >
                Let's Go Explore
              </Button>
            </List>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
