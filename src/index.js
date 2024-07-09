import displayHome from "./home";
import displayMenu from "./menu";
import displayStores from "./stores";

const content = document.querySelector("#content");
const navigation = document.querySelector("nav");





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

    image.src = "../img/restaurant.jpg";
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

function displayTabs() {
    content.style.display = "flex";
    content.style.justifyContent = "center";
    content.style.alignItems = "center";
    content.style.margin = "3rem 2rem";
    displayHome();
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        navigation.style.display = "flex";
        navigation.style.justifyContent = "center";
        navigation.style.backgroundColor = "tan";
        button.style.width = "8rem";
        button.style.height = "4rem";
        button.style.margin = " 1rem 4rem";
        button.style.borderRadius = "0.5cm";
        button.style.borderColor = "white";

        button.addEventListener("click", () => {
            changeTabs(button.id);
        });
    });
}

function changeTabs(tabId) {
    if (tabId === "home") {
        displayHome();
    } else if (tabId === "menu") {
        displayMenu();
    } else if (tabId === "Stores") {
        displayStores();
    }
}

displayTabs();