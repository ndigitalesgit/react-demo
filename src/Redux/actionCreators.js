
const addUser = user => {

    return {
        type: 'ADD_USER',
        user
    }
}

const removeUser = user => {

    return {
        type: 'REMOVE_USER',
        user
    }
}

export { addUser, removeUser }