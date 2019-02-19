import React from "react";
import axios from "axios";
import { Form, Input, Button } from "antd";

class CustomForm extends React.Component {
  handleFormSubmit = (event, requestType, articleId) => {
    // event.preventDefault();
    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;
    console.log(title, content, requestType);

    if (requestType === "post") {
      axios
        .post(`http://127.0.0.1:8000/api/`, {
          title,
          content
        })
        .then(res => console.log(res))
        .catch(err => console.error(err));
    }

    if (requestType === "put") {
      axios
        .put(`http://127.0.0.1:8000/api/${articleId}/`, {
          title,
          content
        })
        .then(res => console.log(res))
        .catch(err => console.error(err));
    }
  };
  render() {
    const { requestType, articleId } = this.props;
    return (
      <div>
        <Form
          onSubmit={event =>
            this.handleFormSubmit(event, requestType, articleId)
          }
        >
          <Form.Item label="Title">
            <Input name="title" placeholder="article title" />
          </Form.Item>
          <Form.Item label="Content">
            <Input name="content" placeholder="type some content" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default CustomForm;
