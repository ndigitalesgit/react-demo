
import { createStore } from 'redux'

const initialState = {
    appName: 'React Demo',
    users: [
        { id: 1, names: 'Carlos Aguinaga', email: 'andres.aguinaga@gmail.com'}
    ]
}

const reducer = (state, action) => {
    
    if (action.type === 'ADD_USER') {

        return {
            ...state,
            users: state.users.concat(action.user)
        }
    } else if (action.type === 'REMOVE_USER') {

        return {
            ...state,
            users: state.users.filter(user => user.id !== action.user.id)
        }
    }

    return state
}

export default createStore(reducer, initialState)