const nameFromStorage = localStorage.getItem("name")
const game = document.querySelector(".game")
const titleDOM = document.querySelector(".header__name")
const countDOM = document.querySelector(".header__count")
const timeDOM = document.querySelector(".header__time")
const char = document.querySelector(".character")
const moleCoords = []
const step = 5
let conut = 0
let maxTime = 20
const gameWidht = window.innerWidth - 110
const moles = []
const flowers = []
const flowerCoords = []
const flowersAmount = 5



timer = setInterval(function () {
    let seconds = maxTime % 60

    if (maxTime <= 0) {

        clearInterval(timer);
        timeDOM.innerHTML = "00:20";
        const a = document.createElement("a")
        a.href = "results.html"
        a.click()

    } else {

        let strTimer = `00:${parseTime(seconds)}`;

        timeDOM.innerHTML = strTimer;
    }
    maxTime = maxTime - 1;
}, 1000)

function parseTime(seconds) {
    if (seconds <= 9) return `0${seconds}`
    return seconds
}

const moleAmount = Math.floor(Math.random() * (4 - 1 + 1) + 1)

for (let i = 0; i < moleAmount; i++) {
    const moleAmount = Math.floor(Math.random() * (1809 - 400 + 1) + 400)
    moleCoords.push(moleAmount)
}


function spawnMole() {
    moleCoords.sort((a, b) => a - b)

    moleCoords.forEach((i) => {
        const img = document.createElement("img")
        img.src = "../img/mole.png"
        img.classList.add("mole")
        img.style.left = i + "px"
        moles.push(img)
        game.append(img)
    })

}

function spawnFlowers() {
    flowerCoords.sort((a, b) => a - b)

    flowerCoords.forEach((i) => {
        const img = document.createElement("img")
        img.src = "../img/flower.png"
        img.classList.add("flower")
        img.style.left = i + "px"
        flowers.push(img)
        game.append(img)
    })
}

for (let i = 0; i < flowersAmount; i++) {
    const flowersCoord = Math.floor(Math.random() * (1809 - 400 + 1) + 400)
    flowerCoords.push(flowersCoord)
}


document.addEventListener("DOMContentLoaded", () => {
    countDOM.textContent = "Количество цветов: " + conut
    titleDOM.textContent = "Ваше имя: " + nameFromStorage
    timeDOM.textContent = "00:20"
    spawnMole()
    spawnFlowers()
})

function checkPickUpFlower() {
    if (flowers.length) {
        if (checkColide(char, flowers[0])) {

            game.removeChild(flowers[0])
            flowers.shift()
            conut++
            countDOM.textContent = "Количество цветов: " + conut
        }
    }
}

function checkTouchMole() {
    if (moles.length) {
        if (checkColide(char, moles[0])) {
            game.removeChild(moles[0])
            moles.shift()
            conut--
            countDOM.textContent = "Количество цветов: " + conut
        }
    }
}


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
            checkPickUpFlower()
            checkTouchMole()
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
            checkPickUpFlower()
            checkTouchMole()
        }

    }
    if (e.key === " ") {
        if (!document.querySelector("img.ball")) {
            const img = document.createElement("img")
            img.src = "img/ball.png"
            img.classList.add("ball")

            img.style.left = (Number(char.style.left.replace("px", "")) + char.clientWidth) + "px"


            if (moles.length) {
                game.append(img)
                let animation = setInterval(() => {
                    if (checkColide(img, moles[0])) {

                        game.removeChild(img)
                        game.removeChild(moles[0])
                        moles.shift()

                        console.log(moles);
                        clearInterval(animation)
                    }
                    img.style.left = (Number(img.style.left.replace("px", "")) + 10) + "px"
                }, 100);
            }

        }

    }

})



function checkColide(obj1, obj2) {

    const obj1Left = Number(obj1.style.left.replace("px", ""))
    const obj2Left = Number(obj2.style.left.replace("px", ""))

    // if (Number(char.style.left.replace("px", "")) > obj2Left) {
    //     // console.log('obj2', obj2);
    //     const idx = moles.indexOf(obj2)
    //     game.removeChild(moles[idx])
    //     moles.splice(idx, 1)
    //     console.log(moles);

    // }
    if (obj1Left + obj1.clientWidth >= obj2Left && obj1Left <= obj2Left) return true
    return false
}