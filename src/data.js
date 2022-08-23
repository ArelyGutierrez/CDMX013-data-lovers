// estas funciones son de ejemplo
import datos from "./data/harrypotter/harrypotterdata.js";
const allCharacters = datos.characters;
const allSpells = datos.spells;
/*const allNames = allCharacters.name;*/

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

/*export const sortAtoZFunction =  (arrCharacters) => arrData.sort ((a,b))=> {}*/
export const sortAtoZFunction =  (x) =>
allCharacters.sort((a, b) => {
    if(a.name.toLowerCase() < b.name.toLowerCase()){
      return -1;
    }
    if(a.name.toLowerCase() > b.name.toLowerCase()){
      return 1;
    }
    return 0
   }
   );
   console.log(sortAtoZFunction);

/*export const sortZtoAFunction =  sortAtoZFunction.reverse()*/
/*((a, b) => {
  if(a.name.toLowerCase() < b.name.toLowerCase()){
    return 1;
  }
  if(a.name.toLowerCase() > b.name.toLowerCase()){que
    return -1;
  }
  return 0
 }
 ); 
console.log(sortZtoAFunction);*/

