let display = document.querySelector("h3");
let displaySec = document.querySelector("p");
let fir = null;
let sec = null;
let res = null;

let btns = document.querySelectorAll(".btn");
btns.forEach(btn => btn.addEventListener("click", function () {
    if (display.textContent == "0") {
        display.textContent = btn.textContent;
    } else {
        display.textContent = display.textContent + btn.textContent;
    }
}));

let btnClear = document.getElementById("btnClear");
btnClear.addEventListener("click", function () {
    display.textContent = "0";
    fir = null;
    sec = null;
    res = null;
});

let btnDel = document.getElementById("btnDel");
btnDel.addEventListener("click", function () {
    if (display.textContent.length == 1) {
        display.textContent = "0";
    } else {
        display.textContent = display.textContent.substring(0, display.textContent.length - 1);
    }
});

let btnAdd = document.getElementById("add");
btnAdd.addEventListener("click", function() {
    if(fir == null) {
        if(display.textContent != "0") {
            fir = parseFloat(display.textContent);
            displaySec.textContent = fir + " +";
            display.textContent = "0";
        }
    }else {
        if(display.textContent != "0") {
            fir += parseFloat(display.textContent);
            displaySec.textContent = fir + " +";
            display.textContent = "0";
        }
    }

});

let btnEqual = document.getElementById("equal");
btnEqual.addEventListener("click", function() {
    if(fir != null) {
        let opt = displaySec.textContent.slice(-1);
        console.log(opt);
        if(opt=="+") {
            displaySec.textContent += (" " + display.textContent);
            display.textContent = (parseFloat(fir) + parseFloat(display.textContent));
        }
        fir = null;
    }
});