// ❤️❤️❤️❤️  methode qui gère la fixation du navbar lors du defilement
let headerSelected = document.querySelector("#nav");
if(headerSelected){
        // calculposition vertical de l'en tete par rapport haut de la page
let headerPosition = headerSelected.offsetTop;
let nextElement = headerSelected.nextElementSibling;

const fixedHeader =  () => {
if((headerPosition - window.scrollY) <= 0){
headerSelected.classList.add('fixed-top');
nextElement.classList.add('scrolled-offset')
}else{
    headerSelected.classList.remove('fixed-top');
    nextElement.classList.remove('scrolled-offset');
}
}

// ajout d'un event pour detecter le chargement de la page et le defilement
window.addEventListener('load', fixedHeader);
const onscroll = (el, listener) =>{
    el.addEventListener('scroll', listener);
};
onscroll(document, fixedHeader);
}
const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

//   NEWSLETTER

function sendNewsLetter(){
    const newsletter = document.querySelector('#newsletter');
    const mailSaisie = newsletter.value.trim();
    if(mailSaisie === ""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Le champ ne peut pas être vide",
          });
          return;
          const monMail = {
            mail: mailSaisie,
          };
    }
    Swal.fire({
        icon: "success",
        title: "Au revoir",
        text: "Inscription envoyé avec succès",
      });
    }