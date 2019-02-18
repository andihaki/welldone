import React from "react";
import { Route } from "react-router-dom";

import ArticleList from "./containers/ArticleListView";
import ArticleDetail from "./containers/ArticleDetailView";

const BaseRouter = () => (
  <div>
    <Route exact path="/:articleId" component={ArticleDetail} />
    <Route exact path="/" component={ArticleList} />
  </div>
);

export default BaseRouter;
