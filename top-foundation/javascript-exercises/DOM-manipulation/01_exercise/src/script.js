const body = document.querySelector('body')
const container = document.createElement('div');
const redPara = document.createElement('p');
const blueHead3 = document.createElement('h3');
const main = document.createElement('main')
const anotherDiv = document.createElement('div')
const h1InAnotherDiv = document.createElement('h1')
const pInAnotherDiv = document.createElement('p')

// buttons
const btns = document.querySelectorAll('button');

container.classList.add('container');
container.appendChild(redPara)
container.appendChild(blueHead3)

redPara.textContent = "Hey I’m red!"
redPara.classList.add('text-red-400', 'font-semibold', 'text-xl')

blueHead3.textContent = "I’m a blue h3!"
blueHead3.classList.add('text-blue-400', 'font-semibold', 'text-2xl')

main.appendChild(anotherDiv)
main.classList.add('border-2', 'border-slate-600', 'p-4')
h1InAnotherDiv.textContent = "I’m in a div"
h1InAnotherDiv.classList.add('text-slate-600', 'font-semibold', 'text-4xl')
pInAnotherDiv.textContent = "ME TOO!"
pInAnotherDiv.classList.add('text-slate-600', 'text-xl')

anotherDiv.appendChild(h1InAnotherDiv)
anotherDiv.appendChild(pInAnotherDiv)


body.appendChild(container)
body.appendChild(main)

btns.forEach((button) => {

    button.addEventListener('click', () => {
        alert("I'm button id: " + button.id)
    })
})