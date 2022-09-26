import fetchRecipeInfo from "./functions/fetchRecipeInfo";

//Search button

const submitForm = document.getElementById("search-recipe-form")

const ingredients = document.getElementById("ingredients-field")
const mealType = document.getElementById("meal-type-field")
const cuisineType = document.getElementById("cuisine-field")
const diet = document.getElementById("diet-field")
const health = document.getElementById("health-field")

submitForm.addEventListener("submit", (event) => {
        event.preventDefault()
        fetchRecipeInfo(
            ingredients.value,
            mealType.value,
            cuisineType.value,
            diet.value,
            health.value
        )
    }
)

