import "./style.scss";
import "./js_libs/modalWindows.js";
import "./js_libs/changeFont.js";
import "./js_libs/toggle.js";
import "./js_libs/credits_theme.js";
import "./js_libs/credits_fonts.js";

const searchBar = document.querySelector("#search_bar");
const searchZone = document.querySelector("#search_zone");

if(searchBar != null) {
    searchBar.addEventListener('submit', function(e) {
        if(!this.checkValidity()){
            e.preventDefault();
            this.classList.add('not_valid');
            if(!searchZone.valid){
                searchZone.placeholder = searchZone.dataset.error;
            }
        }
    });
}
// const btn = document.querySelector("button");
// btn.addEventListener("click", function(){
//     search();
// });


// function search() {
//     let word = document.querySelector("input").value;
//     let resultat = document.querySelector("#resultat");

//     if(word.length != 0){
//         let url = "https://api.dictionaryapi.dev/api/v2/entries/en/"+word;
//         fetch(url).then(reponse => reponse.json().then(data =>{
//             console.log(data);
//             try{
//                 // for(let words of data){
//                     // let definition = words.meanings[0].definitions[0].definition;
//                     // resultat.innerHTML = "<p class='res'> "+definitions + "</p>";
//                 // }
//                 for(let i = 0; i < data.length; i++){
//                     for(let j = 0; j < data[i].meanings.length; j++){
//                         console.log("data i : ",Object.values(data[i]));
//                         console.log(data[i].meanings[j]);
//                     }
                    
//                 }
//             }catch(err){
//                 resultat.innerHTML = "<p class='res'> Aucune definition trouvée ! </p>";
//             }
//         }));
//     }else{
//         resultat.innerHTML = "<p class='res'> Veuillez remplir ce champ</p>";
//     }
// }