const radioBtns = document.querySelectorAll("input[type=radio]");
const body = document.querySelector("body");
const links = document.querySelectorAll("a");
let fontChoice = body.style.fontFamily;

if(radioBtns != null) {
    radioBtns.forEach(function(radioBtn){
        radioBtn.addEventListener("change", function(e){
            if(radioBtn.checked){
                switch (radioBtn.value) {
                    case "Roboto":
                        body.style.fontFamily = "Roboto";
                        search_zone.style.fontFamily = "Roboto";
                        links.forEach(function(link){
                            link.style.fontFamily = "Roboto";
                        })
                        break;
                    case "Roboto Serif":
                        body.style.fontFamily = "Roboto Serif";
                        search_zone.style.fontFamily = "Roboto Serif";
                        links.forEach(function(link){
                            link.style.fontFamily = "Roboto Serif";
                        })
                        break;
                    case "Roboto Mono":
                        body.style.fontFamily = "Roboto Mono";
                        search_zone.style.fontFamily = "Roboto Mono";
                        links.forEach(function(link){
                            link.style.fontFamily = "Roboto Mono";
                        })
                        break;
                }
                fontChoice = body.style.fontFamily;
                localStorage.removeItem("fontChoice"); 
                localStorage.setItem("fontChoice", fontChoice);
            }
        });
    });
    
    
}