const content = document.querySelector("#content");

function createCard(titleText, priceText, descriptionText) {
    const card = document.createElement("div");
    const title = document.createElement("div");
    const price = document.createElement("div");
    const description = document.createElement("div");

    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(description);

    card.style.width = "18rem";
    card.style.height = "30rem";
    title.style.fontSize = "2rem";
    price.style.margin = "8px";
    card.style.border = "10px solid gray";
    card.style.margin = "1rem 2rem";
    card.style.padding = "1.5rem";
  

    title.innerHTML = titleText;
    price.innerHTML = priceText;
    description.innerHTML = descriptionText;

    return card;
}

function displayMenu() {
    content.innerHTML = "";

    const card1 = createCard(
        "rigatoni bolognese",
        "$15",
        "Traditional Bolognese sauce incorporates ground beef, onions, tomatoes, and a variety of herbs and spices. The sauce is usually slow-cooked for several hours to allow the flavours to develop and the meat to become tender. The sauce is then mixed with the rigatoni pasta and is topped with fresh basil."
    );

    const card2 = createCard(
        "fettuccine alfredo",
        "$14",
        "Fettuccine Alfredo is a pasta dish made with fettuccine, butter, and Parmesan cheese. As the cheese is mixed with freshly cooked, warm fettuccine and ample butter, it melts and emulsifies to form a smooth, rich cheese sauce coating the noodles."
    );

    const card3 = createCard(
        "creamy pesto gnocchi",
        "$16",
        "Pesto is that wonderfully green sauce that offers a flavor that can best be described as bright and pungent, with a basil-forward, herbaceous garden aroma suspended with delicate olive oil, enriched with pine nuts (pignoli), and kicked into overdrive with Italian cheeses and garlic. This sauce is mixed with handmade gnocchi and chicken."
    );

    content.appendChild(card1);
    content.appendChild(card2);
    content.appendChild(card3);
}

export default displayMenu;