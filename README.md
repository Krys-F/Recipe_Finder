# Recipe Finder

A simple Recipe Finder web app that allows users to search for recipes based on ingredients or meal names. The app fetches data from [TheMealDB](https://www.themealdb.com/) API and displays the recipes with their details, including ingredients and instructions.

## Features

- **Search by Ingredient or Meal Name**: Allows the user to search for recipes based on their input.
- **Random Recipe**: Fetches and displays a random recipe.
- **Single Recipe Page**: Displays detailed information for a selected recipe including its ingredients and instructions.
- **Responsive Design**: Mobile-friendly design with flexible layout for all screen sizes.

## Tech Stack

- HTML
- CSS
- JavaScript (ES6+)
- API: [TheMealDB](https://www.themealdb.com/)
- Fetch API for making requests to TheMealDB

## Setup & Installation

To run the project locally, follow these steps:

### Steps

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/recipe-finder.git
    ```

2. **Navigate to the project folder**:

    ```bash
    cd recipe-finder
    ```

3. **Open the `index.html` file in your browser**. You can either open it directly or use a live server extension in your editor to run the app.


## File Structure

- index.html -> Home page where users search for recipes 
- single_recipe.html -> Page displaying detailed recipe information 
- styles.css -> Styles for the application 
- app.js -> Main JS for the home page functionality 
- app_single.js -> JS for handling the single recipe page 
- api_connection.js -> API functions for fetching data from TheMealDB 
- displayIngredients.js -> Function to display the ingredients list 
- idSearch.js -> Utility to get recipe ID from the URL 
- recipes.js -> Functions to display recipes 
- searching.js -> Utility to get search input