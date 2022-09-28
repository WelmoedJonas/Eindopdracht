export default function createRecipeCardHeader(arr) {

    const recipesHeader = document.getElementById("list-with-random-recipes")
    recipesHeader.innerHTML = ""
    arr.slice(0, 3).map((item) => {

        const roundedCalories = Math.round(item.recipe.calories)

        recipesHeader.innerHTML += ` 

        <article class="recipe-card id=recipeCard">
            <img class="image-recipe-card" src="${item.recipe.image}" alt="image-of-dish" />
            <div>
                <h4>${item.recipe.label}</h4>
                <span>${roundedCalories} calories | </span>
                <span>${item.recipe.ingredients.length} ingredients | </span>
                <span>${item.recipe.totalTime} min. </span>
            </div>
        </article> `
    })
}