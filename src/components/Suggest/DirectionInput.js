import remove from "../../images/remove.svg";
import React, {Fragment} from 'react';

const DirectionInput = (props) => {
  return (
    <Fragment>
    <li className="h-fit w-9/12 ml-1">
      <textarea
        className="border-2 border-gray-300 pl-2 rounded-lg placeholder-gray-600 h-8 resize-none w-full"
        placeholder="Direction"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </li>
      <button
        className="w-2/12 translate-x-7 -translate-y-3"
        type="button"
        onClick={() => {
          if (props.directionFields.length !== 1) {
            const values = [...props.directionFields];
            values.splice(props.index, 1);
            props.setDirectionFields(values);
          } else {
            // some respond
          }
        }}
      >
        <img
          alt="delete field"
          src={remove}
          className="h-8 w-8 p-1"
        />
      </button>
      </Fragment>
  );
};

export default DirectionInput;
