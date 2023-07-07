const toggleDiv = document.querySelector("#toggle_div");
const body = document.querySelector("body");
const elements = document.querySelectorAll("body *");
const preferColor = window.matchMedia("(prefers-color-scheme: dark)");


if (preferColor.matches) {
    elements.forEach(function (element) {
        element.classList.add("dark_mode");
    })
} else {
    elements.forEach(function (element) {
        element.classList.remove("dark_mode");
    })
}

preferColor.addEventListener("change", (e) =>{
    if(e.matches){
        elements.forEach(function (element) {
            element.classList.add("dark_mode");
        })
    }else{
        elements.forEach(function (element) {
            element.classList.remove("dark_mode");
        })
    }
});
    
toggleDiv.addEventListener("click", function () {
    elements.forEach(function (element) {
        element.classList.toggle("dark_mode");
    })
});  
