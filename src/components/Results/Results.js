import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import Fetching from "../ui/Fetching";
import RecipesPage from "../ui/RecipesPage";
import Card from "../ui/Card";
import Suggestion from "../Recipes/Suggestion";
import RecipeItem from "../Recipes/RecipeItem";

const Results = () => {
  const originalKeywords = useParams();
  const keywords = originalKeywords.keywords.toLowerCase();
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [results, setResults] = useState([]);

  const fetchRecipesHandler = useCallback(async () => {
    setIsFetching(true);
    const response = await fetch("https://api.npoint.io/b46a67e5e7b0b806263a");
    const convertedRecipes = await response.json();
    const recipes = await convertedRecipes.recipes;
    setData(recipes);
    setIsFetching(false);
  }, []);

  useEffect(() => {
    fetchRecipesHandler();
  }, [fetchRecipesHandler]);

  useEffect(() => {
    setResults([]);
    for (let i = 0; i < data.length; i++) {
      const name = data[i].name.toLowerCase();
      let hasTheIngredient = false;
      data[i].ingredients.forEach((element) => {
        if (element.type.toLowerCase().includes(keywords)) {
          hasTheIngredient = true;
        }
      });
      let diets = [];
      let transformedDiets = [];
      data[i].diet.forEach((element) => {
        transformedDiets = [
          ...transformedDiets,
          element.toLowerCase().replace("-", " ")
        ];
        diets = [...diets, element.toLowerCase()];
      });
      if (
        name.includes(keywords) ||
        hasTheIngredient ||
        transformedDiets.includes(keywords) ||
        diets.includes(keywords)
      ) {
        setResults((results) => [
          ...results,
          { id: data[i].id, name: data[i].name, src: data[i].src }
        ]);
      }
    }
  }, [data, keywords]);

  const mapFilteredItems = () => {
    if (results.length !== 0) {
      return results.map((recipe) => (
        <RecipeItem
          key={recipe.id}
          name={recipe.name}
          src={recipe.src}
          className="mx-2"
        />
      ));
    } else {
      return (
        <div className="text-center">
          <div className="text-center pt-10 font-semibold text-xl">
            No results
          </div>
          <div className="font-semibold text-lg border-2 border-black p-2 rounded-xl mt-5 w-[200px] mx-auto cursor-pointer">
            <Link to={{ pathname: "/recipes" }}>Go to recipes</Link>
          </div>
        </div>
      );
    }
  };

  return (
    <RecipesPage>
      <Suggestion />
      <Card className="mb-20 border border-gray-400 py-10 xl:px-24 xl:mb-48">
        <h1 className="text-2xl md:text-4xl font-semibold text-center mb-5">
          Results
        </h1>
        {isFetching && <Fetching />}
        <div className="flex flex-row justify-evenly flex-wrap items-center">
          {!isFetching && mapFilteredItems()}
        </div>
      </Card>
    </RecipesPage>
  );
};

export default Results;
