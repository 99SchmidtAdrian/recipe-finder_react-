import React from "react";
import { useParams } from "react-router-dom";
import dummyData from "../../dummyData";
import Result from "./Result";

const Results = () => {
  const keywords = useParams();

  return (
    <div className="bg-blue-200 h-screen items-center">
      {dummyData.map((recipe) =>
        (recipe.name.includes(keywords.keywords) ||
        recipe.ingredients.includes(keywords.keywords) ||
        recipe.diet.includes(keywords.keywords)) &&
          <Result key={recipe.id} name={recipe.name} />
      )}
    </div>
  );
};

export default Results;
