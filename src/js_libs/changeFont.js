
//index
const mainBody = document.querySelector("#body_main");
const radioBtns = document.querySelectorAll("input[type=radio]");
const inputSearch = document.querySelector("#search_zone");
const links = document.querySelectorAll("a");
//credits and legal mentions page
const creditsBody = document.querySelector("#body_credits");
const creditsElements = document.querySelectorAll("#body_credits a");
let fontChoice;
if(mainBody != null){
    fontChoice = mainBody.style.fontFamily; //get default font
}

//get if local storage contain some value and set it 
if(!localStorage.getItem("fontChoice")){
    localStorage.href = 'index.html';
}
let TmpFontChoice;
if(localStorage.getItem("fontChoice") != null){
    TmpFontChoice = localStorage.getItem("fontChoice");
}else{
    TmpFontChoice = fontChoice;
}
setFont(TmpFontChoice);

//get if storage change
window.addEventListener("storage", function () {
    TmpFontChoice = localStorage.getItem("fontChoice");
    setFont(TmpFontChoice);
});

//get if buttons radio change
if(radioBtns != null) {
    radioBtns.forEach(function(radioBtn){
        radioBtn.addEventListener("change", function(e){
            if(radioBtn.checked){
                switch (radioBtn.value) {
                    case "Roboto":
                        setFont("Roboto");
                        break;
                    case "Roboto Serif":
                        setFont("Roboto Serif");
                        break;
                    case "Roboto Mono":
                        setFont("Roboto Mono");
                        break;
                }
                fontChoice = mainBody.style.fontFamily;
                localStorage.removeItem("fontChoice"); 
                localStorage.setItem("fontChoice", fontChoice);
                TmpFontChoice = fontChoice;
            }
        });
    });
}

//set font on various elements
function setFont(font) {
    //index
    if(mainBody != null){mainBody.style.fontFamily = font;}
    if(inputSearch != null){inputSearch.style.fontFamily = font;}
    links.forEach(function (link) {
        link.style.fontFamily = font;
    })

    //credits and legal mentions
    if(creditsBody != null){creditsBody.style.fontFamily = font;}
    if(creditsElements != null){
        creditsElements.forEach(function (creditsElement) {
            creditsElement.style.fontFamily = font;
        });
    }
        
    //checked the radio button with the good value
    if(font != null){
        let tmpFont = font.replaceAll("\"", "");
        if(document.querySelector(`input[value="${tmpFont}"]`) != null){
            document.querySelector(`input[value="${tmpFont}"]`).checked = true;
        }
    }
}

