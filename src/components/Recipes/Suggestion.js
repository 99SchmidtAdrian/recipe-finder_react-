import Card from "../ui/Card/Card";
import RecipeItem from "./RecipeItem";
import dummyData from "../../dummyData";

const Suggestion = (props) => {
  return (
    <Card className={props.className + " border border-gray-400 text-center mb-10 pb-10 px-24"}>
      <div>
        <h1 className="text-4xl font-semibold my-10 mx-auto">
          This week's suggestion
        </h1>
      </div>
      <div className="grid grid-cols-3">
      {dummyData.map((recipe) =>
        recipe.isWeeklySuggestion &&
          <RecipeItem key={recipe.id} name={recipe.name} src={recipe.src} className="mx-auto" />
      )}
      </div>
    </Card>
  );
};

export default Suggestion;
