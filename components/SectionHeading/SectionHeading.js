import React from "react";
import styles from "../../assets/jss/nextjs-material-kit-pro/components/sectionHeading";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(styles);
export default (props) => {
  const classes = useStyles();
  return (
    <h2
      className={
        props.className +
        " " +
        classes.main +
        " " +
        (props.type === "section" ? classes.sectionHeading : "")
      }
    >
      {props.text || "Heading"}
    </h2>
  );
};
