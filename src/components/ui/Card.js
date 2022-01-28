const Card = (props) => {
  return (
    <div
      className={
        "bg-white w-full rounded-xl " + props.className
      }
      id={props.id}
    >
      {props.children}
    </div>
  );
};

export default Card;
