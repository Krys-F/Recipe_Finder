const displayRecipes = (meals, container) => {
  container.innerHTML = '';

  if(!meals){
    container.innerHTML = `<p>No recipes found for this search.</p>`;
    return;
  }

  const mealsArray = Array.isArray(meals) ? meals : [meals];

  const cardsHTML = mealsArray.map((meal) => {
    return ` 
      <div class="recipe-card">
        <img src="${meal.strMealThumb}"" alt="" srcset="" class="recipe-card__img">
        <h2 class="recipe-card__title">${meal.strMeal}</h2>  
        <a href="single_recipe.html?id=${meal.idMeal}">Recipe Link</a>
      </div>
    `
  }).join('');

  container.insertAdjacentHTML('beforeend', cardsHTML);
}

const displaySingleRecipe = (meal, container) => {
  container.innerHTML = '';
  
  if(!meal){
    container.innerHTML = `<p>No recipe founded for this search.</p>`;
    return;
  }

  const recipeHTML = 
   `
      <h1 class="s-recipe__header">${meal.strMeal}</h1>
    <div class="s-recipe_image">
      <img src="${meal.strMealThumb}" alt="" srcset="" class="s-recipe_image__img">
    </div>
    <div class="s-recipe__ingredients">
      <h2 class="s-recipe__h2-ingredients">Ingredients:</h2>
      <ul class="s-recipe__ingredients-list">
        <li class="s-recipe__ingredients-item">Item 1</li>
        <li class="s-recipe__ingredients-item">Item 2</li>
      </ul>
    </div>
    <div class="s-recipe__instruction">
      <h2 class="s-recipe__h2-insructions">Instructions:</h2>
      <p class="s-recipe__instruction__text">${meal.strInstructions}</p>
    </div>
  `
  container.insertAdjacentHTML('afterbegin', recipeHTML);
}

export {displayRecipes, displaySingleRecipe};