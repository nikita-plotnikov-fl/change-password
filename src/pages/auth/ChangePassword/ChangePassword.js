import { Grid, Paper, Button } from "@material-ui/core";
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import LoadingButton from "@material-ui/lab/LoadingButton";
import ChevronRight from "@material-ui/icons/ChevronRight";
import { useFormik } from "formik";
import PasswordInput from "../../../components/common/PasswordInput";
import ValidationInfo from "../../../components/change-password/ValidationInfo";
import { changePasswordValdationSchema } from "../../../utils/validationSchemas";
import Alert from "../../../components/common/Alert";
import { styles } from "./styles";
import { changePassword } from "../../../actions/authActions";
import { connect } from "react-redux";

const ChangePassword = (props) => {
  const {
    classes,
    changePassword,
    auth: { loading },
  } = props;
  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
      masterPassword: "",
    },
    validationSchema: changePasswordValdationSchema,
    onSubmit: (values) => {
      changePassword(values);
    },
  });

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Paper className={classes.paper}>
        <h1 className={classes.paper_header}>Change Password</h1>

        <form onSubmit={formik.handleSubmit}>
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.paper_body}
          >
            <Grid item xs={12} md={5} className={classes.body_item}>
              <PasswordInput
                label="New Password"
                name="newPassword"
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                error={
                  formik.touched.newPassword &&
                  Boolean(formik.errors.newPassword)
                }
                helperText={
                  formik.touched.newPassword && formik.errors.newPassword
                }
              />
              <PasswordInput
                label="Confirm Password"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                helperText={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
              />
              <PasswordInput
                label="Master Password"
                name="masterPassword"
                value={formik.values.masterPassword}
                onChange={formik.handleChange}
                error={
                  formik.touched.masterPassword &&
                  Boolean(formik.errors.masterPassword)
                }
                helperText={
                  formik.touched.masterPassword && formik.errors.masterPassword
                }
              />
              <LoadingButton
                variant="contained"
                className={classes.button}
                pending={loading}
                type="submit"
                onClick={formik.handleSubmit}
              >
                <label className={classes.button_text}>Save</label>
                <ChevronRight className={classes.button_icon} />
              </LoadingButton>
            </Grid>
            <Grid item xs={12} md={5} className={classes.validation}>
              <ValidationInfo />
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Alert />
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps, { changePassword })(
  withStyles(styles)(ChangePassword)
);
