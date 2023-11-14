// Sample data for 38 gameweeks
const gameweekData = [
    {
        gameweek: 1,
        managerName: "Denis Kiptoo",
        mascot: "Mascot 1",
        pointsEarned: 38,
        imageUrl: "images/Gameweek1.PNG",
    },
    {
        gameweek: 2,
        managerName: "Manager 2",
        mascot: "Mascot 2",
        pointsEarned: 42,
        imageUrl: "images/team-image-2.jpg",
    },
    {
        gameweek: 3,
        managerName: "Manager 2",
        mascot: "Mascot 2",
        pointsEarned: 42,
        imageUrl: "images/team-image-2.jpg",
    },
    {
        gameweek: 4,
        managerName: "Manager 2",
        mascot: "Mascot 2",
        pointsEarned: 42,
        imageUrl: "images/team-image-2.jpg",
    },
    {
        gameweek: 5,
        managerName: "Manager 2",
        mascot: "Mascot 2",
        pointsEarned: 42,
        imageUrl: "images/team-image-2.jpg",
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

// function updateWinningTeam(gameWeek) {
//     const slide = mySwiper.slides[mySwiper.activeIndex];
//     const


//     slide.querySelector(".gameweek").textContent = `Gameweek: ${data.gameweek}`;
//     slide.querySelector(".manager-name").textContent = `Manager: ${data.managerName}`;
//     slide.querySelector(".mascot").textContent = `Mascot: ${data.mascot}`;
//     slide.querySelector(".points-earned span").textContent = data.pointsEarned;
//     slide.querySelector(".team-image").src = data.imageUrl;
//     slide.querySelector(".manager-background").style.background = data.backgroundGradient;
// }

// Function to update the winning team section based on the game week
function updateWinningTeam(gameWeek) {
    // Find the game week details in the array
    const selectedGameWeek = gameWeeks.find(week => week.gameweek === gameWeek);
  
    // Update the HTML elements with the corresponding details
    document.getElementById("gameweek").textContent = `Gameweek ${selectedGameWeek.gameweek}`;
    document.getElementById("manager-name").textContent = `Manager Name: ${selectedGameWeek.managerName}`;
    document.getElementById("mascot").textContent = `Mascot: ${selectedGameWeek.mascot}`;
    document.getElementById("points").textContent = selectedGameWeek.points;
    document.getElementById("team-image").src = selectedGameWeek.teamImage;
  }
  
  // Example usage: Update winning team for Gameweek 1
  updateWinningTeam(1);

