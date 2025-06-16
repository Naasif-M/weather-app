import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className=" absolute bottom-[70px] lg:bottom-[60px] w-full px-8 lg:px-14">
      <div className="border-t-[2px] border-gray-400  "> </div>
      <h1 className="font-pacifico text-gray-400 ml-8 lg:ml-12 mt-4 text-2xl lg:text-3xl">
        Weather
      </h1>
      <div className="flex font-poppins space-x-4 ml-20 mt-4 mb-4 lg:mb-0 lg:mt-2">
        <p className="text-xs lg:text-sm lg:text-md text-gray-300">
          Developed by ,
          <span className="hover:text-[#FFA500] animate-pulse font-recursive">
            <a
              href="https://my-portfolio-naasif.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Naasif
            </a>
          </span>
        </p>
        <div className="w-[2px] mt-1 h-[15px] bg-gray-300 "></div>
        <p className=" text-xs lg:text-sm lg:text-md text-gray-300">
          Hosted on ,
          <span className="hover:text-[#FFA500] animate-pulse font-recursive">
            <a
              href="https://app.netlify.com/projects/my-portfolio-naasif/overview"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </span>
        </p>
      </div>
      <div className="ml-20 mt-2 text-gray-300 text-2xl flex gap-6">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/naasif-m/"
          rel="noreferrer"
        >
          <CiLinkedin className="hover:text-[#FFA500]" />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/_naasi.h?igsh=cmg1Y3h2bjVvMmcw"
          rel="noreferrer"
        >
          <FaInstagram className="hover:text-[#FFA500] " />
        </a>
        <a target="_blank" href="https://github.com/Naasif-M" rel="noreferrer">
          <FaGithub className="hover:text-[#FFA500] " />
        </a>
      </div>
      <footer>
        <div className="lg:flex absolute font-poppins  right-0  mr-[30px] lg:flex-row lg:items-center lg:space-x-4">
          <div className="lg:mb-0 mb-[-2rem]">
            <p className="lg:mt-0 mt-6 lg:text-[1rem] text-gray-400 text-xs lg:text-sm text-center">
              <span className="  mr-1"> ©</span>Copyright
              <span className="lg:ml-3 ml-2">{year}</span>
            </p>
          </div>
          <div className="lg:w-[2px] lg:h-4 lg:bg-gray-400"></div>
          <div>
            <p className="lg:mt-0 mt-8 text-gray-400 text-xs lg:text-md text-center">
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
