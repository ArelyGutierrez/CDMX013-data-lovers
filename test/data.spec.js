import { filterHousesFunction, filterGenderFunction, filterSpellsFunction, sortAtoZFunction } from '../src/data.js';
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
    let filteredSpells = filterSpellsFunction("Curse",datos.spells)
    expect(filterSpellsFunction("Curse",datos.spells)).toStrictEqual(filteredSpells);
  });

  it('returns  array length from Spells', () => {
    expect(filterSpellsFunction("Hex", datos.spells)).toHaveLength(21);
    expect(filterSpellsFunction("Dark charm", datos.spells)).toHaveLength(1);
    expect(filterSpellsFunction("Spell", datos.spells)).toHaveLength(10);
  });
  // Esto es especialmente útil para comprobar el tamaño de matrices o cadenas.
});
///////////////////////////////
describe('sortAtoZFunction', () => {
  it('is a function', () => {
    expect(typeof sortAtoZFunction).toBe('function');
  });

  it('returns Spell Array from Spells', () => {
    let filteredSpells = filterSpellsFunction("Curse",datos.spells)
    expect(filterSpellsFunction("Curse",datos.spells)).toStrictEqual(filteredSpells);
  });

  it('returns  array length from Spells', () => {
    expect(filterSpellsFunction("Hex", datos.spells)).toHaveLength(21);
    expect(filterSpellsFunction("Dark charm", datos.spells)).toHaveLength(1);
    expect(filterSpellsFunction("Spell", datos.spells)).toHaveLength(10);
  });
  // Esto es especialmente útil para comprobar el tamaño de matrices o cadenas.
});
//fitrado por buscador 
//que pasa si no se introduce input 

