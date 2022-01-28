import { useHistory } from "react-router-dom";
import { useState, Fragment } from "react";
import ReactDOM from "react-dom";
import Alert from "../ui/Alert";
import searchIcon from "../../images/search-24px.svg";

const SearchInput = (props) => {
  const history = useHistory();
  const portal = document.getElementById("alerts");
  const [alerts, setAlerts] = useState([]);

  const searchHandler = (event) => {
    event.preventDefault();
    if (props.refFor.current.value.length > 0) {
      if (!history.location.pathname.includes("/search")) {
        history.push("/search/" + props.refFor.current.value);
      } else {
        history.push(props.refFor.current.value);
      }
    } else {
      setAlerts([
        ...alerts,
        { message: "Search field is empty.", type: "warning" }
      ]);
    }
  };

  return (
    <Fragment>
      <form
        className={
          "text-center bg-gray-200 mx-auto rounded-lg relative " +
          props.className
        }
      >
        <input
          type="text"
          placeholder={props.placeholder}
          autoComplete="off"
          className={
            props.inputClass +
            " bg-gray-200 w-5/6 sm:w-10/12 text-center outline-none"
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
      {ReactDOM.createPortal(
        <div className="fixed bottom-5 w-[320px] mx-auto left-0 right-0 z-50 lg:w-[370px] lg:right-10 lg:left-auto">
          {alerts.map((alert, index) => (
            <Alert
              index={index}
              value={alert.message}
              type={alert.type}
              fields={alerts}
              setFields={setAlerts}
              key={index}
            />
          ))}
        </div>,
        portal
      )}
    </Fragment>
  );
};

export default SearchInput;
