import React from "react";
import { FaHome, FaPercent, FaCog, FaRegBell } from "react-icons/fa";
import { GiPieChart } from "react-icons/gi";
import { HiOutlineMail, HiOutlineLogout } from "react-icons/hi";

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
            <li>
              <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">
                Logo
              </h1>
            </li>

            <li className="bg-[#262837] p-3 rounded-tl-lg rounded-bl-lg">
              <a
                href="#"
                className="bg-[#ec7c6a]  p-3 flex justify-center rounded-xl text-white"
              >
                <FaHome className="text-xl text-center" />
              </a>
            </li>

            <li className=" hover:bg-[#262837] p-3 rounded-tl-lg rounded-bl-lg group transition-colors">
              <a
                href="#"
                className=" group-hover:bg-[#ec7c6a] p-3 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
              >
                <FaPercent className="text-xl text-center" />
              </a>
            </li>

            <li className=" hover:bg-[#262837] p-3 rounded-tl-lg rounded-bl-lg group transition-colors">
              <a
                href="#"
                className=" group-hover:bg-[#ec7c6a] p-3 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
              >
                <GiPieChart className="text-xl text-center" />
              </a>
            </li>
            <li className=" hover:bg-[#262837] p-3 rounded-tl-lg rounded-bl-lg group transition-colors">
              <a
                href="#"
                className=" group-hover:bg-[#ec7c6a] p-3 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
              >
                <HiOutlineMail className="text-xl text-center" />
              </a>
            </li>
            <li className=" hover:bg-[#262837] p-3 rounded-tl-lg rounded-bl-lg group transition-colors">
              <a
                href="#"
                className=" group-hover:bg-[#ec7c6a] p-3 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
              >
                <FaRegBell className="text-xl text-center" />
              </a>
            </li>
            <li className=" hover:bg-[#262837] p-3 rounded-tl-lg rounded-bl-lg group transition-colors">
              <a
                href="#"
                className=" group-hover:bg-[#ec7c6a] p-3 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
              >
                <FaCog className="text-xl text-center" />
              </a>
            </li>
          </ul>
        </div>

        <div className="pl-4">
          <ul>
            <li className=" hover:bg-[#262837] p-3 rounded-tl-lg rounded-bl-lg group transition-colors">
              <a
                href="#"
                className=" group-hover:bg-[#ec7c6a] p-3 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
              >
                <HiOutlineLogout className="text-xl text-center" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
