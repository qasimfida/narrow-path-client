import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import tabsStyle from "assets/jss/nextjs-material-kit-pro/pages/dashboardSections/tabsStyle.js";
import Button from "../../components/CustomButtons/Button";
import { Bars, Category, Marker, Star } from "./Icons";
import Profile from "./Profile";
import Review from "./Review";
import Categories from "./Categories";
import List from "./List";
import Trips from "./Trips";

const useStyles = makeStyles(tabsStyle);

export default function DashTabs() {
	const classes = useStyles();
	const [value, setValue] = React.useState("profile");
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
		switch (value) {
			case "profile": {
				return <Profile />;
			}
			case "reviews": {
				return <Review />;
			}
			case "list": {
				return <List />;
			}
			case "categories": {
				return <Categories />;
			}
			case "trips": {
				return <Trips />;
			}
			default:
				return <Profile />;
		}
	};

	const tabs = [
		{
			key: "profile",
			Icon: Category,
			label: "My Profile",
		},
		{
			key: "categories",
			Icon: Category,
			label: "Categories",
			dropdownTile: "All Categories ",
			dropdown: [
				{
					label: "My Categories",
				},
			],
		},
		{
			key: "list",
			Icon: Bars,
			label: "Bucket List",
		},
		{
			key: "trips",
			Icon: Marker,
			label: "My Trips",
			dropdownTile: "Create Trip ",
			dropdown: [
				{
					label: "Archive Trip",
				},
			],
		},
		{
			key: "reviews",
			Icon: Star,
			label: "My Reviews",
		},
	];
	return (
		<div className={classes.section}>
			<div className={classes.container}>
				<div id="nav-tabs">
					<GridContainer fluid>
						<GridItem xs={12} sm={12} md={12}>
							<div className={classes.tabs}>
								<div className={classes.tabsWrapper}>
									{tabs.map((tab) => (
										<Button
											key={tab.key}
											className={classes.tabButton + " " + (tab.key === value ? classes.active : "")}
											color={tab.key === value ? "primary" : ""}
											onClick={handleChange(tab.key)}
										>
											<tab.Icon className={classes.tabIcon} color={value === tab.key && "#fff"} />
											{tab.label}
											{tab.dropdown && (
												<div className={"dropdown" + " " + classes.dropdown}>
													<div className="card">
														{tab.dropdownTile && (
															<div className={classes.dropDownHeader}>
																<Button className={classes.dropdownBtn}>{tab.dropdownTile}</Button>
															</div>
														)}
														{tab.dropdown.map((item) => (
															<Button
																className={classes.dropdownBtn + " " + "active"}
																key={item.label}
																onClick={setDropdown(item.key)}
															>
																{item.label}
															</Button>
														))}
													</div>
												</div>
											)}
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
