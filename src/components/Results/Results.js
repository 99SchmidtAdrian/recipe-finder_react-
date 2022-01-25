import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Fetching from "../ui/Fetching";
import RecipesPage from "../ui/RecipesPage";
import Card from "../ui/Card";
import Suggestion from "../Recipes/Suggestion";
import RecipeItem from "../Recipes/RecipeItem";

const Results = () => {
  const keywords = useParams();
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

  return (
    <RecipesPage>
      <Card className="mb-20 border border-gray-400 py-10">
        <h1 className="text-2xl md:text-4xl font-semibold text-center mb-5">
          Results
        </h1>
        {isFetching && <Fetching />}
        <div className="flex flex-row justify-evenly flex-wrap items-center">
          {!isFetching &&
            data.map(
              (recipe) =>
                (recipe.name.includes(keywords.keywords) ||
                  recipe.ingredients.includes(keywords.keywords) ||
                  recipe.diet.includes(keywords.keywords)) && (
                  <RecipeItem
                    key={recipe.id}
                    name={recipe.name}
                    src={recipe.src}
                    linkClass="mx-2"
                  />
                )
            )}
        </div>
      </Card>
      <Suggestion className="xl:mb-48" />
    </RecipesPage>
  );
};

export default Results;
