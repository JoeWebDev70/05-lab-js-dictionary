
const body = document.querySelector("#body_credits");
const elements = document.querySelectorAll("#body_credits *");

if(!localStorage.getItem("toggleChoice")){
    localStorage.href = 'index.html';
}
let preferColor = localStorage.getItem("toggleChoice");

window.addEventListener("storage", function(){
    preferColor = localStorage.getItem("toggleChoice");
    
    if (preferColor == "dark_mode_body") {
        elements.forEach(function (element) {
            element.classList.add("dark_mode");
        })
        body.classList.add("dark_mode_body");
        body.classList.remove("light_mode_body");
    } else {
        elements.forEach(function (element) {
            element.classList.remove("dark_mode");
            body.classList.remove("dark_mode_body");
            body.classList.add("light_mode_body");
        })
    }
});

