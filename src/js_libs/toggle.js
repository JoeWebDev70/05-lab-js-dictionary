const toggleDiv = document.querySelector("#toggle_div");
const body = document.querySelector("body");
const elements = document.querySelectorAll("body *");
const preferColor = window.matchMedia("(prefers-color-scheme: dark)");
let toggleChoice = body.getAttribute("class");
const faviconElement = document.querySelector("link[rel='shortcut icon']");

if(!localStorage.getItem("toggleChoice")){
    localStorage.href = 'index.html';
}
let TmpPreferColor = localStorage.getItem("toggleChoice");
TmpPreferColor = localStorage.getItem("toggleChoice");

if (preferColor.matches || TmpPreferColor == "dark_mode_body") {
    elements.forEach(function (element) {
        element.classList.add("dark_mode");
    })
    body.classList.add("dark_mode_body");
    body.classList.remove("light_mode_body");
    if(preferColor.matches){
        faviconElement.setAttribute("href", "./ressources/images/favicon_dark_16x16.webp");
    }
} else {
    elements.forEach(function (element) {
        element.classList.remove("dark_mode");
        body.classList.remove("dark_mode_body");
        body.classList.add("light_mode_body");
        faviconElement.setAttribute("href", "./ressources/images/favicon_16x16.webp");
    })
}

preferColor.addEventListener("change", (e) =>{
    if(e.matches){
        elements.forEach(function (element) {
            element.classList.add("dark_mode");
        })
        body.classList.add("dark_mode_body");
        body.classList.remove("light_mode_body");
        faviconElement.setAttribute("href", "./ressources/images/favicon_dark_16x16.webp");
    }else{
        elements.forEach(function (element) {
            element.classList.remove("dark_mode");
        })
        body.classList.remove("dark_mode_body");
        body.classList.add("light_mode_body");
        faviconElement.setAttribute("href", "./ressources/images/favicon_16x16.webp");
    }
});

if(toggleDiv != null){
    toggleDiv.addEventListener("click", function () {
        elements.forEach(function (element) {
            element.classList.toggle("dark_mode");
        })
        body.classList.toggle("dark_mode_body");
        body.classList.toggle("light_mode_body");
        toggleChoice = body.className;
        localStorage.removeItem("toggleChoice"); 
        localStorage.setItem("toggleChoice", toggleChoice);
    });  
}


