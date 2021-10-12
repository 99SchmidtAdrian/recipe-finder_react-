import { useParams } from "react-router-dom";
import Card from "../ui/Card/Card";
import RecipesPage from "./RecipesPage";
import dummyData from "../../dummyData";
import Line from "../ui/Card/Line";
import Suggestion from './Suggestion'
import './Recipe.css';

const Recipe = () => {
  const keywords = useParams();

  return (
    <RecipesPage>
      <Card className="border border-gray-400 mb-10 pb-10 px-24">
        <div className="text-center">
          <h1 className="text-4xl font-semibold mt-10 mb-1 mx-auto capitalize">
            {keywords.keywords}
          </h1>
          <Line className="mx-auto w-5/12 opacity-40" />
        </div>
        <div className="flex flex-row mt-10">
          <div className="w-5/12">
            <img
              src={process.env.PUBLIC_URL + dummyData[1].src}
              className="w-[350px] h-[250px] object-cover rounded-xl"
              alt={dummyData[1].name}
            />
          </div>
          <div className="flex flex-row w-7/12 text-2xl align-middle font-semibold">
            <ul className="mr-2 mx-auto flex flex-col justify-center text-right">
              <li>Vegan</li>
              <li>Vegetable</li>
              <li>Vegan</li>
              <li>Vegan</li>
            </ul>
            <Line className="h-[250px]" />
            <ul className="ml-2 mx-auto flex flex-col justify-center text-left">
              <li className="font-bold">Ingredients</li>
              <li>Vegetable broth</li>
              <li>Carrot</li>
              <li>Chickpea flour</li>
              <li>Chia seed</li>
              <li>Oil</li>
            </ul>
          </div>
        </div>
        <Line className="w-full mx-auto mt-10" />
        <div>
        <h5 className="font-bold text-xl mb-3">Directions</h5>
          <ol className='font-medium ml-10 ingredients'>
            <li>
              Preheat oven to 350 degrees F (175 degrees C). Grease and flour
              one 9x13 inch cake pan.
            </li>
            <li>
              Preheat oven to 350 degrees F (175 degrees C). Grease and flour
              one 9x13 inch cake pan.
            </li>
            <li>
              Preheat oven to 350 degrees F (175 degrees C). Grease and flour
              one 9x13 inch cake pan.
            </li>
            <li>
              Preheat oven to 350 degrees F (175 degrees C). Grease and flour
              one 9x13 inch cake pan.
            </li>
            <li>
              Preheat oven to 350 degrees F (175 degrees C). Grease and flour
              one 9x13 inch cake pan.
            </li>
            <li>
              Preheat oven to 350 degrees F (175 degrees C). Grease and flour
              one 9x13 inch cake pan.
            </li>
            <li>
              Preheat oven to 350 degrees F (175 degrees C). Grease and flour
              one 9x13 inch cake pan.
            </li>
            <li>
              Preheat oven to 350 degrees F (175 degrees C). Grease and flour
              one 9x13 inch cake pan.
            </li>
            <li>
              Preheat oven to 350 degrees F (175 degrees C). Grease and flour
              one 9x13 inch cake pan.
            </li>
            <li>
              Preheat oven to 350 degrees F (175 degrees C). Grease and flour
              one 9x13 inch cake pan.
            </li>
            <li>
              Preheat oven to 350 degrees F (175 degrees C). Grease and flour
              one 9x13 inch cake pan.
            </li>
            <li>
              Preheat oven to 350 degrees F (175 degrees C). Grease and flour
              one 9x13 inch cake pan.
            </li>
          </ol>
        </div>
      </Card>
      <Suggestion />
    </RecipesPage>
  );
};

export default Recipe;
