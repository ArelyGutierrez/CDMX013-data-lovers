//import { userStory1 } from './data.js'; //import { example } from './data.js';
import datos from './data/harrypotter/harrypotterdata.js';
 //import data from './data/lol/lol.js';
//import data from './data/harrypotter/harrypotterdata.js'; //import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const allCharacters= datos.characters;
const generadorHTML=(character)=>{
  return `<div class='charactersStyle'>
            <p>${character.name}</p>
          </div>`
}

let todoelHTML =''

//document.getElementById("character").innerHTML=books
allCharacters.forEach(oneCharacter =>todoelHTML+=generadorHTML(oneCharacter));

//console.log(datos)
//console.log(datos.characters[0].name)

//datos.characters.forEach(name => console.log(name["name"]));


datos.characters.forEach(name => document.getElementById("showCharacter").innerHTML= name["name"]);

//datos.characters.forEach(name => document.getElementById("showCharacter").innerHTML= {divCreator(name["name"])}); 
document.getElementById("showCharacter").innerHTML= todoelHTML;