import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useAuth } from '../ContextApis/AuthenContext';
import { useNavigate } from 'react-router-dom';

type FieldType = {
  username?: string;
  password?: string;
  remember?: boolean;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


const LoginForm: React.FC = () => {

  const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        navigate('/products'); // Use navigate for redirection
    }; 

  return (
    <Form className="bg-transparent"
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input size="large" placeholder="Username" prefix={<UserOutlined />} />
      </Form.Item>

      <Form.Item<FieldType>
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password size="large" placeholder="Password" prefix={<LockOutlined />} />
      </Form.Item>

      <div className='flex justify-between'>
      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <a className="text-[#3bbdb8]" href="">Forgot password?</a>
      </Form.Item>

      </div>
      <Form.Item className="w-full">
        <Button className="w-full bg-[#3bbdb8]" type="primary" htmlType="submit" onClick={handleLogin}>
          Log In
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
