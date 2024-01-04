import React from "react";

const Header = () => {
  return (
    <div className="bg-black">
      <div className="max-w-[1240px] mx-auto py-[12px] ">
        <div className="">
          <div className="text-white flex justify-between">
            <div className="flex">
              <p>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </p>
              <a href="/" className="pl-5">ShopNow</a>
            </div>
            <div className="">
              <select className="bg-black tetx-white">
                <option selected>English</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
