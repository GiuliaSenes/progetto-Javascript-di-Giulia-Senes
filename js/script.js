let count = 0;

const divContainer = document.createElement("div");
const span = document.createElement("span");
span.textContent = count;
const DivBtn = document.createElement("div");

const btnMinus = document.createElement("button");
const btnPlus = document.createElement("button");
const btnReset = document.createElement("button");

btnPlus.textContent = "+";
btnMinus.textContent = "-";
btnReset.textContent = "Reset";

// Aggiunta classi Bootstrap
divContainer.classList.add("container", "min-vh-100", "d-flex", "flex-column", "justify-content-center", "align-items-center", "gap-3", "p-3");
DivBtn.classList.add("d-flex", "justify-content-center", "align-items-center", "gap-2", "flex-wrap");
btnPlus.classList.add("btn", "btn-lg", "btn-success", "px-4", "py-2");
btnMinus.classList.add("btn", "btn-lg", "btn-secondary", "px-4", "py-2");
btnReset.classList.add("btn", "btn-lg", "btn-outline-danger", "px-4", "py-2", "w-100");
span.classList.add("counter-display", "display-1", "card", "shadow-lg", "mb-5", "d-flex", "justify-content-center", "align-items-center");

// Logica dei pulsanti
btnPlus.addEventListener("click", () => {
    span.textContent = ++count;
});

btnMinus.addEventListener("click", () => {
    if (count > 0) {
        span.textContent = --count;
    }
});

btnReset.addEventListener("click", () => {
    count = 0;
    span.textContent = count;
});

// Assemblaggio elementi
DivBtn.appendChild(btnMinus);
DivBtn.appendChild(btnPlus);
DivBtn.appendChild(btnReset);
divContainer.appendChild(span);
divContainer.appendChild(DivBtn);

document.body.appendChild(divContainer);