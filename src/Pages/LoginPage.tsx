import React from 'react';
import userIcon from '../Images/user-regular.svg'
import LoginForm from '../Components/LoginForm';
import { Card,  Row , Col} from 'antd';
const LoginPage : React.FC = () => {
  

    return (
       
            <Row className='h-screen' align="middle" >
           
               <Col xs={24} md={12} >
               <h1 className='text-7xl text-[#3bbdb8]'>HELLO!</h1>
                <h1 className='text-7xl text-[#3bbdb8] mt-3'>WELCOME TO OUR WEBSITE.</h1>
               </Col>
               
               
               <Col xs={24} md={12} >
                 <Card className='w-[300px] bg-transparent border-0 shadow-2xl shadow-left-right' >
                  <img src={userIcon} className='w-1/3 mb-7  mx-auto '/>
                 <LoginForm />
              </Card>
              </Col>
            </Row>
      
    );
};

export default LoginPage;