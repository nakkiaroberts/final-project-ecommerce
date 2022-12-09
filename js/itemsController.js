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
            img: img
        };        
        this.items.push(item);
    };

    loadItemsFromLocalStorage() {
        const storageItems = localStorage.getItem("ItemsList")
        if (storageItems) {
            const items = JSON.parse(storageItems);
            for (var i = 0; i < items.length; i++) {
                const item = items[i];
                this.items.push(item);
            }
        }
    }
} 

export default ItemsController;

// const newItem = new ItemsController()
// newItem.addItem("shoes", "footwear", "pictures");
// console.log(newItem.items);

// console.log("hello world");
