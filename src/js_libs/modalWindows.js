const modalContainer = document.querySelector(".modal_container");
const modalTriggers = document.querySelectorAll(".modal_trigger");

modalTriggers.forEach(function(trigger){
    trigger.addEventListener("click", function() {
        modalContainer.classList.toggle("active");    
    });
});
