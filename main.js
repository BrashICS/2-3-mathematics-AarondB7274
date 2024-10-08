/**
 * 2.3 - Mathematics
 * ICS3 - Mr. Brash 🐿️
 * 
 * Make sure to read the README.md (especially if you missed class)
 * Then checkout the YOUR_TASK.md to see the practice plan
 * 
 * Don't forget - these are playgrounds. Once you finish the requested task, feel free to play.
 **/ 

// Get a random number between 0 and 100
let random_number = Math.random() * 100

// Round it to the nearest whole number
random_number = Math.round(random_number)

// Output the result usijng a new way to insert a variable into a string (called a template)
console.log(`I generated the number ${random_number}`)

// ***  Your code goes below  ***
// F = (C * 9/5) + 32
// C = (F - 32) * 5/9
let celsius = 100;
let farenheit = 0;
celsius += 2;
farenheit = (celsius * 9/5) +32
console.log (farenheit)
farenheit = 77
celsius = (farenheit - 32) * 5/9
console.log(celsius)
console.log(`${farenheit} degrees farenheit is ${celsius} degrees celsius.`)
let m = (0-5)/(6- -4)
console.log(m)
// V = π r² h
let radius = Math.random()*10
let height = Math.random()*10
let PI = Math.PI
let volume = Math.round((PI * radius**2) * height)
console.log(`The volume of my random cylinder is ${volume}`)