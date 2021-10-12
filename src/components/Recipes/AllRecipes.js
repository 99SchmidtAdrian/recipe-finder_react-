import dummyData from "../../dummyData";
import RecipeItem from "./RecipeItem";
import Card from "../ui/Card/Card";
import React, { useState, useEffect } from "react";
// import Sort from "./Sort";
import Filter from "./Filter";

const AllRecipes = () => {
  const [isFiltered, setIsFiltered] = useState(false);
  const [filters, setFilters] = useState({ filter: [] });
  const [noResults, setNoResults] = useState(false);
  const [gridCols, setGridCols] = useState(3);

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
    return dummyData.map((recipe) => (
      <RecipeItem
        key={recipe.id}
        name={recipe.name}
        src={recipe.src}
        className="mx-auto"
      />
    ));
  };

  const mapFilteredItems = () => {
    return dummyData.map(
      (recipe) =>
        filters.filter.every((v) => recipe.diet.includes(v)) && (
          <RecipeItem
            key={recipe.id}
            name={recipe.name}
            src={recipe.src}
            className="mx-auto"
          />
        )
    );
  };

  const noResultsDiv = () => {
    return <div className="text-center mt-[50px] mb-[50px] text-3xl">No results</div>
  }

  useEffect(() => {
    const resultsDiv = document.getElementById("results")
    if(resultsDiv.getElementsByTagName('*').length !==0){
      setNoResults(true)
      setGridCols(3)
    }else{
      setGridCols(1)
      setNoResults(false)
    }
  }, [filters.filter], [isFiltered]);

  return (
    <Card className="relative border border-gray-400">
      {/* <Sort className="absolute left-10 top-16" /> */}
      <Filter
        onFilter={setFiltersHandler}
        onClear={clearFilterHandler}
        filters={filters}
      />
      <div className={`px-24  py-10 grid grid-cols-${gridCols}`} id="results">
      {isFiltered ? mapFilteredItems() : mapAllRecipe()}
      {isFiltered ? mapFilteredItems() : mapAllRecipe()}
      {isFiltered ? mapFilteredItems() : mapAllRecipe()}
      {isFiltered ? mapFilteredItems() : mapAllRecipe()}
      {isFiltered ? mapFilteredItems() : mapAllRecipe()}
        {!noResults && noResultsDiv()}
      </div>
    </Card>
  );
};

export default AllRecipes;
