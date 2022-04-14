import { login } from "./login"

export function register(username, email, password) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "username": username,
        "email": email,
        "password": password
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://138.68.118.234:8080/register", requestOptions)
        .then(response => JSON.stringify(response))
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    login(username, password)
}