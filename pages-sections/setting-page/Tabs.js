import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import tabsStyle from "assets/jss/nextjs-material-kit-pro/pages/settingSections/tabsStyle.js";
import Button from "../../components/CustomButtons/Button";
import { Bars, Category, Marker, Star } from "./Icons";
import Account from "./Account";
import Billing from "./Billing";
import Password from "./Password";

const useStyles = makeStyles(tabsStyle);

export default function DashTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState("account");
  const [tab, setTab] = React.useState("");

  const handleChange = (newValue) => (event) => {
    console.log({ event, newValue });
    setValue(newValue);
  };
  const setDropdown = (newValue) => (event) => {
    event.stopPropagation();
    setTab(newValue);
  };
  const renderTabPanel = () => {
    console.log(value);
    switch (value) {
      case "account": {
        return <Account />;
      }
      case "password": {
        return <Password />;
      }
      case "billing": {
        return <Billing />;
      }
      default:
        return <Account />;
    }
  };

  const tabs = [
    {
      key: "account",
      label: "Account",
    },
    {
      key: "password",
      label: "Password",
    },
    {
      key: "billing",
      label: "Billing",
    },
  ];
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <GridContainer fluid>
            <GridItem xs={12} sm={12} md={12}>
              <h2 className={classes.title}>Setting</h2>

              <div className={classes.tabs}>
                <div className={classes.tabsWrapper}>
                  {tabs.map((tab) => (
                    <Button
                      className={
                        classes.tabButton +
                        " " +
                        (tab.key === value ? classes.active : "")
                      }
                      color={tab.key === value ? "primary" : ""}
                      onClick={handleChange(tab.key)}
                    >
                      {tab.label}
                    </Button>
                  ))}
                </div>
                <div className={classes.panelBody}>{renderTabPanel()}</div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
