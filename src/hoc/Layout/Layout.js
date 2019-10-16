import React, { Component } from "react";
import Aux from "../Aux/Aux";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: !this.state.showSideDrawer });
  };
  toggleHandler = () => {
    // this.setState({showSideDrawer: !this.state.showSideDrawer})
    // This code up here may lead us to unexpected behavior
    // due to the asynchronous nature of how state works.
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar toggle={this.toggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
