import React, { useState } from "react";
import img from "../../assets/img/icons/user.png";
import address from "../../assets/img/icons/address.svg";
import email from "../../assets/img/icons/email.svg";
import date from "../../assets/img/icons/date.svg";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import styles from "../../assets/jss/nextjs-material-kit-pro/pages/settingSections/billingStyle";
import {
  FormControl,
  FormGroup,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
import { Star } from "./Icons";
import Button from "../../components/CustomButtons/Button";
import Modal from "./Modal";
import paypal from "../../assets/img/icons/paypal.svg";
import google from "../../assets/img/icons/google.svg";
import apple from "../../assets/img/icons/apple.svg";

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
            <div className={classes.payForm}>
              <Button className={classes.paypalBtn}>
                Check out with <img src={paypal} />
              </Button>
              <Button className={classes.appleGoogleBtn}>
                Buy with <img src={apple} />
                Pay
              </Button>
              <Button className={classes.appleGoogleBtn}>
                Buy with <img src={google} />
                Pay
              </Button>
              <div className={classes.divider}>
                <hr />
                <span>OR</span>
              </div>
            </div>
            <div>
              <div>
                <h3 className={classes.title}>Shipping Address</h3>
              </div>
              <div className={classes.formItem}>
                <label className={classes.formLabel}>Fist Name</label>
                <input className={classes.formField} placeholder="John" />
              </div>
              <div className={classes.formItem}>
                <label className={classes.formLabel}>Last Name</label>
                <div className={classes.dFlex}>
                  <input
                    className={classes.formField + " " + classes.w50}
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className={classes.formItem}>
                <label className={classes.formLabel}>Email</label>
                <input
                  className={classes.formField}
                  placeholder="johndoe@gmail.com"
                />
              </div>
              <div className={classes.formItem}>
                <label className={classes.formLabel}>Country</label>
                <input className={classes.formField} placeholder="Select" />
              </div>
              <div className={classes.formItem}>
                <label className={classes.formLabel}>Street Address</label>
                <input
                  className={classes.formField + " " + classes.w50}
                  placeholder="123 Address Street"
                />
                <input
                  className={classes.formField + " " + classes.w50}
                  placeholder="Apt / Ste"
                />
              </div>
              <div className={classes.formItem}>
                <label className={classes.formLabel}>City</label>
                <input className={classes.formField} placeholder="City" />
              </div>
              <div className={classes.formItem}>
                <label className={classes.formLabel}>State</label>
                <input className={classes.formField} placeholder="State" />
              </div>
              <div className={classes.formItem}>
                <label className={classes.formLabel}>Zip Code</label>
                <input className={classes.formField} placeholder="Zip Code" />
              </div>
            </div>
            <div>
              <div>
                <h3 className={classes.title + " " + classes.mt30}>
                  Payment Information
                </h3>
              </div>
              <div className={classes.formItem}>
                <label className={classes.formLabel}>Name on Card</label>
                <input className={classes.formField} placeholder="John Doe" />
              </div>
              <div className={classes.formItem}>
                <label className={classes.formLabel}>Card Number</label>
                <input
                  className={classes.formField}
                  placeholder="0000  0000  0000  0000"
                />
              </div>
              <div className={classes.formItem}>
                <label className={classes.formLabel}>Card Details</label>
                <div className={classes.dFlex}>
                  <input
                    className={classes.formField + " " + classes.w30}
                    placeholder="MM/YY"
                  />
                  <input
                    className={classes.formField + " " + classes.w30}
                    placeholder="CVV"
                  />
                  <input
                    className={classes.formField + " " + classes.w30}
                    placeholder="Postal Code"
                  />
                </div>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} md={5}>
            <div>
              <h3 className={classes.title}>Order Details</h3>
            </div>
            <div>
              <div className={classes.cardItem}>
                <div>
                  <h3 className={classes.name}>1x Testing card item</h3>
                  <h3 className={classes.info}>Short Test note</h3>
                </div>
                <div className={classes.price}>$ 50</div>
              </div>
              <div className={classes.cardItem}>
                <div>
                  <h3 className={classes.name}>1x Testing card item</h3>
                  <h3 className={classes.info}>Short Test note</h3>
                </div>
                <div className={classes.price}>$ 50</div>
              </div>
            </div>
            <div className={classes.total + " " + classes.price}>
              <span>Total</span>
              <span>$50</span>
            </div>
            <Button className={classes.greenBtn}>Place Order </Button>
          </GridItem>
        </GridContainer>
        {/* <Modal open={open} setOpen={setOpen} /> */}
      </div>
    </div>
  );
};
