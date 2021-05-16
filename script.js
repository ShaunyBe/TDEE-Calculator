// Custom function
function calculateTotal() {

    // store the data of inputs
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var age = document.getElementById("age").value;
    var sex = document.getElementById("sex").value;
    var activity = document.getElementById("activityMultiplier").value;
    var goal = document.getElementById("desiredGoal").value;

    //Quick validation
    if(weight === "" || height === "" || age === "" || sex == 0 || activityMultiplier == 0 || desiredGoal == 0) {
        window.alert("Please eneter some values to get a result");
        return; 
    }


    // Do some math
    var cals = ((10 * weight) + (6.25 * height) - (5 * age) + activityMultiplier) * desiredGoal;
    cals = Math.round(cals * 100)/100;
    cals = cals.toFixed(2);
	var protein = weight * 2.2;
	var fats = ((cals - (cals * (25/100)) / 9));
	var carbs = (cals - ((protain * 4) + (fats * 9)));
				
 

    // Display the results
    document.getElementById("results").style.display = "block";
    document.getElementById("proteinGram").innerHTML = protein;
    document.getElementById("fatsGram").innerHTML = fats;
    document.getElementById("carbsGram").innerHTML = carbs;
    document.getElementById("totalCal").innerHTML = cals;
}

// Hide results amount on load
document.getElementById("results").style.display = "none";

//Clicking the button calls our custom function
document.getElementById("calculate").onclick = function() { calculateTotal(); };
