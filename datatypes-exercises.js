// Working with data types, operators, and variables


var sample = "Hello Codeup";
// Use .length to find the number of characters in the string.
sample.length
// Try to make the sample string all upper or all lower case.
sample.toLowerCase()
// Update the variable sample via concatenation so that it contains "Hello Codeup Students".
sample + ' Students'
// Replace "Students" with "Class".
var newSample = sample + ' Students'
newSample.replace('Students', 'Class')
// Find the index of "c" using .indexOf(). What do you observe?
newSample.indexOf('c')
// Find the index of "C" using .indexOf().
newSample.indexOf('C')
// Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().
newSample.substring(newSample.indexOf('C'), newSample.indexOf('S')).trim()

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
// and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
var littleMermaid = 3;
var brotherBear = 5;
var hercules = 1;
var price = (littleMermaid * 3) + (brotherBear * 3) + (hercules * 3)





// Create a variable that holds a boolean value for each of the following conditions:
var username = 'codeup'
var password = 'notastrongpassword'
// the password must be at least 5 characters
var fiveChar = password.length >= 5
// the password must not include the username
var passNotUser = password.includes(username)
// the username must be no more than 20 characters
var twentyChar = username.length <= 20
// neither the username or password can start or end with whitespace
var whiteSpace = username.length === username.trim().length && password.length === password.trim().length
