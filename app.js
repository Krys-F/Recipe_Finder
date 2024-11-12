

const fetchAPI = async (query) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

  try{
    const response = await fetch(url);
    if(!response.ok) {
      throw new Error('failed to fetch data');
    } else {
      const data = response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
    // Error message in container with recipes
  }
}

fetchAPI('chicken')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })