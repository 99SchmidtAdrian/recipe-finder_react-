import React, { useState, useEffect } from "react";
import RecipesPage from "../ui/RecipesPage";
import Card from "../ui/Card";
import "./SuggestRecipe.css";
import Line from "../ui/Line";
import IngredientInput from "./IngredientInput";
import DietInput from "./DietInput";
import DirectionInput from "./DirectionInput";
import ImageInput from "./ImageInput";
import Alert from "../ui/Alert";

const SuggestRecipe = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [nameField, setNameField] = useState([{ name: "" }]);
  const [dietFields, setDietFields] = useState([{ diet: "" }]);
  const [ingredientFields, setIngredientFields] = useState([
    { amount: "", unit: "", ingredient: "" }
  ]);
  const [directionFields, setDirectionFields] = useState([{ direction: "" }]);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const dietChangeInputValueHandler = (index, e) => {
    const values = [...dietFields];
    values[index][e.target.name] = e.target.value;
    setDietFields(values);
  };

  const ingredientChangeInputValueHandler = (index, e) => {
    const values = [...ingredientFields];
    values[index][e.target.name] = e.target.value;
    if (e.target.value !== "" && values[index].unit === "") {
      values[index].unit = "tbs";
    }
    setIngredientFields(values);
  };

  const directionChangeInputValueHandler = (index, e) => {
    const values = [...directionFields];
    values[index][e.target.name] = e.target.value;
    setDirectionFields(values);
  };

  const handleSubmit = () => {
    if (!imageUrl || !selectedImage) {
      setAlerts([
        ...alerts,
        { message: "You have to upload an image.", type: "warning" }
      ]);
    } else if (ingredientFields.length < 3) {
      setAlerts([
        ...alerts,
        {
          message: "The recipe must contain 3 ingredients at least",
          type: "warning"
        }
      ]);
    } else if (directionFields.length < 3) {
      setAlerts([
        ...alerts,
        {
          message: "The recipe must have 3 steps at least",
          type: "warning"
        }
      ]);
    }else {

    setAlerts([
      ...alerts,
      { message: "Your recipe has been sent successfully."}
    ]);}
  };

  return (
    <RecipesPage page="suggest">
      <Card className="px-3 py-5 xl:mb-10 2xl:mb-40">
        <h1 className="text-center text-3xl font-bold">Suggest a recipe</h1>
        <div className="text-center text-lg font-semibold mt-1">
          Fill the information below
        </div>
        <form onSubmit={handleSubmit}>
          <div className="my-3 text-center xl:my-5">
            <input
              placeholder="Name"
              className="border-2 border-gray-300 text-[20px] md:text-[30px] rounded-lg placeholder-gray-600 text-center"
              name="name"
              value={nameField.name}
              onChange={(e) => {
                setNameField([{ name: e.target.value }]);
              }}
            />
          </div>
          <div className="flex flex-col md:flex-row md:mt-10">
            <ImageInput
              imageUrl={imageUrl}
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
            <div className="flex flex-col lg:w-7/12 text-2xl font-semibold sm:w-10/12 mt-10 md:mt-0 md:ml-6 lg:ml-12">
              <h6 className="font-bold mb-2">Diets</h6>
              <ul className="mr-2 flex flex-col capitalize h-full text-lg">
                {dietFields.map((dietField, index) => (
                  <div key={index}>
                    <DietInput
                      index={index}
                      value={dietField.diet}
                      onChange={(e) => dietChangeInputValueHandler(index, e)}
                      setDietFields={setDietFields}
                      dietFields={dietFields}
                    />
                  </div>
                ))}
                <button
                  type="button"
                  className="bg-gray-300 border border-gray-700 mt-2 w-[fit-content] px-3 ml-1 rounded-xl font-medium"
                  onClick={() => {
                    setDietFields([...dietFields, { diet: "" }]);
                  }}
                >
                  +
                </button>
              </ul>
              <div className="mt-10">
                <h6 className="font-bold mb-2">Ingredients</h6>
                <ul className="flex flex-col text-lg h-full">
                  {ingredientFields.map((ingredientField, index) => (
                    <div key={index}>
                      <IngredientInput
                        index={index}
                        value={ingredientField.ingredient}
                        onChange={(e) =>
                          ingredientChangeInputValueHandler(index, e)
                        }
                        setIngredientFields={setIngredientFields}
                        ingredientFields={ingredientFields}
                        amountValue={ingredientField.amount}
                        unitValue={ingredientField.unit}
                        ingredientValue={ingredientField.ingredient}
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    className="bg-gray-300 border border-gray-700 mt-2 w-[fit-content] px-3 ml-1 rounded-xl font-medium"
                    onClick={() => {
                      setIngredientFields([
                        ...ingredientFields,
                        { amount: "", unit: "", ingredient: "" }
                      ]);
                    }}
                  >
                    +
                  </button>
                </ul>
              </div>
            </div>
          </div>
          <Line className="w-full mx-auto mt-10 sm:w-11/12" />
          <div className="mt-5 md:ml-24 lg:ml-20 2xl:ml-56">
            <h5 className="font-bold text-xl mb-5">Directions</h5>
            <ol className="font-medium directions">
              {directionFields.map((directionField, index) => (
                <div key={index} className="h-fit flex flex-row w-full">
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
            </ol>
            <button
              type="button"
              className="bg-gray-300 border border-gray-700 py-1 px-10 rounded-xl w-[fit-content] font-medium text-xl"
              onClick={() => {
                setDirectionFields([...directionFields, { direction: "" }]);
              }}
            >
              +
            </button>
          </div>
          <div className="text-right">
            <button
              type="button"
              className="bg-gray-300 border border-gray-700 py-3 px-10 rounded-xl w-[fit-content] font-medium leading-4 text-xl mt-16 text-center"
              onClick={handleSubmit}
            >
              Send Recipe
            </button>
          </div>
        </form>
      </Card>
      <div className="fixed bottom-5 w-[fit-content] mx-auto left-0 right-0 z-50 lg:w-[370px] lg:right-10 lg:left-auto">
        {alerts.map((alert, index) => (
          <div key={index}>
            <Alert
              index={index}
              value={alert.message}
              type={alert.type}
              fields={alerts}
              setFields={setAlerts}
              isActive={alert.isActive}
            />
          </div>
        ))}
      </div>
    </RecipesPage>
  );
};

export default SuggestRecipe;
