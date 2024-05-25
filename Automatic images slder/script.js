const wrapper = document.querySelector(".wrapper"),
    crousel = document.querySelector(".crousel"),
    images = document.querySelectorAll("img"),
    buttons = document.querySelectorAll(".button");

    let imageIdex = 1,
        intervalId;


const autoSlide = () => {
    intervalId = setInterval(() => slideImage(++imageIdex),2000)
}

autoSlide();

const slideImage = () => {
    imageIdex = imageIdex === images.length ? 0 : imageIdex < 0 ? images.length-1 : imageIdex;
    crousel.style.transform = `translate(${-(imageIdex * 100)}%)`
}

const updateClick = (e) => {
    clearInterval(intervalId);
    intervalId += e.target.id === "next" ? 1 : -1;
    slideImage(imageIdex);
    autoSlide();
}

buttons.forEach((button) => {button.addEventListener("click",updateClick)})

wrapper.addEventListener("mouseover",() => clearInterval(intervalId));
wrapper.addEventListener("mouseleave",autoSlide);