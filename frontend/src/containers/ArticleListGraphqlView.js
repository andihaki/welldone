import React, { Component } from "react";
import ArticleDetailGraphqlView from "./ArticleDetailGraphqlView";

class ArticleListGraphqlView extends Component {
  render() {
    const articles = [
      { id: 1, title: "aa", content: "yup" },
      { id: 4, title: "aa", content: "test post to heroku" }
    ];

    return (
      <div>
        {articles.map(article => (
          <ArticleDetailGraphqlView key={article.id} article={article} />
        ))}
      </div>
    );
  }
}

export default ArticleListGraphqlView;
