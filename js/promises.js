
const gitUsername = username => {
    fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': GIT_API}}).then(res => {
        console.log(res)
        return res.json()
    }).then(res => console.log(res[0].created_at))
}

gitUsername('Theodoric-Graham')

const wait = (num) => {
    const myPromise = new Promise((res) => {
        setTimeout(() => {
            res({num})
        }, num );
    });
    return myPromise
}

wait(9000).then(res => console.log(`You will see this in ${res.num / 1000} second${res.num > 1000 ? 's' : ''}`))


