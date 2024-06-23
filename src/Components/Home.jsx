import React from "react";

import pic from "/pic.jpg";

import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped, Typed } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span className="text-red-700 font-bold">Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              "My portfolio project built with tailwind framework and JS'library
              that is react.js showcases my skills and experience in web
              development. It features a clean, modern design with sections
              highlighting my background, projects, and contact information.
              Built using React's component-based architecture".
            </p>
            <br />

            {/*  social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:y-0 ">
              <div className="space-y-2 ">
                <h1 className="font-bold text-center">Availiable on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com" target="_blank">
                      {" "}
                      <IoLogoFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com" target="_blank">
                      {" "}
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.Youtube.com" target="_blank">
                      {" "}
                      <FaYoutube className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com" target="_blank">
                      {" "}
                      <FaInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-xl  md:text-3xl hover:scale-110  duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-xl  md:text-3xl hover:scale-110  duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-xl md:text-3xl hover:scale-110  duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-xl  md:text-3xl hover:scale-110  duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px]  md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
