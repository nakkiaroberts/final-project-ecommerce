import ItemsController from './itemsController.js';

// Initialize a new TaskManager with currentId set to 0
const itemsController = new ItemsController(0);
const btn = document.getElementById('btn');

const addItems = (ev)=> { // passing the user clicking event
    ev.preventDefault(); // stops the form from submitting (stops page from reloading)
    const name = document.getElementById('itemName').value;
    const category = document.getElementById('category').value;
    const image = document.getElementById('myFile').value;

    itemsController.addItem(name, category, image);

    document.querySelector('form').reset(); // to clear the form for the next entries

    //saving to localStorage
    localStorage.setItem('ItemsList', JSON.stringify(itemsController.items));
}

if(btn) {
    btn.addEventListener('click', addItems);
}

function addItemCard(newItem){
    const itemHTML = '<div class="card" style="width: 20rem;">\n' +
        '    <img src="'+newItem.img +'" width="300" height="250"  alt="product image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+newItem.name+'</h5>\n' +
        '        <p class="card-text">'+newItem.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add to cart</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    if(itemsContainer) {
        itemsContainer.innerHTML += itemHTML;
    }
}

// function loadStorageSampleData(){
//     if(!localStorage.getItem("ItemsList")){
//         const sampleItems = [{'name':'juice',
//         'img':'https://www.gs1india.org/media/Juice_pack.jpg',
//         'description':'Orange and Apple juice fresh and delicious'},
//         {'name':'Ruffles Chicken',
//         'img':'https://s3-ap-southeast-1.amazonaws.com/www8.fairprice.com.sg/fpol/media/images/product/XL/13086598_LXL1.jpg',
//         'description':'Ruffles Potato Chips - Chicken'}];
//         localStorage.setItem("ItemsList", JSON.stringify(sampleItems));
//     }
// }

function loadCardsListFromItemsController(){
    for(var i = 0, size = itemsController.items.length; i < size ; i++){
        const item = itemsController.items[i];
        addItemCard(item);
    }
}

// loadStorageSampleData();
itemsController.loadItemsFromLocalStorage();
loadCardsListFromItemsController();

