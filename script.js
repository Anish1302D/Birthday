function showSurprise() {
    document.getElementById("surprise").style.display = "block";
    createBalloons(30);
}

function createBalloons(num) {
    const balloonContainer = document.getElementById("balloons");
    balloonContainer.innerHTML = "";
    for (let i = 0; i < num; i++) {
        let balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.animationDuration = Math.random() * 4 + 4 + "s";
        balloonContainer.appendChild(balloon);
    }
}
