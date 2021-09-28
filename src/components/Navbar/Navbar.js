import searchIcon from "../../images/search-24px.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div
      className=" bg-gray-600 sticky top-0 hidden md:block z-20 mx-auto rounded-t-xl font-semibold"
      id="scroll"
    >
      <div className="container mx-auto">
        <ul className="list-none m-0 p-0 h-12">
          <div
            className="lg:w-3/5 my-auto lg:ml-5 xl:ml-10 2xl:ml-40"
            id="navbar"
          >
            <li className="float-left br-1 p-1 smoothscroll" id="link">
              <a
                href="#top"
                className="block text-white  text-center px-5 py-2 no-underline link"
              >
                Top
              </a>
            </li>
            <li className="float-left br-1 p-1 smoothscroll" id="link">
              <a
                href="#scroll"
                className="block text-white text-center px-5 py-2 no-underline link"
              >
                Recipes
              </a>
            </li>
            <li className="float-left br-1 p-1 smoothscroll" id="link">
              <a
                href="#top"
                className="block text-white  text-center px-5 py-2 no-underline link"
              >
                Suggest Recipes
              </a>
            </li>
          </div>
          <div className="text-center bg-white rounded-lg shadow-lg h-8 float-right mt-2 mx-auto mr-2 lg:mr-5 lg:w-64 xl:mr-10 2xl:mr-40">
            <input
              type="text"
              autoComplete="off"
              id="searchbar2"
              className="w-9/12 text-center outline-none align-middle"
            />
            <button
              className="searchbutton float-right focus:outline-none absolute pt-1"
              id="searchbarSubmit2"
            >
              <img src={searchIcon} alt="search button" />
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
