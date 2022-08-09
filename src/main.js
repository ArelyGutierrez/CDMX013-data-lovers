//import { userStory1 } from './data.js'; //import { example } from './data.js';
import datos from './data/harrypotter/harrypotterdata.js';

const allCharacters= datos.characters;
const generadorHTML=(character)=>{
  return `<div class='charactersStyle'>
            <p>${character.name}</p>
          </div>`
}

let todoelHTML =''

allCharacters.forEach(oneCharacter =>todoelHTML+=generadorHTML(oneCharacter));

document.getElementById("showCharacter").innerHTML= todoelHTML;