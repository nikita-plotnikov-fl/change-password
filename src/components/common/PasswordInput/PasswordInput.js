import React, { Fragment } from "react";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./styles";

const PasswordInput = (props) => {
  const { label, classes, name, value, onChange, error, helperText } = props;

  return (
    <Fragment>
      <div className={classes.input_label}>{label}</div>
      <TextField
        InputProps={{
          className: classes.input,
        }}
        variant="outlined"
        fullWidth
        type="password"
        autoComplete="new-password"
        value={value}
        name={name}
        margin="dense"
        error={error}
        onChange={onChange}
        helperText={helperText}
      />
    </Fragment>
  );
};

export default withStyles(styles)(PasswordInput);
