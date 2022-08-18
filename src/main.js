import {filterHousesFunction} from './data.js'; //import { example } from './data.js';
import {filterGenderFunction} from './data.js'; 
import {filterSpellsFunction} from './data.js'; 
//import {filterSpellsFunction} from './data.js';

import datos from "./data/harrypotter/harrypotterdata.js";

const allCharacters = datos.characters;
const generadorHTML = (character) => {

  //*let newDiv = document.createElement("div")*/
  let characters = `<button id="${character.id}" class="charactersStyle">
            <p><strong>${character.name}</strong></p>
            <p>Birth: ${character.birth}</p>
            <p>Species: ${character.species}</p>
            <p>House${character.house}</p>
          </button>
          <div id="myModal" class="modal">
              <div class="modal-content">
              <span class="close">&times;</span>
              <div id="characterData">
              </div>
              </div>
          </div>`;
  return characters;
};

///////muestra personajes en pantalla
let todoelHTML = "";
allCharacters.forEach( (oneCharacter) => (todoelHTML += generadorHTML(oneCharacter)));
document.getElementById("showCharacter").innerHTML = todoelHTML;
////////////////////////////////////////////////////////////////

let houseOption = document.getElementById("casaId")
houseOption.addEventListener("click", function (event) {
  todoelHTML = "";
filterHousesFunction(event.target.value).forEach( (oneCharacter) => (todoelHTML += generadorHTML(oneCharacter)))
document.getElementById("showCharacter").innerHTML = todoelHTML;
})

let genderOption = document.getElementById("genderId")
genderOption.addEventListener("click", function (event) {
  todoelHTML = "";
filterGenderFunction(event.target.value).forEach( (oneCharacter) => (todoelHTML += generadorHTML(oneCharacter)))
document.getElementById("showCharacter").innerHTML = todoelHTML;
})

let spellsOption = document.getElementById("spellsId")
spellsOption.addEventListener("click", function (event) {
  todoelHTML = "";
filterSpellsFunction(event.target.value).forEach( (oneSpell) => (todoelHTML += generadorHTML(oneSpell)))
document.getElementById("showCharacter").innerHTML = todoelHTML;
})

let sortAtoZOption = document.getElementById("spellsId")
sortAtoZOption.addEventListener("click", function (event) {
  filterGenderFunction(event.target.value)
})

//forEach(allCharacters)
//console.log(forEach(allCharacters));

// console.log(allCharacters[i].name);
/*// Get the modal
var modal = document.getElementById("myModal");
// Get the div character that opens the modal
var btn = document.getElementsByClassName("charactsStyle");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
const insertDataToModal = (id) => {
  const character = allCharacters.find(
    (character) => character.id === Number(id)
  );
  const characterData = document.getElementById("characterData");
  characterData.innerHTML = `<p>Name: ${character.name}</p>
   <p>Birth: ${character.birth}</p>
   <p>Species: ${character.species}</p>
   <p>House: ${character.house}</p>`;
};
// When the user clickon the button, open the modal
for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function (e) {
    const id = e.srcElement.id;
    modal.style.display = "block";
    insertDataToModal(id);
  };
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};*/