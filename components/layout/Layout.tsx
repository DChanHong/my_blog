import React, { useState } from "react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";

interface Wrapper {
  children: React.ReactNode;
}

const Layout = ({ children }: Wrapper) => {
  const [navData, setNavData] = useState<string>("");

  return (
    <>
      <header
        className={`fixed border-b-2 h-[100px] top-0 w-full z-9 bg-white flex items-center`}
      >
        <h1 className={`font-bold text-[1.5em] mx-8`}>
          <Link href={"/"}>Hong Engineering</Link>
        </h1>
        <ul className="flex">
          <li className={`font-semibold text-[1.4em] mx-4`}>
            <Link href={"/"}>
              <span className={`underline_on_hover`}>Blog</span>
            </Link>
          </li>
          <li className={`font-semibold text-[1.4em] mx-4`}>
            <Link href={"/"}>
              <span className={`underline_on_hover`}>Career</span>
            </Link>
          </li>
        </ul>
      </header>

      <div className={`sm:left-0 sm:fixed sm:min-h-[100%] sm:h-[100%]`}>
        <Link
          className="flex flex-col items-center px-6 py-2 mt-4 mx-1 hover:bg-[#EFEFEF] hover:rounded-xl"
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
          <p className="w-[2rem] ">
            <BsBook className="w-full h-full" />
          </p>
          <p className="text-[1rem] text-center">Blog</p>
        </Link>
      </div>
      <div className={`h-full min-h-[calc(100vh-165px)]`}>{children}</div>

      <footer className={`border-2 bg-[#F9F9F9] h-[200px]`}>
        <ul>
          <li></li>
          <li></li>
          <li></li>
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
        `}
      </style>
    </>
  );
};
export default Layout;
