import React from 'react';
import { 
  Space,
  Menu, 
  Divider,
  Avatar, 
  Dropdown, 
  Button, 
  Typography, 
  Modal,
  Form, 
  Input, 
  Link,
  Checkbox
} from 'antd';
import { 
  LoginOutlined,
  DownOutlined, 
  ProfileOutlined, 
  SettingOutlined, 
  LogoutOutlined, 
  BellOutlined 
} from '@ant-design/icons';
import Img from 'react-image';

const { Text } = Typography;
const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 0 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const LogIn = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
    {...layout}
    name="basic"
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    >
      <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

    <Form.Item
    label="Password"
    name="password"
    rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
      <Checkbox>
        Remember me 
      </Checkbox>
    </Form.Item>

    <Form.Item {...tailLayout}  >
      <Button type="primary" htmlType="submit">
         Submit
      </Button> 
    </Form.Item>
  </Form>
 )
};

class TopBarP extends React.Component {
state = { visible: false };
showModal = () => {
  this.setState({
    visible: true,
  });
};

handleCancel = e => {
  console.log(e);
  this.setState({
    visible: false,
  });
};

render() {
    return (
      <Menu 
       mode="horizontal">
        <Menu.Item/>
        <a href="/Login">
        < Img />
        < SettingOutlined />
           EPCOM
        </a>
        <Menu.Item/>
        
        
          <Button 
          link ghost 
          style={{ position: 'absolute', right: 10,top: 7  }} 
          onClick={this.showModal}
          >
            <Text strong underline >
              <Space>
              <LoginOutlined />
                Log In 
              </Space>
            </Text>
          </Button>
          <Modal
          visible={this.state.visible}
          onCancel={this.handleCancel}
          title={<a><LoginOutlined /> Login </a>}
          footer=""
          >
          <LogIn/>
          </Modal>
      </Menu>
    );
  }
}


export default TopBarP;