document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const selectedAnswer = document.querySelector('button.selected');

    if (selectedAnswer) {
        const answerValue = selectedAnswer.value;

        localStorage.setItem("Nr differences", answerValue);
        console.log("Selected answer registered in local storage:", answerValue);

        window.location.href = "https://github.com/Impanda9/5Chart";
    } else {
        console.log("No answer selected");
    }
});

const answerButtons = document.querySelectorAll('.answer-option button');
answerButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        answerButtons.forEach(function(btn) {
            btn.classList.remove('selected');
        });

        button.classList.add('selected');
    });
});
