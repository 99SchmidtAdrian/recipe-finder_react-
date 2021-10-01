//dummy datas

const redLentilPattiesIngredients = [
  "red lentils",
  "vegetable broth",
  "vegetables",
  "chickpea flour",
  "chickpea",
  "flour",
  "chia seed",
  "oil",
];
const chrispyChickpeasIngredients = [
  "chickpea",
  "olive oil",
  "sea salt",
  "garlic powder",
  "smoked paprika",
  "cumin",
  "curry",
  "cayenne pepper",
];
const ketoCrackersIngredients = [
  "non-dairy milk",
  "sunflower seeds",
  "nutritional yeast",
  "seasoning",
];
const veganPancakeIngredients = [
  "flour",
  "sugar",
  "baking powder",
  "salt",
  "non-dairy milk",
  "vinegar",
  "vanillia",
  "maple syrup",
];

const dummyData = [
  {
    name: "red lentil patties",
    ingredients: redLentilPattiesIngredients,
    time: 35,
    diet: "vegan, gluten-free",
    src: "static/img/red-lentil-patties.png",
    isWeeklySuggestion: true,
    id: 1,
  },
  {
    name: "chrispy chickpeas",
    ingredients: chrispyChickpeasIngredients,
    time: 20,
    diet: "vegan, gluten-free",
    src: "static/img/chrispy-chickpeas.jpeg",
    id: 2,
  },
  {
    name: "keto crackers",
    ingredients: ketoCrackersIngredients,
    time: 20,
    diet: "vegan, gluten-free, paleo",
    src: "static/img/keto-crackers.jpg",
    id: 3,
  },
  {
    name: "vegan pancakes",
    ingredients: veganPancakeIngredients,
    time: 40,
    diet: "vegan",
    src: "static/img/vegan-pancakes.jpg",
    id: 4,
  },
];

export default dummyData;
