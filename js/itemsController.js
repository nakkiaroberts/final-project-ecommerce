class ItemsController {
    constructor(currentId = 0) {
        this.items = []; 
        this.currentId = currentId;
    }


    addItem(name, description, img, created) {
        const item = {
            id: this.currentId++, 
            name: name, 
            description: description,
            img: img,
            created: created,
        };
        
        this.items.push(item);
    };
    
} 



// const newItem = new ItemsController()
// newItem.addItem("shoes", "footwear", "pictures", "")
// console.log(newItem.items);
