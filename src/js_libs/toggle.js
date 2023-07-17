const toggleDiv = document.querySelector("#toggle_div");
const body = document.querySelector("body");
const elements = document.querySelectorAll("body *");
const preferColor = window.matchMedia("(prefers-color-scheme: dark)");
let toggleChoice = body.getAttribute("class");

if (preferColor.matches) {
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

preferColor.addEventListener("change", (e) =>{
    if(e.matches){
        elements.forEach(function (element) {
            element.classList.add("dark_mode");
        })
        body.classList.add("dark_mode_body");
        body.classList.remove("light_mode_body");
    }else{
        elements.forEach(function (element) {
            element.classList.remove("dark_mode");
        })
        body.classList.remove("dark_mode_body");
        body.classList.add("light_mode_body");
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


