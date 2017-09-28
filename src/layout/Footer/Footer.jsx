import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Icon from "material-ui/Icon";
import IconButton from "material-ui/IconButton";
import KeyboardArrowUp from "material-ui-icons/KeyboardArrowUp";

import FooterContent from "../../components/FooterContent";

const styles = theme => ({
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
  },
  footerContainer: {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  button: {
    margin: theme.spacing.unit,
  },
  arrow: {
    transition: "all .3s ease",
  },
});

class Footer extends React.Component {
  state = {
    footerOpen: false
  }

  handleClick = () => {
    const { footerOpen } = this.state;
    this.setState({
      footerOpen: !footerOpen,
    });
  }


  render() {
    const ArrowStyle = {
      open: {
        transform: "rotate(180deg)",
      },
      close: {
        transform: "rotate(0deg)",
      }
    }
    const { footerOpen } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.footer}>
        <div className={classes.footerContainer}>
          <p>About Me</p>
          <IconButton onClick={this.handleClick} className={classes.button} aria-label="Delete">
            <KeyboardArrowUp color="white" className={classes.arrow} style={footerOpen ? ArrowStyle.open : ArrowStyle.close}/>
          </IconButton>
          {footerOpen ? <FooterContent /> : ""}
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Footer);
