const updateCharacter = document.querySelector('p')
updateCharacter.addEventListener('click', newName)
function newName(){
    const name = prompt('Enter your latest character')
    updateCharacter.textContent = `Character 2 : ${name}`
}

