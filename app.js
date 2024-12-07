const dino = document.getElementById("dino")

window.addEventListener("keypress", (event) => {
console.log(event.key);

    if (event.key === " ") {    
        dino.classList.add("sauter")

        setTimeout(() => {
            dino.classList.remove("sauter")
        }, 1000);
    }

})

setInterval(() => {
    // obtenir right de l'obstacle
    const obstacle = document.getElementById("obs")
    const rightObstacle = getComputedStyle(obstacle).right

    // console.log(rightObstacle);
    
    // obtenir right du joueur
    const rightJoueur = getComputedStyle(dino).right
console.log(rightJoueur);

    // // console.log(rightJoueur);
    if (rightObstacle === rightJoueur) {
        alert("gameover")
    }

    // verfication
}, 0);


// preciser: quand on clique seulement le boutton "espace"
// ==> mapiasa event.key


// game over
// ===> 1) rehefa mitovy ny "right" an'i obstacle sy joueur
// ==> toujours verifier a chaque petit interval