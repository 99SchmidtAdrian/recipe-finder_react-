import { Link } from "react-router-dom";
import Card from "../ui/Card/Card";

const RecipeItem = (props) => {
  return (
    <Link to={{ pathname: `/recipe/${props.name}` }}>
      <Card
        className={
          props.className + " w-[200px] border border-gray-400 shadow-xl my-6 hover:-translate-y-3 transition-all duration-1000"
        }
      >
        <img
          src={process.env.PUBLIC_URL + props.src}
          alt={props.name + " image"}
          className="h-[150px] w-full object-cover rounded-t-xl hover:w-[225px] hover: transition-all duration-1000"
        />
        <div className="font-medium py-1 capitalize text-center">
          {props.name}
        </div>
      </Card>
    </Link>
  );
};

export default RecipeItem;