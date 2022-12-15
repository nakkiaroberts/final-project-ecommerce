class ItemsController {
    constructor(currentId = 0) {
        this.items = []; 
        this.currentId = currentId;
    }

    addItem(name, description, imageUrl) {
        const item = {
            id: this.currentId++, 
            name: name, 
            description: description,
            imageUrl: imageUrl
        };  
        this.items.push(item);

    //    this.save(name, description, imageUrl);
    };

    save(name, description, imageUrl){
        const data = { name,  description, imageUrl };

        fetch('http://localhost:8080/item', {
        method: 'PUT', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }

    update(name, description, imageUrl){
        //TODO implement this method
        const data = {name, description, imageUrl};

        fetch('http://localhost:8080/item', {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        })
            .then(res => res.json())
            .then(data => console.log(data));

        // console.log("Hello");
    }

    delete(id){
        //TODO implement this method
        fetch('http://localhost:8080/item', {
            method: 'DELETE'
        }) 
    }

    findByItemId(id){
        //TODO implement this method
        fetch('http://localhost:8080/item')
        .then((res) => res.json())
        .then((id) => {
            console.log(id);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    loadItemsFromLocalStorage() {
        const storageItems = localStorage.getItem('ItemsList')
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
