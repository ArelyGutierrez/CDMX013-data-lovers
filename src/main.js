//import { userStory1 } from './data.js'; //import { example } from './data.js';
import datos from './data/harrypotter/harrypotterdata.js';

const allCharacters = datos.characters;
const generadorHTML = (character) => {
 //*let newDiv = document.createElement("div")*/
  let characters =
    `<button class="charactersStyle">
            <p id="${character.id}">${character.name}</p>
          </button>
`;
  
  return characters;
}

let todoelHTML = ''
allCharacters.forEach(oneCharacter => todoelHTML += generadorHTML(oneCharacter));
document.getElementById("showCharacter").innerHTML = todoelHTML;


// Get the div character that opens the modal
var btn = document.getElementsByClassName("charactersStyle");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
for (let i=0; i<btn.length; i++){
  btn[i].onclick = function (e){
    const id= e.srcElement.id;

    todoelHTML += `

  <div id="myModal" class="modal"> 
      <div class="modal-content">
      <span class="close">&times;</span>
      <p>Name: ${allCharacters[id].name}</p>
      <p>Birth: ${allCharacters[id].birth}</p>
      <p>Species: ${allCharacters[id].species}</p>
      <p>House: ${allCharacters[id].house}</p>
      </div>
  </div>`;
    console.log("hola")
    console.log(e);
// Get the modal
var modal = document.getElementById("myModal");

    /*modal.style.display = "block";*/
    
    console.log(id);

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
}
}


