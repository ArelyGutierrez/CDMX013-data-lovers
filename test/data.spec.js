import { filterHousesFunction } from '../src/data.js';


describe('filterHousesFunction', () => {
  it('is a function', () => {
    expect(typeof filterHousesFunction).toBe('function');
  });

  it('returns character from Gryffindor', () => {
    let filteredCharacter = filterHousesFunction("Gryffindor")
    expect(filterHousesFunction()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
