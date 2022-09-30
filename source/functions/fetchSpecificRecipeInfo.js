import axios from "axios"

export default async function fetchSpecificRecipeInfo(id) {

    // Declare input values for API
    const URI = "https://api.edamam.com"
    const ENDPOINT = "/api/recipes/v2/"
    const API_ID = "6a749d22"
    const API_KEY = "06e02ce0a6a04ae4b1df4bd0bc65c785"

    // Fetch data from API
    try {
        const response = await axios.get (URI + ENDPOINT + id, {
            params: {
                type: "public",
                app_id: API_ID,
                app_key: API_KEY,
                id: id
            }
        })

        const recipeInfo = response.data.recipe
        console.log(recipeInfo)

        const ingredientsList = document.getElementById("ingredients")
        ingredientsList.innerHTML =`
                            <div class="container-recipe-name">
                        <h2>${recipeInfo.label}   |</h2>
                        <div>${recipeInfo.totalTime} min.</div>
                    </div>
                    <div>
                        <h4>Ingredients</h4>
                        <ul>${recipeInfo.ingredientLines}</ul>
                    </div>`

        const nutrientsList = document.getElementById("nutrients")
        nutrientsList.innerHTML = `
        <img class="image-dish" src="${recipeInfo.image}" alt="image-of-dish"/>
        <h4>Nutrients</h4>
            <table>
            <tbody>
            <tr>
            <td>Energy</td>
            <td>${Math.round(recipeInfo.totalNutrients.ENERC_KCAL.quantity)}</td>
            <td>kcal</td>
            </tr>
            <tr>
            <td>Fat</td>
            <td>${Math.round(recipeInfo.totalNutrients.FAT.quantity)}</td>
            <td>g</td>
            </tr>
            <tr>
            <td>Carbs</td>
            <td>${Math.round(recipeInfo.totalNutrients. CHOCDF.quantity)}</td>
            <td>g</td>
            </tr>
            <tr>
            <td>Sugar</td>
            <td>${Math.round(recipeInfo.totalNutrients.SUGAR.quantity)}</td>
            <td>g</td>
            </tr>
            <tr>
            <td>Protein</td>
            <td>${Math.round(recipeInfo.totalNutrients.PROCNT.quantity)}</td>
            <td>g</td>
            </tr>
            <tr>
            <td>Sodium</td>
            <td>${Math.round(recipeInfo.totalNutrients.NA.quantity)}</td>
            <td>mg</td>
            </tr>
            </tbody>
            </table>`

    } catch (e) {

        const error = document.getElementById("error-message")

        if (e.response.status === 404) {
            error.textContent = "page not found"
        } else if (e.response.status === 500) {
            error.textContent = "internal server error"
        }
    }
}





