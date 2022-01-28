import logo from "../../images/25452.svg";
import Card from "../ui/Card";
import SearchInput from "../Search/SearchInput";
import { useRef } from "react";
import { Link } from "react-router-dom";

const SideNav = (props) => {
  const navSearch = useRef();

  return (
    <div
      className={
        props.className + "  flex-col items-center w-2/12 hidden xl:flex"
      }
    >
      <img src={logo} className="h-64" alt="vegan-friendly logo" />
      <Card className="w-10/12">
        <ul className="w-full h-full flex flex-col justify-evenly text-center font-medium items-center space-y-8 py-5">
          <li>
            <SearchInput
              refFor={navSearch}
              className="p-1 xl:w-10/12 2xl:w-full"
              color="gray-200"
            />
          </li>
          <li>
            <Link
              to={{ pathname: "/" }}
              className="hover:text-lg transition-all duration-300 leading-7 "
            >
              Home
            </Link>
          </li>
          <li
            className={`${
              props.page === "recipes" && "font-bold text-lg"
            } hover:text-lg transition-all duration-300 leading-7`}
            id="Recipes"
          >
            <Link to={{ pathname: "/recipes" }}>Recipes</Link>
          </li>
          <li
            className={`${
              props.page === "suggest" && "font-bold text-lg"
            } hover:text-lg transition-all duration-300 leading-7`}
          >
            <Link to={{ pathname: "/suggest" }}>Suggest a Recipe</Link>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default SideNav;
