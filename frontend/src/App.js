import React, { Component } from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

import CustomLayout from "./containers/Layout";
import BaseRouter from "./routes";
import { isHasToken } from "./store/actions/auth";

class App extends Component {
  componentDidMount() {
    this.props.tryAutoSignin();
  }
  render() {
    return (
      <div>
        <Router>
          <CustomLayout {...this.props}>
            <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    isAuthenticated: state.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tryAutoSignin: () => dispatch(isHasToken())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
