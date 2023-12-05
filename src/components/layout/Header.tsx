import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import {
  IoMdArrowDropdown,
  IoMdArrowDropup,
  IoMdHelpCircleOutline,
} from "react-icons/io";
import { GrEdit } from "react-icons/gr";
import { CiUser } from "react-icons/ci";

import { LOGO, USER_AVATAR } from "../../utils/constants";
import { auth } from "../../utils/firebase";
import toast from "react-hot-toast";

interface HeaderProps {
  isBrowsePage: boolean;
}

const Header: React.FC<HeaderProps> = ({ isBrowsePage }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        toast.success("Signed out successfully");
        sessionStorage.clear();
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <nav
      className={`absolute px-5 w-screen ${
        isBrowsePage && "flex items-center justify-between z-10"
      }`}
    >
      <Link to={isBrowsePage ? "/browse" : "/"}>
        <img className="w-44" src={LOGO} alt="logo" />
      </Link>

      {isBrowsePage && (
        <div className="flex items-center gap-x-8">
          <IoSearchOutline className="w-7 h-7 cursor-pointer text-white" />
          <IoNotificationsOutline className="w-7 h-7 cursor-pointer text-white" />
          <div
            className="relative flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={USER_AVATAR}
              alt="avatar"
              className="w-9 h-9 rounded-sm cursor-pointer mr-1"
            />
            {isHovered ? (
              <IoMdArrowDropup className="text-white cursor-pointer" />
            ) : (
              <IoMdArrowDropdown className="text-white cursor-pointer" />
            )}
            {isHovered && (
              <div className="absolute right-0 top-9 w-56 bg-[#373737] text-white text-start shadow-lg rounded-md overflow-hidden">
                <ul className="text-lg">
                  <li className="px-4 py-2 flex items-center justify-start gap-x-1 hover:underline cursor-pointer">
                    <GrEdit className="w-5" />
                    Manage Profiles
                  </li>
                  <li className="px-4 py-2 flex items-center justify-start gap-x-1 hover:underline cursor-pointer">
                    <CiUser className="w-5" />
                    Account
                  </li>
                  <li className="px-4 py-2 flex items-center justify-start gap-x-1 hover:underline cursor-pointer">
                    <IoMdHelpCircleOutline className="w-5" />
                    Help Center
                  </li>
                  <li
                    className="px-4 py-2 mt-2 border-t border-[#ccc] hover:underline cursor-pointer"
                    onClick={handleSignOut}
                  >
                    Sign out of Netflix
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
