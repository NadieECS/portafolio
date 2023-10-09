

document.addEventListener('load',()=>{

    iniciarAnimaciones()

}, true);


function iniciarAnimaciones(){

    imgFotoMarco = document.getElementById('img-foto-marco');
    
    imgFotoMarco.style.animation = "caer-modal-1 3s";

    imgFotoMarco.addEventListener('animationend',()=>{

        fondo = document.getElementById('fondo0')
    
        fondo.classList.add("class-fondo-temblor");
        imgFotoMarco.style.animation = "caer-modal-2 3s";
        
        imgFotoMarco.addEventListener('animationend',()=>{

            fondoModalCard = document.getElementById('fondo-model-card');
            fondoModalCard.style.display= "block";
            
            document.getElementById('rowModal').style.display= "block";
            
            document.getElementById('modal-card').style.animation= "modal-card 3s";

        },true);

    },true);
}