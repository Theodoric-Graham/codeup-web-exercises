(function () {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        firstName: 'Theo',
        lastName: 'Graham',

        sayHello: function () {
            return `Hello from ${this.firstName} ${this.lastName}`
        }
    }
    // console.log(person.firstName)
    // console.log(person.lastName)
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // console.log(person.sayHello())


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    //display name, amount before discount, and amount after discount
    shoppers.forEach(shopper => {
        if (shopper.amount > 200) {
            var discountTotal = shopper.amount - shopper.amount * .12
            // console.log(`${shopper.name} spent ${shopper.amount} and pays ${discountTotal.toFixed(2)} after discount`)
        } else {
            // console.log(`${shopper.name} spent ${shopper.amount} and gets no discount`)
        }

    })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

        var books = [
            {
                title: "Charlotte's Web",
                author: {
                    firstName: 'Elwyn',
                    lastName: 'White'
                }
            },
            {
                title: 'Babe',
                author: {
                    firstName: 'Dick',
                    lastName: 'King-Smith'
                }
            },
            {
                title: 'To Kill A Mockingbird',
                author: {
                    firstName: 'Harper',
                    lastName: 'Lee'
                }
            },
            {
                title: '1984',
                author: {
                    firstName: 'George',
                    lastName: 'Orwell'
                }
            },
            {
                title: 'The Lightning Thief',
                author: {
                    firstName: 'Rick',
                    lastName: 'Riordan'
                }
            }
            ]

    // var books = [
    //         {
    //             title: "Charlotte's Web",
    //             author: 'Elwyn White'
    //         },
    //         {
    //             title: 'Babe',
    //             author: 'Dick Smith'
    //         },
    //         {
    //             title: 'To Kill A Mockingbird',
    //             author: 'Harper Lee'
    //         },
    //         {
    //             title: '1984',
    //             author: 'George Orwell'
    //         },
    //         {
    //             title: 'The Lightning Thief',
    //             author: 'Rick Riordan'
    //         }
    //     ]

    // console.log(books[0].title)
    // console.log(books[0].author.firstName)
    // console.log(books[0].author.lastName)

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    //the book number, the index of the book
    //the book title
    // author full name first + last

    books.forEach(function (book, i) {
        console.log('Book # ' + (i +1))
        console.log('Title: ' + book.title)
        var firstName = book.author.firstName
        var lastName = book.author.lastName
        console.log('Author: ' + firstName + ' '  +lastName)
        console.log('---')
    })

    //the book number, title, and full name
    // books.forEach((book, i) => {
    //     console.log(`Book # ${i + 1}`)
    //     console.log(`Title: ${book.title}`)
    //     console.log(`Author: ${book.author.firstName} ${book.author.lastName}`)
    //     console.log('---')
    // })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    // var createBook = (title, author) => {
    //     var firstName = author.split(' ')[0];
    //     var lastName = author.split(' ')[1];
        // console.log(firstName, lastName)
    //     return {
    //         title: title,
    //         author: {
    //             firstName: firstName,
    //             lastName: lastName
    //         }
    //     }
    // }
    //
    // books.forEach(book => {
    //     console.log(createBook(book.title, book.author));
    // })
    //
    // var showBookInfo = (obj, i) => {
    //     // console.log('Book #' + (i + 1))
    //     console.log(`Book # ${i + 1}`)
    //     console.log(`Title: ${obj.title}`)
    //     console.log(`Author: ${obj.author} `)
    //     console.log('---')
    //
    // }
    //
    // books.forEach((book, i) => {
    //     showBookInfo(book, i)
    // })



})();

