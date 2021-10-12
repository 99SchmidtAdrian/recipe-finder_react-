import React from "react";

const Sort = (props) => {
  return (
    <div>
      <button
        className={props.className + " text-gray-600"}
        onClick={props.onClear}
      >
        <div className="text-center flex flex-col mx-auto w-8">
          <span className="h-[2px] bg-current transform transition duration-500 ease-in-out my-[4px]" />
          <span className="h-[2px] bg-current   transform transition duration-500 ease-in-out my-[4px]" />
          <span className="h-[2px] bg-current transform  transition duration-500 ease-in-out my-[4px]" />
        </div>
      </button>
    </div>
  );
};

export default Sort;
