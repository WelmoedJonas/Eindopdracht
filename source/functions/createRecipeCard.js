export default function createRecipeCard(arr) {

    const recipeList = document.getElementById("list-with-recipe-cards")

    arr.map((item) => {
        recipeList.innerHTML += ` 
        <li>
        <article className="recipe-card id=recipeCard">
            <img className="image-recipe-card" src="${item.recipe.image}" alt="image-of-dish" />
            <div>
                <h4>${item.recipe.label}</h4>
                <span>${item.recipe.calories} calories | </span>
                <span>${item.recipe.ingredients.length} ingredients | </span>
                <span>${item.recipe.totalTime} min. </span>
            </div>
</article>
</li> 
`
    })
}


// <li>
//     <article className="recipe-card" id="recipeCard">
//         <img className="image-recipe-card" src="${item.recipe.image}" alt="image-dish"/>
//         <div className="text-recipe-card">
//             <h4>${item.recipe.label}</h4>
//             <span>${item.recipe.calories} calories</span>
//             <span>${item.recipe.ingredients.lenght} ingredients</span>
//             <span> <img src="${assets/icons/time.png}" alt="clock-image"/> ${item.recipe.totalTime}></span>
//         </div>
//     </article>
// </li>

