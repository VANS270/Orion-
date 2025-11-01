//je gère la responsive navbar

const sidebar= document.getElementById('sidebar');
function showburger() //quand on clique sur la barre menu on active le sidebar
{
    sidebar.style.display = 'flex' ;
    sidebar.classList.add('open');
}
function hidesidebar() //quand on clique sur la barre close on desactive le sidebar
{
    sidebar.style.display = 'none';
}

// ajouter les constances pour le changemnent de theme
const html = document.documentElement;

//dark mode
function darkmode()
{
    html.classList.add('dark');
}
// ligthmode
function ligthmode()
{
    html.classList.remove ('dark');
}

//gerer les modes de transport de facon a ce que lorsqu'on clique sur l'un ca desactive l'autre

// Je récupère tous les blocs cliquables
const tabs = document.querySelectorAll('.tab');

// Je crée un objet pour relier chaque bouton à son contenu
const contenu = {
  'btn-air': document.getElementById('content-air'), // contenu du bouton avion
  'btn-sea': document.getElementById('content-sea')  // contenu du bouton bateau
};

// Chaque bouton a deux SVG : sombre et clair
const icons = {
  'btn-air': {
    dark: document.getElementById('avionblack'),
    light: document.getElementById('avionclair')
  },
  'btn-sea': {
    dark: document.getElementById('boatblack'),
    light: document.getElementById('boatclair')
  }
};

// Fonction principale : active le bon bouton
function activetab(activeId) {
  tabs.forEach(tab => {
    const isActive = tab.id === activeId; // Est-ce le bouton cliqué ?
    const iconset = icons[tab.id];        // Les deux SVG liés à ce bouton

    // Reset des styles
    tab.classList.remove('bg-red-500', 'text-white', 'bg-gray-200', 'text-gray-600');

    // Appliquer les bons styles selon l’état
    tab.classList.add(isActive ? 'bg-red-500' : 'bg-gray-100/20');
    tab.classList.add(isActive ? 'text-white' : 'text-gray-600');

    // Affichage des SVG
    iconset.dark.classList.toggle('hidden', isActive);   // cache le sombre si actif
    iconset.light.classList.toggle('hidden', !isActive); // montre le clair si actif


    // Affichage du bon contenu
    contenu[tab.id].classList.toggle('hidden', !isActive);
  });
}

// Initialisation : bouton aérien actif
activetab('btn-air');

// Gestion du clic sur chaque bouton
tabs.forEach(tab => {
  tab.addEventListener('click', () => activetab(tab.id));
});


//formulaire de contact
// Je sélectionne le formulaire et le bouton d'envoi
const form_contact = document.getElementById('form-contact');
const bouton_contact = document.getElementById('btn-contact');

// J'écoute la soumission du formulaire
form_contact.addEventListener('submit' ,(event) =>{
  //on empêche l'envoi
  event.preventDefault();

  // on recupere les valeurs
  const nom = document.querySelector('#name').value;
  const tel = document.querySelector('#tel').value;
  const email = document.querySelector('#email').value;
  const service = document.querySelector('#service').value;
  const sujet = document.querySelector('#sujet').value;
  const message = document.querySelector('#message').value;
  const consetement = document.getElementById('consent').checked
  const champs = document.querySelectorAll("input");

champs.forEach((champ) => {
  champ.addEventListener("input", () => {
    if (champ.checkValidity()) {
      //  Le champ est valide
      champ.classList.remove("ring-red-500");
      champ.classList.add("ring-2", "ring-green-500");
      console.log("champ valide");
    } else {
      //  Le champ est invalide
      champ.classList.remove("ring-green-500");
      champ.classList.add("ring-2", "ring-red-500");
      console.log("champ invalide");
    }
  });
});



  //au clic toutes les class valides seront actives
  form_contact.classList.add('valide');
  if(form_contact.checkValidity())
  {
    //si tous les champs sont valides 
    console.log("Nom complet: "+ nom );
    console.log("tel: " + tel );
    console.log("email: " + email );
    console.log("service: " + service );
    console.log("sujet: " + sujet );
    console.log("message: " + message );

    const messagecorect = document.getElementById('success-message');
    messagecorect.classList.remove('hidden');
    messagecorect.classList.toggle('flex');
  }
  else
  {
    const messagecorect = document.getElementById('success-message');
    messagecorect.classList.toggle('hidden');
  }
  
})
 

//formulaire de calcul de poids
document.getElementById('price-poids').addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');//remplace tous les champs qui sont pas des chiffres par des blancs
  });


console.log("script main.js chargé");
