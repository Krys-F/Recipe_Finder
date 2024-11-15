const displayIngredientsList = (data, container) => {
  if (!data) {
    console.log('No ingredients list');
    return;
  }

  container.innerHTML = '';
 
  for( let i = 1; i <=20; i++) {
    const ingredient = data[`strIngredient${i}`];
    const measure = data[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      const listItem = `<li class="s-recipe__ingredients-item">${measure} ${ingredient}</li>`;
      container.insertAdjacentHTML('beforeend', listItem);
    }
  }

}

export {displayIngredientsList};