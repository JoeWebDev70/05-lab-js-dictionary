const creditBody = document.querySelector("#body_credits");
const creditElements = document.querySelectorAll("#body_credits *");

function setTheme(color){
    if (color == "dark_mode_body") {
        creditElements.forEach(function (creditElement) {
            creditElement.classList.add("dark_mode");
        })
        if(creditBody != null){
            creditBody.classList.add("dark_mode_body");
            creditBody.classList.remove("light_mode_body");
        }
    } else {
        creditElements.forEach(function (creditElement) {
            creditElement.classList.remove("dark_mode");
        })
        if(creditBody != null){
            creditBody.classList.remove("dark_mode_body");
            creditBody.classList.add("light_mode_body");
        }
    }
}

if(!localStorage.getItem("toggleChoice")){
    localStorage.href = 'index.html';
}

let preferColorChoice = localStorage.getItem("toggleChoice");
preferColorChoice = localStorage.getItem("toggleChoice");
setTheme(preferColorChoice);

window.addEventListener("storage", function(){
    preferColorChoice = localStorage.getItem("toggleChoice");
    setTheme(preferColorChoice);
});


