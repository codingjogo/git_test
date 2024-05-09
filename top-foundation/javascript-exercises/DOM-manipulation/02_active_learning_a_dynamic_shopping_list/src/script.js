let items = ['something', 'here', 'lists'];
// let items = [];

const input_newItem = document.querySelector('#input_newItem')
console.log(input_newItem.value)
const btn_addItem = document.querySelector('#btn_addItem')
let list_item_component = document.querySelector('#list_item_component')
// add click function to btn_addItem:
// get input
// add input in items[]
// display new array list of items[]
const displayItems = () => {
    if (items.length < 0 || items.length === 0) {
        list_item_component.innerHTML = '<p class="font-semibold text-red-400">ADD NEW ITEM </p>'
    } else {
        list_item_component.innerHTML = '';
        items.map((item) => {
            list_item_component.innerHTML += `
                <li class="font-semibold text-lg mb-4"><span id="item">${item}</span><button class="btn-delete ml-6 bg-red-400">DELETE</button></li>
            `
        })
    }
}

const deleteItem = (itemToDelete) => {
    // this code will improve in other program so it must be object {id:1, item: 'string'} so it's better to identify an ID or whose gonna be deleted but for the sake of simplicity.

    return items.filter((item) => itemToDelete !== item)
}

input_newItem.addEventListener('keypress', (e) => {
    // If the user presses the "Enter" key on the keyboard
    if (e.key === "Enter") {
        // Trigger the button element with a click
        document.getElementById("btn_addItem").click();
      }
})

btn_addItem.addEventListener('click', (e) => {
    const newItem = input_newItem.value;

    items.push(newItem);

    displayItems();
    input_newItem.value = '';
})

displayItems()

const deleteBtns = document.querySelectorAll('.btn-delete')

deleteBtns.forEach((btn) => {
    // console.log(btn.previousElementSibling.textContent)

        btn.addEventListener('click', () => {
            // deletes an item in items[]
            console.log(deleteItem(btn.previousElementSibling.textContent))
            
            displayItems();
        })
})
