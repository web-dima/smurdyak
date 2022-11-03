const score = localStorage.getItem("result") ?? 0
const username = localStorage.getItem("name") ?? "неважно"
const resultDOM = document.querySelector(".results")


function formatText(number) {
    const number1 = number % 10;
    if (number > 10 && number < 20) return number + " очков"
    if (number1 > 1 && number1 < 5) return number + " очка"
    if (number1 == 1) return number + " очко"
    return number + " очков"
}



document.addEventListener("DOMContentLoaded", ()=> {
    const h1 = document.createElement("h1")
    const p = document.createElement("p")
    h1.textContent = `Поздравляю ${username}! Вы прошли игру`
    p.textContent = "Ваш счет - " + formatText(score)
    resultDOM.append(h1)
    resultDOM.append(p)
})