// Variable to link to the form tag in HTML
const submit = document.getElementById("calculator-form");
// Adding an event listener on the form, so when enter of the button are pushed/clicked the function wil be invoked
submit.addEventListener("submit", (ev)=>{
    ev.preventDefault();
    showText();
});

//# sourceMappingURL=calculator.25cb9e78.js.map
