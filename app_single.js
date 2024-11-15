import { fetchIdApi } from "./api_connection.js";
import { displaySingleRecipe } from "./recipes.js";
import { getRecipeId } from "./idSearch.js";
import { displayIngredientsList } from "./displayIngredients.js";

const container = document.querySelector('.s-recipe-container');

const init = async() => {
  const recipeId = getRecipeId();  
  if(recipeId) {
    const recipeData = await fetchIdApi(recipeId);
    displaySingleRecipe(recipeData, container);
    const ingredientsContainer = document.querySelector('.s-recipe__ingredients-list');
    displayIngredientsList(recipeData, ingredientsContainer);    
  } else {
    console.log(`No recipe ID found`)
  }
}

window.addEventListener('load', init);