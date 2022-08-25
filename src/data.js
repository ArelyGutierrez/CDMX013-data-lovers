
export const filterHousesFunction = (casa, allCharacters) => {
  let filteredHouse= allCharacters.filter(character => character.house === casa )
//console.log(filteredHouse)
  return filteredHouse;
};
export const filterGenderFunction = (genero, allCharacters) => {
  let filteredGender= allCharacters.filter(character => character.gender === genero )
//console.log(gryffindorFilter)
  return filteredGender;
};
export const filterSpellsFunction = (hechizo, allSpells) => {
  let filteredSpells= allSpells.filter( spells => spells.spell_type === hechizo )
//console.log(gryffindorFilter)
  return filteredSpells;
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