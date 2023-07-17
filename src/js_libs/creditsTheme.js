const creditBody = document.querySelector("#body_credits");
const creditElements = document.querySelectorAll("#body_credits *");

if(!localStorage.getItem("toggleChoice")){
    localStorage.href = 'index.html';
}
let preferColor = localStorage.getItem("toggleChoice");

window.addEventListener("storage", function(){
    preferColor = localStorage.getItem("toggleChoice");
    
    if (preferColor == "dark_mode_body") {
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
});


