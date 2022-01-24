import logo from "../../images/25452.svg";
import Card from "../ui/Card";
import SearchInput from "../Search/SearchInput";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Line from "../ui/Line";

const SideNav = (props) => {
  const navSearch = useRef();

  return (
    <div
      className={
        props.className + "  flex-col items-center w-2/12 hidden xl:flex"
      }
    >
      <img src={logo} className="h-64" alt="vegan-friendly logo" />
      <Card className="h-[300px] w-10/12 2xl:h-[350px]">
        <ul className="w-full h-full flex flex-col justify-evenly text-center font-medium items-center">
          <Line className="w-10/12" />
          <Link to={{ pathname: "/" }}>
            <li className="hover:text-lg hover:underline transition-all duration-300 leading-7">
              Home
            </li>
          </Link>
          <Line className="w-10/12" />
          <Link to={{ pathname: "/recipes" }}>
            <li
              className={`${
                props.page === "recipes" && "font-bold text-lg underline "
              }  hover:text-lg hover:underline transition-all duration-300 leading-7`}
              id="Recipes"
            >
              Recipes
            </li>
          </Link>
          <Line className="w-10/12" />
          <Link to={{ pathname: "/suggest" }}>
            <li
              className={`${
                props.page === "suggest" && "font-bold text-lg underline"
              } hover:text-lg hover:underline transition-all duration-300 leading-7`}
            >
              Suggest Recipe
            </li>
          </Link>
          <Line className="w-10/12" />
          <li>
            <SearchInput refFor={navSearch} className="p-1 xl:w-10/12 2xl:w-full" />
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default SideNav;
