import React from "react";
import AllRecipes from "./AllRecipes";
import Suggestion from "./Suggestion";
import RecipesPage from "../ui/RecipesPage";

const Recipes = () => {
  return (
    <RecipesPage page="recipes">
      <Suggestion />
      <AllRecipes />
    </RecipesPage>
  );
};

export default Recipes;
