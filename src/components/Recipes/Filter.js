import React, { useState } from "react";
import filterIcon from "../../images/filter-icon.svg";
import FilterItem from "./FilterItem";

const Filter = (props) => {
  const [veganIsChecked, setVeganIsChecked] = useState(false);
  const [ketoIsChecked, setKetoIsChecked] = useState(false);
  const [glutenFreeIsChecked, setGlutenFreeIsChecked] = useState(false);
  const [filterIsOpened, setFilterIsOpened] = useState(false);

  return (
    <div className="h-[fit-content]">
      <button
        className="absolute pt-[10px] ml-3 z-10 flex flex-row transition-all duration-1000"
        onClick={() => {
          if (filterIsOpened === false) {
            setFilterIsOpened(true);
          } else {
            setFilterIsOpened(false);
          }
        }}
      >
        <img src={filterIcon} alt="Filter icon" className="h-8 w-8" />
        <span
          className={`${
            filterIsOpened ? "opacity-0" : "opacity-100 delay-700"
          } p-1 transition-all duration-500 `}
        >
          Filter
        </span>
      </button>
      <div
        className={`${
          filterIsOpened ? "border opacity-100 h-[100px] md:w-full" : "opacity-0 h-0 md:w-0"
        } md:h-[50px] transition-all duration-1000  overflow-hidden bg-white rounded-xl border-gray-400 shadow-2xl pt-[10px] text-right`}
      >
        <form className="text-center text-lg pb-2">
          <ul className="flex flex-col md:flex-row justify-evenly">
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
        <button
          onClick={() => {
            props.onClear();
            setVeganIsChecked(false);
            setKetoIsChecked(false);
            setGlutenFreeIsChecked(false);
          }}
          className={`${
            filterIsOpened ? "" : ""
          } py-1 px-2 text-red-600 font-bold border-2 border-red-600 rounded-xl top-0 mr-1 transform translate-y-[-90px] relative h-4/5 md:h-auto md:translate-y-[-40px]`}
        >
          Clear
        </button>

      </div>
    </div>
  );
};

export default Filter;
