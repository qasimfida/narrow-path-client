import React, { useState } from "react";
import img from "../../assets/img/icons/user.png";
import address from "../../assets/img/icons/address.svg";
import email from "../../assets/img/icons/email.svg";
import date from "../../assets/img/icons/date.svg";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import styles from "../../assets/jss/nextjs-material-kit-pro/pages/settingSections/accountStyle";
import {
  FormControl,
  FormGroup,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
import { Star } from "./Icons";
import Button from "../../components/CustomButtons/Button";

const useStyles = makeStyles(styles);

export default (props) => {
  const classes = useStyles();
  const [active, setActive] = useState();

  const onClick = () => {};
  return (
    <div className={classes.profileCard}>
      <div className={classes.formWrapper}>
        <GridContainer>
          <GridItem xs={12} md={7}>
            <div className={classes.formControl}>
              <label className={classes.label}>Old Password</label>
              <input className={classes.input} placeholder="Your Old Password" type={"password"} />
            </div>
            <div className={classes.formControl}>
              <label className={classes.label}>New Password</label>
              <input className={classes.input} placeholder="Your New Password" type={"password"} />
            </div>
            <div className={classes.formControl}>
              <label className={classes.label}>Confirm Password</label>
              <input className={classes.input} placeholder="Confirm New Password" type={"password"} />
            </div>
            <div>
              <Button className={classes.primaryBtn}>Update Password</Button>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};
