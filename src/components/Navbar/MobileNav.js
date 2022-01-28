import ReactDOM from "react-dom";
import { Fragment, useState, useRef } from "react";
import { Link } from "react-router-dom";
import SearchInput from "../Search/SearchInput";
const MobileNav = () => {
  const portal = document.getElementById("mobile-nav");
  const [mobileNavIsOpened, setMobileNavIsOpened] = useState(false);
  const [layer1, setLayer1] = useState(false);
  const [layer2, setLayer2] = useState(false);
  const mobileSearch = useRef();

  const openModalHandler = () => {
    if (mobileNavIsOpened === true) {
      setTimeout(() => {
        setLayer1(false);
      }, 400);
      setTimeout(() => {
        setLayer2(false);
      }, 200);
      setMobileNavIsOpened(false);
    } else {
      setTimeout(() => {
        setMobileNavIsOpened(true);
      }, 400);
      setTimeout(() => {
        setLayer2(true);
      }, 200);
      setLayer1(true);
    }
  };

  const mobilNavButton = () => {
    return (
      <div
        className="z-30 xl:hidden fixed top-0 right-0 flex justify-center items-center w-[40px] h-[40px] bg-green-600 transition-all duration-500 overflow-hidden"
        onClick={openModalHandler}
      >
        <div
          className={`${
            mobileNavIsOpened
              ? "translate-x-[50px] bg-transparent before:rotate-45 before:translate-x-[-50px] after:-rotate-45 after:translate-x-[-50px]"
              : "before:translate-y-[-8px]  after:translate-y-[8px]"
          } button-line w-[30px] h-[3px] bg-white rounded-[5px] transition-all duration-500 
            before:absolute before:transform before:w-[30px] before:h-[3px] before:bg-white before:rounded-[5px] before:transition-all before:duration-500
            after:absolute after:transform after:w-[30px] after:h-[3px] after:bg-white after:rounded-[5px] after:transition-all after:duration-500`}
        />
      </div>
    );
  };

  const mobileNavOptions = () => {
    return (
      <Fragment>
        <div
          className={`${
            layer1 ? "w-full" : "w-0 "
          } h-full bg-green-600 fixed right-0 transition-all duration-300 z-20`}
        ></div>
        <div
          className={`${
            layer2 ? "w-[90%]" : "w-0 "
          } h-full bg-green-400 fixed right-0 transition-all duration-300 z-20`}
        ></div>
        <ul
          className={`${
            mobileNavIsOpened ? "translate-x-[0%] " : "translate-x-[100%]"
          } w-4/5 h-full fixed right-0 bg-white z-20 transition-all duration-300 overflow-hidden text-center flex flex-col justify-evenly`}
        >
          <SearchInput
            refFor={mobileSearch}
            className="h-8 mx-auto py-1 mt-2 w-[88%]"
            placeholder="Serch a recipe"
          />
          <Link to={{ pathname: "/" }}>
            <li className="text-gray-700 font-bold px-3 lg:px-5 py-2 no-underline">
              Home
            </li>
          </Link>
          <Link to={{ pathname: "/recipes" }}>
            <li className="text-gray-700 font-bold px-3 lg:px-5 py-2 no-underline">
              Recipes
            </li>
          </Link>
          <Link to={{ pathname: "/suggest" }}>
            <li className="text-gray-700 font-bold px-3 lg:px-5 py-2 no-underline">
              Suggest a Recipe
            </li>
          </Link>
          <a href="https://en.3ok.hu/" target="_blank" rel="noreferrer">
            <li className="text-gray-700 font-bold px-3 lg:px-5 py-2 no-underline">
              More about veganism
            </li>
          </a>
        </ul>
      </Fragment>
    );
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(mobilNavButton(), portal)}
      {ReactDOM.createPortal(mobileNavOptions(), portal)}
    </Fragment>
  );
};

export default MobileNav;
