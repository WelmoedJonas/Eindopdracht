import axios from "axios";
import createRecipeCardHeader from "./createRecipeCardHeader";

// Declare function to create three recipe cards with random recipes to show in the header

export default async function fetchRecipeInfoHeader(ingredient) {

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
                q: ingredient,
                random: true
            }
        })

        // Variable to hold the array of needed data

        const arrayOfRecipes = response.data.hits

        // Cutting the array of so only three recipes will show in the header

        arrayOfRecipes.slice(0, 2)

        // Invoke function to create a recipe card for the header

        createRecipeCardHeader(arrayOfRecipes)

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
