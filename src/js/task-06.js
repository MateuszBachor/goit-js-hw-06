const input = document.querySelector("#validation-input");
input.addEventListener("blur", () => {
  input.setAttribute("data-length", input.value.length)
 if(input.value.length<=6){
    input.classList.add("valid")
    input.classList.remove("invalid")
 }
 else if(input.value.length>6){
   input.classList.add("invalid")
   input.classList.remove("valid")
 }
 console.log(input)
 });


