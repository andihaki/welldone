import React, { Component } from "react";

class ArticleListGraphqlView extends Component {
  render() {
    const { article } = this.props;
    return (
      <div>
        <div>
          {article.title} ({article.content})
        </div>
      </div>
    );
  }
}

export default ArticleListGraphqlView;
