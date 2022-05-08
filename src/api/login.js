export function login(username, password) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    console.log('In log in ' + username)
    console.log('In log in ' + password)


    var raw = JSON.stringify({
        "username": username,
        "password": password
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch("/login", requestOptions)
        .then((response) => response.text())
        .then(result => {
            console.log('Result ' + result)
            loggedInUser = JSON.parse(result)
            console.log('Parsed to ' + loggedInUser)
        })
        .catch(error => console.log('error', error));
}

export let loggedInUser = {}