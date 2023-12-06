import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import {
  IoMdArrowDropdown,
  IoMdArrowDropup,
  IoMdHelpCircleOutline,
} from "react-icons/io";
import { GrEdit } from "react-icons/gr";
import { CiUser } from "react-icons/ci";

import {
  API_OPTIONS,
  LOGO,
  SEARCH_INPUT_PLACEHOLDERS,
  SUPPORTED_LANGUAGES,
  USER_AVATAR,
} from "../../utils/constants";
import { auth } from "../../utils/firebase";
import toast from "react-hot-toast";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authAtom } from "../../utils/recoil-atoms/authAtom";
import { configAtom } from "../../utils/recoil-atoms/configAtom";
import openai from "../../utils/openai";
import axios from "axios";
import { movieSearchAtom } from "../../utils/recoil-atoms/movieSearchAtom";

interface HeaderProps {
  isBrowsePage?: boolean;
  isSearch?: boolean;
}

type Language = "en" | "hi" | "es" | "fr" | "ur";

const Header: React.FC<HeaderProps> = ({ isBrowsePage }) => {
  const searchInputDivRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { isLoggedIn } = useRecoilValue(authAtom);
  const setLanguage = useSetRecoilState(configAtom);
  const { language } = useRecoilValue(configAtom);
  const moviesFromSearch = useSetRecoilState(movieSearchAtom);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [showSearchInput, setShowSearchInput] = useState<boolean>(false);

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
  };

  // Handle click outside to close the search input
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchInputDivRef.current &&
        !searchInputDivRef.current.contains(event.target as Node)
      ) {
        setShowSearchInput(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchInputDivRef]);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        toast.success("Signed out successfully");
        sessionStorage.clear();
      })
      .catch((error) => toast.error(error.message));
  };

  const handleSubmit = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchInputRef.current?.value +
      ". only give me names of top 10-25 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    try {
      const response = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });

      if (response.choices && response.choices.length > 0) {
        console.log(response.choices[0]?.message?.content);
        moviesFromSearch(
          response.choices[0]?.message?.content?.split(",") ?? []
        );
        console.log(moviesFromSearch);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  const searchMoviesInTMDB = async (movie: string) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&adult=false`,
      API_OPTIONS
    );
    console.log(data.results);
  };

  return (
    <nav
      className={`absolute px-5 w-screen ${
        isBrowsePage && "flex items-center justify-between z-10"
      }`}
    >
      <Link to={isLoggedIn ? "/browse" : "/"}>
        <img className="w-44" src={LOGO} alt="logo" />
      </Link>

      {isBrowsePage && (
        <div className="flex items-center gap-x-8" ref={searchInputDivRef}>
          <select
            name="languages"
            id="language-options"
            value={language}
            className="bg-transparent text-white outline-none px-2 py-1"
            onChange={(e) => {
              setLanguage({ language: e.target.value });
              toast.success("Search Box Language changed successfully");
            }}
          >
            {SUPPORTED_LANGUAGES.map((language) => (
              <option
                key={language.identifier}
                value={language.identifier}
                className="bg-[#111] text-white"
              >
                {language.name}
              </option>
            ))}
          </select>
          <IoSearchOutline
            className="w-7 h-7 cursor-pointer text-white"
            onClick={toggleSearchInput}
          />
          {showSearchInput && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <input
                type="text"
                placeholder={SEARCH_INPUT_PLACEHOLDERS[language as Language]}
                className="relative px-2 bg-black text-white border border-white w-72 py-1"
                ref={searchInputRef}
              />
              <button
                type="submit"
                className="absolute text-white top-6 right-44"
              >
                Search
              </button>
            </form>
          )}
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
