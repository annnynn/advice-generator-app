const api_link = "https://api.adviceslip.com/advice";
const button = document.querySelector(".button");
const adviceNumber = document.querySelector(".advice-number");
const adviceQuote = document.querySelector(".advice-quote");

async function generate() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const advice = await response.json();

    document.querySelector(".advice-number").innerText = `ADVICE #${advice.slip.id}`;
    document.querySelector(".advice-quote").innerText = `"${advice.slip.advice}"`
}

button.addEventListener('click', generate); 