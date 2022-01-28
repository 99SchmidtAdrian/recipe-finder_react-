import { useEffect, useState } from "react";
import remove from "../../images/remove.svg";
import "./Alert.css";

const Alert = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);
  const alertType = props.type === "warning";

  const removeAlert = () => {
    const values = [...props.fields];
    values.splice(props.index, 1);
    props.setFields(values);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 10);
    setTimeout(() => {
      setIsVisible(false);
    }, 10000);
    setTimeout(() => {
      setIsRemoved(true);
    }, 11000);
  }, []);

  return (
      <div
        className={`${
          alertType
            ? "bg-red-200 border-current text-red-700"
            : "bg-green-200 text-green-700 border-current"
        } translate-x-[500px] ${
          isVisible && "translate-x-[0px]"
        } text-xl  border-l-4 rounded my-2 flex flex-row justify-between transform duration-700 z-40 relative loading-animation ${
          isRemoved && "hidden"
        }`}
      >
        <div
          className={`${
            alertType ? "text-red-700" : "text-green-700"
          } w-8 h-8 mt-3 ml-3`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>{" "}
        </div>
        <div className="py-3 px-4 font-semibold text-black">{props.value}</div>
        <button
          type="button"
          className={`${
            alertType ? "bg-red-300" : "bg-green-300"
          } border-none align-middle flex flex-col justify-center px-3`}
          onClick={removeAlert}
        >
          <img src={remove} alt="close button" className="w-6 h-6" />
        </button>
      </div>
  );
};

export default Alert;
