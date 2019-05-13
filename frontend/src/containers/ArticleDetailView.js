import React from "react";
import axios from "axios";
import { Card, Button } from "antd";

import CustomForm from "../components/Form";

class ArticleDetail extends React.Component {
  state = {
    article: {}
  };

  componentDidMount() {
    const articleId = this.props.match.params.articleId;
    axios
      .get(`https://kodebaik.herokuapp.com/api/${articleId}/`)
      .then(res => this.setState({ article: res.data }))
      .catch(error => alert(error));
  }
  handleDelete = articleId => {
    axios
      .delete(`https://kodebaik.herokuapp.com/api/${articleId}/`)
      .then(res => console.log(res))
      .catch(err => console.error(err));
    this.props.history.push("/");
  };

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
          <Button
            type="danger"
            htmlType="submit"
            onClick={() => this.handleDelete(this.props.match.params.articleId)}
          >
            Delete
          </Button>
        </React.Fragment>
      );
    }
    return <div>Loading..</div>;
  }
}

export default ArticleDetail;
