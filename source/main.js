import fetchRecipeInfo from "./functions/fetchRecipeInfo";
import fetchRecipeInfoHeader from "./functions/fetchRecipeInfoHeader"

// Invoke function to create three recipe cards with random recipes to show in the header

fetchRecipeInfoHeader("falafel")

// Variable that links to the recipe search form in HTML

const submitForm = document.getElementById("search-recipe-form")

// Variables that link to the search options of the search form in HTML

const queryText = document.getElementById("ingredients-field")
const mealType = document.getElementById("meal-type-field")
const cuisineType = document.getElementById("cuisine-field")
const dietType = document.getElementById("diet-field")
const healthType = document.getElementById("health-field")

// Invoke function to fetch data from the Edamam API which will run after user clicked enter or the search button

submitForm.addEventListener("submit", (event) => {
        event.preventDefault()
        fetchRecipeInfo(
            queryText.value,
            mealType.value,
            cuisineType.value,
            dietType.value,
            healthType.value
        )
    }
)