"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus, faChartBar, faCreditCard, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { useUIStore } from "@/stores/useUIStore";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const { isSideBarShow, toggleSidebar } = useUIStore();

  return (
    <aside
      className={`bg-slate-500 min-h-screen text-white transition-all duration-300 ${
        isSideBarShow ? "w-64" : "w-16"
      }`}
    >
      <div className="w-full  h-16 flex items-center px-3">
        <div
          onClick={() => toggleSidebar()}
          className="flex items-center gap-1 cursor-pointer"
        >
          <div className="w-[40px] h-[40px]">
            <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          </div>
          <h1
            className={`font-bold delay-150 text-md ${isSideBarShow ? "" : "hidden"}`}
          >
            Dashboard
          </h1>
        </div>
      </div>
      <div className="flex justify-start w-full">
        <ul className="w-full">
          <li className="py-2 flex w-full">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 text-sm px-4 hover:text-blue-400"
            >
              <FontAwesomeIcon icon={faHouse} className="text-[20px] w-8" />
              {isSideBarShow && "Home"}
            </Link>
          </li>
          <li className="py-2 flex w-full">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 text-sm px-4 hover:text-blue-400"
            >
              <FontAwesomeIcon icon={faUser} className="text-[20px] w-8" />
              {isSideBarShow && "Home"}
            </Link>
          </li>
          <li className="py-2 flex w-full">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 text-sm px-4 hover:text-blue-400"
            >
              <FontAwesomeIcon icon={faChartBar} className="text-[20px] w-8" />
              {isSideBarShow && "Home"}
            </Link>
          </li>
          
          
        </ul>
      </div>
      {/* <div>
        <ul className="mt-2 px-4">
          <li className="px-1 py-2">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 hover:text-blue-400"
            >
              <FontAwesomeIcon icon={faHouse} className="text-[25px]" />
              {isOpen && "Home"}
            </Link>
          </li>
        </ul>
      </div> */}
    </aside>
  );
};

export default Sidebar;
