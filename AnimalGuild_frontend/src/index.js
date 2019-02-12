document.addEventListener("DOMContentLoaded", () => {

  let ul = document.getElementById('animal-list')
  let details = document.getElementById('animal-info')

function fetchAnimals(){
  fetch('http://localhost:3000/api/v1/animals')
  .then(res => res.json())
  .then(animals => animals.forEach(displaySpecies))
  .then(animals => animals.forEach(displayDetails))
};

function displaySpecies(animal){
  ul.innerHTML += `<br> <li id=${animal.id} class="list">
<button class="button"type='button'id=${animal.species}>${animal.species}</button>
`
};

function displayDetails(animal){
  console.log(animal)
};






















  fetchAnimals()
})
