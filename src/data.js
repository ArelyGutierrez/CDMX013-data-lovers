// estas funciones son de ejemplo
import datos from "./data/harrypotter/harrypotterdata.js";
const allCharacters = datos.characters;
const allSpells = datos.spells;

export const filterHousesFunction = (casa) => {
  let filteredHouse= allCharacters.filter(character => character.house === casa )
//console.log(filteredHouse)
  return filteredHouse;
};

export const filterGenderFunction = (genero) => {
  let filteredGender= allCharacters.filter(character => character.gender === genero )
//console.log(gryffindorFilter)
  return filteredGender;
};

export const filterSpellsFunction = (hechizo) => {
  let filteredSpells= allSpells.filter( spells => spells.spell_type === hechizo )
//console.log(gryffindorFilter)
  return filteredSpells;
};

/*export const sortAtoZFunction = () => {
   let sortedAtoZ = allCharacters.sort()
return sortedAtoZ;
};

export const sortZtoAFunction = () => {
  let sortedZtoA = allCharacters.sort().reverse();
return sortedZtoA;
};*/

