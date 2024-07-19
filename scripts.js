// scripts.js
function checkAnswers() {
    const answers = {
        q1: 'a',
        q2: 'b',
        q3: 'a',
        q4: 'b',
        q5: 'a',
        q6: 'a',
        q7: 'a',
        q8: 'c',
        q9: 'a',
        q10: 'a'
    };

    let score = 0;
    const form = document.getElementById('quizForm');
    const results = document.getElementById('results');
    const formData = new FormData(form);

    for (const [question, answer] of formData.entries()) {
        if (answers[question] === answer) {
            score++;
        }
    }

    results.innerHTML = `You scored ${score} out of 10.`;
}
