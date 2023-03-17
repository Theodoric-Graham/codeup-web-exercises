// Prompt the user for an odd number between 1 and 50.
var numPrompt = prompt('Please enter an odd number between 1 and 50')

// Use a loop and a break statement to continue prompting the user if they enter invalid input.
for (var i = 1; i < 10; i++) {
    //if even
    if (numPrompt % 2 === 0) {
        numPrompt = prompt('Please enter an odd number between 1 and 50')
    } else {
        break;
    }
}

//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
for (var i = 1; i < 50; i++) {
    if (+numPrompt === i) {
        console.log('Yikes! Skipping number: ' + i)
        continue
    } else if (i % 2 !== 0) {
        console.log('Here is an odd number: ' + i)
    }
}
