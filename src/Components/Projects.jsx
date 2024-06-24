import React from "react";
import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png";
import Project4 from "../assets/Project4.png";

function Projects() {
  return (
    <>
      <hr />
      <div name="Projects" className=" bg-slate-200 m-20 max-w-full">
        <div className="grid justify-items-center pr-90  m-10">
          <h1 className="text-3xl text-black font-bold  mt-10">Projects</h1>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4 p-5">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:mx-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    Google-Maps API
                  </div>
                  <p className="mt-2 text-slate-500">
                    Google Maps API using tailwind CSS and react.js. Google-Map
                    is a web service that provides detailed information about
                    geographical regions and sites worldwide.
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img src={Project1} alt="Project1" width={150} height={150} />
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:mx-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="md:shrink-0 p-5">
                  <img src={Project2} alt="Project2" width={150} height={150} />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    Weather APP
                  </div>
                  <p className="mt-2 text-slate-500">
                    Creating a weather app using React involves building a
                    responsive user interface that fetches weather data from a
                    weather API (like OpenWeatherMap or Weatherstack) and
                    displays it in an intuitive way.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-2 gap-4 p-5">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:mx-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    Hospital Management System
                  </div>
                  <p className="mt-2 text-slate-500">
                    A Hospital Management System (HMS) is a software application
                    that helps manage various aspects of a hospital's
                    management.
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img src={Project3} alt="Project3" width={150} height={150} />
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:mx-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="md:shrink-0 p-5">
                  <img src={Project4} alt="Project4" width={150} height={150} />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    Shopify Store
                  </div>
                  <p className="mt-2 text-slate-500">
                    Creating a Shopify store project using React typically
                    involves building a frontend interface that interacts with
                    Shopify's backend APIs. This includes developing components
                    for product listings, cart functionality, checkout
                    processes, and user authentication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
