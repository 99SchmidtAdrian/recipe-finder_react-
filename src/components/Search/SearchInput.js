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

  const addAlert = () => {
    return alerts.map((alert, index) => (
      <Alert
        index={index}
        value={alert.message}
        type={alert.type}
        fields={alerts}
        setFields={setAlerts}
        key={index}
      />
    ));
  };

  return (
    <Fragment>
      <form
        className={
          `text-center bg-${props.color} mx-auto rounded-lg relative ` +
          props.className
        }
      >
        <input
          type="text"
          placeholder={props.placeholder}
          autoComplete="off"
          className={
            props.inputClass +
             ` bg-${props.color} w-5/6 sm:w-10/12 text-center outline-none`
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
      {ReactDOM.createPortal(addAlert(), portal)}
    </Fragment>
  );
};

export default SearchInput;
