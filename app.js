const dino = document.getElementById("dino");

window.addEventListener("keypress", (event) => {
    console.log(event.key);

    if (event.key === " ") {
        dino.classList.add("sauter");

        setTimeout(() => {
            dino.classList.remove("sauter");
        }, 1000);
    }
});

setInterval(() => {
    // Obtenir l'obstacle et ses dimensions
    const obstacle = document.getElementById("obs");
    const rightObstacle = parseInt(getComputedStyle(obstacle).right, 10);

    // Obtenir les dimensions du joueur
    const rightJoueur = parseInt(getComputedStyle(dino).right, 10);

    // Détecter la collision avec une marge
    const marge = 5; // Ajuster selon la précision souhaitée

    if (Math.abs(rightObstacle - rightJoueur) < marge) {
        alert("collision");
    }
}, 10);
