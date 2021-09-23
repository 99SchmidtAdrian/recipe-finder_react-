import { useRef } from "react";
import logo from "../../images/25452.svg";
import searchIcon from "../../images/search-24px.svg";
import { dummyData } from "../../dummyData";

const SearchBar = () => {
    const mainSearch = useRef()

    const searchHandler = () => {
        let hasResults = false;
        for (let i = 0; i < dummyData.length; i++) {
            if( dummyData[i].ingredients.includes(mainSearch.current.value) ||
                dummyData[i].name.includes(mainSearch.current.value) ||
                dummyData[i].holiday.includes(mainSearch.current.value) ||
                dummyData[i].diet.includes(mainSearch.current.value)){
                    mainSearch.current.value=""
                    hasResults = true;
            }         
        }
        if(hasResults === false){
            alert('No results found')
        }
    }

    return <div className="h-screen">
            <img src={logo} className="mx-auto" alt="Vegan friendly logo" />
            <form className="text-center bg-white mx-auto rounded-lg shadow-lg lg:w-2/5 md:w-2/4 w-4/5 p-2">
                <input  type="text" 
                        placeholder="What are you looking for?" 
                        autoComplete="off"
                        className="bg-none w-5/6 sm:w-11/12 text-center outline-none"
                        ref={mainSearch} />
                <button className="focus:outline-none absolute" 
                        id="searchbarSubmit" 
                        onClick={searchHandler}>
                            <img src={searchIcon} alt="search button" />
                </button>
            </form>
            <div id="scroll-down" className="">
                <a href="#scroll">
                    <div
                        className="text-gray-700 bg-gray-200 font-bold mx-auto text-center mt-8 p-3 border-2 rounded-2xl w-3/4 sm:w-5/12 md:w-4/12 
                                    xl:w-3/12 2xl:w-2/12 shadow-2xl border-gray-500 transform hover:scale-110 duration-500">
                        Or you can just scroll down
                    </div>
                </a>
            </div>
    </div>
}

export default SearchBar;