document.addEventListener("DOMContentLoaded", () => {

  let ul = document.getElementById('animal-list')
  let details = document.getElementById('animal-info')
  let sidebar = document.getElementById('side-bar')

function fetchAnimals(){
  fetch('http://localhost:3000/api/v1/animals')
  .then(res => res.json())
  .then(animals => animals.forEach(displaySpecies))
};

function displaySpecies(animal){

  ul.innerHTML += `<br> <li id='species' class="list">
<button class="${animal.species}"type='button'id=${animal.species}>${animal.species}</button>
</li>
`
let li = document.getElementById(`species`)

ul.addEventListener('click', showSpecies)


};
function showSpecies(event){

  if(event.target.className === "Dog"){
    showDogs(event)
  }
  else if(event.target.className === "Cat"){
    showCats(event)
  }
  else if(event.target.className === "bear"){
    showBears(event)
  }
  else if(event.target.className === 'dragon'){
    showDragons(event)
  }
  else if(event.target.className === 'wolf'){
    showWolves(event)
  }
  else if(event.target.className ===  'squirell'){
    showSquirells(event)
  }
  else if(event.target.className === 'wookie'){
    showWookies(event)
  }
};


function showDogs(event){
  console.log(event)
}

function showCats(event){
  console.log(event)
}

function showBears(event){
  console.log(event)
}

function showDragons(event){
  console.log(event)
}

function showWolves(event){
  console.log(event)
}

function showSquirells(event){
  console.log(event)
}

function showWookies(event){
  console.log(event)
}




// sidebar.addEventListener('click', showAllWithSameSpecies)
// let dogBtn = sidebar.querySelector("button[class= 'Dog']")
// console.log(dogBtn)
// function showAllWithSameSpecies(event){
// if (event.target.className === "button"){
//   getDetails().then(filterAnimals)
// }
//
// };


function getDetails(){
return fetch('http://localhost:3000/api/v1/animals')
.then(res => res.json())

};

function filterAnimals(animals, event){
console.log(animals.filter(animals => animals.species ==="Dog"))



// else if(animals.filter(animals => animals.species ==="Cat")){
// // showCats()
// }
// else if(animals.filter(animals => animals.species ==="bear")){
// // showBears()
// }
// else if(animals.filter(animals => animals.species ==="dragon")){
// // showDragons()
// }
// else if(animals.filter(animals => animals.species ==="wolf")){
// // showWolves()
// }
// else if(animals.filter(animals => animals.species ==="squirell")){
//   // showSquirells()
// }
// else if(animals.filter(animals => animals.species === "wookie")){
//   // showWookies()
// }
};




















  fetchAnimals()
})
