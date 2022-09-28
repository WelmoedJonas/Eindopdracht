import fetchRecipeInfo from "./functions/fetchRecipeInfo";

const submitForm = document.getElementById("search-recipe-form")

const queryText = document.getElementById("ingredients-field")
const mealType = document.getElementById("meal-type-field")
const cuisineType = document.getElementById("cuisine-field")
const dietType = document.getElementById("diet-field")
const healthType = document.getElementById("health-field")

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

