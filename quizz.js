 function calculateScore(event) {
  event.preventDefault(); 

  var score = 0; 
  var reponseCorrectElement = document.getElementById('reponseCorrect');
  reponseCorrectElement.innerHTML = ''; 
  if (document.getElementById('quizForm').q1.value === 'b'){
      score++;
  } else {
    reponseCorrectElement.innerHTML += '<li><mark>Question 1 :</mark> La bonne réponse est <b>b</b></li>';
  }

  if (document.getElementById('quizForm').q2.value === 'a') {
      score++;
  } else {
    reponseCorrectElement.innerHTML += '<li><mark> Question 2 :</mark> La bonne réponse est <b>a</b></li>';
  }

  if (document.getElementById('quizForm').q3.value === 'b') {
      score++;
  } else {
    reponseCorrectElement.innerHTML += '<li><mark>Question 3 : </mark> La bonne réponse est <b>b</b></li>';
  }

  if (document.getElementById('quizForm').q4.value === 'a') {
      score++;
  } else {
    reponseCorrectElement.innerHTML += '<li><mark>Question 4 : </mark>La bonne réponse est <b>a</b></li>';
  }

  if (document.getElementById('quizForm').q5.value === 'b') {
     score++;
  } else {
    reponseCorrectElement.innerHTML += '<li><mark>Question 5 :</mark> La bonne réponse est <b>b</b></li>';
  }

  if (document.getElementById('quizForm').q6.value === 'a') {
      score++;
  } else {
    reponseCorrectElement.innerHTML += '<li><mark>Question 6 :</mark> La bonne réponse est <b>a</b></li>';
  }

  if (document.getElementById('quizForm').q7.value === 'c') {
      score++;
  } else {
    reponseCorrectElement.innerHTML += '<li><mark>Question 7 :</mark> La bonne réponse est <b>c</b></li>';
  }

  if (document.getElementById('quizForm').q8.value === 'a') {
      score++;
  } else {
    reponseCorrectElement.innerHTML += '<li><mark>Question 8 :</mark> La bonne réponse est <b>a</b></li>';
  }

  if (document.getElementById('quizForm').q9.value === 'b') {
      score++;
  } else {
    reponseCorrectElement.innerHTML += '<li><mark>Question 9 :</mark> La bonne réponse est <b>b</b></li>';
  }

  if (document.getElementById('quizForm').q10.value === 'b') {
      score++;
  } else {
    reponseCorrectElement.innerHTML += '<li><mark>Question 10 :</mark> La bonne réponse est <b>b</b></li>';
  }

  document.getElementById('score').innerHTML = 'Votre score est : <b>' + score + ' / 10</b>';

}
