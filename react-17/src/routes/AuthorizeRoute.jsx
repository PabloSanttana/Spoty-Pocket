import React,{useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom'
import {useDispatch} from 'react-redux'


import Authorize from '../containers/Authorize/Authorize'
import {authSucess} from '../store/models/Auth/actions'
import {removeTrackToPlayer} from '../store/models/Content/actions'

export default function AuthorizeRoute() {
    const dispatch = useDispatch()
    const [isRedirect, setIsRedirect] = useState(false)
    const [isAuthRedirect, setIsAuthRedirect] = useState(false)
    const isHash = window.location.hash

    function hashParams(hash){
        const query = hash.split('&')
        let params = []
        for (let index = 0; index < query.length; index++) {
                    params[index] = query[index].split('=')
        }
        console.log()  

        const data = {
            accessToken: params[0][1],
            tokenType:  params[1][1],
            expiresIn:  parseInt(params[2][1]),
            expirationTime: new Date().getTime() + parseInt(params[2][1]),
        }

        dispatch(authSucess(data))
        dispatch(removeTrackToPlayer())

      
    }
    useEffect(()=>{
        if(!isHash){
            alert('Error, tente novamente mais tarde.')
            return setIsAuthRedirect(true)
        }else{
            hashParams(isHash)
        }
        var temp;
        temp = setInterval(() => {
            setIsRedirect(true)
            clearInterval(temp)
        }, 3000);
      
    },[isHash,hashParams])

    if(isAuthRedirect){
        return (
            <Redirect to='/'/>
        )
    }else if(isRedirect){
        return (
            <Redirect to='/dashboard'/>
        )
    } 
    return (
        <div>
            <Authorize />
        </div>
    )
}
