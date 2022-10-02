// Variable to link to the form tag in HTML

const submit = document.getElementById("calculator-form")

// Adding an event listener on the form, so when enter of the button are pushed/clicked the function wil be invoked

submit.addEventListener("submit", (ev) => {
    ev.preventDefault()
    showText()
} )

// Declare function that wil run if enter/search are clicked on

export default function showText() {
    const text = document.getElementById("text-by-image")
    text.textContent = "Don't worry, you're beautiful!"
    const image = document.getElementById("queen-image")
    image.innerHTML = `
    <img class="queen" src="https://images.squarespace-cdn.com/content/v1/58b18b4ee4fcb52215771e81/1533197622055-9H7ZTXHHE5ZGR6S1QW86/Queen+%28s%29.jpg?format=1000w" alt="image-of-fat-person-with-queen-tattoo"/>`
}



