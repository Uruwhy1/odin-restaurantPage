export default function createPage() {
    let container = document.createElement('div');
    container.classList.add('contact-container');
    container.classList.add('transparent-bg');

    

    contactInformation(container);
    generateForm(container);

    return container;
}

function contactInformation(container) {
    let header = document.createElement('h1');
    header.classList.add('header');
    header.textContent = 'Contact Information';
    container.appendChild(header);
    
    let contactInformation = document.createElement('div');
    contactInformation.classList.add('contact-info');

    let address = document.createElement('p');
    address.textContent = '123 Main Street, City, Country';
    contactInformation.appendChild(address);

    let phone = document.createElement('p');
    phone.textContent = 'Phone: +1234567890';
    contactInformation.appendChild(phone);

    let email = document.createElement('p');
    email.textContent = 'Email: example@example.com';
    contactInformation.appendChild(email);

    container.appendChild(contactInformation);
}

function generateForm(container) {
    let header = document.createElement('h1');
    header.classList.add('header');
    header.textContent = 'Contact Us';
    container.appendChild(header);

    // Form element
    let form = document.createElement('form');

    // Input fields
    let nameContainer = document.createElement('div');
    let nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name';
    let nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.placeholder = "Name Surname"
    nameContainer.appendChild(nameLabel);
    nameContainer.appendChild(nameInput);

    let emailContainer = document.createElement('div');
    let emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email';
    let emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.placeholder = 'myemail@email.com'
    emailContainer.appendChild(emailLabel);
    emailContainer.appendChild(emailInput);

    let messageContainer = document.createElement('div');
    let messageLabel = document.createElement('label');
    messageLabel.textContent = 'Message';
    let messageInput = document.createElement('textarea');
    messageInput.placeholder = "Write us a message!"
    messageContainer.appendChild(messageLabel);
    messageContainer.appendChild(messageInput);

    // Submit Button
    let submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', (event) => {
        event.preventDefault()
    })

    // Append stuff
    form.appendChild(nameContainer);
    form.appendChild(emailContainer);
    form.appendChild(messageContainer);
    form.appendChild(submitButton);

    container.appendChild(form);
}
