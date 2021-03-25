import React from "react";
// core components
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// library used for cool animations
import ScrollAnimation from "react-animate-on-scroll";

import postsStyle from "../../assets/jss/nextjs-material-kit-pro/pages/magazineSection/postsStyle.js";
// images
import post1 from "assets/img/icons/posts/1.jpg";
import post2 from "assets/img/icons/posts/2.jpg";
import post3 from "assets/img/icons/posts/3.jpg";
import SectionHeading from "../../components/SectionHeading/SectionHeading.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";

const useStyles = makeStyles(postsStyle);

const posts = [
  {
    title: "Post 1 Headline",
    date: "Tue Feb 02 2021 | Category",
    description:
      "Sample small text. Lorem ipsum dolor sit amet. Sample small text. Lorem ipsum dolor sit.",
    img: post1,
  },
  {
    title: "Post 2 Headline",
    date: "Tue Feb 02 2021 | Category",
    description:
      "Sample small text. Lorem ipsum dolor sit amet. Sample small text. Lorem ipsum dolor sit.",
    img: post2,
  },
  {
    title: "Post 3 Headline",
    date: "Tue Feb 02 2021 | Category",
    description:
      "Sample small text. Lorem ipsum dolor sit amet. Sample small text. Lorem ipsum dolor sit.",
    img: post3,
  },
];

export default function SectionContent() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <div className={classes.content}>
            <div className={classes.heading}>
              <SectionHeading text="Recent Trip Guide" />
              <hr className={classes.divider} />
            </div>
          </div>
        </GridContainer>
        <GridContainer>
          {posts.map((item) => {
            return (
              <GridItem key={item.title} xs={12} sm={12} md={4}>
                <Card profile plain className={classes.card}>
                  <ScrollAnimation animateIn="fadeIn">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        className={classes.cardMedia}
                        src={item.img}
                        alt="..."
                      />
                      <CardBody plain>
                        <h6 className={classes.cardTitle}>{item.title}</h6>
                        <div className={classes.cardDate}>{item.date}</div>
                        <p className={classes.cardDescription}>
                          {item.description}
                        </p>
                      </CardBody>
                      <CardFooter
                        className={classes.cardFooter}
                        profile
                        plain
                        className={classes.justifyContentCenter}
                      >
                        <Button
                          className={classes.cardBtn}
                          round
                          color="primary"
                        >
                          Read more
                        </Button>
                      </CardFooter>
                    </a>
                  </ScrollAnimation>
                </Card>
              </GridItem>
            );
          })}
        </GridContainer>
      </div>
    </div>
  );
}
