import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
// import Dialog, { DialogTitle } from "material-ui/Dialog";

const styles = {
  main: {
  },
};

const Main = (props) => {
  const { classes } = props;
  return (
    <div className={classes.main}>
      Main
    </div>
  );
};

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
