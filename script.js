// Event listener for 'Yes' button
document.getElementById("yes-btn").addEventListener("click", function () {
    alert("Yay! You said YES! 🥰 My love for you is as infinite as the stars, Asifa. ❤️");

    // Add animated hearts
    createHearts();
});

// Event listener for 'No' button
document.getElementById("no-btn").addEventListener("click", function () {
    alert("Oh no! 😢 But my love for you will never change, Asifa. ❤️");
});

// Function to create heart animations
function createHearts() {
    const container = document.querySelector("body");

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.style.left = Math.random() * 100 + "%";
        heart.style.animationDelay = Math.random() * 4 + "s";
        heart.textContent = "❤️";

        container.appendChild(heart);

        // Remove hearts after animation ends
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}
