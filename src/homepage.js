export default function createPage() {
    let container = document.createElement('div');
    container.classList.add("homepage-container")
    container.classList.add("transparent-bg")
    container.textContent = "Welcome to our restaurant"

    let button = document.createElement('button');
    button.textContent = "ORDER NOW"

    container.appendChild(button)

    return container;
}