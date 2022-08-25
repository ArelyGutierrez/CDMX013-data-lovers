import { filterHousesFunction, filterGenderFunction } from '../src/data.js';
import datos from "./data/harrypotter/harrypotterdata.js";


describe('filterHousesFunction', () => {
  it('is a function', () => {
    expect(typeof filterHousesFunction).toBe('function');
  });

  it('returns character from Gryffindor', () => {
    let filteredCharacter = filterHousesFunction("Gryffindor",datos)
    expect(filterHousesFunction("Gryffindor")).toStrictEqual(filteredCharacter);
  });

  it('returns character from Gryffindor', () => {
    expect(filterHousesFunction("Gryffindor")).toHaveLength(56);
  });

  it('returns character from Hufflepuff', () => {
    expect(filterHousesFunction("Hufflepuff")).toHaveLength(23);
  });

/*    const expected = filterHousesFunction("Gryffindor"); //
   //const expected = ['Harry Potter', 'Hermione Granger'];
  it('matches even if received contains additional elements', () => { //coincide incluso si se recibe contiene elementos adicionales
    expect(['Harry Potter', 'Hermione Granger', 'Euan Abercrombie']).toEqual(expect.arrayContaining(expected));
  });
  it('does not match if received does not contain expected elements', () => {
    expect(['Edgar Bones', 'Draco Malfoy']).not.toEqual(expect.arrayContaining(expected));
  }); */

});

describe('filterGenderFunction', () => {
  it('is a function', () => {
    expect(typeof filterGenderFunction).toBe('function');
  });

  it('returns female or male from Characters', () => {
    let filteredGender = filterGenderFunction("Female",datos)
    expect(filterGenderFunction("Female")).toStrictEqual(filteredGender);
  });

/*   it('returns character from Gryffindor', () => {
    expect(filterHousesFunction("Gryffindor")).toHaveLength(56);
  });

  it('returns character from Hufflepuff', () => {
    expect(filterHousesFunction("Hufflepuff")).toHaveLength(23);
  }); */

/*    const expected = filterHousesFunction("Gryffindor"); //
   //const expected = ['Harry Potter', 'Hermione Granger'];
  it('matches even if received contains additional elements', () => { //coincide incluso si se recibe contiene elementos adicionales
    expect(['Harry Potter', 'Hermione Granger', 'Euan Abercrombie']).toEqual(expect.arrayContaining(expected));
  });
  it('does not match if received does not contain expected elements', () => {
    expect(['Edgar Bones', 'Draco Malfoy']).not.toEqual(expect.arrayContaining(expected));
  }); */

});
/* describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
 */