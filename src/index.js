function displayAnswer(response) {
  new Typewriter("#answer", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    curser: "",
  });
}

function answerQuestion(event) {
  event.preventDefault();

  let question = document.querySelector("#question");

  let key = "342b2de303cf071e1dea170f944t769o";
  let prompt = `Find official documentation on WCAG 2.2 AA accessibility guidelines and generate an answer to ${question.value}`;
  let context =
    "Only using references from w3.org, explain your answer in a clear, simple and friendly tone. Structure your answer with accessibly semantic HTML that is compliant with the WCAG 2.2 AA guidelines. If using headings, do not add inside a list. Use a 'how to' example in response to the question asked. Use plain English (UK) so people with no coding knowledge understand answers. Link to the specific WCAG guideline relevant to the question in a new tab and use accessible link text. Add links openining in a new tab to references used to the end of the answer. Only link to publicly accessible urls. Do not reference https://www.w3.org/WAI/WCAG22/. Limit to 175 words.";
  let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  let answer = document.querySelector("#answer");
  answer.classList.remove("hidden");
  answer.innerHTML = "Searching documentation... 🔍";

  axios.get(url).then(displayAnswer);
}

let questionForm = document.querySelector("#question-form");
questionForm.addEventListener("submit", answerQuestion);
