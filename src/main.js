import { filterHousesFunction } from './data.js'; //import { example } from './data.js';
import { filterGenderFunction } from './data.js';
import { filterSpellsFunction } from './data.js';
import { sortAtoZFunction } from './data.js';
import { sortZtoAFunction } from './data.js';
 
import datos from "./data/harrypotter/harrypotterdata.js";
 
/*window.addEventListener("scroll", function() {
  var header = this.document.querySelector("header");
  header.classList.toggle("abajo",window.scrollY>0);
  })*/
const allSpells = datos.spells;
const allCharacters = datos.characters;
const generadorHTML = (character) => {
  //let contador=0;
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
            //contador += 1;
            //console.log(contador) 
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
    showDisplayInfo(filterHousesFunction(event.target.value, allCharacters));
  }
});
 
let genderOption = document.getElementById("genderId")
genderOption.addEventListener("click", function (event) {
  if (event.target.value === "Students") {
    showDisplayInfo(allCharacters);
  } else {
    showDisplayInfo(filterGenderFunction(event.target.value, allCharacters));
  }
});
 
const generadorHTMLSpells = (spells) => {
  let contadorS = 0;
  //*let newDiv = document.createElement("div")*/
  let oneSpell = `<button id="${spells.id}" class="charactersStyle">
            <p ><strong>${spells.name}</strong></p>
            <div id="extraInfo">
            <p>Pronuntiation: ${spells.pronunciation}</p>
            <p>Spell Type: ${spells.spell_type}</p
            </div>
            </button>
            `;
            contadorS+=1;
            //console.log(contadorS);
  return oneSpell;
};
 
function showDisplaySpells(arr) {
  ///////muestra personajes en pantalla
  let todoelHTML = "";
  arr.forEach((oneSpell) => (todoelHTML += generadorHTMLSpells(oneSpell)));
  document.getElementById("showCharacter").innerHTML = todoelHTML; //aqui el problema
  ////////////////////////////////////////////////////////////////
}
/*showDisplaySpells(allSpells);*/
 
let spellsOption = document.getElementById("spellsId")
spellsOption.addEventListener("click", function (event) {
  if (event.target.value === "Spells Types") {
    showDisplaySpells(allSpells);
  } else {
    showDisplaySpells(filterSpellsFunction(event.target.value, allSpells));
  }
});
 
let sortAtoZOption = document.getElementById("sortId")
sortAtoZOption.addEventListener("click", function (event) {
  /* //console.log(event.target.value); */
  if (event.target.value === "Order") {
    showDisplayInfo(allCharacters);
  } else if (event.target.value === "fromAtoZ") {
    showDisplayInfo(sortAtoZFunction(allCharacters));
  } else if (event.target.value === "fromZtoA") {
    showDisplayInfo(sortZtoAFunction(allCharacters));
  }
});
 
const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#showCharacter');
 
const filtrar = () => {
  //console.log(formulario.value);
  resultado.innerHTML = '';
  const texto = formulario.value.toLowerCase();
  for (let spells of allSpells) {
    let spellName = spells.name.toLowerCase();
    if (spellName.indexOf(texto) !== -1) {
      resultado.innerHTML +=  generadorHTMLSpells(spells);
    }
  }
  for (let character of allCharacters) {
    let characterName = character.name.toLowerCase();
    if (characterName.indexOf(texto) !== -1) {
      resultado.innerHTML +=  generadorHTML(character);
    }
  }
  if(resultado.innerHTML === ''){
    resultado.innerHTML += `  <h2> No hay coincidencias 😕</h2>`
    
  }
}
boton.addEventListener('click', filtrar)
//formulario.addEventListener('keyup', filtrar);
//filtrar();
