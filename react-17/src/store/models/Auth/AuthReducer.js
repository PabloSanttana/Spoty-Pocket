
const AUTH_INTIAL_STATE = {
    accessToken: '',
    tokenType: '',
    errorMessage: '',
    expirationTime: 0,
    expiresIn: 0,
    isLogged: false,
}

export default (state = AUTH_INTIAL_STATE, action ) =>{

    const {type , payload } = action

    switch(type){
        case 'AUTH_SUCESS':
            return{
                ...state,
                accessToken: payload.accessToken,
                tokenType: payload.tokenType,
                expirationTime: payload.expirationTime,
                expiresIn: payload.expiresIn,
                isLogged: true
            }
        default:
            return state
    }
}