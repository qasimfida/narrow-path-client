import React, { useState } from "react";
import styles from "../../assets/jss/nextjs-material-kit-pro/components/searchBarStyle.js";
import icon from "../../assets/img/icons/search.svg";
import { makeStyles } from "@material-ui/core";
import styled from "styled-components";
import { SearchIcon } from "./Icon.js";
import { primaryColor } from "../../assets/jss/nextjs-material-kit-pro.js";

const useStyles = makeStyles(styles);

export default (props) => {
  const { placeHolder } = props;
  const [value, setValue] = useState("");
  const handleSubmit = () => {};
  const classes = useStyles();
  return (
    <form className={classes.wrapper} onSubmit={handleSubmit}>
      <input
        placeholder={placeHolder || "Search"}
        className={classes.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className={classes.searchIcon}>
        <SearchIcon color={primaryColor} size={18} />
      </div>
    </form>
  );
};
