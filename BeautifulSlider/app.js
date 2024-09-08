// Variables declarations
let nextDom = document.getElementById('next'); // Next Button
let prevDom = document.getElementById('prev'); // Prev Button
let carouselDom = document.querySelector('.carousel'); // Slider
let listItemDom = document.querySelector('.carousel .list'); // List (contains items)
let thumbnailDom = document.querySelector('.carousel .thumbnail'); // Thumbnails
let timeRunning = 3000; // Animation duration = 3s
let timeAutoNext = 7000; // Automatically change slide after specified time
let runTimeOut; // Timeout variable
let runAutoRun = setTimeout(() => {
    // Automatically click on next button after timeout
    nextDom.click();
}, timeAutoNext); // Autorun variable, already set to run on startup and not only after a button is pressed

// Next Button Logic
nextDom.onclick = function () {
    showSlider('next');
}

// Prev Button Logic
prevDom.onclick = function () {
    showSlider('prev');
}

// Function to show slider
function showSlider(type) {
    // Get all slider items
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    // Get all thumbnails
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    // Move the first item to the end of the row and the second item becomes the first or the opposite
    if (type === 'next') {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        // Add the next class to the carousel class to run the animation
        carouselDom.classList.add('next');
    } else {
        // Last item position
        let positionLastItem = itemSlider.length - 1;
        // Append the last item to the first position
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        // Add the prev class to the carousel class to run the animation
        carouselDom.classList.add('prev');
    }

    // Animation duration
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        // Remove the next or prev class from the carousel class after completing the animation
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning)

    // Autorun Animation
    clearInterval(runAutoRun);
    runAutoRun = setTimeout(() => {
        // Automatically click on next button after timeout
        nextDom.click();
    }, timeAutoNext);
}
