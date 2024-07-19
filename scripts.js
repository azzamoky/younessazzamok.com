// scripts.js

function checkAnswers() {
    const correctAnswers = {
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

    const form = document.getElementById('quizForm');
    let score = 0;
    let total = 10;

    for (let [question, answer] of Object.entries(correctAnswers)) {
        const selected = form.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === answer) {
            score++;
        }
    }

    const results = document.getElementById('results');
    results.innerHTML = `You scored ${score} out of ${total}.`;
}
