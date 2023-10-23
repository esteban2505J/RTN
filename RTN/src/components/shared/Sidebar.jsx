import React from "react";
import { FaPercent, FaCog, FaRegBell } from "react-icons/fa";
import { GiPieChart } from "react-icons/gi";
import { HiOutlineMail, HiOutlineLogout } from "react-icons/hi";
import { TiMortarBoard } from "react-icons/ti";
import { Link } from "react-router-dom";

export const Sidebar = (props) => {
  const { showMenu } = props;

  return (
    <>
      <div
        className={`bg-[#8cb7bc] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50  ${
          showMenu ? "left-0" : "-left-full"
        } transition-all`}
      >
        <div>
          <ul className="pl-4">
            <li className="hover:bg-white p-3 rounded-tl-lg rounded-bl-lg group transition-colors">
              <Link
                to="/"
                className="group-hover:bg-[#262837]  group-hover:text-white p-3 flex justify-center rounded-xl text-salte-700 transition-colors"
              >
                <TiMortarBoard className="text-2xl text-center" />
              </Link>
            </li>

            <li className=" hover:bg-white p-3 rounded-tl-lg rounded-bl-lg group transition-colors">
              <Link
                to="/"
                className="group-hover:bg-[#262837]  group-hover:text-white p-3 flex justify-center rounded-xl text-salte-700 transition-colors"
              >
                <FaPercent className="text-xl text-center" />
              </Link>
            </li>

            <li className=" hover:bg-white p-3 rounded-tl-lg rounded-bl-lg group transition-colors">
              <Link
                to="/"
                className="group-hover:bg-[#262837]  group-hover:text-white p-3 flex justify-center rounded-xl text-salte-700 transition-colors"
              >
                <GiPieChart className="text-xl text-center" />
              </Link>
            </li>

            <li className=" hover:bg-white p-3 rounded-tl-lg rounded-bl-lg group transition-colors">
              <Link
                to="/"
                className="group-hover:bg-[#262837]  group-hover:text-white p-3 flex justify-center rounded-xl text-salte-700 transition-colors"
              >
                <HiOutlineMail className="text-xl text-center" />
              </Link>
            </li>

            <li className=" hover:bg-white p-3 rounded-tl-lg rounded-bl-lg group transition-colors">
              <Link
                to="/"
                className="group-hover:bg-[#262837]  group-hover:text-white p-3 flex justify-center rounded-xl text-salte-700 transition-colors"
              >
                <FaRegBell className="text-xl text-center" />
              </Link>
            </li>

            <li className=" hover:bg-whiteS p-3 rounded-tl-lg rounded-bl-lg group transition-colors">
              <Link
                to="/"
                className="group-hover:bg-[#262837]  group-hover:text-white p-3 flex justify-center rounded-xl text-salte-700 transition-colors"
              >
                <FaCog className="text-xl text-center" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="pl-4">
          <ul>
            <li className=" hover:bg-white p-3 rounded-tl-lg rounded-bl-lg group transition-colors">
              <Link
                to="/"
                className="group-hover:bg-[#262837]  group-hover:text-white p-3 flex justify-center rounded-xl text-salte-700 transition-colors"
              >
                <HiOutlineLogout className="text-xl text-center" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
