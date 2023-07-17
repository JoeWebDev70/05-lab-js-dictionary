
const credits_body = document.querySelector("#body_credits");
const credits_elements = document.querySelectorAll("#body_credits a");

if(!localStorage.getItem("fontChoice")){
    localStorage.href = 'index.html';
}
let pageFont = localStorage.getItem("fontChoice");

window.addEventListener("storage", function () {
    pageFont = localStorage.getItem("fontChoice");
    if(credits_body != null){
        credits_body.style.fontFamily = pageFont;
    }
    credits_elements.forEach(function (credits_element) {
        credits_element.style.fontFamily = pageFont;
    })
});
