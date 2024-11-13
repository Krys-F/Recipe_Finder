const displayRecipes = (meals, container) => {
  container.innerHTML = '';

  if(!meals){
    container.innerHTML = `<p>No recipes found for this search.</p>`;
    return;
  }


  // meals.forEach((meal) => {
  //   const cardHTML = `
  //     <div class="recipe-card">
  //       <img src="" alt="" srcset="" class="recipe-card__img">
  //       <h2 class="recipe-card__title">${meal.strMeal}</h2>  
  //       <a href="http://">Recipe Link</a>
  //     </div>
  //   `
  //   container.insertAdjacentHTML('beforeend', cardHTML);
  // })

  const cardsHTML = meals.map((meal) => {
    return ` 
      <div class="recipe-card">
        <img src="${meal.strMealThumb}"" alt="" srcset="" class="recipe-card__img">
        <h2 class="recipe-card__title">${meal.strMeal}</h2>  
        <a href="${meal.strSource}">Recipe Link</a>
      </div>
    `
  }).join('');

  container.insertAdjacentHTML('beforeend', cardsHTML);
}

export {displayRecipes}