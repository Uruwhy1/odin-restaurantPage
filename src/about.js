export default function createPage() {
    // Create container div
    let container = document.createElement('div');
    container.classList.add("homepage");


    // Reviews stuff
    let reviewContainer = document.createElement('div');
    reviewContainer.classList.add('review-container')
    reviewContainer.classList.add('transparent-bg')
    reviewContainer.classList.add('white-shadow-border')

    generateReviews(reviewContainer, 8)
    container.appendChild(reviewContainer);

    // Schedules section
    let scheduleContainer = document.createElement('div');
    scheduleContainer.classList.add('schedule-container');
    scheduleContainer.classList.add('transparent-bg');
    scheduleContainer.classList.add('white-shadow-border')

    generateSchedule(scheduleContainer)
    container.appendChild(scheduleContainer);

    // MAP STUFF
    let mapContainer = document.createElement('div');
    mapContainer.classList.add('map-container');
    mapContainer.classList.add('transparent-bg');
    mapContainer.classList.add('white-shadow-border');

    generateMap(mapContainer);
    container.appendChild(mapContainer);

    return container;
};

function generateReviews(container, number) {
    let header = document.createElement('h1');
    header.textContent = "Reviews";
    header.classList.add('header')
    container.appendChild(header);

    let reviewContainer = document.createElement('div');
    reviewContainer.classList.add('review-container-container');

    for (let i = 0; i < number; i++) {
        let review = document.createElement('div');
        review.classList.add('review-item');

        // PROFILE CONTAINER
        let profileContainer = document.createElement('div');
        profileContainer.classList.add('profile-container')
        let profileImage = document.createElement('svg');
        profileImage.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>'
        let profileName = document.createElement('p');
        profileName.textContent = "Name Surname"

        profileContainer.appendChild(profileImage);
        profileContainer.appendChild(profileName);
        // -------------------


        let reviewText = document.createElement('p');
        reviewText.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere delectus a quam eveniet ipsa quasi. Lorem.'
        
        review.appendChild(profileContainer);
        review.appendChild(reviewText);
        reviewContainer.appendChild(review);

        container.appendChild(reviewContainer);
    }
}

function generateSchedule(container) {
    let header = document.createElement('h1');
    header.textContent = "Schedule";
    header.classList.add('header');
    container.appendChild(header);

    let daysContainer = document.createElement('div');

    // Create schedule items
    let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    daysOfWeek.forEach(day => {
        let dayElement = document.createElement('p');
        if(day == 'Saturday' || day == 'Sunday') {
            dayElement.textContent = `${day} - CLOSED`
            dayElement.classList.add("closed")
        } else {
            dayElement.textContent = `${day} - [10:00 - 22:00]`
            dayElement.classList.add("open")
        }

        // You can add more elements and styling as needed

        daysContainer.appendChild(dayElement);
        container.appendChild(daysContainer);
    });
}

function generateMap(container) {
    let header = document.createElement('h1');
    header.classList.add('header')
    header.textContent = 'Visit Us!'
    container.appendChild(header);


    // Create the iframe element
    let iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.google.com/maps/embed/v1/place?q=Statue+of+Liberty+National+Monument,+New+York,+NY,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('style', 'border:0; height:100%; width:100%;');

    // Append the iframe to the map container
    container.appendChild(iframe);
}