
const creditsBody = document.querySelector("#body_credits");
const creditsElements = document.querySelectorAll("#body_credits a");

if(!localStorage.getItem("fontChoice")){
    localStorage.href = 'index.html';
}
let pageFont = localStorage.getItem("fontChoice");

window.addEventListener("storage", function () {
    pageFont = localStorage.getItem("fontChoice");
    if(creditsBody != null){
        creditsBody.style.fontFamily = pageFont;
    }
    creditsElements.forEach(function (creditsElement) {
        creditsElement.style.fontFamily = pageFont;
    })
});
