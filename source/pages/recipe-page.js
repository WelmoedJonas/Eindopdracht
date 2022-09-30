import fetchSpecificRecipeInfo from "../functions/fetchSpecificRecipeInfo";

document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault()

    const parameters = new URLSearchParams(window.location.search)
    const id = parameters.get("id")

    // Functie om informatie op te halen over een specifiek recept op basis van het id-nummer van dit recept
    fetchSpecificRecipeInfo(id)
})