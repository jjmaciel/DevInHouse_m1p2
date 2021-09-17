const initialState = {
    user: '',
    isLogued: false
}

const Login = (state = initialState, action) => {

    switch(action.type) {
        case 'SET_LOGIN':
            return { ...state, user: action.payload.user, isLogued: action.payload.isLogued };
            break;
    }

    return state;
}

export default Login;