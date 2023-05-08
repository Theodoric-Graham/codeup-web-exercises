// Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made.
const gitUsername = username => {
    fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': GIT_API}}).then(res => {
        console.log(res)
        return res.json()
    }).then(res => console.log(res[0].created_at))
}

gitUsername('jf0311')

// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
const wait = (num) => {
    const myPromise = new Promise((res) => {
        setTimeout(() => {
            res({
                // same as num: num,
                num,
                success: `You will see this in ${num / 1000} second${num > 1000 ? 's' : ''}`})
        }, num);
    });
    return myPromise
}

//  As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log message more dynamic.
wait(3000).then(res => console.log(res.success))


