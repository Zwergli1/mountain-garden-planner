function generatePlan(event) {
  event.preventDefault();

  new Typewriter("#plan", {
    strings: "En mars, plantez vos oignons",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let plannerFormElement = document.querySelector("#planner-generator-form");
plannerFormElement.addEventListener("submit", generatePlan);
