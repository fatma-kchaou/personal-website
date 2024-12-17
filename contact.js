 // Initialisez EmailJS avec votre clé publique
       
 emailjs.init("8v92fuHtJyhSsG7s2"); // Remplacez par votre clé publique EmailJS
    
 // Gestion de l'envoi du formulaire
 function contacter(event) {
   event.preventDefault(); // Empêche la soumission par défaut du formulaire

     // Récupération des valeurs du formulaire
     const name = document.getElementById("name").value;
     const email = document.getElementById("email").value;
     const subject = document.getElementById("subject").value;
     const message = document.getElementById("message").value;

     // Vérification des champs vides
     if (name ==="" || email ==="" || subject ==="" || message ==="") {
         alert("Veuillez remplir tous les champs du formulaire.");
         return ; // Si un champ est vide, ne pas envoyer l'email
     }

     // Paramètres pour l'email
     const params = {
         name: name,
         email: email,
         subject: subject,
         message: message,
     };

     const serviceID = "service_130wj1m"; // Remplacez par l'ID de votre service EmailJS
     const templateID = "template_59p440n"; // Remplacez par l'ID de votre modèle EmailJS

     emailjs.send(serviceID, templateID, params)
         .then(() => {
             // Alerte lorsque le message est envoyé avec succès
             alert("Votre message a été envoyé avec succès !");
             // Réinitialisation du formulaire
             document.getElementById("contactForm").reset();
         })
         .catch((error) => {
             alert("Une erreur s'est produite. Réessayez.");
             console.error("Erreur :", error);
         });
 }
