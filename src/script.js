import "./style.scss";
import "./js_libs/modalWindows.js";
import "./js_libs/changeFont.js";
import "./js_libs/toggle.js";
import "./js_libs/creditsTheme.js";
import "./js_libs/creditsFonts.js";

const searchBar = document.querySelector("#search_bar");
const searchZone = document.querySelector("#search_zone");
const questions = document.querySelectorAll("dt");

const resultZone = document.querySelector("#div_resultat dl");

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



function search(evt) {
    evt.preventDefault();
    let word = searchZone.value;
    console.log(word);
    if(word.length != 0){
        let url = "https://api.dictionaryapi.dev/api/v2/entries/en/"+word;
        fetch(url).then(reponse => reponse.json().then(data =>{
            console.log(data);
            try{
                for(let words of data){
                    // let definition = words.meanings[0].definitions[0].definition;
                    // resultat.innerHTML = "<p class='res'> "+definitions + "</p>";
                
                for(let i = 0; i < data.length; i++){
                    for(let j = 0; j < data[i].meanings.length; j++){
                        console.log("data i : ",Object.values(data[i]));
                        console.log(data[i].meanings[j]);
                    }
                    
                }
                }
            }catch(err){
                console.log(err);
                displayError();
                
            }
        }));
    }
}

function displayError(){
    let notFound = "Definition not found! please enter an other word!"
    if("content" in document.createElement("template")){
        let temp = document.querySelector("#temp_panel");
        let clone = document.importNode(temp.content, true);
        let dt = clone.querySelector("dt");
        let div = clone.querySelector(".panel");
        dt.textContent = notFound;
        dt.classList.add("not_found");
        div.classList.add("not_found");
        resultZone.appendChild(clone);            
    }
}

// function displayResult(){
//     let notFound = "Definition not found! please enter an other word!"
//     // let resultat = document.querySelector("#resultat");
//     if("content" in document.createElement("template")){
//         let temp = document.querySelector("#temp_panel");
//         const resultZone = document.querySelector("#div_resultat dl");
//         let clone = document.importNode(temp.content, true);
        
        
//         let dts = clone.querySelectorAll("dt");
//         // let dds = clone.querySelectorAll("dd");
//         let divs = clone.querySelectorAll("div");
//         // let h2 = clone.querySelector("h2");
//         // let h3s = clone.querySelectorAll("h3");
//         // let ps = clone.querySelectorAll("p");
        
//         dts[0].textContent = notFound;
//         dts[0].classList.add("not_found");
//         divs[0].classList.add("not_found");
//         resultZone.appendChild(clone);            
//     }
// }

//open or close panel
questions.forEach(question => {
    question.addEventListener("click", function(){
        const elementHasActive = document.querySelector(".active");
        // check if element is found and if the founded element isn't clicked now
        if(elementHasActive && this !== elementHasActive) {
            elementHasActive.classList.remove("active");
        }
        //click twice => close
        this.classList.toggle("active");
    });
});
