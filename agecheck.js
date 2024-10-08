// Prompt the user to enter their age
let age = prompt("Please enter your age:");

// Convert the input to a number
age = Number(age);

// Check if the input is a valid number
if (isNaN(age)) {
    console.log("That's not a valid age.");
} else {
    // Determine the age category using if-else structure
    if (age < 13) {
        console.log("You are a child.");
    } else if (age >= 13 && age <= 19) {
        console.log("You are a teenager.");
    } else {
        console.log("You are an adult.");
    }
}
