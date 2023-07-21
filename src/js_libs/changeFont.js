const radioBtns = document.querySelectorAll("input[type=radio]");
const body = document.querySelector("body");
const inputSearch = document.querySelector("#search_zone");
const links = document.querySelectorAll("a");
let fontChoice;
// = body.getAttribute("style")

if(!localStorage.getItem("fontChoice")){
    localStorage.href = 'index.html';
}
let TmpFontChoice = localStorage.getItem("fontChoice");
TmpFontChoice = localStorage.getItem("fontChoice");
setFontPage(TmpFontChoice);
console.log("init : ",TmpFontChoice);

if(radioBtns != null) {
    radioBtns.forEach(function(radioBtn){
        console.log(radioBtn.value, TmpFontChoice);
        if(radioBtn.value == TmpFontChoice){
            console.log("test");
            radioBtn.checked = true;
        }

        radioBtn.addEventListener("change", function(e){
            if(radioBtn.checked){
                switch (radioBtn.value) {
                    case "Roboto":
                        setFontPage("Roboto");
                        break;
                    case "Roboto Serif":
                        setFontPage("Roboto Serif");
                        break;
                    case "Roboto Mono":
                        setFontPage("Roboto Mono");
                        break;
                }
                fontChoice = body.style.fontFamily;
                localStorage.removeItem("fontChoice"); 
                localStorage.setItem("fontChoice", fontChoice);
                TmpFontChoice = fontChoice;
            }
        });
    });
}

function setFontPage(font) {
    body.style.fontFamily = font;
    if(inputSearch != null){
        inputSearch.style.fontFamily = font;
    }
    links.forEach(function (link) {
        link.style.fontFamily = font;
    })
}