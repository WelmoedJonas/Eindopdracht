export default function createRecipeCard(arr) {

    const recipeList = document.getElementById("list-with-recipe-cards")
    recipeList.innerHTML = ""

    arr.slice(0, 12).map((item) => {

        const recipeUri = item.recipe.uri
        const recipeId = recipeUri.split("_")[1]

        const roundedCalories = Math.round(item.recipe.calories)

        recipeList.innerHTML += ` 

        <article class="recipe-card id=recipeCard">
            <a href="pages/recipe-page.html?id=${recipeId}">
            <img class="image-recipe-card" src="${item.recipe.image}" alt="image-of-dish" />
            <div>
                <h4>${item.recipe.label}</h4>
                <span>${roundedCalories} calories | </span>
                <span>${item.recipe.ingredients.length} ingredients | </span>
                <span>${item.recipe.totalTime} min. </span>
            </div>
            </a>
        </article>`
    })
}




