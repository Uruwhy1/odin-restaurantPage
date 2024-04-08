export default function createPage() {
    // Create container div
    let container = document.createElement('div');
    container.classList.add("homepage");

    let header = document.createElement('h1');
    header.textContent = ""

    container.appendChild(header);
    return container;
};
