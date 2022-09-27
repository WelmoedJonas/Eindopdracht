import fetchRecipeInfo from "./functions/fetchRecipeInfo";

const submitForm = document.getElementById("search-recipe-form")

const queryText = document.getElementById("ingredients-field")

submitForm.addEventListener("submit", (event) => {
        event.preventDefault()
        fetchRecipeInfo(
            queryText.value
        )
    }
)

