import logo from "../../images/25452.svg";
import Card from "../ui/Card/Card";
import SearchInput from "../Search/SearchInput";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Line from "../ui/Card/Line";

const SideNav = (props) => {
  const navSearch = useRef();

  return (
    <div className={props.className + " flex flex-col items-center w-2/12"}>
      <img src={logo} className="h-64" alt="vegan-friendly logo" />
      <Card className="h-[300px] w-10/12">
        <ul className="w-full h-full flex flex-col justify-evenly text-center font-medium items-center">
          <Line className="w-10/12" />
          <Link to={{ pathname: "/" }}>
            <li className="hover:text-xl hover:underline transition-all leading-7">
              Main Page
            </li>
          </Link>
          <Line className="w-10/12" />
          <Link to={{ pathname: "/recipes" }}>
            <li className={`${props.page==='recipes' && 'font-bold text-xl underline '}  hover:text-xl hover:underline transition-all leading-7`} id="Recipes">
              Recipes
            </li>
          </Link>
          <Line className="w-10/12" />
          <Link to={{ pathname: "/suggest" }}>
            <li className={`${props.page==='suggest' && 'font-bold text-xl underline'} hover:text-xl hover:underline transition-all leading-7`}>
              Suggest Recipe
            </li>
          </Link>
          <Line className="w-10/12" />
          <li>
            <SearchInput refFor={navSearch} className="p-1" />
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default SideNav;
