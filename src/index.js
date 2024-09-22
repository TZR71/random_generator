function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: "Generating a new quote for you",
    autoStart: true,
    cursor: "",
    delay: 1.5,
  });
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
