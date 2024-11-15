const getRecipeId = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}

export {getRecipeId};