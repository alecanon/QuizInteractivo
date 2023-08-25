document.addEventListener("DOMContentLoaded", function() {
    const questions = [
        { question: "¿Cuál es la capital de Francia?", answers: ["Madrid", "Londres", "París"], correctAnswer: "París" },
        { question: "¿Cuál es el planeta más grande del sistema solar?", answers: ["Tierra", "Marte", "Júpiter"], correctAnswer: "Júpiter" }
    ];

    const quizContainer = document.getElementById("quiz-container");
    const resultContainer = document.getElementById("result-container");
    const submitButton = document.getElementById("submit-button");
    const restartButton = document.getElementById("restart-button");

    function displayQuestions() {
        questions.forEach((question, index) => {
            const questionElement = document.createElement("div");
            questionElement.innerHTML = `<label>Pregunta ${index + 1}: ${question.question}</label>`;

            question.answers.forEach((answer, ansIndex) => {
                questionElement.innerHTML += `<input type="radio" name="q${index + 1}" value="${ansIndex}"> ${answer}<br>`;
            });

            quizContainer.appendChild(questionElement);
        });
    }

    function calculateResults() {
        let score = 0;

        questions.forEach((question, index) => {
            const selectedOption = document.querySelector(`input[name="q${index + 1}"]:checked`);
            if (selectedOption) {
                const userAnswer = selectedOption.value;
                if (question.answers[userAnswer] === question.correctAnswer) {
                    score++;
                }
            }
        });

        // Mostrar resultados en la parte inferior de la página
        resultContainer.style.display = "block";
        resultContainer.innerHTML = `Tu puntuación fue ${score} de ${questions.length}`;
        restartButton.style.display = "block";
    }

    function restartQuiz() {
        resultContainer.style.display = "none";
        restartButton.style.display = "none";
        submitButton.style.display = "block";
    }

    displayQuestions();
    submitButton.addEventListener("click", calculateResults);
    restartButton.addEventListener("click", restartQuiz);
});
