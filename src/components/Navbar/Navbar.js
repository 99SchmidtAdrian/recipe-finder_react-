import SearchInput from "../Search/SearchInput";
import "./Navbar.css";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarSearch = useRef();

  return (
    <div
      className=" bg-gray-600 sticky top-0 hidden xl:block z-20 mx-auto rounded-t-xl font-semibold"
      id="scroll"
    >
      <div className="container mx-auto">
        <ul className="list-none m-0 p-0 h-12">
          <div
            className="lg:w-3/5 my-auto lg:left-8 xl:left-10 2xl:left-24 relative"
            id="navbar"
          >
            <li className="float-left br-1 p-1 ">
              <Link
                to={{ pathname: "/recipes" }}
                className="block text-white text-center px-3 lg:px-5 py-2 no-underline "
              >
                Recipes
              </Link>
            </li>
            <li className="float-left br-1 p-1 ">
              <Link
                to={{ pathname: "/suggest" }}
                className="block text-white text-center px-3 lg:px-5 py-2 no-underline "
              >
                Suggest a Recipe
              </Link>
            </li>
            <li className="float-left br-1 p-1 ">
              <a
                href="https://en.3ok.hu/"
                target="_blank"
                rel="noreferrer"
                className="block text-white  text-center px-3 lg:px-5 py-2 no-underline "
              >
                More about veganism
              </a>
            </li>
          </div>
          <SearchInput
            refFor={navbarSearch}
            className="h-8 float-right mt-2 mx-auto mr-2 py-1 w-64 lg:right-8 xl:right-10 2xl:right-24"
            placeholder="What are you looking for?"
          />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
