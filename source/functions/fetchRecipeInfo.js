import axios from "axios";
import createRecipeCard from "./createRecipeCard";

// Declare function to fetch data from the Edamam API

export default async function fetchRecipeInfo(queryText, mealType, cuisineType, dietType, healthType) {

    // Declare input values for API
    const URI = "https://api.edamam.com"
    const ENDPOINT = "/api/recipes/v2"
    const API_ID = "6a749d22"
    const API_KEY = "06e02ce0a6a04ae4b1df4bd0bc65c785"

    //Fetch data from API
    try {

        const response = await axios.get(URI + ENDPOINT, {
            params: {
                type: "public",
                app_id: API_ID,
                app_key: API_KEY,
                q: queryText,
                mealType: mealType ? mealType : null,
                cuisineType: cuisineType ? cuisineType : null,
                diet: dietType ? dietType : null,
                health: healthType ? healthType : null,
                random: true
            }
        })

        // Create variable to hold the needed data fetched from the API

        const arrayOfRecipes = response.data.hits

        // Invoke function to create a recipe card

        createRecipeCard(arrayOfRecipes)


        // Catch error message and show them in the UI

    } catch (e) {

        const error = document.getElementById("error-message")

        if (e.response.status === 404) {
            error.textContent = "page not found"
        } else if (e.response.status === 500) {
            error.textContent = "internal server error"
        }
    }
}