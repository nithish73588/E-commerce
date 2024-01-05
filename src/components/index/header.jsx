import React from "react";
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  function Car(props) {
    return (
      <li>
        <a href={`#${props.brand}`}>{props.brand}</a>
      </li>
    );
  }

  const cars = [
    { id: 1, brand: "Home" },
    { id: 2, brand: "Contact" },
    { id: 3, brand: "About" },
    { id: 4, brand: "Sign Up" },
  ];

  return (
    <div>
      <div className="bg-black">
        <div className="max-w-[1240px] mx-auto py-[12px] ">
          {/* Offer show Header */}

          <div className="max-w-[880px] ml-auto">
            <div className="text-white flex justify-between">
              <div className="flex">
                <p>
                  Summer Sale For All Swim Suits And Free Express Delivery - OFF
                  50%!
                </p>
                <a href="/" className="pl-2">
                  ShopNow
                </a>
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
      <div className="text-black flex justify-between max-w-[1240px] mt-[40px] mb-[16px] mx-auto">
        <div className="">
          {" "}
          {/* Topic Header */}
          <h1 className="text-2xl font-bold">Exclusive</h1>
        </div>
        <div>
          {" "}
          {/* Navigation */}
          <ul className="flex gap-12">
            {cars.map((car) => (
              <Car key={car.id} brand={car.brand} />
            ))}
          </ul>
        </div>
        <div>
          {/* Search , Cart , Fav */}
          <div className="flex items-center gap-x-6 text-black">
            <input type="Search" placeholder="what are you looking for?" />
            <GoHeart />
            <IoCartOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
