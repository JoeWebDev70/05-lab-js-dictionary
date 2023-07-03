
const modalContainers = document.querySelectorAll(".modal_container");
const modalTriggers = document.querySelectorAll(".modal_trigger");

modalTriggers.forEach(function(trigger){
    trigger.addEventListener("click", function() {
        toggleModal();
    });
});

function toggleModal(){
    modalContainer.classList.toggle("active");
}
