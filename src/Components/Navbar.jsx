import React, { useState } from "react";
import pic from "/pic.jpg";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import {Link} from "react-scroll"

function Navbar() {
  const [Menu, setMenu] = useState(false);
  const naveItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Projects",
    },
    {
      id: 4,
      text: "Skills",
    },
    {
      id: 5,
      text: "Contacts",
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container h-16 mx-auto px-4 md:px-20 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Tani<span className="text-green-500 text-2xl">a</span>
              <p className="text-sm">Web developer</p>
            </h1>
          </div>
          <div>
            {/* desktop navbar  */}

            <ul className="hidden md:flex space-x-8">
              {naveItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer font-semi-bold"
                  key={id}
                >
                  <Link to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active">
                  {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!Menu)} className="md:hidden">
              {Menu ? <RxCross1 size={24} /> 
              : <FiMenu size={24} />}
            </div>
          </div>
        </div>

        {/* mobile navbar  */}
        {Menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {naveItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                 <Link 
                 onClick={() => setMenu(!Menu)}
                 to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active">
                  {text}
                  </Link>
                </li>
          ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
