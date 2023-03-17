// Create a while loop that uses console.log() to create the output shown below.
//
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

// var i = 2
// while (i <= 65536) {
//     console.log(i)
//     i = i * 2
//
// }

// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;

do {
    var random = Math.floor(Math.random() * 5) + 1;
    console.log(`I have ${allCones} cones left to sell`)
    if (allCones > random) {
        console.log(`I sold ${random} cones...`)
        allCones -= random
    } else if (allCones < random) {
        console.log(`Cannot sell you ${random} cones I only have ${allCones}...`)
        console.log('Yay, I sold all the cones')
        break
    }

} while (allCones >= 0)

