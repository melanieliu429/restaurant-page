import displayHome from "./home";
import displayMenu from "./menu";
import displayStores from "./stores";

const content = document.querySelector("#content");
const navigation = document.querySelector("nav");




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
    } else if (tabId === "stores") {
        displayStores();
    }
}

displayTabs();