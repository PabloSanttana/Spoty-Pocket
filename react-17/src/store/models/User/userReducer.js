const USER_INTIAL_STATE = {
    email: '',
    errorMessage: '',
    name: '',
    status: 'idle',
    thumb: '',
}

export default (state = USER_INTIAL_STATE , action) =>{
    const {type, payload} = action

    switch(type){
        case 'USER_DATA_SUCESS':
           return{
               ...state,
                ...payload
           }

        default:
            return state
    }
}