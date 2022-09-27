export default function createRecipeCard( arrayOfRecipes ) {
    const recipeList = document.getElementById("list-with-recipe-cards")

    arrayOfRecipes.map((item) => {
        recipeList.innerHTML += `
        <article class="recipe-card" id="recipeCard">
                    <img class="image-recipe-card" src="${item.recipe.image}" alt="image-dish" />
                    <div class="text-recipe-card">
                        <h4>${item.recipe.label}</h4>
                        <span>${item.recipe.calories} calories</span>
                        <span>${item.recipe.ingredients.lenght} ingredients</span>
                        <span><img src="${assets/icons/time.png}" alt="clock-image" ${item.recipe.totalTime}></span>
                    </div>
                </article>`
    })
}

