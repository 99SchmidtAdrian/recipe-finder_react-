//dummy datas

const redLentilPattiesIngredients = ['red lentils', 'vegetable broth', 'vegetables', 'chickpea flour', 'chickpea', 'flour', 'chia seed','oil'];
const chrispyChickpeasIngredients = [' chickpea', ' olive oil', ' sea salt', ' garlic powder', ' smoked paprika', ' cumin', ' curry', ' cayenne pepper'];
const ketoCrackersIngredients = [' non-dairy milk', ' sunflower seeds', ' nutritional yeast', ' seasoning'];
const veganPancakeIngredients = [' flour', ' sugar', ' baking powder', ' salt', ' non-dairy milk', ' vinegar', ' vanillia', ' maple syrup']


export const dummyData = [{
    name: "red lentil patties",
    ingredients: redLentilPattiesIngredients,
    time: 35,
    holiday: "none",
    diet: "vegan, gluten-free",
    src: "static/img/red-lentil-patties.png",
}, {
    name: 'chrispy chickpeas',
    ingredients: chrispyChickpeasIngredients,
    time: 20,
    holiday: "none",
    diet: "vegan, gluten-free",
    src: 'static/img/chrispy-chickpeas.jpeg'
}, {
    name: "keto crackers",
    ingredients: ketoCrackersIngredients,
    time: 20,
    holiday: "none",
    diet: "vegan, gluten-free, paleo",
    src: 'static/img/keto-crackers.jpg',
}, {
    name: 'vegan pancakes',
    ingredients: veganPancakeIngredients,
    time: 40,
    holiday: 'none',
    diet: 'vegan',
    src: 'static/img/vegan-pancakes.jpg',
}];
