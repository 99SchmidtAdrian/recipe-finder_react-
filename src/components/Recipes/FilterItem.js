const FilterItem = (props) => {
  return (
    <li className="flex items-center">
      <div className="flex mx-auto ">
        <label
          onClick={props.onFilter}
          className="font-semibold block cursor-pointer h-[28px]"
        >
          {props.children}
        </label>
        <input
          type="checkbox"
          className={`${
            props.isOpened ? "opacity" : ""
          } ml-2 h-[28px] border-white`}
          checked={props.isChecked}
          onChange={props.onFilter}
        />
      </div>
    </li>
  );
};

export default FilterItem;
