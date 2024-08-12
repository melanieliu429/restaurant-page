import restaurant from "./img/restaurant.jpg";
const content = document.querySelector("#content");

function displayStores() {
    content.innerHTML = "";

    const image = document.createElement("img");
    const card = document.createElement("div");
    const store = document.createElement("div");
    const address = document.createElement("div");

    content.appendChild(image);
    content.appendChild(card);
    card.appendChild(store);
    card.appendChild(address)

    image.src = restaurant;
    image.alt = "restaurant pic";
    store.innerHTML = "San Francisco";
    address.innerHTML = "2345 Treerock Rd, San Francisco, CA, 87654";
    
    image.style.width = "30rem";
    card.style.padding = "4rem";
    store.style.fontSize = "4rem";
    address.style.fontSize = "2rem";
    address.style.margin = "2rem 0";
    card.style.width = "30rem";
}

export default displayStores;