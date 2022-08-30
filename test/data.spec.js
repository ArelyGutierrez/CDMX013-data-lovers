import { filterHousesFunction, filterGenderFunction, filterSpellsFunction, sortAtoZFunction, sortZtoAFunction } from '../src/data.js';
import datos from "./data.js";

describe('filterHousesFunction', () => {
  it('is a function', () => {
    expect(typeof filterHousesFunction).toBe('function');
  });

  it('returns characterArray from Gryffindor', () => {
    let filteredCharacter = filterHousesFunction("Gryffindor",datos.characters)
    expect(filterHousesFunction("Gryffindor",datos.characters)).toStrictEqual(filteredCharacter);
  });

  it('returns character array length from Gryffindor', () => {
    expect(filterHousesFunction("Gryffindor", datos.characters)).toHaveLength(56);
  });
  // Esto es especialmente útil para comprobar el tamaño de matrices o cadenas.
  it('returns character array length from Hufflepuff', () => {
    expect(filterHousesFunction("Hufflepuff", datos.characters)).toHaveLength(23);
    expect(filterHousesFunction("Hufflepuff", datos.characters)).not.toHaveLength(24);
  });
});
/////////////////////////
describe('filterGenderFunction', () => {
  it('is a function', () => {
    expect(typeof filterGenderFunction).toBe('function');
  });

  it('returns genderArray from Chararacters', () => {
    let filteredGender = filterGenderFunction("Female",datos.characters)
    expect(filterGenderFunction("Female",datos.characters)).toStrictEqual(filteredGender);
  });

  it('returns female array length from Characters', () => {
    expect(filterGenderFunction("Female", datos.characters)).toHaveLength(244);
  });

  it('returns male array length from Characters', () => {
    expect(filterGenderFunction("Male", datos.characters)).toHaveLength(437);
    expect(filterGenderFunction("Male", datos.characters)).not.toHaveLength(438);
  });
});
///////////////////////////////
describe('filterSpellsFunction', () => {
  it('is a function', () => {
    expect(typeof filterSpellsFunction).toBe('function');
  });

  it('returns Spell Array from Spells', () => {
    let result = filterSpellsFunction("Curse",datos.spells)
    expect(filterSpellsFunction("Curse",datos.spells)).toStrictEqual({filteredSpells:result.filteredSpells, spellStadistics:result.spellStadistics});
  });

  it('returns  array length from Spells', () => {
    expect(filterSpellsFunction("Hex", datos.spells).filteredSpells).toHaveLength(21);
    expect(filterSpellsFunction("Dark charm", datos.spells).filteredSpells).toHaveLength(1);
    expect(filterSpellsFunction("Spell", datos.spells).filteredSpells).toHaveLength(10);
  });
  // Esto es especialmente útil para comprobar el tamaño de matrices o cadenas.
});
/////////de A a Z
describe('sortAtoZFunction', () => {
  it('is a function', () => {
    expect(typeof sortAtoZFunction).toBe('function');
  });

  it('Compare test of SortAtoZ ', () => {
    let data =  [{name:"Sharon"}, {name:"Arely"},{name:"Katya"}]
    let resultDataOrdenada = [{name:"Arely"},{name:"Katya"},{name:"Sharon"}]
    let resultFail = [{name:"Katya"},{name:"Arely"},{name:"Sharon"}]
    expect(sortAtoZFunction(data)).toEqual(resultDataOrdenada);
    expect(sortAtoZFunction(data)).not.toEqual(resultFail);
  });

  it('compare test of sortAtoZ with two equal objects', ()=>{
    let data =  [{name:"Sharon"}, {name:"Arely"},{name:"Katya"},{name:"Katya"}]
    let resultDataOrdenada = [{name:"Arely"},{name:"Katya"},{name:"Katya"},{name:"Sharon"}]
    expect(sortAtoZFunction(data)).toEqual(resultDataOrdenada)
  })
 
});
/////////// de Z a A
describe('sortZtoAFunction', () => {
  it('is a function', () => {
    expect(typeof sortZtoAFunction).toBe('function');
  });

  it('Compare test of SortZtoA ', () => {
    let data =  [{name:"Sharon"}, {name:"Arely"},{name:"Katya"}]
    let resultDataOrdenada = [{name:"Sharon"},{name:"Katya"},{name:"Arely"}]
    let resultFail = [{name:"Katya"},{name:"Arely"},{name:"Sharon"}]
    expect(sortZtoAFunction(data)).toEqual(resultDataOrdenada);
    expect(sortZtoAFunction(data)).not.toEqual(resultFail);
  });

  it('compare test of sortZtoA with two equal objects', ()=>{
    let data =  [{name:"Sharon"}, {name:"Arely"},{name:"Katya"},{name:"Katya"}]
    let resultDataOrdenada = [{name:"Sharon"},{name:"Katya"},{name:"Katya"},{name:"Arely"}]
    expect(sortZtoAFunction(data)).toEqual(resultDataOrdenada)
  })
 
});


//fitrado por buscador 
//que pasa si no se introduce input 

