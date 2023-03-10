// Working with data types, operators, and variables


var sample = "Hello Codeup";
// Use .length to find the number of characters in the string.
sample.length
// Try to make the sample string all upper or all lower case.
sample.toLowerCase()
// Update the variable sample via concatenation so that it contains "Hello Codeup Students".
sample += ' Students'
// Replace "Students" with "Class".
sample += ' Students'
sample.replace('Students', 'Class')
// Find the index of "c" using .indexOf(). What do you observe?
sample.indexOf('c')
// Find the index of "C" using .indexOf().
sample.indexOf('C')
// Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().
sample.substring(sample.indexOf('C'), sample.indexOf('S')).trim()

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
// and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
var littleMermaid = 3;
var brotherBear = 5;
var hercules = 1;
var price = (littleMermaid * 3) + (brotherBear * 3) + (hercules * 3)

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. ' +
// 'Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for ' +
// 'Facebook, 6 hours for Google and 4 hours for Amazon.
var google = 400;
var amazon = 380;
var facebook = 350;
var paid = (facebook * 10) + (google * 6) + (amazon * 4)

// A student can be enrolled in a class only if the class is not full and the
// class schedule does not conflict with her current schedule.
var students = 20
var roomAvailable = students < 25;
var availableDays = ['Monday', 'Tuesday', 'Thursday', 'Friday',];
var checkSchedule = availableDays.includes('Friday')
var enrolled = checkSchedule && roomAvailable

// A product offer can be applied only if a person buys more than 2 items, and the offer has not
// expired.Premium members do not need to buy a specific amount of products.
var items = 5
var itemsForOffer = items > 2
var expirationDate = new Date ("2023-03-15")
var todayDate = new Date("2023-03-10")
var isNotExpired = todayDate < expirationDate
var offerApplied = itemsForOffer && isNotExpired
var premium = true
var premiumMemberOfferApplied = premium && isNotExpired

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
