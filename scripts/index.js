const nameFromStorage = localStorage.getItem("name")
const game = document.querySelector(".game")
const titleDOM = document.querySelector(".header__name")
const countDOM = document.querySelector(".header__count")
const timeDOM = document.querySelector(".header__time")
const char = document.querySelector(".character")
// const moleCoords = []
// const step = 5
// const conut = 0
// let maxTime = 20
const gameWidht = window.innerWidth - 110





// timer = setInterval(function () {
//     let seconds = maxTime % 60

//     if (maxTime <= 0) {

//         clearInterval(timer);
//         timeDOM.innerHTML = "00:20";
//         alert("время истекло ф5")

//     } else {

//         let strTimer = `00:${parseTime(seconds)}`;

//         timeDOM.innerHTML = strTimer;
//     }
//     maxTime = maxTime - 1;
// }, 1000)

// function parseTime(seconds) {
//     if (seconds <= 9) return `0${seconds}`
//     return seconds
// }

// const moleAmount = Math.floor(Math.random() * (4 - 1 + 1) + 1)

// for (let i = 0; i < moleAmount; i++) {
//     const moleAmount = Math.floor(Math.random() * (1809 - 400 + 1) + 400)
//     moleCoords.push(moleAmount)
// }


// function spawnMole() {
//     moleCoords.forEach((i) => {
//         const img = document.createElement("img")
//         img.src = "../img/mole.png"
//         img.classList.add("mole")
//         img.style.left = i + "px"
//         console.log(img.style.left)
//         game.append(img)
//     })
// }




document.addEventListener("DOMContentLoaded", () => {
    // countDOM.textContent = "Количество цветов: " + conut
    // titleDOM.textContent = "Ваше имя: " + nameFromStorage
    // timeDOM.textContent = "00:20"
    // spawnMole()
})



document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        char.classList.remove("move__left")
        if (!char.classList.contains("move__right")) {
            char.classList.add("move__right")
        }
        const numberLeftOfset = Number(char.style.left.replace("px", ""))

        if (numberLeftOfset === gameWidht) {
            console.log('right');
        } else {
            char.style.left = numberLeftOfset + step + "px"
        }

    }
    if (e.key === "ArrowLeft") {
        char.classList.remove("move__right")
        if (!char.classList.contains("move__left")) {
            char.classList.add("move__left")
        }
        const numberLeftOfset = Number(char.style.left.replace("px", ""))

        if (numberLeftOfset === 0) {
            console.log('left');
        } else {
            char.style.left = numberLeftOfset - step + "px"
        }

    }
})