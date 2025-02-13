const messages = [
    "Que?",
    "Encerio :c??",
    "Estas segura??",
    "Segura segurisima?",
    "Piensalo un poco si?",
    "Si dices que no la verdad Wa llorar",
    "Lo digo encerio",
    "Estare muy muy triste bebé :c ",
    "Bueno, yo entiendo sabes? me voy...",
    "No es cierto, anda di que si hermosa ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
