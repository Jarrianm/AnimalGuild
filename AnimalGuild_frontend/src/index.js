document.addEventListener("DOMContentLoaded", async () => {
 // var _ = require('lodash')
 //
 // let cars = ['benz','benz','ford','BMW']
 // let unqcars = _.uniq(cars)
 // console.log(unqcars)

  let ul = document.getElementById('animal-list')
  let details = document.getElementById('animal-info')
  let sidebar = document.getElementById('side-bar')

  let animals = await fetchAnimals()
  console.log(animals)

  // fetchAnimals().then(getAllSpecies)

async function fetchAnimals(){
  let res = await fetch('http://localhost:3000/api/v1/animals')
  let animals = await res.json()
  return animals
};

function getAllSpecies(animals){
  animals.forEach(displaySpecies)
}

function displaySpecies(animal){
  speciesButton = document.querySelector(`.${animal.species}`)
  // console.log(speciesButton)
  if(speciesButton === null) {
    ul.innerHTML += `<br> <li id='species' class="list">
  <button class="${animal.species}"type='button'id=${animal.species}>${animal.species}</button>
  </li>
  `
  }



let li = document.getElementById(`species`)
console.log(li)
ul.addEventListener('click', showSpecies)


};
async function showSpecies(event){
  let animalSpecies = event.target.className
// let fun = event.target.className
// console.log('clicked the thing',fun)
  animals.filter(animals => animals.species === animalSpecies)
  displayAnimals(filteredAnimals)
}

// displayAnimals(filteredAnimals) {
//
// }



// function filter()
// animals.filter(animals => animals.species === animalSpecies))
  // if(event.target.className === "Dog"){
  //   getDogs(event)
  // }
  // else if(event.target.className === "Cat"){
  //   getCats(event)
  // }
  // else if(event.target.className === "bear"){
  //   showBears(event)
  // }
  // else if(event.target.className === 'dragon'){
  //   showDragons(event)
  // }
  // else if(event.target.className === 'wolf'){
  //   showWolves(event)
  // }
  // else if(event.target.className ===  'squirell'){
  //   showSquirells(event)
  // }
  // else if(event.target.className === 'wookie'){
  //   showWookies(event)
  // }


// function

// function getDogs(event){
//   console.log(event)
//   fetch('http://localhost:3000/api/v1/animals')
//   .then(res => res.json())
//   .then(animals => animals.filter(animals => animals.species ==="Dog"))
//   .then(showDogs)
// };

// function showDogs(animal){
// console.log(animal)
//
//
// }
//
// function getCats(event){
//   fetch('http://localhost:3000/api/v1/animals')
//   .then(res => res.json())
//   .then(animals => animals.filter(animals => animals.species ==="Cat"))
//   .then(showDogs)
// };
//
//
// function showCats(animal){
//   console.log(animal)
//
//
// }
//
// function showBears(event){
//   console.log(event)
// }
//
// function showDragons(event){
//   console.log(event)
// }
//
// function showWolves(event){
//   console.log(event)
// }
//
// function showSquirells(event){
//   console.log(event)
// }
//
// function showWookies(event){
//   console.log(event)
// }
//



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
// console.log(animals.filter(animals => animals.species ==="Dog"))



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





















})
