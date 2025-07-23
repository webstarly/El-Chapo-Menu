import React, { useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import { LuSquareMenu } from "react-icons/lu";
import { MdOutlineMenu } from "react-icons/md";
import categoryMenu from "@/components/helper/Category";
import { Link } from "react-router-dom";
import { useTheme } from "@/themecontext/themeContext";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    setToggle(!toggle);
    toggleTheme();
  };

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuOptionClick = () => {
    setShowMenu(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-200 dark:bg-slate-900 text-black dark:text-white shadow-md dark:shadow-sm dark:shadow-gray-800">
      <div className="flex p-4 items-center justify-between flex-wrap">
        <div className="bg-orange-700 px-4 py-2 text-white font-bold rounded-md md:ml-10 ">
          logo
        </div>
        <nav className="hidden md:flex mr-10">
          <ul className="flex gap-4 items-center">
            {categoryMenu.map((items) => {
              return (
                <a
                  href={`#${items.link}`}
                  key={items.Id}
                  className="border px-3 py-1 hover:bg-black hover:text-white rounded text-sm shadow-sm"
                >
                  {items.label}
                </a>
              );
            })}
          </ul>
        </nav>

          <div className="flex flex-row gap-2">
        <div
          className=" md:mr-20 mr-1 p-1 flex cursor-pointer z-50"
          onClick={handleToggle}
        >
          {toggle ? (
            <MdOutlineLightMode className="h-5 w-5 text-black" />
          ) : (
            <MdOutlineLightMode className="h-5 w-5 text-white" />
          )}
        </div>
        <div className="md:hidden items-end z-50">
          <MdOutlineMenu
            className="h-8 w-8  text-orange-900 cursor-pointer"
            onClick={handleShowMenu}
          />
        </div>
        </div>

        {showMenu && (
          <div className="absolute h-screen bg-blue-100 dark:bg-slate-600 inset-0 opacity-90 items-start pt-20 z-40">
            <div className="flex justify-center w-full z-20 ">
              <ul className=" px-8 text-center font-semibold flex flex-col w-full  ">
                {categoryMenu.map((items) => (
                  <a
                    href={`#${items.link}`}
                    className="border-b-2  py-1 hover:bg-black hover:text-white rounded text-lg shadow-sm"
                    onClick={handleMenuOptionClick}
                    key={items.Id}
                  >
                    {items.label}
                  </a>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
