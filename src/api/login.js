export function login(username, password) {
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

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

    fetch("http://138.68.118.234:8080/login", requestOptions)
        .then(response => JSON.stringify(response))
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}