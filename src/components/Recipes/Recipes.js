import React from "react";
import AllRecipes from "./AllRecipes";
import Suggestion from "./Suggestion";
import RecipesPage from "../ui/RecipesPage";

const Recipes = () => {
  return (
    <RecipesPage >
      <Suggestion />
      <AllRecipes />
    </RecipesPage>
  );
};

export default Recipes;
