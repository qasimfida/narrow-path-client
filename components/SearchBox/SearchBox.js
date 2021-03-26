import React, { useState } from "react";
import styles from "../../assets/jss/nextjs-material-kit-pro/components/searchBoxStyles";
import icon from "../../assets/img/icons/search.svg";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default (props) => {
  const [state, setState] = useState([
    { text: "", active: true },
    { text: "", active: false },
  ]);

  const search = [
    {
      name: "Explore a route",
      placeHolder: "Enter Starting Point and destination",
    },
    {
      name: "Explore a destination",
      placeHolder: "Enter Destination Location",
    },
  ];

  /* handle active state and set input value */
  const handleActive = (index, e) => {
    let val = e && e.target.value;
    setState((prev) => {
      let arr = prev.map((e, i) => {
        if (i === index) {
          e.active = true;
          if (val) {
            e.text = val;
          }
        } else {
          e.active = false;
        }
        return e;
      });
      return arr;
    });
  };

  /* handleSeacrh */
  const handleSearch = () => {
    console.log(state);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {search.map((item, index) => {
        return (
          <div
            key={item.name}
            onClick={() => {
              handleActive(index);
            }}
            className={
              (state[index].active ? classes.active : "") +
              " " +
              classes.searchItem
            }
          >
            <h3 className={classes.searchItemTitle}>{item.name}</h3>
            <input
              className={classes.searchItemInput}
              placeholder={item.placeHolder}
              onChange={(e) => handleActive(index, e)}
            ></input>
          </div>
        );
      })}
      <div className={classes.searchBtn} onClick={handleSearch}>
        <img src={icon} alt="search icon" />
      </div>
    </div>
  );
};
