const content = document.querySelector(".content")
const popup = document.querySelector(".popup-model")

function toggle() {
    popup.classList.toggle("popup-model-active");
    content.classList.toggle("content-active");
}