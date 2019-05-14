import React from 'react';
import {Button, Form, Input} from 'antd';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], {force: true});
    }
    callback();
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 8},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="名称">
          {getFieldDecorator('email', {
            rules: [
              {type: 'email', message: 'The input is not valid E-mail!'},
              {required: true, message: 'Please input your E-mail!'}
              ],
          })(<Input/>)}
        </Form.Item>
        <Form.Item label="用户名">
          {getFieldDecorator('password', {
            rules: [{required: true, message: 'Please input your password!',}, {validator: this.validateToNextPassword,}],
          })(<Input type="password"/>)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Register</Button>
        </Form.Item>
      </Form>
    )
  }
}
const WrappedNormalLoginForm = Form.create()(RegistrationForm);
export default WrappedNormalLoginForm;