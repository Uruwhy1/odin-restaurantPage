export default function createPage() {
    let container = document.createElement('div');
    container.classList.add('menu-container');
    container.classList.add('white-shadow-border');

    let header = document.createElement('h1');
    header.textContent = "Menu";
    header.classList.add('header');
    container.appendChild(header);

    // Main Course
    const mainHeader = document.createElement('p');
    mainHeader.textContent = "Main Course";
    container.appendChild(mainHeader);

    const menuItemsMain = [
        { name: "Spaghetti Carbonara", price: "$12.99" },
        { name: "Margherita Pizza", price: "$10.99" },
        { name: "Grilled Salmon", price: "$15.99" },
        // Add more main course items as needed
    ];

    const menuListMain = document.createElement('ul');
    menuListMain.classList.add('menu-list');
    menuItemsMain.forEach(item => {
        const menuItem = document.createElement('li');
        const itemName = document.createElement('span');
        itemName.textContent = item.name;
        const itemPrice = document.createElement('span');
        itemPrice.classList.add('price')

        itemPrice.textContent = item.price;
        menuItem.appendChild(itemName);
        menuItem.appendChild(itemPrice);
        menuListMain.appendChild(menuItem);
    });
    container.appendChild(menuListMain);

    // Drinks
    const drinksHeader = document.createElement('p');
    drinksHeader.textContent = "Drinks";
    container.appendChild(drinksHeader);

    const menuItemsDrinks = [
        { name: "Coca-Cola", price: "$2.99" },
        { name: "Fresh Orange Juice", price: "$4.99" },
        { name: "Coffee", price: "$3.49" },
        // Add more drink items as needed
    ];

    const menuListDrinks = document.createElement('ul');
    menuListDrinks.classList.add('menu-list');
    menuItemsDrinks.forEach(item => {
        const menuItem = document.createElement('li');
        const itemName = document.createElement('span');
        itemName.textContent = item.name;
        const itemPrice = document.createElement('span');
        itemPrice.classList.add('price')
        itemPrice.textContent = item.price;
        menuItem.appendChild(itemName);
        menuItem.appendChild(itemPrice);
        menuListDrinks.appendChild(menuItem);
    });
    container.appendChild(menuListDrinks);

    // Desserts
    const dessertsHeader = document.createElement('p');
    dessertsHeader.textContent = "Desserts";
    container.appendChild(dessertsHeader);

    const menuItemsDesserts = [
        { name: "Chocolate Brownie", price: "$6.99" },
        { name: "Vanilla Ice Cream", price: "$4.99" },
        { name: "Cheesecake", price: "$7.49" },
        // Add more dessert items as needed
    ];

    const menuListDesserts = document.createElement('ul');
    menuListDesserts.classList.add('menu-list');
    menuItemsDesserts.forEach(item => {
        const menuItem = document.createElement('li');
        const itemName = document.createElement('span');
        itemName.textContent = item.name;
        const itemPrice = document.createElement('span');
        itemPrice.classList.add('price')
        itemPrice.textContent = item.price;
        menuItem.appendChild(itemName);
        menuItem.appendChild(itemPrice);
        menuListDesserts.appendChild(menuItem);
    });
    container.appendChild(menuListDesserts);

    return container;
}
