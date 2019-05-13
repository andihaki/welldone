import React from "react";
import axios from "axios";

import Article from "../components/Article";
import CustomForm from "../components/Form";

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "http://ant.design",
    title: `ant design part ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
  });
}

class ArticleList extends React.Component {
  state = {
    articles: []
  };

  componentDidMount() {
    axios
      .get(`https://kodebaik.herokuapp.com/api/`)
      .then(res => this.setState({ articles: res.data }))
      .catch(error => alert(error));
  }
  render() {
    return (
      <React.Fragment>
        <Article data={this.state.articles} />
        <br />
        <h2>Create an article</h2>
        <CustomForm requestType="post" articleId={null} />
      </React.Fragment>
    );
  }
}

export default ArticleList;
