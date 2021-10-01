import React from "react";
import dummyData from "../../dummyData";
import Result from "../Results/Result";
import logo from "../../images/25452.svg";
import Card from "../ui/Card/Card";

const Recipes = () => {
  return (
    <div className="bg-cover bg-fixed background-img h-screen">
      <div className="flex flex-col items-center w-2/12 left-24 relative">
          <img src={logo} className="h-64" alt="vegan-friendly logo" />
        <Card className="">Yo</Card>
      </div>
      {/* {dummyData.map((recipe) => (
        <Result key={recipe.id} name={recipe.name} />
      ))} */}
    </div>
  );
};

export default Recipes;
