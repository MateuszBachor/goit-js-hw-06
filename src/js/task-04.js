const button = document.querySelector("button");
let counterValue =0;
let value = document.querySelector("#value")

button.addEventListener("click", () => {
  console.log(counterValue )
  counterValue --;
  value.textContent = counterValue;
});
const counter = document.querySelector("#counter");
const counterButton = counter.lastElementChild;
counterButton.addEventListener("click", () => {
    counterValue ++
    value.textContent = counterValue;
  });
