// import React from "react";

// const Login = () => {
//     return (
//         <>
//             <div>

//             </div>
//         </>
//     )
// }

// export default Login;




import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
   <>
   <div className='grid place-items-center h-screen bg-zinc-500'>
        <form className="flex flex-col gap-5 bg-[#006DA1] py-8 px-10">
            <h1 className='pb-10 text-center font-bold text-2xl'>Login Page</h1>
            <input type='text' placeholder='Enter Your Email' className='' />
            <input type='text' placeholder='Enter your Password' />
            <input type='submit' value='LOGIN' className='bg-red-300'/>
        </form>
   </div>
   </>
  );
};

export default Login;
