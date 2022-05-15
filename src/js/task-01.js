const items = document.querySelectorAll('.item');
console.log(items)
console.log(`Number of categories: ${items.length}`)
for(const item of items){
    console.log("Category: " + item.firstElementChild.innerHTML)
    console.log(item.lastElementChild.children.length)
}