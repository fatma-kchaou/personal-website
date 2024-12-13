function verifier() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Veuillez remplir tous les champs");
        return false; 
    }
    alert("Merci ! Votre message a été envoyé avec succès.");
    return true; 
}
