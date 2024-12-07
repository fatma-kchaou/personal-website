var score = 0; 

document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    document.getElementById('correctAnswers').innerHTML = '';

    if (this.q1.value === 'b') score++; 
    else document.getElementById('correctAnswers').innerHTML += '<li>Question 1: La bonne réponse est b</li>';
    if (this.q2.value === 'a') score++; 
    else document.getElementById('correctAnswers').innerHTML += '<li>Question 2: La bonne réponse est a</li>';
    if (this.q3.value === 'b') score++; 
    else document.getElementById('correctAnswers').innerHTML += '<li>Question 3: La bonne réponse est b</li>';
    if (this.q4.value === 'a') score++;
     else document.getElementById('correctAnswers').innerHTML += '<li>Question 4: La bonne réponse est a</li>';
    if (this.q5.value === 'b') score++; 
    else document.getElementById('correctAnswers').innerHTML += '<li>Question 5: La bonne réponse est b</li>';
    if (this.q6.value === 'a') score++; else document.getElementById('correctAnswers').innerHTML += '<li>Question 6: La bonne réponse est a</li>';
    if (this.q7.value === 'c') score++;
    else document.getElementById('correctAnswers').innerHTML += '<li>Question 7: La bonne réponse est c</li>';
    if (this.q8.value === 'a') score++; 
    else document.getElementById('correctAnswers').innerHTML += '<li>Question 8: La bonne réponse est a</li>';
    if (this.q9.value === 'b') score++;
     else document.getElementById('correctAnswers').innerHTML += '<li>Question 9: La bonne réponse est b</li>';
    if (this.q10.value === 'b') score++; 
    else document.getElementById('correctAnswers').innerHTML += '<li>Question 10: La bonne réponse est b</li>';

   
    document.getElementById('score').textContent = 'Votre score est ' + score + ' sur 10.';

    document.getElementById('result').classList.remove('resultat');
    
});
