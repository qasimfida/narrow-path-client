/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import Button from "components/CustomButtons/Button.js";

import javascriptStyles from "assets/jss/nextjs-material-kit-pro/pages/settingSections/javascriptStyles.js";

const useStyles = makeStyles(javascriptStyles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function SectionJavascript({ open, setOpen }) {
  const classes = useStyles();
  return (
    <div className={classes.section + " cd-section"} id="javascriptComponents">
      <div className={classes.container}>
        <Dialog
          classes={{
            root: classes.modalRoot,
            paper: classes.modal,
          }}
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => setOpen(false)}
          aria-labelledby="account-delete-dailog"
          aria-describedby="account-delete-dailog"
        >
          <DialogTitle
            id="account-delete-dailog"
            disableTypography
            className={classes.modelTitle}
          >
            <h4 className={classes.title}>Delete Account</h4>
            <hr className={classes.divider} />
          </DialogTitle>
          <DialogContent
            id="classic-modal-slide-description"
            className={classes.modalBody}
          >
            <p className={classes.label}>
              Are you sure you want to delete your account otherwise you will
              lose your memories
            </p>
          </DialogContent>
          <DialogActions className={classes.modalFooter}>
            <Button color="danger" className={classes.btnDanger}>
              DELETE ACCOUNT
            </Button>
            <Button
              color="primary"
              onClick={() => setOpen(false)}
              className={classes.btnPrimary}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
