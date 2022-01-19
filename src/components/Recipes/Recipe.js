import { Link, useParams } from "react-router-dom";
import Card from "../ui/Card";
import RecipesPage from "../ui/RecipesPage";
import Line from "../ui/Line";
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
      "https://api.jsonbin.io/v3/c/61cb68ffea3bf56821393a5f/",
      {
        headers: {
          "X-Master-Key":
            "$2b$10$q3QXAUseWI5cok7RdeBLqO4x0QrLWpxQvsy.Ew4DAd4kfc0JLV3mm"
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
              <Line className="mx-auto w-5/12 opacity-40" />
            </div>
            <div className="flex flex-col lg:flex-row mt-10">
              <div className="lg:w-5/12">
                <img
                  src={process.env.PUBLIC_URL + recipe.src}
                  className="lg:w-[350px] h-[250px] object-cover rounded-xl"
                  alt={recipe.name}
                />
              </div>
              <div className="flex flex-row lg:w-7/12 text-2xl align-middle font-semibold mt-4 lg:mt-0">
                <ul className="mr-2 mx-auto flex flex-col justify-center text-right capitalize">
                  {recipe.diet.map((element) => {
                    return <li key={element}>{element}</li>;
                  })}
                </ul>
                <Line className="h-[250px]" />
                <ul className="ml-2 mx-auto flex flex-col justify-center text-left capitalize">
                  <li className="font-bold">Ingredients</li>
                  {recipe.ingredients.map((element) => {
                    return (
                      <li key={element.type}>
                        {element.amount + " " + element.type}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <Line className="w-full mx-auto mt-10" />
            <div>
              <h5 className="font-bold text-xl mb-3">Directions</h5>
              <ol className="font-medium ml-10 ingredients">
                {recipe.directions.map((element) => {
                  return <li key={element.step}>{element.direction}</li>;
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
      <Suggestion />
    </RecipesPage>
  );
};

export default Recipe;
