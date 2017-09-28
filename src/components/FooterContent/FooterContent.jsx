import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

const styles = {
  footerContent: {
    width: "100vw",
    height: 200,
    padding: "10px 20px",
    bottom: 0,
    color: "#263238",
    border: "2px solid #263238",
    background: "white",
  },
};

const FooterContent = (props) => {
  const { classes, content } = props;
  return (
    <div className={classes.footerContent}>
      {content}
    </div>
  );
};

FooterContent.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
};

export default withStyles(styles)(FooterContent);
