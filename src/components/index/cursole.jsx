import React from 'react';
import Game from '../assets/gameboard.png'
import Keyboard from '../assets/keyboard.png'
import Dragon from '../assets/dragon.png'
import Chair from '../assets/chair.png'


const Cursole = () => {

  

  return (
    <div className='max-w-[1240px] mx-auto py-10'>
      <div className='flex'>
        <span className='bg-red-500 px-2 py-2'></span>
        <h3 className='py-3 ml-8 font-bold text-2xl text-red-500 '>Today's</h3>
      </div>
      <div>
        
        <h3 className='font-bold m-5 text-2xl'>Flash sales</h3>
        
      </div>
      <div >
        <div className='flex flex-row gap-10'>
          <div className='w-50 bg-gray-500 py-10 px-5'>
            <img src={Game} alt='key' />
            <h6>HAVIT HV-G92 Gamepad</h6>
          </div>
          <div className='w-50 bg-gray-500 py-10 px-5'>
            <img src={Keyboard} alt='board' />
            <h6>AK-900 Wired Keyboard</h6>
          </div>
          <div className='w-50 bg-gray-500 py-10 px-5'>
            <img src={Dragon} alt='dragon' />
            <h6>IPS LCD Gaming Monitor</h6>
          </div>
          <div className='w-50 bg-gray-500 py-10 px-5'>
            <img src={Chair} alt='Chair' />
            <h6>S-Series Comfort Chair</h6>
          </div>

          <div className='w-50 bg-gray-500 py-10 px-5'>
            <img src={Chair} alt='Chair' />
            <h6>S-Series Comfort Chair</h6>
          </div>

        </div>
      </div>
        <div className=' text-white bg-red-500 text-xl text-center w-48 mx-auto m-6 rounded-md hover:text-black'>
          <input type='button' value={"view all products"} />
        </div>
    </div>
  );
};

export default Cursole;