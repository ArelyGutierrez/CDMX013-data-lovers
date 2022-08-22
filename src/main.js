import { filterHousesFunction } from './data.js'; //import { example } from './data.js';
import { filterGenderFunction } from './data.js';
import { filterSpellsFunction } from './data.js';
import { sortAtoZFunction } from './data.js';
//import {filterSpellsFunction} from './data.js';

import datos from "./data/harrypotter/harrypotterdata.js";

/*window.addEventListener("scroll", function() {
  var header = this.document.querySelector("header");
  header.classList.toggle("abajo",window.scrollY>0);
  })*/
const allSpells = datos.spells;
const allCharacters = datos.characters;
const generadorHTML = (character) => {

  //*let newDiv = document.createElement("div")*/
  let characters = `<button id="${character.id}" class="charactersStyle">
            <p ><strong>${character.name}</strong></p>
            <div id="extraInfo">
            <p>Birth: ${character.birth}</p>
            <p>Species: ${character.species}</p>
            <p>House:${character.house}</p>
            </div>
            </button>
            `;
  return characters;
};

function showDisplayInfo(arr) {

  ///////muestra personajes en pantalla
  let todoelHTML = "";
  arr.forEach((oneCharacter) => (todoelHTML += generadorHTML(oneCharacter)));
  document.getElementById("showCharacter").innerHTML = todoelHTML;
  ////////////////////////////////////////////////////////////////
}
showDisplayInfo(allCharacters);

let houseOption = document.getElementById("casaId")
houseOption.addEventListener("click", function (event) {
  if (event.target.value === "houses") {
    showDisplayInfo(allCharacters);
  } else {
    showDisplayInfo(filterHousesFunction(event.target.value));
  }
})

let genderOption = document.getElementById("genderId")
genderOption.addEventListener("click", function (event) {
  if (event.target.value === "Students"){
    showDisplayInfo(allCharacters);
  } else {
    showDisplayInfo(filterGenderFunction(event.target.value));
  }
})

const generadorHTMLSpells = (spells) => {

  //*let newDiv = document.createElement("div")*/
  let oneSpell = `<button id="${spells.id}" class="charactersStyle">
            <p ><strong>${spells.name}</strong></p>
            <div id="extraInfo">
            <p>Pronuntiation: ${spells.pronunciation}</p>
            <p>Spell Type: ${spells.spell_type}</p
            </div>
            </button>
            `;
  return oneSpell;
};

function showDisplaySpells(arr) {
  ///////muestra personajes en pantalla
  let todoelHTML = "";
  arr.forEach((oneSpell) => (todoelHTML += generadorHTMLSpells(oneSpell)));
  document.getElementById("showCharacter").innerHTML = todoelHTML;
  ////////////////////////////////////////////////////////////////
}
showDisplaySpells(allSpells);

let spellsOption = document.getElementById("spellsId")
spellsOption.addEventListener("click", function (event) {
  if(event.target.value=== "Spells Types"){
    showDisplaySpells(allSpells);  
  }else{
    showDisplaySpells(filterSpellsFunction(event.target.value));
  }
})

let sortAtoZOption = document.getElementById("fromAtoZ")
sortAtoZOption.addEventListener("click", function (event) {
  todoelHTML = "";
  sortAtoZFunction(event.target.value).forEach((oneSpell) => (todoelHTML += generadorHTML(oneSpell)))
  document.getElementById("showCharacter").innerHTML = todoelHTML;
  console.log(sortAtoZOption())
});

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