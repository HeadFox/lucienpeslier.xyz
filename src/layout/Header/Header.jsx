import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
// import Dialog, { DialogTitle } from "material-ui/Dialog";

const styles = {
  header: {
    position: "fixed",
    top: "0",
    width: "100vw",
    height: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF1744",
    textAlign: "center",
  },
  github: {
    color: "black",
  },
};

const Header = (props) => {
  const { classes } = props;
  return (
    <div className={classes.header}>
      <h3>Warning : this website is in Work In Progress Mode</h3>
      <p>{"Follow progress on Github --> "}
        <a className={classes.github} href="https://github.com/HeadFox/lucienpeslier.xyz">
          lucienpeslier.xyz
        </a>
      </p>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
