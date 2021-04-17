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
import Tabs from "pages-sections/setting-page/Tabs.js";
import logo from "../assets/img/icons/logo primary.png";

import dashboardStyle from "assets/jss/nextjs-material-kit-pro/pages/dashboardStyle.js";

const useStyles = makeStyles(dashboardStyle);

export default function PresentationPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <Header
        brand={logo}
        links={<HeaderLinks dropdownHoverColor="info" />}
        color="white"
        changeColorOnScroll={{
          height: 86,
          color: "white",
          brand: logo,
        }}
      />
      <div className={classNames(classes.main)}>
        <Tabs />
      </div>
    </div>
  );
}
