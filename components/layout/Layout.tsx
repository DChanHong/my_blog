import React, { useState } from "react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

interface Wrapper {
  children: React.ReactNode;
}

const Layout = ({ children }: Wrapper) => {
  const [navData, setNavData] = useState<string>("");
  const [sideNavBar, setSideNavBar] = useState<boolean>(false);

  return (
    <>
      <header
        className={`fixed border-b-2 h-[100px] top-0 w-full z-9 bg-white flex items-center`}
      >
        <h1 className={`font-bold text-[1.5em] mx-8`}>
          <Link href={"/"}>Hong Engineering</Link>
        </h1>
        <ul className="hidden sm:flex">
          <li className={`font-semibold text-[1.4em] mx-4`}>
            <Link href={"/blog"}>
              <span className={`underline_on_hover`}>Blog</span>
            </Link>
          </li>
          <li className={`font-semibold text-[1.4em] mx-4`}>
            <Link href={"/career"}>
              <span className={`underline_on_hover`}>Career</span>
            </Link>
          </li>
        </ul>
      </header>

      <div className={`left-0 fixed min-h-[100%] h-[100%] sm:hidden`}>
        <button
          type="button"
          onClick={() => setSideNavBar(!sideNavBar)}
          className="flex flex-col items-center px-6 py-2 mt-4 mx-1 hover:bg-[#EFEFEF] hover:rounded-xl"
        >
          <p className="w-[2rem] py-3">
            <GiHamburgerMenu className="w-full h-full" />
          </p>
        </button>
        <Link
          className="flex flex-col items-center px-6 py-2  mx-1 hover:bg-[#EFEFEF] hover:rounded-xl"
          href={"/"}
        >
          <p className="w-[2rem]">
            <BiSolidUser className="w-full h-full" />
          </p>
          <p className="text-[1rem] text-center">Me</p>
        </Link>
        <Link
          className="flex flex-col items-center px-6 py-2 mt-4 mx-1 hover:bg-[#EFEFEF] hover:rounded-xl"
          href={"/"}
        >
          <p className="w-[2rem]">
            <AiFillHome className="w-full h-full" />
          </p>
          <p className="text-[1rem] text-center">홈</p>
        </Link>
        <Link
          className="flex flex-col items-center px-6 py-2 mt-4 mx-1 hover:bg-[#EFEFEF] hover:rounded-xl"
          href={"/"}
        >
          <p className="w-[2rem]">
            <BsBook className="w-full h-full" />
          </p>
          <p className="text-[1rem] text-center">Blog</p>
        </Link>
      </div>

      <nav
        className={`block w-[14rem] fixed border-2 bg-white top-0 left-0 min-h-[100%] h-[100%] sm:hidden ${
          sideNavBar ? "nav_open" : "nav_closed"
        }`}
      >
        <p className="flex flex-row-reverse m-1">
          <button
            type="button"
            onClick={() => setSideNavBar(!sideNavBar)}
            className="w-[2em] hover:bg-[#EFEFEF] rounded-xl"
          >
            <IoClose className="w-full h-full" />
          </button>
        </p>
        <ul>
          <li>
            <Link
              className="flex items-center px-6 py-2  mx-1 hover:bg-[#EFEFEF] hover:rounded-xl"
              href={"/"}
            >
              <p className="w-[2rem] mr-4">
                <BiSolidUser className="w-full h-full" />
              </p>
              <p className="text-[1rem] text-center">Me</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center px-6 py-2 mt-4 mx-1 hover:bg-[#EFEFEF] hover:rounded-xl"
              href={"/"}
            >
              <p className="w-[2rem] mr-4">
                <AiFillHome className="w-full h-full" />
              </p>
              <p className="text-[1rem] text-center">홈</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center px-6 py-2 mt-4 mx-1 hover:bg-[#EFEFEF] hover:rounded-xl"
              href={"/"}
            >
              <p className="w-[2rem] mr-4">
                <BsBook className="w-full h-full" />
              </p>
              <p className="text-[1rem] text-center">Blog</p>
            </Link>
          </li>
        </ul>
      </nav>

      <div className={`h-full min-h-[calc(100vh-210px)]`}>{children}</div>

      <footer
        className={`flex items-center align-item justify-evenly bg-[#F9F9F9] h-[100px]`}
      >
        <ul>
          <li>~~~~~~</li>
        </ul>
        <ul>
          <li className="w-[40px]">
            <a
              href={"https://github.com/DChanHong"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-full h-full" />
            </a>
          </li>
        </ul>
      </footer>

      <style jsx>
        {`
          .underline_on_hover {
            position: relative;
            text-decoration: none;
            cursor: pointer;
            color: inherit;
          }
          .underline_on_hover::before {
            content: "";
            position: absolute;
            width: 0%;
            height: 3px;
            bottom: -7px;
            left: 0;
            background-color: #000;
            transition: width 0.3s ease-in-out;
          }
          .underline_on_hover:hover::before {
            width: 100%;
            transition: width 0.2s ease-in-out;
          }
          .nav_open {
            transform: translateX(0);
            transition: transform 0.3s ease-in-out;
          }
          .nav_closed {
            transform: translateX(-100%);
            transition: transform 0.3s ease-in-out;
          }
        `}
      </style>
    </>
  );
};
export default Layout;
