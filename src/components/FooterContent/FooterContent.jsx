import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

const styles = {
  footerContent: {
    width: "100vw",
    height: "200px",
    bottom: 0,
    background: "grey",
  },
};

const FooterContent = (props) => {
  const { classes } = props;
  return (
    <div className={classes.footerContent}>
      FooterContent
    </div>
  );
};

FooterContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FooterContent);
