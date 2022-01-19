const IngredientInput = (props) => {
  return (
    <li className="flex flex-row">
      <input
        className="w-1/12 border-2 mb-2 border-gray-300 text-center rounded-lg placeholder-gray-600 text-sm appearance-none"
        placeholder="1"
        type="number"
        
      />
      <select
        className="w-2/12 border-2 mb-2 border-gray-300 text-center rounded-lg placeholder-gray-600 text-sm pb-1"
        defaultValue="tbs"
      >
        <option value="piece">piece</option>
        <option value="g">g</option>
        <option value="ts">ts</option>
        <option value="tbs">tbs</option>
        <option value="kg">kg</option>
        <option value="ml">ml</option>
        <option value="l">l</option>
      </select>
      <input
        className="w-8/12 border-2 mb-2 border-gray-300 text-center rounded-lg placeholder-gray-600"
        placeholder="Ingredient"
        name="ingredient"
      />
    </li>
  );
};

export default IngredientInput;
