const buttons = document.querySelectorAll("button");
const screenDisplay = document.querySelector(".screen");

let calculation = [];
let calc;

function calculate(button) {
  const value = button.textContent;
  if (value === "CLEAR") {
    calculation = [];
    screenDisplay.textContent = "";
  } else if (value === "=") {
    screenDisplay.textContent = eval(calc);
  } else {
    calculation.push(value);
    calc = calculation.join("");
    screenDisplay.textContent = calc;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    calculate(button);
  });
});
