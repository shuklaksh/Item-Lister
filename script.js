const form = document.querySelector('form');
const newItem = document.querySelector('#new-item');
const itemList = document.querySelector('ul');
const filter = document.querySelector('#filter');

//add Item
form.addEventListener('submit',addElement);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);



function addElement(e) {
    e.preventDefault();
    const newLi = document.createElement('li');
    newLi.appendChild(document.createTextNode(newItem.value));
   
    const dltBtn = document.createElement('button');
    dltBtn.className = 'btn';
    dltBtn.appendChild(document.createTextNode('X'));

    newLi.appendChild(dltBtn);
    itemList.appendChild(newLi);
    newItem.value = "";
}

// remove Item
function removeItem(e) {
   e.target.parentElement.remove();
}

//filter
function filterItems(e) {
    let text = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li');

    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent.toLowerCase();
        if(itemName.indexOf(text) != -1) {

            item.style.display = 'flex';
        }
        else{
            item.style.display = 'none';
        }
    })
}
