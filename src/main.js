//import { userStory1 } from './data.js'; //import { example } from './data.js';
import datos from './data/harrypotter/harrypotterdata.js';

const allCharacters = datos.characters;
const generadorHTML = (character) => {
 //*let newDiv = document.createElement("div")*/
  let characters =
    `<button id="charactersStyle" class="charactersStyle">
            <p>${character.name}</p>
          </button>

          <div id="myModal" class="modal"> 
              <div class="modal-content">
              <span class="close">&times;</span>
              <p>Name: ${character.name}</p>
              <p>Birth: ${character.birth}</p>
              <p>Species: ${character.species}</p>
              <p>House: ${character.house}</p>
              </div>
          </div>`;
  
  return characters;
}

let todoelHTML = ''
allCharacters.forEach(oneCharacter => todoelHTML += generadorHTML(oneCharacter));
document.getElementById("showCharacter").innerHTML = todoelHTML;


// Get the modal
var modal = document.getElementById("myModal");

// Get the div character that opens the modal
var btn = document.getElementById("charactersStyle");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}  
