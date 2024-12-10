document.getElementById("botaoRevelar").addEventListener("click", function() {
    const carta = document.querySelector(".carta"); // Seleciona apenas a primeira carta ou a específica que deseja

    if (carta) {
        const frente = carta.querySelector(".frente");
        const verso = carta.querySelector(".verso");

        // Virar a carta
        frente.style.transform = "rotateY(180deg)";
        verso.style.transform = "rotateY(0deg)";
    }
});
