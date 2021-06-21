// Custom function
"use strict";

function calculateTotal() {
  // store the data of inputs
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const age = document.getElementById("age").value;
  const sex = document.getElementById("sex").value;
  const activity = document.getElementById("activityMultiplier").value;
  let goal = document.getElementById("desiredGoal").value;

  //Quick validation
  if (
    weight === "" ||
    height === "" ||
    age === "" ||
    sex === "-- Choose an option --" ||
    activity === "-- Choose an option --" ||
    goal === "-- Choose an option --"
  ) {
    window.alert("Please enter some values to get a result");
    return;
  }

  // Math to work out total calories, as well as protein, carbohydrates and fats in grams for your goal using the Harris–Benedict equations revised by Mifflin and St Jeor in 1990.

  let cals = (10 * weight + 6.25 * height - 5 * age) * activity * goal;
  cals = Math.round(cals * 100) / 100;
  cals = cals.toFixed(0);
  let protein = weight * 2.2;
  protein = Math.round(protein * 100) / 100;
  protein = protein.toFixed(0);
  let fats = (cals * 0.25) / 9;
  fats = Math.round(fats * 100) / 100;
  fats = fats.toFixed(0);
  let carbs = (cals - (protein * 4 + fats * 9)) / 4;
  carbs = Math.round(carbs * 100) / 100;
  carbs = carbs.toFixed(0);

  // Display the results
  document.getElementById("results").style.display = "inline";
  document.getElementById("proteinGram").innerHTML = `${protein} g`;
  document.getElementById("fatsGram").innerHTML = `${fats} g`;
  document.getElementById("carbsGram").innerHTML = `${carbs} g`;
  document.getElementById("totalCal").innerHTML = `${cals} calories`;
}

// Hide results amount on load
document.getElementById("results").style.display = "none";

//Clicking the button calls our custom function
document.getElementById("calculate").onclick = function() {
  calculateTotal();
};


