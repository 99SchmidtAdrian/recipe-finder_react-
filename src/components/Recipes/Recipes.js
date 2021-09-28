import React from "react";
import dummyData from "../../dummyData";
import Result from "../Results/Result";

const Recipes = () => {

  return (
    <div className="bg-blue-200 h-screen items-center">
      {dummyData.map((recipe) =>
          <Result key={recipe.id} name={recipe.name} />
      )}
    </div>
  );
};

export default Recipes;
