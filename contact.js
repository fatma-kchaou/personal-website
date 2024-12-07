function verif() { 
    var nom = document.form.nom.value; 
    // var nom = document.getElementByID("nom").value; 
    var prenom = document.form.prenom.value; 
    var message=document.form.message.value; 
    if(nom=="") {
        alert('Ajouter votre Nom !');
        document.form.nom.focus(); 
      return false;

    } 

  if(prenom=="") {
        alert('Ajouter votre Prénom !\n');
        document.form.prenom.focus(); 
        return false;

    } 
    if(message=="") {
        alert('Ajouter La Date !\n');
        document.form.message.focus(); 
        return false;

        
    } 
    alert 
 }
 



