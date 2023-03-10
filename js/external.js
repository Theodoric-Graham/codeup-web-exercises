'use strict';

// console.log('Hello from external JavaScript')

// Use the alert function to show a message that says 'Welcome to my Website!'.

// alert('Welcome to my Website!')

//Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.

// var colorChoice = prompt('What is your favorite color!')

// alert('Awesome ' + colorChoice + ' is my favorite color too!')
// alert(`Awesome, "${colorChoice}" is my 'favorite' color too!`)

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
// and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

// var littleMermaid = +prompt('The cost of each movie per day is $3. How many days did you rent Little Mermaid?') * 3;
// var brotherBear = +prompt('How many days did you rent Brother Bear') * 3;
// var hercules = +prompt('How many days did you rent Hercules') * 3;
// var amount = littleMermaid+brotherBear+hercules
// var price = alert('The total amount you have to pay is ' +amount+' 📼')
// var price = alert(`The total amount you have to pay is $${littleMermaid+brotherBear+hercules}📼`)

// console.log(typeof amount)

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. ' +
// 'Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week?
// var google = +prompt('How many hours have you worked at Google?') * 400;
// var amazon = +prompt('How many hours have you worked at Amazon?') * 380;
// var facebook = +prompt('How many hours have you worked at Facebook?') * 350;
// var totalPaid = facebook + amazon + google;
// alert(`You have made $${totalPaid} this week 🤑`)
// alert('You have made $' +totalPaid+ ' this week 🤑')
// console.log(typeof totalPaid)

// A student can be enrolled in a class only if the class is not full and the
// class schedule does not conflict with her current schedule.
// var students = prompt('How many students are in this class? 25 students per classroom.')
// var roomAvailable = students < 25;
// console.log(roomAvailable)
// var classDay = prompt('What day is the class?')
// var availableDays = ['monday', 'tuesday', 'thursday', 'friday'];
// var checkSchedule = availableDays.includes(classDay.toLowerCase())
// console.log(checkSchedule)
// var enrolled = checkSchedule && roomAvailable
// console.log(enrolled)
// alert('📚Enrollment status: ' +enrolled)

// A product offer can be applied only if a person buys more than 2 items, and the offer has not
// expired. Premium members do not need to buy a specific amount of products.
var premium = confirm('Are you a premium member?')
var items = prompt('How many items are you buying')
var itemsForOffer = items > 2
var expirationDate = 15
var todayDate = prompt('What is today\'s date. Numbers only')
var isNotExpired = todayDate < expirationDate
var offerApplied = itemsForOffer && isNotExpired || premium && isNotExpired
alert('Offer Status: ' +offerApplied)

