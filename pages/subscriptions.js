/*eslint-disable*/
import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';
// core components
import Header from 'components/Header/CustomHeader.js';
import HeaderLinks from 'components/Header/CustomLinks.js';
import Parallax from 'components/Parallax/Parallax.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
// import Footer from 'components/Footer/Footer.js';
// sections for this page
import SectionPricing from 'pages-sections/subscription-page/SectionPricing.js';
import FrequentlyAsk from 'pages-sections/subscription-page/FrequentlyAsk.js';

import subscriptionStyle from '../assets/jss/nextjs-material-kit-pro/pages/subscriptionStyle.js';
import Footer from 'pages-sections/magazine-page/Footer.js';
import logo from 'assets/img/icons/logo primary.png';

const useStyles = makeStyles(subscriptionStyle);

export default function Subscriptions() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        fixed
        brand={logo}
        links={<HeaderLinks dropdownHoverColor="info" />}
        color="white"
        changeColorOnScroll={{
          height: 86,
          color: 'white',
          brand: logo,
        }}
      />

      <Parallax
        image={require('assets/img/bg2.jpg')}
        filter="dark"
        small
        className={classes.wrapper}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}
            >
              <h1 className={classes.title}>Subscription Plans</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <SectionPricing />
        </div>
        <FrequentlyAsk className={classes.container} />
      </div>
      <Footer />
    </div>
  );
}
