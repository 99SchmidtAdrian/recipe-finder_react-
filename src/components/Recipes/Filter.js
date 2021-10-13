import React, { useState } from "react";
import filterIcon from "../../images/filter-icon.svg";
import FilterItem from "./FilterItem";

const Filter = (props) => {
  const [veganIsChecked, setVeganIsChecked] = useState(false);
  const [ketoIsChecked, setKetoIsChecked] = useState(false);
  const [glutenFreeIsChecked, setGlutenFreeIsChecked] = useState(false);
  const [filterIsOpened, setFilterIsOpened] = useState(false);

  return (
    <div className="h-[50px] ">
      <button
        className="absolute pt-[10px] ml-3 z-10 flex flex-row hover:-rotate-3 transition-all duration-1000"
        onClick={() => {
          if (filterIsOpened === false) {
            setFilterIsOpened(true);
          } else {
            setFilterIsOpened(false);
          }
        }}
      >
        <img src={filterIcon} alt="Filter icon" className="h-8 w-8" />
        <span className={`${filterIsOpened ? "opacity-0" : "opacity-100"} p-1`}>
          Filter
        </span>
      </button>
      <div
        className={`${
          filterIsOpened ? "w-full border opacity-100" : "w-0 opacity-0"
        } transition-all duration-1000  overflow-hidden bg-white rounded-xl border-gray-400 shadow-2xl pt-[10px] w-full text-right`}
      >
        <button
          onClick={() => {
            props.onClear();
            setVeganIsChecked(false);
            setKetoIsChecked(false);
            setGlutenFreeIsChecked(false);
          }}
          className={`${
            filterIsOpened ? "right-3 " : "-left-10"
          }  py-1 px-2 text-red-600 font-bold border-2 border-red-600 rounded-xl -mt-1 mr-1 -mb-10`}
        >
          Clear
        </button>
        <form className="text-center text-lg -mt-6 pb-2">
          <ul className="flex flex-row justify-evenly">
            <FilterItem
              isChecked={veganIsChecked}
              isOpened={filterIsOpened}
              onFilter={() => {
                props.onFilter("vegan");
                if (veganIsChecked === false) {
                  setVeganIsChecked(true);
                } else if (veganIsChecked === true) {
                  setVeganIsChecked(false);
                }
              }}
            >
              Vegan
            </FilterItem>
            <FilterItem
              isChecked={ketoIsChecked}
              isOpened={filterIsOpened}
              onFilter={() => {
                props.onFilter("keto");
                if (ketoIsChecked === false) {
                  setKetoIsChecked(true);
                } else if (ketoIsChecked === true) {
                  setKetoIsChecked(false);
                }
              }}
            >
              Keto
            </FilterItem>
            <FilterItem
              isChecked={glutenFreeIsChecked}
              isOpened={filterIsOpened}
              onFilter={() => {
                props.onFilter("gluten-free");
                if (glutenFreeIsChecked === false) {
                  setGlutenFreeIsChecked(true);
                } else if (glutenFreeIsChecked === true) {
                  setGlutenFreeIsChecked(false);
                }
              }}
            >
              Gluten-free
            </FilterItem>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Filter;
