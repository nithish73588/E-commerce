import React, { useState } from 'react';
import Image from '../assets/bg1.jpg';

const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
    
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };

  return (
   <div style={{background:`url(${Image})`}}>
   <div className='grid place-items-center h-screen bg-white-500'>

        <form className="flex flex-col gap-5 bg-[#006DA1] py-8 px-10 p-1 rounded-md">
            <h1 className='pb-10 text-center text-white font-bold text-2xl'>Login Page</h1>
            <input type='text' placeholder='Enter Your Email' className='p-1 rounded-md' />
            <input type='text' placeholder='Enter your Password' className='p-1 rounded-md' />
            <a href='/' >Forget Password? </a>
            <input type='submit' value='LOGIN' className='bg-red-300 p-1 rounded-md'/>
        </form>
   </div>
   </div>
  );
};

export default Login;
