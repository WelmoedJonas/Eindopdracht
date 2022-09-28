import fetchRecipeInfo from "./functions/fetchRecipeInfo";

const submitForm = document.getElementById("search-recipe-form")

const queryText = document.getElementById("ingredients-field")
const mealType = document.getElementById("meal-type-field")

submitForm.addEventListener("submit", (event) => {
        event.preventDefault()
        fetchRecipeInfo(
            queryText.value,
            mealType.value
        )
    }
)

