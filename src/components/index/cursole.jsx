import React from "react";
import Game from "../assets/gameboard.png";
import Keyboard from "../assets/keyboard.png";
import Dragon from "../assets/dragon.png";
import Chair from "../assets/chair.png";
import { IoStar } from "react-icons/io5";

const Cursole = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-10 ">
      <div className="flex">
        <span className="bg-red-500 px-2 py-2"></span>
        <h3 className="py-3 ml-8 font-bold text-2xl text-red-500 ">Today's</h3>
      </div>
      <div>
        <h3 className="font-bold m-5 text-2xl">Flash sales</h3>
      </div>
      <div>

        {/* Cursole div */}
        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-y-[16px] ">
            <div className="w-50 bg-gray-500 py-10 px-5 w-[270px] h-[250px]">
              <img
                src={Game}
                alt="key"
                className="h-[170px] w-[179px] mx-auto"
              />
            </div>
            <div className="text-left flex flex-col gap-y-2">
              <p>HAVIT HV-G92 Gamepad</p>
              <p>
                $120 <s className="ml-2">$160</s>
              </p>
              <div className="flex gap-3 ">
                <IoStar size={20} className="text-yellow-400 " />
                <IoStar size={20} className="text-yellow-400" />
                <IoStar size={20} className="text-yellow-400" />
                <IoStar size={20} className="text-yellow-400" />
                <IoStar size={20} className="text-yellow-400" />
                <span className="text-gray-200">
                  <h6>(88)</h6>
                </span>
              </div>
            </div>
          </div>
          
          {/* end Cursole end */}

          <div className="w-50 bg-gray-500 py-10 px-5">
            <img src={Keyboard} alt="board" className="w-170 h-179" />
            <div>
              <h6 className="m-3">AK-900 Wired Keyboard</h6>
              <h6>
                $100 <s className="ml-2">$120</s>
              </h6>
            </div>
            <div className="flex gap-3">
              <IoStar size={20} className="text-yellow-400 " />
              <IoStar size={20} className="text-yellow-400" />
              <IoStar size={20} className="text-yellow-400" />
              <IoStar size={20} className="text-yellow-400" />
              <IoStar size={20} className="text-yellow-400" />
              <span className="text-gray-200">
                <h6>(90)</h6>
              </span>
            </div>
          </div>
          <div className="w-50 bg-gray-500 py-10 px-5">
            <img src={Dragon} alt="dragon" className="w-170 h-179" />
            <h6>IPS LCD Gaming Monitor</h6>
            <h6>
              $89 <s className="ml-2">$120</s>
            </h6>

            <div className="flex gap-3">
              <IoStar size={20} className="text-yellow-400 " />
              <IoStar size={20} className="text-yellow-400" />
              <IoStar size={20} className="text-yellow-400" />
              <IoStar size={20} className="text-yellow-400" />
              <IoStar size={20} className="text-yellow-400" />
              <span className="text-gray-200">
                <h6>(50)</h6>
              </span>
            </div>
          </div>
          <div className="w-50 bg-gray-500 py-10 px-5">
            <img src={Chair} alt="Chair" className="w-170 h-179 mx-auto" />
            <h6>S-Series Comfort Chair</h6>
            <h6>
              $30 <s className="ml-2">$50</s>
            </h6>
            <div className="flex gap-3">
              <IoStar size={20} className="text-yellow-400 " />
              <IoStar size={20} className="text-yellow-400" />
              <IoStar size={20} className="text-yellow-400" />
              <IoStar size={20} className="text-yellow-400" />
              <IoStar size={20} className="text-yellow-400" />
              <span className="text-gray-200">
                <h6>(78)</h6>
              </span>
            </div>
          </div>

          <div className="w-50 bg-gray-500 py-10 px-5">
            <img src={Chair} alt="Chair" className="w-170 h-179 mx-auto" />
            <h6>S-Series Comfort Chair</h6>
            <h6>
              $22 <s className="ml-2">$30</s>
            </h6>
            <div className="flex gap-3">
              <IoStar size={20} className="text-yellow-400 " />
              <IoStar size={20} className="text-yellow-400" />
              <IoStar size={20} className="text-yellow-400" />
              <IoStar size={20} className="text-yellow-400" />
              <IoStar size={20} className="text-yellow-400" />
              <span className="text-gray-200">
                <h6>(99)</h6>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-white bg-red-500 text-xl text-center w-48 mx-auto m-6 rounded-md hover:text-black">
        <input type="button" value={"view all products"} />
      </div>
    </div>
  );
};

export default Cursole;
