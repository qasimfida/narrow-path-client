import React, { useState } from "react";
import img from "../../assets/img/icons/user.png";
import address from "../../assets/img/icons/address.svg";
import email from "../../assets/img/icons/email.svg";
import date from "../../assets/img/icons/date.svg";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import styles from "../../assets/jss/nextjs-material-kit-pro/pages/dashboardSections/profileStyle";
import { Input, makeStyles, TextareaAutosize } from "@material-ui/core";
import { Star } from "./Icons";
import Button from "../../components/CustomButtons/Button";

const useStyles = makeStyles(styles);
export default (props) => {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState({
    email: "johndoe@gmail.com",
    dob: "August 26, 2020",
    location: "Dallas, Texas",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia desernt mollit anim id est laborum.",
  });

  const handleUpdate = () => {
    if (edit) {
      console.log(user);
      setEdit(false);
    } else {
      setEdit(true);
    }
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  return (
    <div className={classes.profileCard}>
      <div>
        <div className={classes.userInfo}>
          <div className={classes.userImg}>
            <img src={img} alt="user image" />
          </div>
          <div className={classes.info}>
            <h2 className={classes.infoTitle}>John Doe</h2>
            <p className={classes.username}>@johndoe</p>
            <div className={classes.review}>
              <span>Reviews (50)</span>
              <div className={classes.rating}>
                <Star size="21" color="#FF9900" />
                <p className={classes.avgRating}>4.5 Average</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.userDetails}></div>
      </div>
      <hr className={classes.divider} />
      <div className={classes.detailsWrapper}>
        <GridContainer>
          <GridItem xs={12} md={4}>
            <div className={classes.iconCard}>
              <div className={classes.iconLabel}>
                <img src={address} />
                {(edit && (
                  <input
                    className={classes.input}
                    name="location"
                    value={user.location}
                    onChange={handleChange}
                  />
                )) ||
                  user.location}
              </div>
              <div className={classes.iconLabel}>
                <img src={date} />
                {(edit && (
                  <input
                    className={classes.input}
                    name="dob"
                    value={user.dob}
                    onChange={handleChange}
                  />
                )) ||
                  user.dob}
              </div>
              <div className={classes.iconLabel}>
                <img src={email} />
                {(edit && (
                  <input
                    className={classes.input}
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                )) ||
                  user.email}
              </div>
              <div className={classes.iconLabel}>
                <Button className={classes.editBtn} onClick={handleUpdate}>
                  {edit ? "Save Profile" : "Edit Profile"}
                </Button>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} md={8}>
            {!edit && <h2 className={classes.detailTitle}>About Me</h2>}
            <p className={classes.about}>
              {(edit && (
                <TextareaAutosize
                  rowsMax={5}
                  aria-label="maximum height"
                  placeholder="Maximum 4 rows"
                  defaultValue={user.info}
                  className={classes.textarea}
                />
              )) || <>{user.info}</>}
            </p>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};
