import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import { closeAlert } from "../../../actions/alertActions";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./style";
import { SnackbarContent } from "@material-ui/core";

const variantIcon = {
  success: CheckCircleIcon,
  error: ErrorIcon,
};

const Alert = ({
  alert: { open, message, alertType },
  closeAlert,
  classes,
}) => {
  const Icon = variantIcon[alertType];
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      onClose={closeAlert}
      autoHideDuration={3000}
    >
      <SnackbarContent
        className={
          (classes.alert,
          alertType === "success" ? classes.success : classes.error)
        }
        message={
          <span id="client-snackbar" className={classes.message}>
            <Icon className={(classes.icon, classes.iconVariant)} />
            {message}
          </span>
        }
      />
    </Snackbar>
  );
};

const mapStateToProps = (state) => ({
  alert: state.alertReducer,
});

export default withStyles(styles)(
  connect(mapStateToProps, { closeAlert })(Alert)
);
