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
  const [results, setResults] = useState([]);

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
    setResults([]);
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].name.includes(keywords.keywords) ||
        data[i].ingredients.includes(keywords.keywords) ||
        data[i].diet.includes(keywords.keywords)
      ) {
        setResults((results) => [
          ...results,
          { id: data[i].id, name: data[i].name, src: data[i].src }
        ]);
      }
    }
  }, [data]);

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
      return <div className="text-2xl ">No result</div>;
    }
  };

  return (
    <RecipesPage>
      <Card className="mb-20 border border-gray-400 py-10">
        <h1 className="text-2xl md:text-4xl font-semibold text-center mb-5">
          Results
        </h1>
        {isFetching && <Fetching />}
        <div className="flex flex-row justify-evenly flex-wrap items-center">
          {!isFetching && mapFilteredItems()}
        </div>
      </Card>
      <Suggestion className="xl:mb-48" />
    </RecipesPage>
  );
};

export default Results;
