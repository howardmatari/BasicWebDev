function createList() {
    let list = []; 

    return function(item) {
        if (item !== undefined) { 
            list.push(item); // Add the item to the list
        }
        return list; // Return the updated list
    };
}

const addItem = createList();

console.log(addItem('Mouse'));  // Output: ['Mouse']
console.log(addItem('LCD')); // Output: ['Mouse', 'LCD']
console.log(addItem('Disk')); // Output: ['Mouse', 'LCD', 'Disk']
const addItem = createListManager();

    document.getElementById('addButton').addEventListener('click', function() {
        const itemInput = document.getElementById('itemInput');
        const item = itemInput.value.trim();

        if (item) {
            const newList = addItem(item);
            itemInput.value = '';
            showList(newList);
        }
    });

    const addItem = createList();

    document.getElementById('addButton1').addEventListener('click', function() {
        const itemInput = document.getElementById('itemInput1');
        const item = itemInput.value.trim();

        if (item) {
            const updatedList = addItem(item);
            itemInput.value = '';
            showList(updatedList);
        }
    });

    document.getElementById('addButton2').addEventListener('click', function() {
        const itemInput = document.getElementById('itemInput2');
        const item = itemInput.value.trim();

        if (item) {
            const updatedList = addItem(item);
            itemInput.value = '';
            showList(updatedList);
        }
    });

    function showList(list) {
        const itemList = document.getElementById('itemList');
        itemList.innerHTML = '';
        list.forEach(function(item) {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            itemList.appendChild(listItem);
        });
    }   