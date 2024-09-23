// shows the quote with "typewriter" feature

function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 80,
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#instructions");
  //built API url
  let apiKey = "eb0432d8499otf6b1e6a9e4fe11cf387";
  let prompt = `Generate a Finnish quote about${instructionsInput.value}`;
  let context =
    "You are a quote expert and native in Finnish language. Your mission is to create a short quote and also translate it to English. Please separate the quote and translation with a <br />. Please sign the quote `SheCodes AI`with font-size:12px,  to the bottom RIGHT corner of quote. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  //When quote is generated, this moves "hidden" property from class "quote",
  //showing a message while quote is generated
  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="composing"> Generating quote for you about "${instructionsInput.value}"...</div>`;

  //Make a call to the API
  //Display the generated quote
  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
