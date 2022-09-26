export default function createRecipeCard( array ) {
    const recipeList = document.getElementById("list-with-recipe-cards")

    array.map((item) => {
        recipeList.innerHTML += `
            <li>${item.recipe.label}</li>`
    })
}