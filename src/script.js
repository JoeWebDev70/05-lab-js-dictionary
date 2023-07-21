import "./style.scss";
import "./js_libs/modalWindows.js";
import "./js_libs/changeFont.js";
import "./js_libs/toggle.js";
import "./js_libs/creditsTheme.js";
import "./js_libs/creditsFonts.js";

const searchBarForm = document.querySelector("#search_bar");
const searchZoneInput = document.querySelector("#search_zone");
let questions; //div "panel" for open and close panel : get in displayResult function before clone template
const resultZone = document.querySelector("#div_resultat dl");
let nodeToErase; //to count nodes created by displayResult or displayError
const btnEraseInputValue = document.querySelector("#erase_data");
let audioDisplay; //to display audio on click
let btnAudioClicked = false;


//add event listener on seach bar and its items
if (searchBarForm != null) {
    // verification of form validity
    searchBarForm.addEventListener('submit', function (e) {
        if (!this.checkValidity()) {
            e.preventDefault();
            this.classList.add('not_valid');
            if (!searchZoneInput.valid) {
                eraseResultOrError(nodeToErase);
                searchZoneInput.placeholder = searchZoneInput.dataset.error;
            }
        } else {
            eraseResultOrError(nodeToErase);
            search(e);
        }
        
    });

    // show or hide icon to erase data in input on new focus
    searchZoneInput.addEventListener('focus', function(){
        if(searchZoneInput.value != ""){
            btnEraseInputValue.classList.add("show_item");
        }else{
            btnEraseInputValue.classList.remove("show_item");
        }        
    });

    // show or hide icon to erase data in input on change
    searchZoneInput.addEventListener('change', function(){
        if(searchZoneInput.value != ""){
            btnEraseInputValue.classList.add("show_item");
        }else{
            btnEraseInputValue.classList.remove("show_item");
        }        
    });

    // erase data in input for new research on click icon
    btnEraseInputValue.addEventListener('click', function(){
        searchZoneInput.value = "";
        btnEraseInputValue.classList.remove("show_item");
    });
}

// search word in API and collect data in new array
function search(evt) {
    evt.preventDefault();
    let searchingWord = searchZoneInput.value;
    let resultArray = new Array();
    
    if (searchingWord.length != 0) {
        let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + searchingWord;
        // search word not single letter
        if (searchingWord.length > 1) {
            fetch(url).then(function (response) {
                if (response.ok) {
                    response.json().then(function (data) {
                        try {
                            for (let i = 0; i < data.length; i++) {
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
                                
                                // word
                                if (data[i].word != null) {
                                    monObjet.objWord = data[i].word;
                                }

                                // phonetic
                                if (data[i].phonetic != null) {
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
                                        monObjet.objGender = data[i].meanings[j].partOfSpeech;
                                    }
                                    // definitions
                                    for (let k = 0; k < data[i].meanings[j].definitions.length; k++) {
                                        if (data[i].meanings[j].definitions[k].definition != null) {
                                            if(resultDefinitions == ""){
                                                resultDefinitions = (data[i].meanings[j].definitions[k].definition);
                                            }else{
                                                resultDefinitions = resultDefinitions + "/" + data[i].meanings[j].definitions[k].definition;
                                            }
                                        }
                                    }
                                    monObjet.objDefinitions = resultDefinitions;

                                    // synonyms
                                    for (let l = 0; l < data[i].meanings[j].synonyms.length; l++) {
                                        if (data[i].meanings[j].synonyms[l] != null) {
                                            if(resultSynonyms == ""){
                                                resultSynonyms = data[i].meanings[j].synonyms[l];
                                            }else{
                                                resultSynonyms = resultSynonyms + ', ' + data[i].meanings[j].synonyms[l];
                                            } 
                                        }
                                    }
                                    monObjet.objSynonyms = resultSynonyms;
                                }
                                resultArray.push(monObjet);
                            }
                            displayResult(resultArray);
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

// display content error when word is not found
function displayError() {
    let notFound = "Definition not found! please enter an other word!"
    if ("content" in document.createElement("template")) {
        let temp = document.querySelector("#temp_panel");
        let clone = temp.content.cloneNode(true);
        let dt = clone.querySelector("dt");
        let div = clone.querySelector(".panel");
        
        dt.textContent = notFound;
        dt.classList.add("not_found");
        div.classList.add("not_found");
        resultZone.appendChild(clone);
    }
    nodeToErase = resultZone.childNodes;
}

// display content when word is found
function displayResult(dataToDisplay) {
    
    let h3Definitions = "Definitions:";
    let h3Synonyms = "Synonyms:";
    if ("content" in document.createElement("template")) {
        for (let i = 0; i < dataToDisplay.length; i++) {
            let temp = document.querySelector("#temp_panel");
            let clone = temp.content.cloneNode(true);

            let divs = clone.querySelectorAll("div");
            let dt = clone.querySelector("dt");
            let dd = clone.querySelector("dd");
            let h2 = clone.querySelector("h2");
            let h3s = clone.querySelectorAll("h3");
            let ps = clone.querySelectorAll("p");
            let ul = clone.querySelector("ul");
            let audio = clone.querySelector("audio");

            divs[0].appendChild(dt);
            dt.appendChild(divs[1]);
            divs[1].appendChild(divs[2]);
            divs[2].appendChild(divs[3]);
            if(dataToDisplay[i].objAudio != ""){
                divs[3].appendChild(ps[0]);
                ps[0].classList.remove("not_display_item");
                audio.setAttribute('src', dataToDisplay[i].objAudio);
            }
            h2.textContent = dataToDisplay[i].objWord;
            divs[3].appendChild(h2);

            divs[2].appendChild(divs[4]);
            ps[1].textContent = dataToDisplay[i].objGender;
            divs[4].appendChild(ps[1]);
            ps[2].textContent = dataToDisplay[i].objPhonetic;
            divs[4].appendChild(ps[2]);

            divs[0].appendChild(dd);
            h3s[0].textContent = h3Definitions;
            dd.appendChild(h3s[0]);
            let tempContentDef = dataToDisplay[i].objDefinitions.split('/');
            for(let k = 0; k < tempContentDef.length; k++){
                let tmpli = document.createElement("li");
                tmpli.innerHTML += tempContentDef[k] + '<br>';
                ul.appendChild(tmpli);
            }
            dd.appendChild(ul);
            h3s[1].textContent = h3Synonyms;
            dd.appendChild(h3s[1]);
            ps[3].textContent = dataToDisplay[i].objSynonyms;
            dd.appendChild(ps[3]);

            resultZone.appendChild(clone);
        }
    }
    
    audioDisplay = document.querySelectorAll(".audio_display");
    displayAudio(audioDisplay);
    console.log(dataToDisplay.length);
    
    if(dataToDisplay.length > 1){
        questions = document.querySelectorAll(".panel");
        openClose(questions);
    }else{
        openSingleDef(document.querySelector(".panel"))
    }
    
    nodeToErase = resultZone.childNodes;
}

function eraseResultOrError(nodes){
    if(nodes != null && nodes.length > 1){
        for(let i = nodes.length-1 ; i > 0  ; i--){
            resultZone.removeChild(nodes[i]);
        }
    }    
}

function displayAudio(items){
    items.forEach(function(item){
        item.addEventListener("click", function(){
            btnAudioClicked = true;
            this.childNodes[1].play();
        });
    });
}

//open or close panels of results
function openClose(items) {
    items.forEach(function (item) {
        item.addEventListener("click", function () {
            if (!btnAudioClicked) {
                const elementHasActive = document.querySelector(".active");
                // check if element is found and if the founded element isn't clicked now
                if (elementHasActive && this !== elementHasActive) {
                    elementHasActive.classList.remove("active"); //div panel
                    elementHasActive.childNodes[0].classList.remove("active"); //dt
                    elementHasActive.childNodes[0].childNodes[0].classList.remove("active"); //div opening panel
                }
                //click twice => close
                this.classList.toggle("active"); //div panel
                this.childNodes[0].classList.toggle("active"); //dt
                this.childNodes[0].childNodes[0].classList.toggle("active"); //div opening panel and after
            }
            btnAudioClicked = false;
        });
    });
}

function openSingleDef(item){
    item.classList.add("active"); //div panel
    item.childNodes[0].classList.add("active"); //dt
    item.childNodes[0].childNodes[0].classList.add("hide"); //div opening panel:after
}