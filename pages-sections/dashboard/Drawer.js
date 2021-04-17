import React, { useEffect, useState } from "react";
import img from "../../assets/img/icons/user.png";
import address from "../../assets/img/icons/address.svg";
import email from "../../assets/img/icons/email.svg";
import date from "../../assets/img/icons/date.svg";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import styles from "../../assets/jss/nextjs-material-kit-pro/pages/dashboardSections/drawerStyle";
import { makeStyles } from "@material-ui/core";
import { Category, Check, Star } from "./Icons";
import Button from "../../components/CustomButtons/Button";
import styled from "styled-components";
import {
  primaryColor,
  whiteColor,
} from "../../assets/jss/nextjs-material-kit-pro";
const useStyles = makeStyles(styles);

const Wrapper = styled.div(({ size, color, fill }) => ({
  font: "normal normal normal 14px/17px Roboto",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  cursor: "pointer",
}));
const Box = styled.div(({ size, color, fill }) => ({
  border: `1px solid ${color || primaryColor[0]}`,
  background: fill ? color || whiteColor : whiteColor,
  height: size ? size + "px" : "15px",
  width: size ? size + "px" : "15px",
  textAlign: "center",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const Checkbox = (props) => {
  const { color, size, label, fill, checked, onChange, className } = props;
  const classes = useStyles();
  const [state, setState] = useState(false);
  useEffect(() => {
    setState(checked);
  }, [checked]);
  const handleClick = (e) => {
    if (onChange) {
      onChange(state);
    } else {
      setState(!state);
    }
  };
  return (
    <Wrapper className={className} onClick={handleClick}>
      <Box color={color} size={size} fill={fill || whiteColor}>
        {state && <Check className={state ? classes.visible : ""} />}
      </Box>
      {label && <span style={{ marginLeft: "8px" }}>{label}</span>}
    </Wrapper>
  );
};

export default (props) => {
  const {
    onChange,
    label,
    filters,
    open,
    handleFilter,
    type,
    checkBoxClass,
    checkBoxColor,
    checkBoxFill,
  } = props;
  const classes = useStyles();
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(open);
  }, [open]);

  const handleClick = (e) => {
    if (onChange) {
      onChange(state);
    } else {
      setState(!state);
    }
  };

  return (
    <div className={classes.drawerWrapper}>
      <Button
        onClick={handleClick}
        className={classes.button + " " + (state ? classes.active : "")}
      >
        <div className={classes.iconLeft}>
          {type === "checkbox" ? (
            <Checkbox
              checked={open}
              onChange={handleClick}
              className={checkBoxClass}
            />
          ) : (
            <Category color={state ? whiteColor : primaryColor[0]} />
          )}
        </div>
        <span className={classes.btnLabel}>{label}</span>
      </Button>
      <div className={classes.drawer + " " + (state ? classes.drawerOpen : "")}>
        {filters &&
          filters.map((item) => {
            return (
              <Checkbox
                onChange={handleFilter}
                className={classes.checkbox}
                label={item}
              />
            );
          })}
      </div>
    </div>
  );
};
