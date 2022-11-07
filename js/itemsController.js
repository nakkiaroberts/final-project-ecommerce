class ItemsController {
    constructor(currentId = 0) {
        this.items = []; 
        this.currentId = currentId;
    }

    addItem(name, description, img) {
        const item = {
            id: this.currentId++, 
            name: name, 
            description: description,
            img: img,
            // sizes: sizes,
            // colors: colors,
            // created: created,
        };        
        this.items.push(item);
    };
    
    loadItemsFromLocalStorage() {
        const unparsedLSItems = localStorage.getItem('items');
        const parsedLSItems = JSON.parse(unparsedLSItems);
        for(let i = 0; i<parsedLSItems.length; i++){
            console.log(parsedLSItems[i]);
            this.addItem(parsedLSItems[i].name, parsedLSItems[i].description, parsedLSItems[i].img);
        }
    };

    saveItemsToLocalStorage() {
        const save = localStorage.setItem();
    }
} 

// const newItem = new ItemsController()
// newItem.addItem("shoes", "footwear", "pictures");
// console.log(newItem.items);

console.log("hello world");
