// Sample data for 38 gameweeks
const gameweekData = [
    {
        gameweek: 1,
        managerName: "Manager 1",
        mascot: "Mascot 1",
        pointsEarned: 38,
        imageUrl: "team-image-1.jpg",
        backgroundGradient: "linear-gradient(to right, red, white)",
    },
    {
        gameweek: 2,
        managerName: "Manager 2",
        mascot: "Mascot 2",
        pointsEarned: 42,
        imageUrl: "team-image-2.jpg",
        backgroundGradient: "linear-gradient(to right, blue, white)",
    },
    {
        gameweek: 3,
        managerName: "Manager 2",
        mascot: "Mascot 2",
        pointsEarned: 42,
        imageUrl: "team-image-2.jpg",
        backgroundGradient: "linear-gradient(to right, blue, white)",
    },
    {
        gameweek: 4,
        managerName: "Manager 2",
        mascot: "Mascot 2",
        pointsEarned: 42,
        imageUrl: "team-image-2.jpg",
        backgroundGradient: "linear-gradient(to right, blue, white)",
    },
    {
        gameweek: 5,
        managerName: "Manager 2",
        mascot: "Mascot 2",
        pointsEarned: 42,
        imageUrl: "team-image-2.jpg",
        backgroundGradient: "linear-gradient(to right, blue, white)",
    },
    {
        gameweek: 6,
        managerName: "Manager 2",
        mascot: "Mascot 2",
        pointsEarned: 42,
        imageUrl: "team-image-2.jpg",
        backgroundGradient: "linear-gradient(to right, blue, white)",
    },
    {
        gameweek: 7,
        managerName: "Manager 2",
        mascot: "Mascot 2",
        pointsEarned: 42,
        imageUrl: "team-image-2.jpg",
        backgroundGradient: "linear-gradient(to right, blue, white)",
    },
    {
        gameweek: 8 ,
        managerName: "Manager 2",
        mascot: "Mascot 2",
        pointsEarned: 42,
        imageUrl: "team-image-2.jpg",
        backgroundGradient: "linear-gradient(to right, blue, white)",
    },
    // Add data for the remaining gameweeks...
];

// Function to update the winning team information in the HTML
function updateWinningTeam(gameweekIndex) {
    const gameweekElement = document.getElementById("gameweek");
    const managerNameElement = document.getElementById("manager-name");
    const mascotElement = document.getElementById("mascot");
    const pointsEarnedElement = document.getElementById("points-earned");
    const teamImageElement = document.getElementById("team-image");
    const managerBackgroundElement = document.querySelector(".manager-background");

    const currentGameweekData = gameweekData[gameweekIndex];

    if (currentGameweekData) {
        // Update the content with the current gameweek's data
        gameweekElement.textContent = `Gameweek: ${currentGameweekData.gameweek}`;
        managerNameElement.textContent = `Manager: ${currentGameweekData.managerName}`;
        mascotElement.textContent = `Mascot: ${currentGameweekData.mascot}`;
        pointsEarnedElement.textContent = `Points Earned: ${currentGameweekData.pointsEarned}`;
        teamImageElement.src = currentGameweekData.imageUrl;
        managerBackgroundElement.style.background = currentGameweekData.backgroundGradient;
    }
}

// Loop through each gameweek and update the content
for (let i = 0; i < gameweekData.length; i++) {
    setTimeout(() => {
        updateWinningTeam(i);
    }, i * 2000); // Delay the updates by 2 seconds for demonstration (adjust as needed)
}
