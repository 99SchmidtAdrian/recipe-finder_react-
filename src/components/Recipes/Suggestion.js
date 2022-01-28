import React, { useState, useEffect, useCallback } from "react";
import Card from "../ui/Card";
import RecipeItem from "./RecipeItem";
import Fetching from "../ui/Fetching";

const Suggestion = (props) => {
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

  //calculating current week
  let curr = new Date();
  let week = [];

  for (let i = 1; i <= 7; i++) {
    let first = curr.getDate() - curr.getDay() + i;
    let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
    week.push(day);
  }

  return (
    <Card className={"text-center mb-10 pt-5 pb-10 xl:px-24 " + props.className}>
      <div>
        <h1 className="text-2xl md:text-4xl font-semibold mb-6 mx-auto ">
          This week's suggestion
        </h1>
      </div>
      {isFetching && <Fetching />}
      <div className="flex flex-row flex-wrap justify-evenly">
        {data.map(
          (recipe) =>
            recipe.isWeeklySuggestionOn !== undefined && (
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
  );
};

export default Suggestion;
