import React, { Fragment } from "react";
import { Grid, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./styles";

const ValidationInfo = (props) => {
  const { classes } = props;

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={6} className={classes.card}>
          <Paper className={classes.paper}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item className={classes.characters}>
                8+
              </Grid>
              <Grid item>Characters</Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6} className={classes.card}>
          <Paper className={classes.paper}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item className={classes.lowercase}>
                Aa
              </Grid>
              <Grid item>Lowercase</Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6} className={classes.card}>
          <Paper className={classes.paper}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item className={classes.uppercase}>
                AA
              </Grid>
              <Grid item>Uppercase</Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6} className={classes.card}>
          <Paper className={classes.paper}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item className={classes.numbers}>
                123
              </Grid>
              <Grid item>Numbers</Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default withStyles(styles)(ValidationInfo);
