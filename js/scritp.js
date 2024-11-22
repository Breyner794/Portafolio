const temaOscuro = ()=>{
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
}
const temaClaro = ()=>{
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
}
const temaActual = ()=>{
    document.querySelector("body").getAttribute("data-bs-theme") === "light"?
    temaOscuro() : temaClaro();
}

// Mostrar letras al cargar la pagina

document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.querySelector(".fade-in");
    const paragraph2 = document.querySelector(".welcome");
    const texto = document.querySelector('.sobre_mi .text-bg-secondary');
    const text = document.querySelector(".scroll-text");
    const image = document.querySelector(".imagen-transicion");
    const subtitulo = document.querySelector(".subtitulo-transicion");
    const titulo = document.querySelector(".sobre_mi");
    
    texto.classList.add("visible3");
    paragraph2.classList.add("visible2");
    paragraph.classList.add("visible");

    window.addEventListener("scroll", function() {
        const textPosition = text.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (textPosition < screenPosition) {
            text.classList.add("visible4");
            image.classList.add("mover");
            titulo.classList.add("visible");
            subtitulo.classList.add("visible");
        }
    });
});

// Fin del evento