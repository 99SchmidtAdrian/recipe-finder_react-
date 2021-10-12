import React, { useState } from "react";
import filterIcon from "../../images/filter-icon.svg";
import FilterItem from "./FilterItem";

const Filter = (props) => {
  const [veganIsChecked, setVeganIsChecked] = useState(false);
  const [ketoIsChecked, setKetoIsChecked] = useState(false);
  const [glutenFreeIsChecked, setGlutenFreeIsChecked] = useState(false);
  const [filterIsOpened, setFilterIsOpened] = useState(false);

  const veganFilter = () => {
    props.onFilter("vegan");
    if (veganIsChecked === false) {
      setVeganIsChecked(true);
    } else if (veganIsChecked === true) {
      setVeganIsChecked(false);
    }
  };
  const ketoFilter = () => {
    props.onFilter("keto");
    if (ketoIsChecked === false) {
      setKetoIsChecked(true);
    } else if (ketoIsChecked === true) {
      setKetoIsChecked(false);
    }
  };
  const glutenFreeFilter = () => {
    props.onFilter("gluten-free");
    if (glutenFreeIsChecked === false) {
      setGlutenFreeIsChecked(true);
    } else if (glutenFreeIsChecked === true) {
      setGlutenFreeIsChecked(false);
    }
  };
  const clearFilters = () => {
    props.onClear();
    setVeganIsChecked(false);
    setKetoIsChecked(false);
    setGlutenFreeIsChecked(false);
  };
  const filterOpenHandler = () => {
    if (filterIsOpened === false) {
      setFilterIsOpened(true);
    } else {
      setFilterIsOpened(false);
    }
  };

  return (
    <div>
      <button
        className="absolute h-8 w-8 pt-[10px] ml-3 z-10"
        onClick={filterOpenHandler}
      >
        <img src={filterIcon} alt="Filter icon" />
      </button>
      <div
        className={`${
          filterIsOpened ? "w-full border opacity-100" : "w-0 border-none opacity-0"
        } transition-all duration-1000  overflow-hidden bg-white rounded-xl border-gray-400 shadow-2xl pt-[10px] w-full text-right`}
      >
        <button
          onClick={clearFilters}
          className={`${
            filterIsOpened ? "right-3 " : "-left-10"
          }  py-1 px-2 text-red-600 font-bold border-2 border-red-600 rounded-xl -mt-1 -mb-10`}
        >
          Clear
        </button>
        <form className="text-center text-lg -mt-6 pb-2">
          <ul className="flex flex-row justify-evenly">
            <FilterItem
              onFilter={veganFilter}
              isChecked={veganIsChecked}
              isOpened={filterIsOpened}
            >
              Vegan
            </FilterItem>
            <FilterItem
              onFilter={ketoFilter}
              isChecked={ketoIsChecked}
              isOpened={filterIsOpened}
            >
              Keto
            </FilterItem>
            <FilterItem
              onFilter={glutenFreeFilter}
              isChecked={glutenFreeIsChecked}
              isOpened={filterIsOpened}
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
