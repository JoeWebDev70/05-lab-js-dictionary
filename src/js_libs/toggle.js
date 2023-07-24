// index
const bodyMain = document.querySelector("#body_main");
const toggleDiv = document.querySelector("#toggle_div");
const elementsMain = document.querySelectorAll("#body_main *");
const preferColor = window.matchMedia("(prefers-color-scheme: dark)");
let toggleChoice;
if(bodyMain != null){
    toggleChoice = bodyMain.getAttribute("class"); //get default 
}
const faviconElement = document.querySelector("link[rel='shortcut icon']");
//credits and legal mentions page
const bodyCredits = document.querySelector("#body_credits");
const elementsCredits = document.querySelectorAll("#body_credits *");

//get if local storage contain some value and set it 
if(!localStorage.getItem("toggleChoice")){
    localStorage.href = 'index.html';
}
toggleChoice = localStorage.getItem("toggleChoice");
setTheme(toggleChoice);

//get if storage change
window.addEventListener("storage", function(){
    toggleChoice = localStorage.getItem("toggleChoice");
    setTheme(toggleChoice);
});

//if prefer color of computer change set it
preferColor.addEventListener("change", (e) =>{
    if(e.matches){
        toggleChoice = "dark_mode_body";
        setTheme("dark_mode_body");
    }else{
        toggleChoice = "light_mode_body";
        setTheme("light_mode_body");
    }
    setToggleChoice();
});

//else get the color prefer set with toggle on local storage
if(toggleChoice == null){
    if (preferColor.matches || toggleChoice == "dark_mode_body") {
        setTheme("dark_mode_body");
    } else{
        setTheme("light_mode_body");
    }
}else{
    if(toggleDiv != null){
        toggleDiv.addEventListener("click", function () {
            if(elementsMain != null) {
                elementsMain.forEach(function (elementMain) {
                    elementMain.classList.toggle("dark_mode");
                });
            }
            if(bodyMain != null) {
                bodyMain.classList.toggle("dark_mode_body");
                bodyMain.classList.toggle("light_mode_body");
                toggleChoice = bodyMain.className;
                setToggleChoice();
            }
        });  
    }
}

function setToggleChoice(){
    localStorage.removeItem("toggleChoice"); 
    localStorage.setItem("toggleChoice", toggleChoice);
}

//set color on various elements
function setTheme(color){
    if (color == "dark_mode_body") {
        //index
        if(elementsMain != null) {
            elementsMain.forEach(function (elementMain) {
                elementMain.classList.add("dark_mode");
            });
        }
        if(bodyMain != null) {
            bodyMain.classList.add("dark_mode_body");
            bodyMain.classList.remove("light_mode_body");
        }

        //credits and legal mentions
        if(elementsCredits != null){
            elementsCredits.forEach(function (elementCredits) {
                elementCredits.classList.add("dark_mode");
            });
        }

        if(bodyCredits != null){
            bodyCredits.classList.add("dark_mode_body");
            bodyCredits.classList.remove("light_mode_body");
        }
    } else {
        //index
        if(elementsMain != null) {
            elementsMain.forEach(function (elementMain) {
                elementMain.classList.remove("dark_mode");
            });
        }
        if(bodyMain != null) {
            bodyMain.classList.remove("dark_mode_body");
            bodyMain.classList.add("light_mode_body");
        }

        //credits and legal mentions
        if(elementsCredits != null){
            elementsCredits.forEach(function (elementCredits) {
                elementCredits.classList.remove("dark_mode");
            });
        }
        if(bodyCredits != null){
            bodyCredits.classList.remove("dark_mode_body");
            bodyCredits.classList.add("light_mode_body");
        }
    }
}

//set favicon color
if (preferColor.matches) {
    faviconElement.setAttribute("href", "./ressources/images/favicon_dark_16x16.webp");
} else {
    faviconElement.setAttribute("href", "./ressources/images/favicon_16x16.webp");
}

preferColor.addEventListener("change", (e) =>{
    if(e.matches){
        faviconElement.setAttribute("href", "./ressources/images/favicon_dark_16x16.webp");
    }else{
        faviconElement.setAttribute("href", "./ressources/images/favicon_16x16.webp");
    }
});
