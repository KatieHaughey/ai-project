function answerQuestion(event) {
    event.preventDefault();

    new Typewriter("#answer", {
    strings: "test",
    autoStart: true,
    delay: 1,
    });
}

let questionForm = document.querySelector("#question-form");
questionForm.addEventListener("submit", answerQuestion);


