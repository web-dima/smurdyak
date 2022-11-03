const nameFromStorage = localStorage.getItem("name")
const game = document.querySelector(".game")
const h1 = document.querySelector(".name__title")
const char = document.querySelector(".character")
const step = 5
const gameWidht = game.clientWidth - 100

document.addEventListener("DOMContentLoaded", () => {
    h1.textContent = "Ваше имя: " + nameFromStorage
})

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        const numberLeftOfset = Number(char.style.left.replace("px", ""))
        char.style.left = numberLeftOfset + step + "px"
    }
    if (e.key === "ArrowLeft") {
        const numberLeftOfset = Number(char.style.left.replace("px", ""))
        char.style.left = numberLeftOfset - step + "px"
    }
})



// document.addEventListener("keydown", (e) => {
//     if (e.key === "ArrowRight") {
//         char.classList.remove("move__left")
//         if (!char.classList.contains("move__right")) {
//             char.classList.add("move__right")
//         }
//         const numberLeftOfset = Number(char.style.left.replace("px", ""))

//         if (numberLeftOfset === gameWidht) {
//             console.log('right');
//         } else {
//             char.style.left = numberLeftOfset + step + "px"
//         }

//     }
//     if (e.key === "ArrowLeft") {
//         char.classList.remove("move__right")
//         if (!char.classList.contains("move__left")) {
//             char.classList.add("move__left")
//         }
//         const numberLeftOfset = Number(char.style.left.replace("px", ""))

//         if (numberLeftOfset === 0) {
//             console.log('left');

//         } else {
//             char.style.left = numberLeftOfset - step + "px"
//         }

//     }
// })