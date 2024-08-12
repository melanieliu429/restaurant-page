import restaurant from "./img/restaurant.jpg";
const content = document.querySelector("#content");

function displayHome() {
    content.innerHTML = "";

    const container = document.createElement("div");
    const image = document.createElement("img");
    const headline = document.createElement("h1");
    const text = document.createElement("div");

    content.appendChild(container);
    container.appendChild(headline);
    container.appendChild(image);
    container.appendChild(text);

    image.src = restaurant;
    image.alt = "image";
    headline.textContent = "Little Italy";
    text.innerHTML = "Little Italy began in a quaint Tuscan village where Nonna Maria, a legendary cook, turned simple ingredients into unforgettable dishes. Her grandson, Luca, grew up in her kitchen, absorbing her secrets and love for authentic Italian cooking. Inspired by his Nonna, Luca moved to the city to share his family's culinary heritage. He opened Little Italy creating a warm, nostalgic atmosphere with family photos and vintage Italian decor. The menu features classic dishes like rigatoni bolognese, creamy pesto gnocchi, and fettuccine alfredo, all crafted with the freshest ingredients and Nonna Maria's timeless recipes. At Little Italy, every meal is a tribute to Nonna Maria's legacy, offering guests a taste of true Italian tradition and the warmth of family.";

    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";
    container.style.width = "60rem";
    image.style.width = "24rem";
    text.style.margin = "2rem";
    headline.style.marginTop = 0;
}

export default displayHome;