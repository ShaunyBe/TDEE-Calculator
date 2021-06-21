function calculateOneRepMax() {
  // store the data of inputs
  const weight = document.getElementById("weight").value;
  const reps = document.getElementById("reps").value;

  //Quick validation
  if (weight === "" || reps === "") {
    window.alert("Please enter some values to get a result");
    return;
  }

  // Math to work out total calories, as well as protein, carbohydrates and fats in grams for your goal using the Harris–Benedict equations revised by Mifflin and St Jeor in 1990.

  let oneRepMax = weight / (1.0278 - 0.0278 * reps);
  oneRepMax = Math.round(oneRepMax * 100) / 100;
  oneRepMax = oneRepMax.toFixed(0);

  // Display the results
  document.getElementById("results").style.display = "inline";
  document.getElementById("1repmax").innerHTML = `${oneRepMax} kg`;
}

// Hide results amount on load
document.getElementById("results").style.display = "none";

//Clicking the button calls our custom function
document.getElementById("calculate").onclick = function () {
  calculateOneRepMax();
};
