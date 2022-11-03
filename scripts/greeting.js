const input = document.querySelector(".input");
const button = document.querySelector(".link");

function checkValue() {
    if (input.value) {
        button.classList.add("visible")
    } else {
        button.classList.remove("visible")
    }
}

input.addEventListener('input', checkValue)

button.addEventListener("click", () => {
    localStorage.setItem("name", input.value)
    input.value = ""
})

