let swiper = new Swiper(".departments", {
    effect: "cube",
    allowTouchMove: true,
    coverflowCursor: false,
    cubeEffect: {
        shadow: true,
        shadowOffset: 30,
        shadowScale: 0.90,
        slideShadow: true,
    },
    mousewheel: false,
})

function goToSlide(index) {
    swiper.slideTo(index, 1000)
}

function home_btn(number) {
    swiper.slideTo(number, 1000)
}

let openbtn = document.getElementById("openbtn")
let modal_lang = document.getElementById("modal_lang")

openbtn.addEventListener("click", ()=> {
    modal_lang.classList.toggle("modal_open")
})