import React from "react";
import { Route } from "react-router-dom";

import ArticleList from "./containers/ArticleListView";
import ArticleDetail from "./containers/ArticleDetailView";
// import WrappedNormalLoginForm from "./components/Login";

const BaseRouter = () => (
  <div>
    <Route exact path="login/" component={null} />
    <Route exact path="article/:articleId" component={ArticleDetail} />
    <Route exact path="/" component={ArticleList} />
  </div>
);

export default BaseRouter;
