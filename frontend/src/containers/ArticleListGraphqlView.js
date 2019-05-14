import React, { Component } from "react";

import { Query } from "react-apollo";
import gql from "graphql-tag";
import CustomForm from "../components/Form";
import Article from "../components/Article";

const ARTICLES_QUERY = gql`
  query {
    articles {
      id
      title
      content
    }
  }
`;
class ArticleListGraphqlView extends Component {
  render() {
    return (
      <Query query={ARTICLES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching Articles</div>;
          if (error) return <div>Error</div>;

          const articlesToRender = data.articles;
          return (
            <div>
              <Article data={articlesToRender} />
              <br />
              <h2>Create an article</h2>
              <CustomForm requestType="post" articleId={null} />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default ArticleListGraphqlView;
