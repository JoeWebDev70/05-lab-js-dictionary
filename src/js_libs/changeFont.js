const radioBtns = document.querySelectorAll("input[type=radio]");
const body = document.querySelector("body");

radioBtns.forEach(function(radioBtn){
    radioBtn.addEventListener("change", function(e){
        if(radioBtn.checked){
            switch (radioBtn.value) {
                case "Roboto":
                    body.style.fontFamily = "Roboto";
                    break;
                case "Roboto Serif":
                    body.style.fontFamily = "Roboto Serif";
                    break;
                case "Roboto Mono":
                    body.style.fontFamily = "Roboto Mono";
                    break;
            }
            
        }
    });
    
    
    
});
