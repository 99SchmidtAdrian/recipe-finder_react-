import { Link, useParams } from "react-router-dom";
import Card from "../ui/Card";
import RecipesPage from "../ui/RecipesPage";
import Suggestion from "./Suggestion";
import React, { useState, useEffect, useCallback } from "react";
import Fetching from "../ui/Fetching";

const Recipe = () => {
  const keywords = useParams();
  const [recipeFound, setRecipeFound] = useState(false);
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchRecipesHandler = useCallback(async () => {
    setIsFetching(true);
    const response = await fetch(
      "https://api.jsonbin.io/v3/c/61ef3ba7bd6e744997eb2305/",
      {
        headers: {
          "X-Master-Key":
          "$2b$10$kA9wXBWcQo0NvUAsmwlVt..O.jGDFC8ewrSQvPpfwqvFqRW7bIj9C"
        }
      }
    );
    const convertedRecipes = await response.json();
    const recipes = convertedRecipes.schemaDoc.recipes;
    setData(recipes);
    setIsFetching(false);
  }, []);

  useEffect(() => {
    fetchRecipesHandler();
  }, [fetchRecipesHandler]);

  useEffect(() => {
    return data.map(
      (recipe) => recipe.name === keywords.keywords && setRecipeFound(true)
    );
  });

  const result = () => {
    return data.map((recipe) => {
      if (recipe.name === keywords.keywords) {
        return (
          <React.Fragment key="">
            <div className="text-center">
              <h1 className="text-4xl font-semibold mt-10 mb-2 mx-auto capitalize">
                {recipe.name}
              </h1>
            </div>
            <div className="flex flex-col 2xl:flex-row 2xl:justify-evenly mt-10">
              <div className="mb-5">
                <img
                  src={process.env.PUBLIC_URL + recipe.src}
                  className="h-[250px] mx-auto w-11/12 object-cover rounded-xl sm:w-[600px] sm:h-[300px] xl:w-[400px]"
                  alt={recipe.name}
                />
              </div>
              <div className="text-2xl font-semibold ml-5 sm:flex sm:flex-row sm:justify-evenly 2xl:text-xl">
                <ul className="capitalize sm:w-fit 2xl:mr-10">
                  <li className="font-bold sm:mb-1">Diets</li>
                  {recipe.diet.map((element) => {
                    return (
                      <li key={element} className="ml-4">
                        {element}
                      </li>
                    );
                  })}
                </ul>
                <ul className="flex flex-col text-left capitalize mt-5 sm:mt-0 sm:w-fit">
                  <li className="font-bold">Ingredients</li>
                  {recipe.ingredients.map((element) => {
                    return (
                      <li key={element.type} className="ml-4">
                        {element.amount + " " + element.type}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div>
              <h5 className="font-bold text-xl mb-3 mt-10">Directions</h5>
              <ol className="font-medium ml-10 directions">
                {recipe.directions.map((element) => {
                  return <li key={element.step} className="w-10/12">{element.direction}</li>;
                })}
              </ol>
            </div>
          </React.Fragment>
        );
      } else return "";
    });
  };

  const noResult = () => {
    return (
      <div className="text-center">
        <div className="text-center pt-10 font-bold text-2xl">
          No recipe found
        </div>
        <div className="font-semibold text-lg border-2 border-black p-2 rounded-xl mt-2 w-[200px] mx-auto cursor-pointer">
          <Link to={{ pathname: "/recipes" }}>Back to recipes</Link>
        </div>
      </div>
    );
  };

  return (
    <RecipesPage>
      <Card className="border border-gray-400 mb-10 pb-10 lg:px-24">
        {isFetching && <Fetching className="mt-10" />}
        {!isFetching && recipeFound && result()}
        {!isFetching && !recipeFound && noResult()}
      </Card>
      <Suggestion className="xl:mb-48"/>
    </RecipesPage>
  );
};

export default Recipe;
