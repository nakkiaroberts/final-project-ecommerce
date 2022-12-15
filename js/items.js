import ItemsController from './itemsController.js';

// Initialize a new TaskManager with currentId set to 0
const itemsController = new ItemsController(0);
const btn = document.getElementById('btn-save');

const addItems = (ev)=> { // passing the user clicking event
    ev.preventDefault(); // stops the form from submitting (stops page from reloading)
    const name = document.getElementById('itemName').value;
    const description = document.getElementById('category').value;
    const imageUrl = document.getElementById('myFile').value;

     // validation code
     if (name == '' || description == 'Choose' || imageUrl == '') {
        alert('Please complete all entries!');
    } else {
        // Add the item to the ItemsController
        itemsController.addItem(name, description, imageUrl);

        //saving to the database 
        itemsController.update(name, description, imageUrl);

        //findItemById
        itemsController.findItemById(id);

        // deleting ?
        itemsController.delete(id);

        // localStorage.setItem('ItemsList', JSON.stringify(itemsController.items));
        
        // clear the form after user submits
        const form = document.getElementsByName('addItemForm')[0];
        form.reset();

        alert('Item successfully added!');
    }

    // itemsController.addItem(name, description, imageUrl);

    // //saving to localStorage
    // localStorage.setItem('ItemsList', JSON.stringify(itemsController.items));
}

if(btn) {
    btn.addEventListener('click', addItems);
}


function addItemCard(newItem){
    const itemHTML = '<div class="card" style="width: 20rem;">\n' +
        '    <img src="'+newItem.imageUrl +'" alt="product image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+newItem.name+'</h5>\n' +
        '        <p class="card-text">'+newItem.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add to cart</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById('list-items');
    if(itemsContainer) {
        itemsContainer.innerHTML += itemHTML;
    }
}

function loadStorageSampleData(){
    if(!localStorage.getItem('ItemsList')) {
        const sampleItems = [{'name':'boots',
        'description':'Brown sturdy boots',
        'imageUrl':'images/boots.jpg',
        },
        {'name':'pink heels',
        'description':'Comfortable heels that will make you stand out',
        'imageUrl':'images/pinkHeels.jpg'}];
        localStorage.setItem('ItemsList', JSON.stringify(sampleItems));
    }
}

function loadCardsListFromItemsController(){
    for(var i = 0, size = itemsController.items.length; i < size ; i++){
        const item = itemsController.items[i];
        addItemCard(item);
    }
}

loadStorageSampleData();
itemsController.loadItemsFromLocalStorage();
loadCardsListFromItemsController();


