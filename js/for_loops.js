// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
// const showMultiplicationTable = function(num) {
//     for(let i = 1; i <= 10; i++) {
//         const total = num * i
//         console.log(`${num} x ${i} = ${total}`)
//     }
// }
//
// showMultiplicationTable(7)

// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.

//gets random number between min and max, max is exclusive and min is inclusive
function getRandomArbitrary(min, max) {
    // console.log(Math.floor(Math.random() * (max - min) + min))
    return Math.floor(Math.random() * (max - min) + min);
}

// getRandomArbitrary(20, 201)

// for (let i = 1; i <= 10; i++) {
//     const random = getRandomArbitrary(20, 201)
//     if (random % 2 === 0) {
//         console.log(random, i)
//         console.log(`${random} is even`)
//     } else {
//         console.log(random, i)
//         console.log(`${random} is odd`)
//     }
// }

// Create a for loop that uses console.log to create the output shown below.
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

// for (let i = 1; i < 10; i ++) {
//     var stringify = i.toString()
//     console.log(stringify.repeat(i));
// }

// Create a for loop that uses console.log to create the output shown below.
//
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

for(let i = 100; i >= 1; i-= 5) {
    console.log(i)
}