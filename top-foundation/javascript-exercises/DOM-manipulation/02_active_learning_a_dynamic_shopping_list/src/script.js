// set shoppingList[]
let shoppingList = ['a','b','c'];

const displayItems = () => {
    // get #shoppingList container (ul)
    
    const shoppingListContainer = document.querySelector('#shoppingList');
    

    if (shoppingList.length === 0) {
        shoppingListContainer.innerHTML = '';
        shoppingListContainer.innerHTML = '<p>please add item to list</p>'
    } else {
        shoppingListContainer.innerHTML = ''
        shoppingList.forEach((item, index) => {
            // create li
            // set text of li to shoppingList[0]
            // create delete button
            // set text delete
            // set onClick function calling deleteItem(index)
            // update UI

            // const listItem = document.createElement('li');
            // const deleteButton = document.createElement('button');
    
            // listItem.textContent = item;
            // deleteButton.textContent = 'DELETE';
            // deleteButton.onclick = () => deleteItem(index);
    
            // listItem.appendChild(deleteButton);
    
            // shoppingListContainer.appendChild(listItem);

            // I think this is better? or getting exploit?
            shoppingListContainer.innerHTML += `
                <li><span>${item}</span><button onClick="deleteItem(${index})">DELETE</button></li>
            `
        })
    }
}

// addItem(): 
const addItem = () => {
    // get input
    const newItem = document.querySelector('#newItemInput').value.trim();
    if (newItem === '') {
        alert('please fill the input');
    } else {
        shoppingList.push(newItem);
    }
    // check if the input isn't empty
    // push the input to the shoppingList[]
    // update UI
    displayItems();
}

// END of addItem()

// deleteItem(index): using splice
const deleteItem = (index) => {
    // delete item using splice
    shoppingList.splice(index, 1)

    // update UI
    displayItems();
}
// END of deleteItem(index)

// initial update UI
displayItems();
