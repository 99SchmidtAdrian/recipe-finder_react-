import remove from "../../images/remove.svg";

const DietInput = (props) => {
  return (
    <li className="mb-2 text-left p-[1px] md:w-10/12">
      <input
        className="pl-2  placeholder-gray-600 text-xl w-10/12 outline-none  border-2 border-gray-300 rounded-lg bg-white"
        placeholder="Diet (e.g. vegan)"
        name='diet'
        value={props.value}
        onChange={props.onChange}
      />
      <button
        type="button"
        onClick={(e) => {
          if (props.dietFields.length !== 1) {
            const values = [...props.dietFields];
            values.splice(props.index, 1);
            props.setDietFields(values)            
          }else{
            console.log(e.name);
          }
        }}
      >
        <img
          alt="delete field"
          src={remove}
          className="h-8 relative top-2 p-1 w-8"
        />
      </button>
    </li>
  );
};

export default DietInput;
