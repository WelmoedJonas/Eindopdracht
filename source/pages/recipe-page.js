import fetchSpecificRecipeInfo from "../functions/fetchSpecificRecipeInfo";

document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault()

    const parameters = new URLSearchParams(window.location.search)
    const id = parameters.get("id")

    // Invoke function to fetch the specific info of recipes
    fetchSpecificRecipeInfo(id)
})