
const text = document.querySelector("#text");
const slider = document.querySelector("input");
let value = slider.value;
slider.oninput=function(){
text.style.fontSize=this.value+"px";
}