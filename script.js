const submitButton = document.getElementById("submitButton");
const greetingText = document.getElementById("greeting");
const nameInput = document.getElementById("name");

submitButton.addEventListener("click", () => {
    const name = nameInput.value;
    if (name) {
        const greeting = `¡Hola, ${name}! ¡Bienvenido a tu saludo personalizado!`;
        greetingText.textContent = greeting;
    } else {
        greetingText.textContent = "Por favor, ingresa tu nombre.";
    }
});
