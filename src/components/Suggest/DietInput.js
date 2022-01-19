import remove from "../../images/remove.svg";

const DietInput = (props) => {
  return (
    <li className="relative border-2 mb-2 border-gray-300 rounded-lg text-left bg-white p-[1px]">
      <input
        className="text-center placeholder-gray-600 text-xl w-10/12 outline-none"
        placeholder="Diet (e.g. vegan)"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          const values = [...props.dietFields];
          values.splice(props.index, 1);
          props.setDietFields(values);
        }}
      >
        <img
          alt="delete field"
          src={remove}
          className="w-2/12 absolute -top-1 right-0 p-1"
        />
      </button>
    </li>
  );
};

export default DietInput;
