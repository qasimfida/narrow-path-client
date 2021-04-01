/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Header from "components/Header/CustomHeader.js";
import HeaderLinks from "components/Header/CustomLinks.js";
import Parallax from "components/Parallax/Parallax.js";
// import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import SearchBox from "components/SearchBox/SearchBox";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// sections for this page
import Features from "pages-sections/magazine-page/Features.js";
import Points from "pages-sections/magazine-page/Points.js";
import Slider from "pages-sections/magazine-page/Slider.js";
import Posts from "pages-sections/magazine-page/Posts.js";
import Subscription from "pages-sections/magazine-page/Subscription.js";
import Footer from "pages-sections/magazine-page/Footer.js";
import SectionContentRight from "pages-sections/magazine-page/SectionContentRight.js";
import SectionContent from "pages-sections/magazine-page/SectionContent.js";
import SectionSections from "pages-sections/presentation-page/SectionSections.js";
import SectionExamples from "pages-sections/presentation-page/SectionExamples.js";
import SectionFreeDemo from "pages-sections/presentation-page/SectionFreeDemo.js";
import SectionOverview from "pages-sections/presentation-page/SectionOverview.js";
import SectionPricing from "pages-sections/presentation-page/SectionPricing.js";

import magazineStyle from "assets/jss/nextjs-material-kit-pro/pages/magazineStyle.js";
import styled from "styled-components";
import whiteLogo from '../assets/img/icons/logo white.png'
import primaryLogo from '../assets/img/icons/logo primary.png'
import { primaryColor } from "../assets/jss/nextjs-material-kit-pro";
const useStyles = makeStyles(magazineStyle);
const Title = styled.div`
  @media (max-width: 992px) {
    h1 {
      font-size: 54px;
    }
  }
`;

export default function PresentationPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand={whiteLogo}
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 86,
          color: "white",
          brand: primaryLogo
        }}
      />
      <Parallax
        image={require("assets/img/icons/main.jpg")}
        className={classes.parallax}
      >
        <div className={classes.container + " " + classes.heightFull}>
          <GridContainer justify="center" className={classes.heightFull}>
            <GridItem className={classes.heightFull + " " + classes.flex}>
              <SearchBox />

              <Title className={classes.brand}>
                <h1>Explore What Moves You</h1>
              </Title>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main)}>
        <SectionContent />
        <SectionContentRight />
        <Points />
        <Features />
        <Slider />
        <Posts />
        <Subscription />
        <Footer />
      </div>
    </div>
  );
}
