import React from "react";
import remove from "../../images/remove.svg";

const IngredientInput = (props) => {
  return (
    <React.Fragment>
      <li className="flex flex-row md:w-10/12">
        <div className="w-10/12">
        <input
          className="border-2 border-gray-300 text-center rounded-lg placeholder-gray-600 h-7 text-sm appearance-none w-2/12 md:w-3/12 lg:text-[10px] xl:text-md"
          placeholder="Amount"
          type="number"
          name="amount"
          value={props.amountValue}
          onChange={props.onChange}
        />
        <select
          className="border-2 mb-2 border-gray-300 text-center rounded-lg text-sm pb-1 w-3/12 h-7"
          defaultValue="tbs"
          name="unit"
          onChange={props.onChange}
        >
          <option value="piece">piece</option>
          <option value="g">g</option>
          <option value="ts">ts</option>
          <option value="tbs">tbsp</option>
          <option value="kg">kg</option>
          <option value="ml">ml</option>
          <option value="liter">liter</option>
        </select>
        <input
          className="border-2 mb-2 border-gray-300 text-center rounded-lg placeholder-gray-600 text-base w-7/12 h-7 md:w-6/12"
          placeholder="Ingredient"
          name="ingredient"
          value={props.ingredientValue}
          onChange={props.onChange}
        />
        </div>
        <button
          type="button"
          onClick={(e) => {
            if (props.ingredientFields.length !== 1) {
              const values = [...props.ingredientFields];
              values.splice(props.index, 1);
              props.setIngredientFields(values);
            } else {
              console.log("ingredient");
            }
          }}
        >
          <img
            alt="delete field"
            src={remove}
            className="h-8 w-8 p-1 -top-1 relative"
          />
        </button>
      </li>
    </React.Fragment>
  );
};

export default IngredientInput;
