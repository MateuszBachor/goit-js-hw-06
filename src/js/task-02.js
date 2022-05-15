const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ingredients = document.createElement("ul");
// ingredients.innerHTML = "ingredients";
// document.body.appendChild(ingredients);

for(const ingredient of ingredients){
  const li = document.createElement("li");
  li.textContent = ingredient;
  document.querySelector("ul").appendChild(li);
}

