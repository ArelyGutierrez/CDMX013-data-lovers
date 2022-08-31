import { filterHousesFunction, filterGenderFunction, filterSpellsFunction, sortAtoZFunction, sortZtoAFunction } from './data.js'; //import { example } from './data.js';
import datos from "./data/harrypotter/harrypotterdata.js";

const allSpells = datos.spells;
const allCharacters = datos.characters;
const generadorHTML = (character) => {

  if (character.house == "Gryffindor") {

    if (character.gender == "Male") {
      let characters = `<button id="${character.id}" class="charactersStyle">
    <img src="/images/Gryffindor.png" alt="GryffindorL" class="escudo"></img>
    <img src="/images/magician.png" alt="Male" class="avatar"></img>
    <p ><strong>${character.name}</strong></p>
    <div id="extraInfo">
    <p>Birth: ${character.birth}</p>
    <p>Species: ${character.species}</p>
    <p>House:${character.house}</p>
    </div>
    </button> `;
      return characters;
    } else if (character.gender == "Female") {
      let characters = `<button id="${character.id}" class="charactersStyle">
    <img src="/images/Gryffindor.png" alt="GryffindorL" class="escudo"></img>
    <img src="/images/witch.png" alt="Female" class="avatar"></img>
    <p ><strong>${character.name}</strong></p>
    <div id="extraInfo">
    <p>Birth: ${character.birth}</p>
    <p>Species: ${character.species}</p>
    <p>House:${character.house}</p>
    </div>
    </button> `;
      return characters;
    } else {
      let characters = `<button id="${character.id}" class="charactersStyle">
    <img src="/images/Gryffindor.png" alt="GryffindorL" class="escudo"></img>
    <img src="/images/magician-svg.png" alt="Unknown" class="avatar"></img>
    <p ><strong>${character.name}</strong></p>
    <div id="extraInfo">
    <p>Birth: ${character.birth}</p>
    <p>Species: ${character.species}</p>
    <p>House:${character.house}</p>
    </div>
    </button> `;
      return characters;
    }
  } else if (character.house == "Hufflepuff") {
    if (character.gender == "Male") {
      let characters = `<button id="${character.id}" class="charactersStyle">
      <img src="/images/Hufflepuff.png" alt="HufflepuffL" class="escudo"></img>
      <img src="/images/magician.png" alt="Male" class="avatar"></img>
      <p ><strong>${character.name}</strong></p>
      <div id="extraInfo">
      <p>Birth: ${character.birth}</p>
      <p>Species: ${character.species}</p>
      <p>House:${character.house}</p>
      </div>
      </button> `;
      return characters;
    } else if (character.gender == "Female") {
      let characters = `<button id="${character.id}" class="charactersStyle">
      <img src="/images/Hufflepuff.png" alt="HufflepuffL" class="escudo"></img>
      <img src="/images/witch.png" alt="Female" class="avatar"></img>
      <p ><strong>${character.name}</strong></p>
      <div id="extraInfo">
      <p>Birth: ${character.birth}</p>
      <p>Species: ${character.species}</p>
      <p>House:${character.house}</p>
      </div>
      </button> `;
      return characters;
    } else {
      let characters = `<button id="${character.id}" class="charactersStyle">
      <img src="/images/Hufflepuff.png" alt="HufflepuffL" class="escudo"></img>
      <img src="/images/magician-svg.png" alt="Unknown" class="avatar"></img>
      <p ><strong>${character.name}</strong></p>
      <div id="extraInfo">
      <p>Birth: ${character.birth}</p>
      <p>Species: ${character.species}</p>
      <p>House:${character.house}</p>
      </div>
      </button> `;
      return characters;
    }
  } else if (character.house == "Ravenclaw") {
    if (character.gender == "Male") {
      let characters = `<button id="${character.id}" class="charactersStyle">
      <img src="/images/Ravenclaw.png" alt="RavenclawL" class="escudo"></img>
      <img src="/images/magician.png" alt="Male" class="avatar"></img>
      <p ><strong>${character.name}</strong></p>
      <div id="extraInfo">
      <p>Birth: ${character.birth}</p>
      <p>Species: ${character.species}</p>
      <p>House:${character.house}</p>
      </div>
      </button> `;
      return characters;
    } else if (character.gender == "Female") {
      let characters = `<button id="${character.id}" class="charactersStyle">
      <img src="/images/Ravenclaw.png" alt="RavenclawL" class="escudo"></img>
      <img src="/images/witch.png" alt="Female" class="avatar"></img>
      <p ><strong>${character.name}</strong></p>
      <div id="extraInfo">
      <p>Birth: ${character.birth}</p>
      <p>Species: ${character.species}</p>
      <p>House:${character.house}</p>
      </div>
      </button> `;
      return characters;
    } else {
      let characters = `<button id="${character.id}" class="charactersStyle">
      <img src="/images/Ravenclaw.png" alt="RavenclawL" class="escudo"></img>
      <img src="/images/magician-svg.png" alt="Unknown" class="avatar"></img>
      <p ><strong>${character.name}</strong></p>
      <div id="extraInfo">
      <p>Birth: ${character.birth}</p>
      <p>Species: ${character.species}</p>
      <p>House:${character.house}</p>
      </div>
      </button> `;
      return characters;
    }
  } else if (character.house == "Slytherin") {
    if (character.gender == "Male") {
      let characters = `<button id="${character.id}" class="charactersStyle">
      <img src="/images/Slytherin.png" alt="SlytherinL" class="escudo"></img>
      <img src="/images/magician.png" alt="Male" class="avatar"></img>
      <p ><strong>${character.name}</strong></p>
      <div id="extraInfo">
      <p>Birth: ${character.birth}</p>
      <p>Species: ${character.species}</p>
      <p>House:${character.house}</p>
      </div>
      </button> `;
      return characters;
    } else if (character.gender == "Female") {
      let characters = `<button id="${character.id}" class="charactersStyle">
      <img src="/images/Slytherin.png" alt="SlytherinL" class="escudo"></img>
      <img src="/images/witch.png" alt="Female" class="avatar"></img>
      <p ><strong>${character.name}</strong></p>
      <div id="extraInfo">
      <p>Birth: ${character.birth}</p>
      <p>Species: ${character.species}</p>
      <p>House:${character.house}</p>
      </div>
      </button> `;
      return characters;
    } else {
      let characters = `<button id="${character.id}" class="charactersStyle">
      <img src="/images/Slytherin.png" alt="SlytherinL" class="escudo"></img>
      <img src="/images/magician-svg.png" alt="Unknown" class="avatar"></img>
      <p ><strong>${character.name}</strong></p>
      <div id="extraInfo">
      <p>Birth: ${character.birth}</p>
      <p>Species: ${character.species}</p>
      <p>House:${character.house}</p>
      </div>
      </button> `;
      return characters;
    }
  } else {
    if (character.gender == "Male") {
      let characters = `<button id="${character.id}" class="charactersStyle">
      <img src="/images/magician.png" alt="Male" class="avatar"></img>
      <p ><strong>${character.name}</strong></p>
      <div id="extraInfo">
      <p>Birth: ${character.birth}</p>
      <p>Species: ${character.species}</p>
      <p>House:${character.house}</p>
      </div>
      </button> `;
      return characters;
    } else if (character.gender == "Female") {
      let characters = `<button id="${character.id}" class="charactersStyle">
    <img src="/images/witch.png" alt="Female" class="avatar"></img>
    <p ><strong>${character.name}</strong></p>
    <div id="extraInfo">
    <p>Birth: ${character.birth}</p>
    <p>Species: ${character.species}</p>
    <p>House:${character.house}</p>
    </div>
    </button> `;
      return characters;
    } else {
      let characters = `<button id="${character.id}" class="charactersStyle">
    <img src="/images/magician-svg.png" alt="Unknown" class="avatar"></img>
    <p ><strong>${character.name}</strong></p>
    <div id="extraInfo">
    <p>Birth: ${character.birth}</p>
    <p>Species: ${character.species}</p>
    <p>House:${character.house}</p>
    </div>
    </button> `;
      return characters;
    }
  }
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
  // let contadorS = 0;
  //*let newDiv = document.createElement("div")*/
  let oneSpell = `<button id="${spells.id}" class="charactersStyle">
  <img src="/images/spellbook.png" alt="Female" class="avatar"></img>
            <p ><strong>${spells.name}</strong></p>
            <div id="extraInfo">
            <p>Pronuntiation: ${spells.pronunciation}</p>
            <p>Spell Type: ${spells.spell_type}</p
            </div>
            </button>
            `;
  //contadorS += 1;
  //console.log(contadorS);
  return oneSpell;
};



function showDisplaySpells(resultSpells, spellValue) { //esta función se ejecuta al selecciona un tipo de spell especifico
  const { filteredSpells, spellStadistics } = resultSpells //extrayendo datos de un objeto
  // console.log(resultSpells, spellValue);

  let todoelHTML = "";
  document.getElementById("showCalculus").innerHTML = spellStadistics + "% of spells are " + spellValue + " type";
  ///////muestra personajes en pantalla
  filteredSpells.forEach((oneSpell) => (todoelHTML += generadorHTMLSpells(oneSpell)));
  document.getElementById("showCharacter").innerHTML = todoelHTML;
  ////////////////////////////////////////////////////////////////
}

function showDisplayInfoAllSpells(arr) { //esta funcion se ejecuta cuando seleccionamos spell_types
  ///////muestra personajes en pantalla
  let todoelHTML = "";
  document.getElementById("showCalculus").innerHTML = "";
  arr.forEach((oneCharacter) => (todoelHTML += generadorHTMLSpells(oneCharacter)));
  document.getElementById("showCharacter").innerHTML = todoelHTML;
}

let spellsOption = document.getElementById("spellsId")
spellsOption.addEventListener("click", function (event) {
  if (event.target.value === "Spells Types") {
    showDisplayInfoAllSpells(allSpells);
  } else {
    const resultSpells = filterSpellsFunction(event.target.value, allSpells)
    showDisplaySpells(resultSpells, event.target.value);
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
      resultado.innerHTML += generadorHTMLSpells(spells);
    }
  }
  for (let character of allCharacters) {
    let characterName = character.name.toLowerCase();
    if (characterName.indexOf(texto) !== -1) {
      resultado.innerHTML += generadorHTML(character);
    }
  }
  if (resultado.innerHTML === '') {
    resultado.innerHTML += `  <h2> No hay coincidencias 😕</h2>`

  }
}
boton.addEventListener('click', filtrar)
//formulario.addEventListener('keyup', filtrar);
//filtrar();
