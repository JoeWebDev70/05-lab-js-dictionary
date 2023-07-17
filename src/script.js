import "./style.scss";
import "./js_libs/modalWindows.js";
import "./js_libs/changeFont.js";
import "./js_libs/toggle.js";
import "./js_libs/creditsTheme.js";
import "./js_libs/creditsFonts.js";

const searchBar = document.querySelector("#search_bar");
const searchZone = document.querySelector("#search_zone");
const questions = document.querySelectorAll("dt");
// const btn = document.querySelector("button");
// btn.addEventListener("click", function(e){
//     e.preventDefault();
//     search();
// });

if(searchBar != null) {
    searchBar.addEventListener('submit', function(e) {
        if(!this.checkValidity()){
            e.preventDefault();
            this.classList.add('not_valid');
            if(!searchZone.valid){
                searchZone.placeholder = searchZone.dataset.error;
            }
        }else{
            search(e);
        }
    });
}

questions.forEach(question => {
    question.addEventListener("click", function(){
        const elementHasActive = document.querySelector(".active");
        // Verifier qu'on a trouver un élément et que l'élément trouvé n'est pas celui cliqué
        if(elementHasActive && this !== elementHasActive) {
            elementHasActive.classList.remove("active");
        }
        //clic à nouveau referme
        this.classList.toggle("active");
    });
});


function search(evt) {
    evt.preventDefault();
    let word = document.querySelector("input").value;
    let notFound = "Definition not found ! please enter an other word!"
    // let resultat = document.querySelector("#resultat");
    // let errorMessage = document.querySelector("input").placeholder;
    if("content" in document.createElement("template")){
        let temp = document.querySelector("#temp_panel");
        const resultZone = document.querySelector("#div_resultat dl");
        let clone = document.importNode(temp.content, true);
        let dt = clone.querySelectorAll("dt");
        let dl = clone.querySelectorAll("dl");
        console.log("dt : ",dt);
        console.log("dl : ",dl);
    }
    if(word.length != 0){
        let url = "https://api.dictionaryapi.dev/api/v2/entries/en/"+word;
        fetch(url).then(reponse => reponse.json().then(data =>{
            console.log(data);
            try{
                // for(let words of data){
                    // let definition = words.meanings[0].definitions[0].definition;
                    // resultat.innerHTML = "<p class='res'> "+definitions + "</p>";
                // }
                for(let i = 0; i < data.length; i++){
                    for(let j = 0; j < data[i].meanings.length; j++){
                        console.log("data i : ",Object.values(data[i]));
                        console.log(data[i].meanings[j]);
                    }
                    
                }
            }catch(err){
                searchZone.placeholder.textContent = notFound;
            }
        }));
    }
}

