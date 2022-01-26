import RecipeItem from "./RecipeItem";
import Card from "../ui/Card";
import React, { useState, useEffect, useCallback } from "react";
import Filter from "./Filter";
import Fetching from "../ui/Fetching";

const AllRecipes = () => {
  const [isFiltered, setIsFiltered] = useState(false);
  const [filters, setFilters] = useState({ filter: [] });
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState([]);
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

  const setFiltersHandler = (newFilter) => {
    if ([...filters.filter].includes(newFilter)) {
      const newArray = filters.filter.filter((item) => item !== newFilter);
      setFilters({ filter: newArray });
    } else if (![...filters.filter].includes(newFilter)) {
      setIsFiltered(true);
      setFilters({ filter: [...filters.filter, newFilter] });
    }
  };

  const clearFilterHandler = () => {
    setFilters({ filter: [] });
    setIsFiltered(false);
  };

  const mapAllRecipe = () => {
    return data.map((recipe) => (
      <RecipeItem
        key={recipe.id}
        name={recipe.name}
        src={recipe.src}
        className="mx-2"
      />
    ));
  };
  useEffect(() => {
    setResults([]);
    for (let i = 0; i < data.length; i++) {
      if (filters.filter.every((v) => data[i].diet.includes(v))) {
        setResults((results) => [
          ...results,
          { id: data[i].id, name: data[i].name, src: data[i].src }
        ]);
      }
    }
  }, [filters.filter, data]);

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
    <Card className="relative border border-gray-400 mb-10 2xl:mb-40">
      <Filter
        onFilter={setFiltersHandler}
        onClear={clearFilterHandler}
        filters={filters}
      />
      {isFetching && <Fetching />}
      <div className={`xl:px-24 py-10 flex flex-row flex-wrap justify-evenly`}>
        {isFiltered && mapFilteredItems()}
        {!isFiltered && mapAllRecipe()}
      </div>
    </Card>
  );
};

export default AllRecipes;
