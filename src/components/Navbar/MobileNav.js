import ReactDOM from "react-dom";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const portal = document.getElementById("overlays");
  const [mobileNavIsOpened, setMobileNavIsOpened] = useState(false);

  const openModalHandler = () => {
    if (mobileNavIsOpened === true) {
      setMobileNavIsOpened(false);
    } else {
      setMobileNavIsOpened(true);
    }
  };

  const mobilNavButton = () => {
    return (
      <div
        className="z-20 xl:hidden fixed bottom-3 right-3 flex justify-center items-center rounded-full w-[50px] h-[50px] border border-gray-700 bg-gray-200 transition-all duration-500 overflow-hidden"
        onClick={openModalHandler}
      >
        <div
          className={`${
            mobileNavIsOpened
              ? "translate-x-[50px] bg-transparent before:rotate-45 before:translate-x-[-50px] after:-rotate-45 after:translate-x-[-50px]"
              : "before:translate-y-[-8px]  after:translate-y-[8px]"
          } button-line w-[30px] h-[3px] bg-gray-700 rounded-[5px] transition-all duration-500 
            before:absolute before:transform before:w-[30px] before:h-[3px] before:bg-gray-700 before:rounded-[5px] before:transition-all before:duration-500
            after:absolute after:transform after:w-[30px] after:h-[3px] after:bg-gray-700 after:rounded-[5px] after:transition-all after:duration-500`}
        />
      </div>
    );
  };

  const mobileNavOptions = () => {
    return (
      <ul
        className={`${
          mobileNavIsOpened ? "h-[150px] " : "h-[0px]"
        } w-full fixed top-0 left-0 bg-gray-800 z-10 rounded-b-xl transition-all duration-500 overflow-hidden text-center flex flex-col justify-evenly`}
        onClick={openModalHandler}
      >
        <Link to={{ pathname: "/" }}>
          <li className="text-white  px-3 lg:px-5 py-2 no-underline">Home</li>
        </Link>
        <Link to={{ pathname: "/recipes" }}>
          <li className="text-white  px-3 lg:px-5 py-2 no-underline">
            Recipes
          </li>
        </Link>
        <a href="https://en.3ok.hu/">
          <li className="text-white  px-3 lg:px-5 py-2 no-underline">
            More about veganism
          </li>
        </a>
      </ul>
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
