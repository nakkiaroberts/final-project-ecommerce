// Please go to items.js for validation code and form reset

// import ItemsController from './itemsController.js';

// // Initialize a new TaskManager with currentId set to 0
// const itemsController = new ItemsController(0);

// const btn = document.getElementById('btn');

// const addItems = ('submit', (ev)=> { // passing the user clicking event

//     // stops the form from submitting (stops page from reloading)
//     ev.preventDefault(); 

//     // Getting the values
//     const name = document.getElementById('itemName').value;
//     const description = document.getElementById('category').value;
//     const imageUrl = document.getElementById('myFile').value;
    
//     // validation code
//     if (name == '' || description == 'Choose'|| imageUrl == '') {
//         alert('Please complete all entries!');
//     } else {
//         // Add the item to the ItemsController
//         itemsController.addItem(name, description, imageUrl);

//         //saving to localStorage 
//         localStorage.setItem('ItemsList', JSON.stringify(itemsController.items));

//         // clear the form after user submits
//         const form = document.getElementsByName('addItemForm')[0];
//         form.reset();

//         alert('Item successfully added!');
//     }
// });

// if(btn) {
//     btn.addEventListener('click', addItems);
// }
