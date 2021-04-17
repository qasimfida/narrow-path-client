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
import Modal from "./Modal";

const useStyles = makeStyles(styles);

export default (props) => {
  const classes = useStyles();
  const [active, setActive] = useState();
  const [open, setOpen] = useState(false);

  const onClick = () => {};
  return (
    <div className={classes.profileCard}>
      <div className={classes.formWrapper}>
        <GridContainer>
          <GridItem xs={12} md={7}>
            <div className={classes.formControl}>
              <label className={classes.label}>Username</label>
              <input
                className={classes.input}
                placeholder="Enter your username"
              />
            </div>
            <div className={classes.formControl}>
              <label className={classes.label}>Email</label>
              <input className={classes.input} placeholder="Enter your email" />
            </div>
            <hr className={classes.divider} />
            <div>
              <h3 className={classes.title}>Delete Account</h3>
              <p className={classes.description}>
                Once you delete your account, there is no going back. Please be
                certain.
              </p>
              <Button
                onClick={() => setOpen(true)}
                className={classes.dangerBtn}
              >
                Delete Account
              </Button>
            </div>
          </GridItem>
        </GridContainer>
        <Modal open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};
