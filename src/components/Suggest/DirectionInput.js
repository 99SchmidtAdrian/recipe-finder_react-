const DirectionInput = (props) => {
  return (
    <li>
      <input
        className="w-8/12 border-2 border-gray-300 pl-2 rounded-lg placeholder-gray-600"
        placeholder="Direction"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        />
    </li>
  );
};

export default DirectionInput;
