// Seleção de elementos
const multiplicationForm = document.getElementById("multiplication-form");
const numberInput = document.getElementById("number");
const multiplicationInput = document.getElementById("multiplicator");
const multiplicationTable = document.getElementById(
  "multiplication-operations"
);
const multiplicationTitle = document.querySelector(
  "#multiplication-title span"
);

// Funções
const createTable = (number, multiplicatorNumber) => {
  multiplicationTable.innerHTML = "";

  for (i = 1; i <= multiplicatorNumber; i++) {
    const result = number * i;
    const template = `<div class="row">
    <div class="operation">${number} x ${i} = </div>
    <div class="result">${result} </div>
    </div>`;

    const parser = new DOMParser();
    const htmlTemplate = parser.parseFromString(template, "text/html");
    const row = htmlTemplate.querySelector(".row");

    multiplicationTable.appendChild(row);
  }

  multiplicationTitle.innerText = number;
};

// Eventos
multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const multiplicationNumber = +numberInput.value;
  const multiplicatorNumber = +multiplicationInput.value;

  if (!multiplicationNumber || !multiplicatorNumber) return;
  createTable(multiplicationNumber, multiplicatorNumber);
});
