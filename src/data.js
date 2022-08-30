export const filterHousesFunction = (casa, allCharacters) => {
  let filteredHouse= allCharacters.filter(character => character.house === casa )
  return filteredHouse;
};
export const filterGenderFunction = (genero, allCharacters) => {
  let filteredGender= allCharacters.filter(character => character.gender === genero )
//let genderEstaditics = (filteredGender.length*100)/allCharacters.length;
  return filteredGender;
};
export const filterSpellsFunction = (hechizo, allSpells) => {
  let filteredSpells= allSpells.filter( spells => spells.spell_type === hechizo )
  let spellStadistics = (filteredSpells.length*100)/allSpells.length;
  //console.log(spellStadistics)
  return {filteredSpells:filteredSpells, spellStadistics:spellStadistics};//key:value
};
 
export const sortAtoZFunction = function ( allCharacters ) {
  return allCharacters.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  }
     
export const sortZtoAFunction =  function ( allCharacters ) {
  return allCharacters.sort(function (a, b) {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });
  }
//console.log(sortZtoAFunction);
