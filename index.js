// Task 1: Flexible String Manipulation with Functions
// Create a function called formatFullName that takes two parameters: firstName and lastName.The function should return the full name in the format lastName, firstName.
// Format the firstName and lastName so that the first letter of each is always capatilized.
// Add a condition that checks if either the first or last name is missing.If so, return a string saying “Invalid name input.”
function formatFullName(firstName, lastName) {
    if (!firstName || !lastName) {
        return "Invalid name input.";
    }

    result = lastName.charAt(0).toUpperCase() + lastName.slice(1) + ", " + firstName.charAt(0).toUpperCase() + firstName.slice(1);
    return result;
}

console.log(formatFullName("nayeem", "nabil"));
console.log(formatFullName("Nayeem", "Nabil"));
console.log(formatFullName("", "Nabil"));
console.log(formatFullName("Nayeem", ""));
console.log(formatFullName("", ""));

// -----------------------------------
// Task 2: Mathematical Operations with Multiple Parameters
// Write a function called calculateTotalCost that takes three parameters: price, quantity, and taxRate.
// The function should calculate the total cost of items, including tax. Use the formula: totalCost = (price * quantity) * (1 + taxRate).
// Ensure that price, quantity, and taxRate are all valid numbers. If any are invalid, return a string: “Invalid input.”
function calculateTotalCost(price, quantity, taxRate) {

    if (typeof price !== "number" || !isFinite(price) || typeof quantity !== "number" || !isFinite(quantity) || typeof taxRate !== "number" || !isFinite(taxRate)) {
        return "Invalid input.";
    }
    else {
        const totalCost = (price * quantity) * (1 + taxRate);
        return totalCost;
    }
}

console.log(calculateTotalCost(10, 2, 0.05));
console.log(calculateTotalCost("A", 2, 0.05));
console.log(calculateTotalCost(10, "B", 0.05));
console.log(calculateTotalCost(10, 2, "C"));
console.log(calculateTotalCost("A", "B", "C"));

// -----------------------------------
// Task 3: Functions with Conditional Logic
// Write a function called checkEligibility that takes two parameters: age and isEmployed. The function should check if a person is eligible for a program based on the following rules:
// If the person is over 18 and employed, they are eligible.
// If the person is over 18 but unemployed, they are conditionally eligible.
// If the person is 18 or younger, they are not eligible.
// Return an appropriate string message for each scenario.
function checkEligibility(age, isEmployed) {
    if (age >= 18 && isEmployed == "True") {
        return "This person is 18 or over and employed";
    }

    else if (age >= 18 && isEmployed == "False") {
        return "This person is 18 or over but unemployed";
    }

    else if (age <= 18) {
        return "This person is under 18 and therefore not eligible for employment";
    }
}

console.log(checkEligibility(18, "True"));
console.log(checkEligibility(18, "False"));
console.log(checkEligibility(17, ""));

// -----------------------------------
// Task 4: Refactoring for Reusability
// Refactor the calculateTotalCost function from Task 2 to include an optional discount parameter.If the discount is provided, the function should subtract the discount from the total cost before applying tax.
// If no discount is provided, calculate the total cost as before.
function calculateTotalCost(price, quantity, taxRate, discount) {

    if (typeof price !== "number" || !isFinite(price) || typeof quantity !== "number" || !isFinite(quantity) || typeof taxRate !== "number" || !isFinite(taxRate) || typeof discount !== "number" || !isFinite(discount)) {
        return "Invalid input.";
    }
    else {
        const discountedCost = (price * quantity) * (1 - discount);
        const totalCost = discountedCost * (1 + taxRate);

        return totalCost;
    }
}

console.log(calculateTotalCost(10, 2, 0.05, 0.10));
console.log(calculateTotalCost(10, 2, 0.05, 0.20));
console.log(calculateTotalCost("A", 2, 0.05));
console.log(calculateTotalCost(10, "B", 0.05));
console.log(calculateTotalCost(10, 2, "C"));
console.log(calculateTotalCost(10, 2, 0.05, "D"));
console.log(calculateTotalCost("A", "B", "C"));
console.log(calculateTotalCost("A", "B", "C", "D"));