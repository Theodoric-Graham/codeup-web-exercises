(function () {
    'use strict'

    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

    // Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
    const filteredArr = users.filter(user => {
            return user.languages.length >= 3
        }
    )

    // Use .map to create an array of strings where each element is a user's email address
    const mapArr = users.map(user => user.email)

    // Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

    const reduceYears = users.reduce((acc, user) =>
            acc + user.yearsOfExperience / users.length
        , 0)

    // Use .reduce to get the longest email from the list of users.
    const reduceEmailLength = users.reduce((acc, user) => {
        if (acc.length < user.email.length) {
            acc = user.email
        }
        return acc
    }, '')

    // Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
    const reduceNames = users.reduce((acc, user, i) =>
            `${acc} ${user.name}${i === users.length - 1 ? '.' : ','} `
        , 'Your instructors are:')

    // Use .reduce to get the unique list of languages from the list of users.
    const reduceLanguages = users.reduce((acc, user) => {
        console.log(user.languages)
        user.languages.forEach(el => {
            if (!acc.includes(el)) {
                acc += `${el} ,`
            }
        })
        return acc
    }, []);


    // console.log(filteredArr)
    // console.log(mapArr)
    // console.log(reduceYears)
    // console.log(reduceEmailLength)
    console.log(`${reduceNames}`)
    console.log(reduceLanguages)
})()