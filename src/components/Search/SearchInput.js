import searchIcon from "../../images/search-24px.svg";
import { useHistory } from "react-router-dom";

const SearchInput = (props) => {
  const history = useHistory();

  const searchHandler = (event) => {
    event.preventDefault();
    if (props.refFor.current.value.length > 0) {
      if (!history.location.pathname.includes("/search")) {
        history.push("/search/" + props.refFor.current.value);
      }else{
        history.push(props.refFor.current.value);
      }
    } else {
      console.log();
    }
  };

  return (
    <form
      className={
        "text-center bg-white mx-auto rounded-lg shadow-lg relative " +
        props.className
      }
    >
      <input
        type="text"
        placeholder={props.placeholder}
        autoComplete="off"
        className={
          props.inputClass +
          " bg-none w-5/6 sm:w-10/12 text-center outline-none"
        }
        ref={props.refFor}
      />
      <button
        className="focus:outline-none absolute right-2 hover:rotate-12 transition-all duration-300"
        id="searchbarSubmit"
        onClick={searchHandler}
      >
        <img src={searchIcon} alt="search button" className="" />
      </button>
    </form>
  );
};

export default SearchInput;
