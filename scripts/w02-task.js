/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName="Gabriel Elton";
let  currentYear=2024;
let profilePicture="images/profile.jpg";




/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");


/* Step 4 - Adding Content */
nameElement.innerHTML =  `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `profile image of ${fullName}`);




/* Step 5 - Array */
const foods = ["cucumber","steak","shrimp","sushi"]

foodElement.textContent = foods;

const singleFood = "peas";

foods.push(singleFood);
foodElement.innerHTML += `<br> ${foods}`;

foods.shift()
foodElement.innerHTML += `<br> ${foods}`;

foods.pop()
foodElement.innerHTML += `<br> ${foods}`;

