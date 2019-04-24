import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { authLogout } from "../store/actions/auth";

const { Header, Content, Footer } = Layout;

const CustomLayout = ({ children, isAuthenticated, onLogout }) => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <Link to="/">Articles</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/articles2">Articles Graphql</Link>
        </Menu.Item>
        {isAuthenticated ? (
          <Menu.Item key="99" style={{ float: "right" }} onClick={onLogout}>
            Logout
          </Menu.Item>
        ) : (
          <Menu.Item key="99" style={{ float: "right" }}>
            <Link to="/login">Login</Link>
          </Menu.Item>
        )}
      </Menu>
    </Header>
    <Content style={{ padding: "0 50px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
        {children}
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>©2019</Footer>
  </Layout>
);

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(authLogout())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(CustomLayout)
);
