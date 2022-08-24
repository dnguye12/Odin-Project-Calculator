let display = document.querySelector("p");

let btns = document.querySelectorAll(".btn");
btns.forEach(btn => btn.addEventListener("click", function () {
    if (display.textContent == "0") {
        display.textContent = btn.textContent;
    } else {
        display.textContent = display.textContent + btn.textContent;
    }
}));