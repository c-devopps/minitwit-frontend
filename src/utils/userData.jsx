let oskarFollows = [
    'Anton'
]

let UserData = {
    username: '',
    email: '',
    avatar: '',
    follows: [] 
}

function getUserData() {
    return UserData
}

function setUserData(object) {
    UserData = {
        username : object.username,
        email: object.email,
        avatar: object.avatar,
        follows: object.follows
    }
}

export { getUserData, setUserData }