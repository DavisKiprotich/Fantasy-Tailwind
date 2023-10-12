// Sample data for 38 gameweeks
const gameweekData = [
    {
        gameweek: 1,
        managerName: "Manager 1",
        mascot: "Mascot 1",
        pointsEarned: 38,
        imageUrl: "images/Gameweek1.PNG",
    },
    {
        gameweek: 2,
        managerName: "Manager 2",
        mascot: "Mascot 2",
        pointsEarned: 42,
        imageUrl: "team-image-2.jpg",
    },
    {
        gameweek: 3,
        managerName: "Manager 2",
        mascot: "Mascot 2",
        pointsEarned: 42,
        imageUrl: "team-image-2.jpg",
    },
    {
        gameweek: 4,
        managerName: "Manager 2",
        mascot: "Mascot 2",
        pointsEarned: 42,
        imageUrl: "team-image-2.jpg",
    },
    {
        gameweek: 5,
        managerName: "Manager 2",
        mascot: "Mascot 2",
        pointsEarned: 42,
        imageUrl: "team-image-2.jpg",
    },
    {
        gameweek: 6,
        managerName: "Manager 2",
        mascot: "Mascot 2",
        pointsEarned: 42,
        imageUrl: "team-image-2.jpg",
    },
    {
        gameweek: 7,
        managerName: "Manager 2",
        mascot: "Mascot 2",
        pointsEarned: 42,
        imageUrl: "team-image-2.jpg",
    },
    {
        gameweek: 8 ,
        managerName: "Manager 2",
        mascot: "Mascot 2",
        pointsEarned: 42,
        imageUrl: "team-image-2.jpg",
    },
    // Add data for the remaining gameweeks...
];

// Initialize Swiper
const mySwiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination", // Select the pagination container
        clickable: true, // Enable clickable pagination dots
    },
    on: {
        init: function () {
            // Initialize the first slide with data from the first gameweek
            updateContent(gameweekData[0]);
        },
        slideChange: function () {
            // Update the content when the slide changes
            const currentGameweek = mySwiper.activeIndex;
            updateContent(gameweekData[currentGameweek]);
        },
    },
});

// Function to update the content based on gameweek data
function updateContent(data) {
    const slide = mySwiper.slides[mySwiper.activeIndex];

    // Update the content in the current slide
    slide.querySelector(".gameweek").textContent = `Gameweek: ${data.gameweek}`;
    slide.querySelector(".manager-name").textContent = `Manager: ${data.managerName}`;
    slide.querySelector(".mascot").textContent = `Mascot: ${data.mascot}`;
    slide.querySelector(".points-earned span").textContent = data.pointsEarned;
    slide.querySelector(".team-image").src = data.imageUrl;
    slide.querySelector(".manager-background").style.background = data.backgroundGradient;
}


