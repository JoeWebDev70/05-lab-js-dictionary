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

if (searchBar != null) {
    searchBar.addEventListener('submit', function (e) {
        if (!this.checkValidity()) {
            e.preventDefault();
            this.classList.add('not_valid');
            if (!searchZone.valid) {
                searchZone.placeholder = searchZone.dataset.error;
            }
        } else {
            search(e);
        }
    });
}



function search(evt) {
    evt.preventDefault();
    let searchingWord = searchZone.value;
    let resultArray = new Array();
    

    if (searchingWord.length != 0) {
        let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + searchingWord;

        if (searchingWord.length > 1) {
            fetch(url).then(function (response) {
                if (response.ok) {
                    response.json().then(function (data) {
                        console.log("complete data : ",data);
                        try {
                            let monObjet = {
                                objAudio: "",
                                objWord: "",
                                objGender:"",
                                objPhonetic: "",
                                objDefinitions: "",
                                objSynonyms: "",
                            }
                            let resultDefinitions = "";
                            let resultSynonyms = "";
                            for (let i = 0; i < data.length; i++) {
                                // word
                                if (data[i].word != null) {
                                    // console.log("i : ", i, " word : ", data[i].word);
                                    monObjet.objWord = data[i].word;
                                }

                                // phonetic
                                if (data[i].phonetic != null) {
                                    // console.log("i : ", i, " phonetic : ", data[i].phonetic);
                                    monObjet.objPhonetic = data[i].phonetic;
                                }

                                // loop photenics array for find file audio and collect the first one
                                for (let m = 0; m < data[i].phonetics.length ; m++){
                                    // file audio
                                    if(m < data[i].phonetics.length){
                                        if (data[i].phonetics[m].audio != null) {
                                            if(monObjet.objAudio == ""){
                                                monObjet.objAudio = data[i].phonetics[m].audio;
                                            }
                                        }
                                    }
                                }
                                
                                // loop on meanings arrays
                                for (let j = 0; j < data[i].meanings.length; j++) {
                                    // gender
                                    if (data[i].meanings[j].partOfSpeech != null) {
                                        // console.log("i : ", i, " j : ", j, " gender : ", data[i].meanings[j].partOfSpeech);
                                        monObjet.objGender = data[i].meanings[j].partOfSpeech;
                                    }
                                //     // definitions
                                //     for (let k = 0; k < data[i].meanings[j].definitions.length; k++) {
                                //         if (data[i].meanings[j].definitions[k].definition != null) {
                                //             console.log("i : ", i, " j : ", j, " k : ", k, " definitions : ", data[i].meanings[j].definitions[k].definition);
                                //             // resultDefinitions = resultDefinitions + '\n' + data[i].meanings[j].definitions[k].definition;
                                //             // console.log(resultDefinitions);
                                //             // monObjet.definitions = resultDefinitions;
                                //         }
                                //     }
                                //     // synonyms
                                //     for (let l = 0; l < data[i].meanings[j].synonyms.length; l++) {
                                //         if (data[i].meanings[j].synonyms[l] != null) {
                                //             console.log("i : ", i, " j : ", j, " l : ", l, " synonyms : ", data[i].meanings[j].synonyms[l]);
                                //             // resultSynonyms = resultSynonyms + '\n' + data[i].meanings[j].synonyms[l];
                                //             // console.log(resultSynonyms);
                                //             // monObjet.synonyms = resultSynonyms;
                                //         }
                                //     }

                                }
                                console.log("mon objet : ",monObjet);
                                // resultArray.push(monObjet);
                                // console.log("resultArray : ",resultArray);
                                monObjet.objAudio = "";
                                monObjet.objWord = "";
                                monObjet.objGender = "";
                                monObjet.objPhonetic = "";
                                monObjet.objDefinitions = "";
                                monObjet.objSynonyms = "";
                            }
                        } catch (err) {
                            displayError();
                        }
                    });

                } else {
                    displayError();
                }

            });
        } else {
            displayError();
        }
    }
}

function displayError() {
    let notFound = "Definition not found! please enter an other word!"
    if ("content" in document.createElement("template")) {
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

function displayResult(){
  

    // if("content" in document.createElement("template")){
    //     let temp = document.querySelector("#temp_panel");
    //     const resultZone = document.querySelector("#div_resultat dl");
    //     let clone = document.importNode(temp.content, true);

    //     let dts = clone.querySelectorAll("dt");
    //     let dds = clone.querySelectorAll("dd");
    //     let divs = clone.querySelectorAll("div");
    //     let a = clone.querySelector("a");
    //     let h2 = clone.querySelector("h2");
    //     let h3s = clone.querySelectorAll("h3");
    //     let ps = clone.querySelectorAll("p");

    //     dts[0].textContent = notFound;
    //     dts[0].classList.add("not_found");
    //     divs[0].classList.add("not_found");
    //     resultZone.appendChild(clone);            
    // }
}

//open or close panel
questions.forEach(question => {
    question.addEventListener("click", function () {
        const elementHasActive = document.querySelector(".active");
        // check if element is found and if the founded element isn't clicked now
        if (elementHasActive && this !== elementHasActive) {
            elementHasActive.classList.remove("active");
        }
        //click twice => close
        this.classList.toggle("active");
    });
});
