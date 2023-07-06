const toggleDiv = document.querySelector("#toggle_div");
const toggleBtn = document.querySelector("#toggle_btn");
const body = document.querySelector("body");


toggleDiv.addEventListener("click", function (e) {
    toggleClass();
});  

function toggleClass(){
    toggleDiv.classList.toggle("div_light");
    toggleDiv.classList.toggle("div_Dark");
    toggleBtn.classList.toggle("btn_light");
    toggleBtn.classList.toggle("btn_Dark");


    // if(toggleDiv.classList.contains("div_light")){
    //     body = useState("dark_theme");
    // }
}