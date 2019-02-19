import React from "react";
import axios from "axios";

import { Card } from "antd";

import CustomForm from "../components/Form";

class ArticleDetail extends React.Component {
  state = {
    article: {}
  };

  componentDidMount() {
    const articleId = this.props.match.params.articleId;
    axios
      .get(`http://127.0.0.1:8000/api/${articleId}/`)
      .then(res => this.setState({ article: res.data }))
      .catch(error => alert(error));
  }
  render() {
    const article = this.state.article;

    if (Object.keys(article).length) {
      const { title, content } = article;
      return (
        <React.Fragment>
          <Card title={title}>
            <p>{content}</p>
          </Card>
          <br />
          <h2>Update an article</h2>
          <CustomForm
            requestType="put"
            articleId={this.props.match.params.articleId}
          />
        </React.Fragment>
      );
    }
    return <div>Loading..</div>;
  }
}

export default ArticleDetail;
