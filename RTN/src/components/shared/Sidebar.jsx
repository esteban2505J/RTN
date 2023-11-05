import React from "react";
import { FaPercent, FaCog, FaRegBell } from "react-icons/fa";
import { GiPieChart } from "react-icons/gi";
import { HiOutlineMail, HiOutlineLogout } from "react-icons/hi";
import { TiMortarBoard } from "react-icons/ti";
import { BiTask } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <>
      <div
        className={` bg-[#8cb7bc] fixed bottom-0 md:left-0 items-center md:w-24 md:h-full w-full  flex h-20 md:flex-col flex-row justify-evenly py-6 rounded-tr-xl rounded-br-xl z-50  mb-0 left-0 `}
      >
        <div className="">
          <ul className="flex md:flex-col  items-center justify-center ">
            <li className="hover:bg-white md:p-3 p-1 rounded-tl-lg rounded-bl-lg group transition-colors">
              <Link
                to="/"
                className="group-hover:bg-[#262837]  group-hover:text-white p-3 flex justify-center rounded-xl text-salte-700 transition-colors"
              >
                <TiMortarBoard className="text-3xl text-center" />
              </Link>
            </li>

            <li className=" hover:bg-white p-1 md:p-3  rounded-tl-lg rounded-bl-lg group transition-colors">
              <Link
                to="/"
                className="group-hover:bg-[#262837]  group-hover:text-white p-3 flex justify-center rounded-xl text-salte-700 transition-colors"
              >
                <FaPercent className="text-xl text-center" />
              </Link>
            </li>

            <li className=" hover:bg-white  p-1 md:p-3 rounded-tl-lg rounded-bl-lg group transition-colors">
              <Link
                to="/teacherPage/table"
                className="group-hover:bg-[#262837]  group-hover:text-white p-3 flex justify-center rounded-xl text-salte-700 transition-colors"
              >
                <BiTask className="text-2xl text-center" />
              </Link>
            </li>

            <li className=" hover:bg-white  p-1 md:p-3 rounded-tl-lg rounded-bl-lg group transition-colors">
              <Link
                to="/"
                className="group-hover:bg-[#262837]  group-hover:text-white p-3 flex justify-center rounded-xl text-salte-700 transition-colors"
              >
                <HiOutlineMail className="text-2xl text-center" />
              </Link>
            </li>

            <li className=" hover:bg-white p-1  md:p-3 rounded-tl-lg rounded-bl-lg group transition-colors">
              <Link
                to="/"
                className="group-hover:bg-[#262837]  group-hover:text-white p-3 flex justify-center rounded-xl text-salte-700 transition-colors"
              >
                <FaRegBell className="text-2xl text-center" />
              </Link>
            </li>

            <li className=" hover:bg-white  p-1 md:p-3 rounded-tl-lg rounded-bl-lg group transition-colors">
              <Link
                to="/"
                className="group-hover:bg-[#262837]  group-hover:text-white p-3 flex justify-center rounded-xl text-salte-700 transition-colors"
              >
                <FaCog className="text-2xl text-center" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="">
          <ul>
            <li className=" hover:bg-white p-1 md:p-3 rounded-tl-lg rounded-bl-lg group transition-colors">
              <Link
                to="/"
                className="group-hover:bg-[#262837]  group-hover:text-white p-3 flex justify-center rounded-xl text-salte-700 transition-colors"
              >
                <HiOutlineLogout className="text-2xl text-center" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
