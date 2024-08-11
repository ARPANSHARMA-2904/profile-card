const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const BMI = document.getElementById("BMI");
const weightUnits = document.getElementById("wu");
const heightUnits = document.getElementById("hu");

function calculate() {
    // Retrieve and parse the weight and height values
    const weightValue = parseFloat(weightInput.value);
    const heightValue = parseFloat(heightInput.value);

    // Check if the input values are valid numbers
    if (isNaN(weightValue) || isNaN(heightValue)) {
        BMI.textContent = "Please enter valid numbers for weight and height.";
        return;
    }

    // Convert weight to kilograms based on selected unit
    let weight;
    switch (weightUnits.value) {
        case "second":
            weight = weightValue / 1000; // grams to kilograms
            break;
        case "third":
            weight = weightValue * 0.453592; // pounds to kilograms
            break;
        case "first":
            weight = weightValue; // already in kilograms
            break;
        default:
            weight = NaN;
    }

    // Convert height to meters based on selected unit
    let height;
    switch (heightUnits.value) {
        case "second":
            height = heightValue * 0.0254; // inches to meters
            break;
        case "third":
            height = heightValue / 100; // centimeters to meters
            break;
        case "first":
            height = heightValue; // already in meters
            break;
        default:
            height = NaN;
    }

    // Check if the height is valid
    if (isNaN(height) || height <= 0) {
        BMI.textContent = "Please enter a valid height.";
        return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);

    // Display BMI result
    BMI.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
}
