// estas funciones son de ejemplo
import datos from "./data/harrypotter/harrypotterdata.js";
const allCharacters = datos.characters

export const filtrado = (casa) => {
  let gryffindorFilter= allCharacters.filter(character => character.house === casa )
//console.log(gryffindorFilter)
  return gryffindorFilter;
};

