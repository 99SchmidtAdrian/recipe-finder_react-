import { useRef } from "react";
import logo from "../../images/25452.svg";
import SearchInput from "./SearchInput";

const SearchBar = () => {
  const mainSearch = useRef();

  return (
    <div className="h-screen">
      <img src={logo} className="mx-auto" alt="Vegan friendly logo" />
      <SearchInput
        refFor={mainSearch}
        className="lg:w-2/5 md:w-2/4 w-4/5 p-2"
        placeholder="What are you looking for?"
        color="white"
      />
      <div id="scroll-down" className="">
        <a href="#scroll">
          <div
            className="text-gray-700 bg-gray-200 font-bold mx-auto text-center mt-8 p-3 border-2 rounded-2xl w-3/4 
          sm:w-5/12 md:w-4/12 xl:w-3/12 2xl:w-2/12 shadow-2xl border-gray-500 transform hover:scale-110 duration-500"
          >
            Or you can just scroll down
          </div>
        </a>
      </div>
    </div>
  );
};

export default SearchBar;
