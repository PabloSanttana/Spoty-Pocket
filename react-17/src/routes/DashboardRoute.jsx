import React,{ useEffect} from 'react'
import {Redirect, Switch, useRouteMatch} from 'react-router-dom'
import {useSelector, useDispatch,} from 'react-redux'


import {config} from '../config/index'
import {Options} from '../modules/endpoints'
import {UserDataSucess} from '../store/models/User/actions'
import {CategoriesDataSucess, CategoriesDataRequest} from '../store/models/Content/actions'
import {userLogout} from '../store/models/Auth/actions'
import {Dashboard, Topbar, PrivateRoute, Categories} from '../containers'
import {WelcomeBox} from '../components'
import PlaylistsRoute from './PlaylistsRoute'
import TracksRoute from './TracksRoute'

 
export default function DashboardRoute() {
   
    const auth = useSelector(state => state.auth)
    const user = useSelector(state => state.user)
    const content = useSelector(state => state.content)

    const dispatch = useDispatch()
    const { path, url } = useRouteMatch()

    useEffect(() =>{
        if(auth.isLogged){
            
            getUserData()
            getCategorias()
        }
        // eslint-disable-next-line
    },[auth.isLogged])
    function getUserData(){

        fetch(`${config.spotify.webAPI}/me`,{
            ...Options,
            headers:{
                'Authorization':`Bearer ${auth.accessToken}`
            }
        })
        .then(response => response.json())
        .then(response => {
            const data = {
                email : response.email,
                name : response.display_name,
                status : 'sucess',
                thumb: 'https://firebasestorage.googleapis.com/v0/b/reactjsapp-55e11.appspot.com/o/image%2FCuuiCjFNHoWXPwhUNhPz7sP9R4j2%2Fperfil.png?alt=media&token=63d3e4c6-7a67-4066-a954-c5b4262a80d8'
            }
           dispatch(UserDataSucess(data))
        })
        .catch(error =>{
            alert('Error ao buscarmos suas informações no Spotify')
            dispatch(userLogout())

        })
           

    }
    function getCategorias(){
        dispatch(CategoriesDataRequest('loading'))
        fetch(`${config.spotify.webAPI}/browse/categories?country=BR&locale=pt_BR`,{
            ...Options,
            headers:{
                'Authorization':`Bearer ${auth.accessToken}`
            }
        })
        .then(response => response.json())
        .then(response =>{
            dispatch(CategoriesDataSucess(response.categories.items))
            dispatch(CategoriesDataRequest('ok'))
        })
        .catch(error =>   dispatch(userLogout()))

    }



    if(auth.isLogged){
        return(
          <Dashboard>
              <Topbar name={user.name} image={user.thumb}/>

              <Switch>
                <PrivateRoute exact path={path} >
                    <WelcomeBox name={user.name} />
                    <Categories isLoading={ content.status === 'loading'? true: false}  url={url} data={content.categories}  />
                </PrivateRoute>

                <PrivateRoute exact path={`${path}/:categoryId`}>
                        <PlaylistsRoute path={path} />
                </PrivateRoute>

                <PrivateRoute exact path={`${path}/:categoryId/:playlistId`}>
                    <TracksRoute path={path}/>
                </PrivateRoute>


              </Switch>

          </Dashboard>
        )

    }else{
        return (
            <Redirect to='/'/>
        )

    }
   
   
}
