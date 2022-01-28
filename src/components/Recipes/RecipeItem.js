import { Link } from "react-router-dom";
import Card from "../ui/Card";

const RecipeItem = (props) => {
  return (
    <Link to={{ pathname: `/recipe/${props.name}` }} className={props.linkClass}>
      <Card
        className={
          "w-[200px] lg:w-[180px] 2xl:w-[200px] border-gray-400 shadow-xl my-6 hover:translate-y-[-5px] transition-all duration-500 mx-auto " +
          props.className
        }
      >
        <img
          src={process.env.PUBLIC_URL + props.src}
          alt={props.name + " image"}
          className="h-[150px] rounded-t-xl object-cover w-full"
        />
        <div className="font-medium py-1 capitalize text-center min-h-[56px] flex flex-col justify-center">
          {props.name}
        </div>
      </Card>
    </Link>
  );
};

export default RecipeItem;
