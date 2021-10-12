const Card = (props) => {
  return (
    <div className={"bg-gray-100 bg-opacity-80 w-full rounded-xl " + props.className} id={props.id}>
      {props.children}
    </div>
  );
};

export default Card