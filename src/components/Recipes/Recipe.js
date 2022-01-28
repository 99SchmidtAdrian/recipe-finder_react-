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
    const response = await fetch("https://api.npoint.io/b46a67e5e7b0b806263a");
    const convertedRecipes = await response.json();
    const recipes = convertedRecipes.recipes;
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
            <h1 className="text-3xl md:text-5xl font-thin mt-10 mb-2 mx-auto capitalize w-full text-center">
              {recipe.name}
            </h1>
            <div className="flex flex-col mt-10 xl:flex-row justify-evenly 2xl:justify-center">
              <div className="mb-5">
                <img
                  src={process.env.PUBLIC_URL + recipe.src}
                  className="h-[250px] mx-auto w-11/12 object-cover rounded-xl sm:w-[600px] sm:h-[300px] xl:w-[300px] xl:h-[250px] 2xl:w-[400px] 2xl:h-[300px]"
                  alt={recipe.name}
                />
              </div>
              <div className="md:flex md:flex-row md:justify-evenly lg:flex-col">
                <div className="text-2xl font-semibold ml-5 2xl:text-xl">
                  <h2 className="font-thin sm:mb-1 xl:before:absolute xl:before:w-[250px] xl:before:block xl:before:translate-y-[19px] xl:before:translate-x-[55px] xl:before:bg-black xl:before:h-[1px] xl:before:opacity-20 ">
                    Diets
                  </h2>
                  <ul className="capitalize text-sm sm:w-fit mt-2 2xl:mr-10 space-y-1.5">
                    {recipe.diet.map((element, index) => {
                      return (
                        <li
                          key={index}
                          className={`${
                            element === "vegan" &&
                            "border-green-600 text-green-600 bg-green-100 "
                          } ${
                            element === "gluten-free" &&
                            "border-yellow-600 text-yellow-600 bg-yellow-100 "
                          } ${
                            element === "paleo" &&
                            "border-indigo-600 text-indigo-600 bg-indigo-200 "
                          } ${
                            element === "keto" &&
                            "border-blue-600 text-blue-600 bg-blue-200 "
                          } px-4 border-2 rounded-xl w-[fit-content] ml-4 whitespace-nowrap`}
                        >
                          {element}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="text-2xl mt-5 ml-5 2xl:text-xl md:mt-0 lg:mt-5">
                  <h2 className="font-thin sm:mb-1 xl:before:absolute xl:before:block xl:before:translate-y-[19px] xl:before:translate-x-[115px] xl:before:bg-black xl:before:h-[1px] xl:before:opacity-20 xl:before:w-[190px]">
                    Ingredients
                  </h2>
                  <ul className="flex flex-col text-base text-left mt-2 sm:w-fit">
                    {recipe.ingredients.map((element, index) => {
                      return (
                        <li
                          key={index}
                          className="ml-4 flex flex-row space-x-1 mb-5 md:mb-2"
                        >
                          <div className="font-semibold w-4/12 md:w-5/12">{element.amount}</div><div className="capitalize w-8/12 md:w-7/12">{element.type}</div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className=" w-10/12 2xl:mx-auto 2xl:w-4/6">
              <h5 className="font-bold text-xl mb-3 mt-10 ">Directions</h5>
              <ol className="font-medium ml-10 directions">
                {recipe.directions.map((element, index) => {
                  return (
                    <li
                      key={index}
                      className="before:text-green-400 before:border-green-400"
                    >
                      {element.direction}
                    </li>
                  );
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
      <Suggestion className="xl:mb-48" />
    </RecipesPage>
  );
};

export default Recipe;
