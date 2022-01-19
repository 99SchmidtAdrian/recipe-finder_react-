import React, {useState, useEffect, useCallback} from "react";
import { useParams } from "react-router-dom";
import Fetching from "../ui/Fetching";
import Result from "./Result";
import RecipesPage from "../ui/RecipesPage";
import Card from "../ui/Card";

const Results = () => {
  const keywords = useParams();
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



  return (
    <RecipesPage>
      <Card>
      {isFetching && <Fetching />}
      {!isFetching && data.map((recipe) =>
        (recipe.name.includes(keywords.keywords) ||
        recipe.ingredients.includes(keywords.keywords) ||
        recipe.diet.includes(keywords.keywords)) &&
          <Result key={recipe.id} name={recipe.name} />
      )}
      </Card>
    </RecipesPage>
  );
};

export default Results;
