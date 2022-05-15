function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const color = document.querySelector(".color");
const changeColor = document.querySelector(".change-color");


changeColor.addEventListener("click", () => {
  color.textContent =  getRandomHexColor();
 document.body.style.backgroundColor = color.textContent;
});
