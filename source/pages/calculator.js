// Variable to link to the form tag in HTML

const submit = document.getElementById("calculator-form")

// Adding an event listener on the form, so when enter of the button are pushed/clicked the function wil be invoked

submit.addEventListener("submit", showText)

// Declare function that wil run if enter/search are clicked on

function showText() {
    const text = document.getElementById("text-by-image")
    text.textContent = "Don't worry, you're beautiful!"
    const image = document.getElementById("queen-image")
    image.innerHTML = `
    <img src="assets/images/Queen.jpg" alt="image-of-fat-person-with-tattoo-queen"/>`
}

