export const authSucess = (data) =>{
    return{
        type:'AUTH_SUCESS',
        payload: data
    }
}
export const userLogout = () =>{
    return{
        type: 'LOGOUT',
    }
}