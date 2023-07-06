const modalContainers = document.querySelectorAll(".modal_container");
const modalTriggers = document.querySelectorAll(".modal_trigger");

modalTriggers.forEach(function(trigger){
    trigger.addEventListener("click", function() {
        toggleModal(trigger);      
    });
});

function toggleModal(trigger){
    modalContainers.forEach(function(modalContainer){
        if(trigger.classList.contains("info") & modalContainer.classList.contains("info")){
            modalContainer.classList.toggle("active");
        }else if(trigger.classList.contains("setting") & modalContainer.classList.contains("setting")){
            modalContainer.classList.toggle("active");
        }
     });
}
