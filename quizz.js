document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const correctAnswers = ['b', 'a', 'b', 'a', 'b', 'a', 'c', 'a', 'b', 'b']; // Réponses correctes
    const userAnswers = [
        this.q1.value,
        this.q2.value,
        this.q3.value,
        this.q4.value,
        this.q5.value,
        this.q6.value,
        this.q7.value,
        this.q8.value,
        this.q9.value,
        this.q10.value,
    ];

    let score = 0;
    const correctAnswersList = document.getElementById('correctAnswers');
    correctAnswersList.innerHTML = ''; // Réinitialiser la liste

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score++;
        } else {
            const listItem = document.createElement('li');
            listItem.textContent = `Question ${index + 1}: Réponse correcte est ${correctAnswers[index]}`;
            correctAnswersList.appendChild(listItem);
        }
    });

    const scoreText = `Votre score est ${score} sur ${correctAnswers.length}.`;
    document.getElementById('score').textContent = scoreText;

    // Afficher les résultats
    document.getElementById('result').classList.remove('hidden');
});
