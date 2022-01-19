import React, { useState, useEffect } from "react";
import RecipesPage from "../ui/RecipesPage";
import Card from "../ui/Card";
import "./SuggestRecipe.css";
import Line from "../ui/Line";
import IngredientInput from "./IngredientInput";
import DietInput from "./DietInput";
import DirectionInput from "./DirectionInput";

const SuggestRecipe = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [dietFields, setDietFields] = useState([{ diet: "" }]);
  const [ingredientFields, setIngredientFields] = useState([{ ingredient: "" }]);
  const [directionFields, setDirectionFields] = useState([{ direction: "" }]);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
      console.log(selectedImage + " " + imageUrl);
    }
  }, [selectedImage]);

  const dietChangeInputValueHandler = (index, e) => {
    const values = [...dietFields];
    values[index][e.target.name] = e.target.value;
    setDietFields(values);
  };

  const addDietHandler = (e) => {
    e.preventDefault();
    setDietFields([...dietFields, { diet: "" }]);
  };

  const addIngredientHandler = (e) => {};

  const directionChangeInputValueHandler = (index, e) => {
    const values = [...directionFields];
    values[index][e.target.name] = e.target.value;
    setDirectionFields(values);
  };

  const addDirectionHandler = (e) => {
    e.preventDefault();
    setDirectionFields([...directionFields, { direction: "" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Diet Fields", dietFields,"\nDirections: ", directionFields);

  };
  return (
    <RecipesPage page="suggest">
      <div className="text-center text-3xl font-bold mb-10">Suggest Recipe</div>
      <Card className="p-5">
        <div className="text-center text-lg font-semibold">
          Fill the information below
        </div>
        <form onSubmit={handleSubmit}>
          <div className="text-center">
            <h1 className="text-4xl font-semibold mt-3 mb-2 mx-auto capitalize">
              <input
                placeholder="Name"
                className="border-2 border-gray-300 text-[30px] text-center rounded-lg placeholder-gray-600"
                name="name"
              />
            </h1>
            <Line className="mx-auto w-5/12 opacity-40" />
          </div>
          <div className="flex flex-col lg:flex-row mt-10">
            <div className="lg:w-5/12">
              <div className="flex flex-col">
                <label htmlFor="selected-image">
                  {!imageUrl && !selectedImage && (
                    <div className="lg:w-[350px] h-[250px] border border-black rounded-xl text-center flex items-center bg-gray-300 mx-10 justify-center flex-col cursor-pointer">
                      <div className="text-2xl">+</div>
                      <div className="text-sm">Add image</div>
                    </div>
                  )}
                  {imageUrl && !selectedImage && (
                    <div className="lg:w-[350px] h-[250px] border border-black rounded-xl text-center flex items-center bg-gray-300 mx-10 justify-center flex-col cursor-pointer">
                      <div className="text-2xl">+</div>
                      <div className="text-sm">Add image</div>
                    </div>
                  )}
                  {imageUrl && selectedImage && (
                    <div className="mx-10 before:w-[350px] before:h-[250px]bofore:cursor-pointer before:bg-black before:opacity-80 before:content=['asd'] before:absolute">
                      <img
                        src={imageUrl}
                        alt="The food"
                        className="cursor-pointer lg:w-[350px] h-[250px] object-cover rounded-xl"
                      />{" "}
                    </div>
                  )}
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="selected-image"
                  onChange={(e) => setSelectedImage(e.target.files[0])}
                />
              </div>
            </div>
            <div className="flex flex-row lg:w-7/12 text-2xl align-middle font-semibold mt-4 lg:mt-0">
              <div>
                <h6 className="font-bold mb-2 text-center">Diets</h6>
                <ul className="mr-2 mx-auto flex flex-col justify-center text-right capitalize h-full text-lg">
                  {dietFields.map((dietField, index) => (
                    <div key={index}>
                      <DietInput
                        index={index}
                        name="diet"
                        value={dietField.diet}
                        onChange={(e) => dietChangeInputValueHandler(index, e)}
                        setDietFields={setDietFields}
                        dietFields={dietFields}
                      />
                    </div>
                  ))}
                  <button
                    className="bg-gray-300 border border-gray-700 py-1 px-10 mx-auto mt-2 rounded-xl w-fit text-xl leading-5 font-medium "
                    onClick={addDietHandler}
                  >
                    Add diet
                    <br />+
                  </button>
                </ul>
              </div>
              <Line className="h-[250px] mx-10" />
              <div>
                <h6 className="font-bold mb-2 text-center">Ingredients</h6>
                <ul className="ml-2 mx-auto flex flex-col justify-center text-left capitalize text-lg h-full">
                {/* {ingredientFields.map((dietField, index) => (
                    <div key={index}>
                      <IngredientInput
                        index={index}
                        name="ingredient"
                        value={ingredientFields.ingredient}
                        onChange={(e) => dietChangeInputValueHandler(index, e)}
                        setIngredientFields={setIngredientFields}
                        ingredientFields={ingredientFields}
                      />
                    </div>
                  ))} */}
                  <button
                    className="bg-gray-300 border border-gray-700 py-1 px-10 mx-auto mt-2 rounded-xl w-fit text-xl leading-5 font-medium "
                    onClick={addIngredientHandler}
                  >
                    Add ingredient
                    <br />+
                  </button>
                </ul>
              </div>
            </div>
          </div>
          <Line className="w-full mx-auto mt-10" />
          <div>
            <h5 className="font-bold text-xl mb-3">Directions</h5>
            <ol className="font-medium ml-10 ingredients">
            {directionFields.map((directionField, index) => (
                    <div key={index}>
                      <DirectionInput
                        index={index}
                        name="direction"
                        value={directionField.direction}
                        onChange={(e) => directionChangeInputValueHandler(index, e)}
                        setDirectionFields={setDirectionFields}
                        directionFields={directionFields}
                      />
                    </div>
                  ))}
              <button
                className="bg-gray-300 border border-gray-700 py-1 px-10 mx-auto rounded-xl w-[fit-content] font-medium leading-4 text-xl"
                onClick={addDirectionHandler}
              >
                Add direction
                <br />+
              </button>
            </ol>
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="bg-gray-300 border border-gray-700 py-3 px-10 rounded-xl w-[fit-content] font-medium leading-4 text-xl mt-16 text-center"
              onClick={handleSubmit}
            >
              Send Recipe
            </button>
          </div>
        </form>
      </Card>
    </RecipesPage>
  );
};

export default SuggestRecipe;
