const botao = document.getElementById("ariaCima");
const heroSection = document.querySelector(".talaInicial");

window.addEventListener("scroll", () => {
    // Verifica se a hero section saiu da tela
    if (window.scrollY > heroSection.clientHeight / 2) {
        botao.classList.add("show");
    } else {
        botao.classList.remove("show");
    }
});