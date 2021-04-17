import React, { useState } from "react";
import styles from "../../assets/jss/nextjs-material-kit-pro/components/searchBarStyle.js";
import icon from "../../assets/img/icons/search.svg";
import { Card, CardHeader, makeStyles } from "@material-ui/core";
import styled from "styled-components";
import { SearchIcon } from "./Icon.js";
import { primaryColor } from "../../assets/jss/nextjs-material-kit-pro.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardAvatar from "components/Card/CardAvatar.js";
import Info from "components/Typography/Info.js";
import Danger from "components/Typography/Danger.js";
import Success from "components/Typography/Success.js";
import Warning from "components/Typography/Warning.js";
import Rose from "components/Typography/Rose.js";
import Button from "components/CustomButtons/Button.js";

const useStyles = makeStyles(styles);

export default (props) => {
  const { placeHolder } = props;
  const [value, setValue] = useState("");
  const handleSubmit = () => {};
  const classes = useStyles();
  return (
    <>
      <Card blog>
        <CardHeader image>
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img src={cardBlog1} alt="..." />
            <div className={classes.cardTitleAbsolute}>
              This Summer Will be Awesome
            </div>
          </a>
          <div
            className={classes.coloredShadow}
            style={{
              backgroundImage: `url(${cardBlog1})`,
              opacity: "1",
            }}
          />
        </CardHeader>
        <CardBody>
          <Info>
            <h6 className={classes.cardCategory}>FASHION</h6>
          </Info>
          <div className={classes.cardDescription}>
            Don{"'"}t be scared of the truth because we need to restart the
            human foundation in truth And I love you like Kanye loves Kanye I
            love Rick Owens’ bed design but the back is...
          </div>
        </CardBody>
      </Card>
      <Card color="info">
        <CardBody color>
          <h5 className={classes.cardCategorySocialWhite}>
            <i className="fab fa-twitter" />
            Twitter
          </h5>
          <h4 className={classes.cardTitleWhite}>
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              {'"'}You Don{"'"}t Have to Sacrifice Joy to Build a Fabulous
              Business and Life{'"'}
            </a>
          </h4>
        </CardBody>
        <CardFooter>
          <div className={classes.authorWhite}>
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              <img
                src={avatar}
                alt="..."
                className={classes.imgRaised + " " + classes.avatar}
              />
              <span>Tania Andrew</span>
            </a>
          </div>
          <div className={classes.statsWhite + " " + classes.mlAuto}>
            <Favorite />
            2.4K ·
            <Share />
            45
          </div>
        </CardFooter>
      </Card>
    </>
  );
};
