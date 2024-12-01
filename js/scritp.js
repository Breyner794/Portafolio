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
    const containers = document.querySelectorAll(".container");
    const skills = document.querySelectorAll(".skill");
    const triggerBottom = window.innerHeight / 5 * 4;
    
    
    texto.classList.add("visible3");
    paragraph2.classList.add("visible2");
    paragraph.classList.add("visible");

    window.addEventListener("scroll", function() {
        const textPosition = text.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        skills.forEach(skill => {
            const skillTop = skill.getBoundingClientRect().top;
    
            if (skillTop < triggerBottom) {
                skill.classList.add("show");
            } else {
                skill.classList.remove("show");
            }
        });
        containers.forEach(container => {
            const containerTop = container.getBoundingClientRect().top;
    
            if (containerTop < triggerBottom) {
                container.classList.add("show");
            } else {
                container.classList.remove("show");
            }
        });

        if (textPosition < screenPosition) {
            text.classList.add("visible4");
            image.classList.add("mover");
            titulo.classList.add("visible");
            subtitulo.classList.add("visible");
        }
    });
});

// Fin del evento

// var scrollSpy = new bootstrap.ScrollSpy(document.body, {
//     target: '#simple-list-example'
//   });
//   document.querySelectorAll('#nav-tab>[data-bs-toggle="tab"]').forEach(el => {
//     el.addEventListener('shown.bs.tab', () => {
//       const target = el.getAttribute('data-bs-target')
//       const scrollElem = document.querySelector(`${target} [data-bs-spy="scroll"]`)
//       bootstrap.ScrollSpy.getOrCreateInstance(scrollElem).refresh()
//     })
//   })
//   document.addEventListener('DOMContentLoaded', function () {
//     const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
//     const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
//     return new bootstrap.Popover(popoverTriggerEl);
//         });
//     });


   
         