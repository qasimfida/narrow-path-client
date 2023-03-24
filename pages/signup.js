/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/CustomHeader.js";
import HeaderLinks from "components/Header/CustomLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import signupPageStyle from "assets/jss/nextjs-material-kit-pro/pages/signupPageStyle.js";
import whiteLogo from "../assets/img/icons/logo white.png";
import primaryLogo from "../assets/img/icons/logo primary.png";
import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(signupPageStyle);

export default function SignUpPage({ ...rest }) {
	const [checked, setChecked] = React.useState([1]);
	const handleToggle = (value) => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];
		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}
		setChecked(newChecked);
	};
	React.useEffect(() => {
		window.scrollTo(0, 0);
		document.body.scrollTop = 0;
	});
	const classes = useStyles();
	return (
		<div>
			<Header
				brand={whiteLogo}
				links={<HeaderLinks dropdownHoverColor="info" />}
				fixed
				color="transparent"
				changeColorOnScroll={{
					height: 86,
					color: "white",
					brand: primaryLogo,
				}}
			/>
			<div
				className={classes.pageHeader}
				style={{
					backgroundImage: "url(" + image + ")",
					backgroundSize: "cover",
					backgroundPosition: "top center",
				}}
			>
				<div className={classes.container}>
					<GridContainer justify="center">
						<GridItem xs={12} sm={10} md={10}>
							<Card className={classes.cardSignup}>
								<h2 className={classes.cardTitle}>Register</h2>
								<CardBody>
									<GridContainer justify="space-around">
										<GridItem xs={12} sm={5} md={5}>
											<div className={classes.infoCard}>
												<h2 className={classes.infoTitle}>Setup your trip</h2>
												<p className={classes.infoDescription}>
													Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
													labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
													laboris nisi ut aliquip ex ea commod
												</p>
											</div>
											<div className={classes.infoCard}>
												<h2 className={classes.infoTitle}>Explore New Places</h2>
												<p className={classes.infoDescription}>
													Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
													labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
													laboris nisi ut aliquip ex ea commod
												</p>
											</div>
											<div className={classes.infoCard}>
												<h2 className={classes.infoTitle}>Meet new People</h2>
												<p className={classes.infoDescription}>
													Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
													labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
													laboris nisi ut aliquip ex ea commod
												</p>
											</div>
										</GridItem>
										<GridItem xs={12} sm={5} md={5}>
											<form className={classes.form}>
												<CustomInput
													formControlProps={{
														fullWidth: true,
														className: classes.customFormControlClasses,
													}}
													inputProps={{
														placeholder: "First Name",
														className: classes.formItem,
													}}
												/>
												<CustomInput
													formControlProps={{
														fullWidth: true,
														className: classes.customFormControlClasses,
													}}
													inputProps={{
														placeholder: "Last Name (Surname)",
														className: classes.formItem,
													}}
												/>
												<CustomInput
													formControlProps={{
														fullWidth: true,
														className: classes.customFormControlClasses,
													}}
													inputProps={{
														placeholder: "Email Address",
														className: classes.formItem,
													}}
												/>
												<CustomInput
													formControlProps={{
														fullWidth: true,
														className: classes.customFormControlClasses,
													}}
													inputProps={{
														placeholder: "Create password",
														className: classes.formItem,
													}}
												/>
												<FormControlLabel
													classes={{
														label: classes.label,
													}}
													control={
														<Checkbox
															tabIndex={-1}
															onClick={() => handleToggle(1)}
															checkedIcon={<Check className={classes.checkedIcon} />}
															icon={<Check className={classes.uncheckedIcon} />}
															classes={{
																checked: classes.checked,
																root: classes.checkRoot,
															}}
															checked={checked.indexOf(1) !== -1 ? true : false}
														/>
													}
													label={
														<span>
															I agree to the <a href="#pablo">terms and conditions</a>.
														</span>
													}
												/>
												<div>
													<Button round color="primary">
														Get started
													</Button>
												</div>
											</form>
										</GridItem>
									</GridContainer>
								</CardBody>
							</Card>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		</div>
	);
}
