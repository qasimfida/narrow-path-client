import React, { useState } from "react";
import img from "../../assets/img/icons/user.png";
import address from "../../assets/img/icons/address.svg";
import email from "../../assets/img/icons/email.svg";
import date from "../../assets/img/icons/date.svg";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import styles from "../../assets/jss/nextjs-material-kit-pro/pages/dashboardSections/categoryStyle";
import { makeStyles } from "@material-ui/core";
import { Star } from "./Icons";
import Button from "../../components/CustomButtons/Button";
import Drawer from "./Drawer";
import SearchBar from "../../components/SearchBar/SearchBar";

const useStyles = makeStyles(styles);

const arr = [
  {
    name: "AQUATIC & ANIMAL ATTRACTIONS",
    filters: [
      "Aquariums | Marine Centers",
      "Butterfly & Nature Conservatories",
      "Wildlife Refuges & Sanctuaries",
      "Zoos | Safari Parks",
    ],
  },
  {
    name: "FESTIVALS | EVENTS",
    filters: [
      "Aquariums | Marine Centers",
      "Butterfly & Nature Conservatories",
      "Wildlife Refuges & Sanctuaries",
      "Zoos | Safari Parks",
    ],
  },
  {
    name: "GARDENS",
    filters: [
      "Aquariums | Marine Centers",
      "Butterfly & Nature Conservatories",
      "Wildlife Refuges & Sanctuaries",
      "Zoos | Safari Parks",
    ],
  },
  {
    name: "GOLD",
    filters: [
      "Aquariums | Marine Centers",
      "Butterfly & Nature Conservatories",
      "Wildlife Refuges & Sanctuaries",
      "Zoos | Safari Parks",
    ],
  },
  {
    name: "HALLS & WALKS OF FAME",
    filters: [
      "Aquariums | Marine Centers",
      "Butterfly & Nature Conservatories",
      "Wildlife Refuges & Sanctuaries",
      "Zoos | Safari Parks",
    ],
  },
  {
    name: "HIKING",
    filters: [
      "Aquariums | Marine Centers",
      "Butterfly & Nature Conservatories",
      "Wildlife Refuges & Sanctuaries",
      "Zoos | Safari Parks",
    ],
  },
  {
    name: "KIDS FRIENDLY",
    filters: [
      "Aquariums | Marine Centers",
      "Butterfly & Nature Conservatories",
      "Wildlife Refuges & Sanctuaries",
      "Zoos | Safari Parks",
    ],
  },
  {
    name: "MUSEUMS",
    filters: [
      "Aquariums | Marine Centers",
      "Butterfly & Nature Conservatories",
      "Wildlife Refuges & Sanctuaries",
      "Zoos | Safari Parks",
    ],
  },
];

export default (props) => {
  const classes = useStyles();
  const [active, setActive] = useState();

  const onClick = () => {};
  return (
    <div className={classes.profileCard}>
      <GridContainer>
        <GridItem xs={12} md={4}>
          <SearchBar placeHolder="Search Categories" />
          {arr.map((item, i) => {
            return (
              <Drawer
                open={active === i}
                onChange={() => setActive(i === active ? null : i)}
                filters={item.filters}
                label={item.name}
              />
            );
          })}
        </GridItem>
        <GridItem xs={12} md={8}>
          <div className={classes.wrapper}>
            <h2 className={classes.title}>AQUATIC & ANIMAL ATTRACTIONS</h2>
            <hr className={classes.divider}></hr>
            <p className={classes.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Button className={classes.saveBtn}>Save Category</Button>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
};
