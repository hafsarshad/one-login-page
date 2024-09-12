// LoginForm.tsx
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

const LoginForm: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    console.log('Form Values:', values);
    const { username, password } = values;

    try {
      await login(username || '', password || '');
      navigate('/products');
    } catch (error: any) {
      console.error('Login failed:', error.message);
    }
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      className="bg-transparent"
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
        <Button className="w-full bg-[#3bbdb8]" type="primary" htmlType="submit">
          Log In
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;

