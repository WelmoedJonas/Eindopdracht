// declare function to create recipe card for the header

export default function createRecipeCardHeader(arr) {

    // Variable to link to the list in which the recipe card must be injected

    const recipesHeader = document.getElementById("list-with-random-recipes")

    // Injecting the recipe cards with the right information in HTML

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