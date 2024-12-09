function calculateScore(event) {
    event.preventDefault(); 
    var score = 0;
    document.getElementById('correctAnswers').innerHTML = '';
    document.getElementById('score').textContent = '';
    var q1Answer = document.querySelector('input[name="q1"]:checked');
    if (q1Answer && q1Answer.value === "b") {
      score++;
    }else document.getElementById('correctAnswers').innerHTML += '<li>Question 1: La bonne réponse est b</li>';

    var q2Answer = document.querySelector('input[name="q2"]:checked');
    if (q2Answer && q2Answer.value === "a") {
      score++;
    }    else document.getElementById('correctAnswers').innerHTML += '<li>Question 2: La bonne réponse est a</li>';

    var q3Answer = document.querySelector('input[name="q3"]:checked');
    if (q3Answer && q3Answer.value === "b") {
      score++;
    }    else document.getElementById('correctAnswers').innerHTML += '<li>Question 3: La bonne réponse est b</li>';

    var q4Answer = document.querySelector('input[name="q4"]:checked');
    if (q4Answer && q4Answer.value === "a") {
      score++;
    }     else document.getElementById('correctAnswers').innerHTML += '<li>Question 4: La bonne réponse est a</li>';

    var q5Answer = document.querySelector('input[name="q5"]:checked');
    if (q5Answer && q5Answer.value === "b") {
      score++;
    }    else document.getElementById('correctAnswers').innerHTML += '<li>Question 5: La bonne réponse est b</li>';

    var q6Answer = document.querySelector('input[name="q6"]:checked');
    if (q6Answer && q6Answer.value === "a") {
      score++;
    }else document.getElementById('correctAnswers').innerHTML += '<li>Question 6: La bonne réponse est a</li>';
    var q7Answer = document.querySelector('input[name="q7"]:checked');
    if (q7Answer && q7Answer.value === "c") {
      score++;
    } else document.getElementById('correctAnswers').innerHTML += '<li>Question 7: La bonne réponse est c</li>';
    var q8Answer = document.querySelector('input[name="q8"]:checked');
    if (q8Answer && q8Answer.value === "a") {
      score++;
    }    else document.getElementById('correctAnswers').innerHTML += '<li>Question 8: La bonne réponse est a</li>';

    var q9Answer = document.querySelector('input[name="q9"]:checked');
    if (q9Answer && q9Answer.value === "b") {
      score++;
    }     else document.getElementById('correctAnswers').innerHTML += '<li>Question 9: La bonne réponse est b</li>';
    var q10Answer = document.querySelector('input[name="q10"]:checked');
    if (q10Answer && q10Answer.value === "b") {
      score++;
    }     else document.getElementById('correctAnswers').innerHTML += '<li>Question 10: La bonne réponse est b</li>';
    document.getElementById('score').textContent = 'Votre score est ' + score + ' sur 10.';

  }
