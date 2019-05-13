import React from "react";
import { Route } from "react-router-dom";

import ArticleList from "./containers/ArticleListView";
import ArticleDetail from "./containers/ArticleDetailView";
import WrappedNormalLoginForm from "./containers/Login";
import WrappedRegistrationForm from "./containers/Signup";

import ArticleListGraphql from "./containers/ArticleListGraphqlView";
import ArticleDetailGraphql from "./containers/ArticleDetailGraphqlView";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={ArticleList} />
    <Route exact path="/article/:articleId" component={ArticleDetail} />
    <Route exact path="/articles2" component={ArticleListGraphql} />
    <Route
      exact
      path="/articles2/:articleId"
      component={ArticleDetailGraphql}
    />
    <Route exact path="/login" component={WrappedNormalLoginForm} />
    <Route exact path="/signup" component={WrappedRegistrationForm} />
  </div>
);

export default BaseRouter;
