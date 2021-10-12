import React from "react";
import SideNav from "../Navbar/SideNav";
import AllRecipes from "./AllRecipes";
import Suggestion from "./Suggestion";
import Footer from "../Footer/Footer";

const SuggestRecipe = () => {
  return (
    <div className="flex flex-col bg-cover bg-fixed background-img">
      <div className=" flex flex-row justify-center">
        <SideNav className="absolute left-10" page="suggest" />
        <div className="flex-col w-7/12 mx-auto">
          <Suggestion />
          <AllRecipes />
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default SuggestRecipe;
