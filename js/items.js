import ItemsController from './itemsController.js';

// Initialize a new TaskManager with currentId set to 0
const itemsController = new ItemsController(0);

let items = [];

const addItems = (ev)=> { // passing the user clicking event
    ev.preventDefault(); // stops the form from submitting (stops page from reloading)
    // const name = document.getElementById('itemName').value;
    // const category = document.getElementById('category').value;
    // const image = document.getElementById('myFile').value;

    let newItem = {
        id: Date.now(),
        itemName: document.getElementById('itemName').value,
        category: document.getElementById('category').value,
        image: document.getElementById('myFile').value
    }
   
    // const newItem = new ItemsController(name, category, image);
    items.push(newItem);
    document.querySelector('form').reset(); // to clear the form for the next entries

    // displaying the objects
    console.warn('added', {items});
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(items, '\t', 2);

    //saving to localStorage
    localStorage.setItem('ItemsList', JSON.stringify(items));
}

document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('btn').addEventListener('click', addItems);
});

function addItemCard(newItem){
    const itemHTML = '<div class="card" style="width: 20rem;">\n' +
        '    <img src="'+newItem.img +'" width="300" height="250"  alt="product image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+newItem.name+'</h5>\n' +
        '        <p class="card-text">'+newItem.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

// console.log(items.image);

// addItemCard(items);

// loadStorageSampleData();
// itemsController.loadItemsFromLocalStorage();
// loadCardsListFromItemsController();

// const btn = document.getElementById('btn');
// const displayItem = document.getElementById('list-items');
// const storeInfo = [];

// function theEventListener(ev) {
//     ev.preventDefault(); // stops the form from submitting (stops page from reloading)
//     const name = document.getElementById('itemName');
//     const category = document.getElementById('category');
//     const image = document.getElementById('myFile');

//     let nameValue = name.value;
//     let categoryValue = category.value;
//     let imageValue = image.value; 

//     console.log(nameValue);
//     console.log(categoryValue);
//     console.log(imageValue);

//     const newItem = new ItemsController(nameValue, categoryValue, imageValue);
//     storeInfo.push(newItem);
//     console.log(newItem);
//     console.log(storeInfo);

//     //LocalStorage part
//     //to save item you use setItem
//     localStorage.setItem('items', JSON.stringify(newItem)); //we use JSON.stringify b/c it's an array of objects

//     // displaying the objects
//     console.warn('added', {storeInfo});
//     let pre = document.querySelector('#msg pre');
//     pre.textContent = '\n' + JSON.stringify(storeInfo, '\t', 2);

//     addItemCard(newItem);
// }

// btn.addEventListener('click', theEventListener);

// function loadFromStorage() {
//     // get item retrieves data
//     const newItem = JSON.parse(localStorage.getItem('items')); // only argument is the key name
//     console.log(newItem);
// }

// console.log(itemsController);

// const btn = document.getElementById('send');

// const myEventListener = () => {
//     const name = document.getElementById('itemName');
//     const category = document.getElementById('category');
//     const image = document.getElementById('myFile');

//     let nameValue = name.value;
//     let categoryValue = category.value; 
//     let imageValue = image.value;

//     const newItem = new ItemsController(nameValue, categoryValue, imageValue);

//     //LocalStorage part
//     //to save item you use setItem
//     localStorage.setItem('items', JSON.stringify(newItem)); //we use JSON.stringify b/c it's an array of objects
    
//     console.log(newItem);

//     name.value = '';
//     category.value = '';
// }
// btn.addEventListener('click', myEventListener);


// // how to load something from localStorage

// function loadFromStorage() {
//     // get item retrieves data
//     const newItem = JSON.parse(localStorage.getItem('items')); // only argument is the key name
//     console.log(newItem);
// }

// loadFromStorage();


