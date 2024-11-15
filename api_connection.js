const fetchAPI = async (query) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

  try{
    const response = await fetch(url);
    if(!response.ok) {
      throw new Error('failed to fetch data');
    } else {
      const data = await response.json();
      return data.meals;
    }
  } catch (error) {
    console.error(error);
    // Error message in container with recipes
  }
}

const fetchIdApi = async (id) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`; 
  
  try {
    const response = await fetch(url)
    if(!response.ok) {
      throw new Error ('Fetching problem');
    }

    const data = await response.json();
    return data.meals[0];
  }catch(error) {
    console.error(`Error message ${error}`)
  }
}


const fetchRandom = async () => {
  const url = `https://www.themealdb.com/api/json/v1/1/random.php`;

  try {
    const response = await fetch(url);
    if(!response.ok){
      throw new Error (`Fetching problem`);
    }

    const data = await response.json();
    return data.meals[0];
  } catch (error) {
    console.error(`Error message: ${error}`);
  }
}


  export {fetchAPI, fetchIdApi, fetchRandom};