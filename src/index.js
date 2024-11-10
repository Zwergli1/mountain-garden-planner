function displayMonthlyPlan(response) {
  new Typewriter("#plan", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePlan(event) {
  event.preventDefault();
  let monthInput = document.querySelector("#user-month-input");
  let apiKey = "c945b1b3a38a7ed39dtf309fbc9oc934";
  let context =
    "Your are an AI Assistant that tells what maintenance to day to a garden each month. The garden you are describing is at 1300 meter altitude in Switzerland. The plan has to be provided in HTML format. It should have a section for tree care, a section for ground care, a section for plants and a section for flowers. The advices should be on short sentence. Example: <h2>Trees</h2><p>Cut the trees</p>. Do not mention html or any format indication in plain text.";
  let prompt = `Generate a list of advices on what to do in the garden in the month of ${monthInput.value}.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayMonthlyPlan);
}

let plannerFormElement = document.querySelector("#planner-generator-form");
plannerFormElement.addEventListener("submit", generatePlan);
