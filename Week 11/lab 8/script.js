const shape = document.getElementsByClassName('moon')[0];
const btn = document.getElementsByClassName('meBtn')[0];

btn.addEventListener('click', () => {
    shape.classList.add('rotate-scale');
});

shape.addEventListener("transitionend", () => {
    shape.classList.remove("rotate-scale");
});

