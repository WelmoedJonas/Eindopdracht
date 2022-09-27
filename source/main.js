import fetchRecipeInfo from "./functions/fetchRecipeInfo";

//Search button

const submitForm = document.getElementById("search-recipe-form")

const ingredients = document.getElementById("ingredients-field")

submitForm.addEventListener("submit", (event) => {
        event.preventDefault()
        fetchRecipeInfo(
            ingredients.value
        )
    }
)

