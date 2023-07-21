
const creditsBody = document.querySelector("#body_credits");
const creditsElements = document.querySelectorAll("#body_credits a");

function setFont(font){
    if(creditsBody != null){
        creditsBody.style.fontFamily = font;
    }
    creditsElements.forEach(function (creditsElement) {
        creditsElement.style.fontFamily = font;
    })
}

if(!localStorage.getItem("fontChoice")){
    localStorage.href = 'index.html';
}
let pageFont = localStorage.getItem("fontChoice");
pageFont = localStorage.getItem("fontChoice");
setFont(pageFont);

window.addEventListener("storage", function () {
    pageFont = localStorage.getItem("fontChoice");
    setFont(pageFont);
});
