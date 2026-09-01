(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
// Initialisation de EmailJS (Remplace par ta clé publique si tu l'utilises)
(function() {
  emailjs.init("mDeCApq6ibh4DStWD"); 
})();

const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Récupération des valeurs
  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validation basique supplémentaire
  if (!fullName || !email || !phone || !subject || !message) {
    Swal.fire({
      icon: 'error',
      title: 'Erreur',
      text: 'Veuillez remplir tous les champs !',
      background: '#1f242d',
      color: '#fff',
      confirmButtonColor: '#00eeff'
    });
    return;
  }

  // Affichage de la Pop-up de succès
  Swal.fire({
    icon: 'success',
    title: 'Message Envoyé !',
    text: 'Votre message a été envoyé avec succès.',
    background: '#1f242d',
    color: '#fff',
    confirmButtonColor: '#00eeff'
  });

  // Réinitialiser le formulaire
  form.reset();


  // Décommente ce bloc pour activer l'envoi réel par e-mail avec EmailJS
  emailjs.send("service_mtx85dl", "template_5t2c0u1",{
    from_name: fullName,
    email_id: email,
    phone_no: phone,
    subject: subject,
    message: message
  }).then(() => {
    Swal.fire({
      icon: 'success',
      title: 'Succès !',
      text: 'Votre message a bien été envoyé par mail.',
      background: '#1f242d',
      color: '#fff',
      confirmButtonColor: '#00eeff'
    });
    form.reset();
  }).catch((error) => {
  console.log("EmailJS Error:", error);
  Swal.fire({
    icon: "error",
    title: "Erreur",
    text: error.text || JSON.stringify(error)
  });
});
} );
