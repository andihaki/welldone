import React from "react";
import axios from "axios";

import { Card } from "antd";

class ArticleDetail extends React.Component {
  state = {
    article: {}
  };

  componentDidMount() {
    const articleId = this.props.match.params.articleId;
    axios
      .get(`http://127.0.0.1:8000/api/${articleId}`)
      .then(res => this.setState({ article: res.data }))
      .catch(error => alert(error));
  }
  render() {
    const article = this.state.article;

    if (Object.keys(article).length) {
      const { title, content } = article;
      return (
        <Card title={title}>
          <p>{content}</p>
        </Card>
      );
    }
    return <div>Loading..</div>;
  }
}

export default ArticleDetail;
