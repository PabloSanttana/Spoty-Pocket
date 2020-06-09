import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'

import { Playlists } from '../containers';
import {config} from '../config/index'
import {Options} from '../modules/endpoints'
import {CategoriesPlayListDataRequest,CategoriesPlayListDataSucess} from '../store/models/Content/actions'
import {userLogout} from '../store/models/Auth/actions'


export default function PlaylistsRoute({path}) {
    const { auth, content } = useSelector(state => state);
    const {categoryId} = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
       getCategoryPlayLits()
        // eslint-disable-next-line
    },[categoryId])

    function getCategoryPlayLits(){
        dispatch( CategoriesPlayListDataRequest('loading') )
        fetch(`${config.spotify.webAPI}/browse/categories/${categoryId}/playlists`,{
            ...Options,
            headers:{
                'Authorization':`Bearer ${auth.accessToken}`
            }
        })
        .then(respnse => respnse.json())
        .then(respnse => dispatch(CategoriesPlayListDataSucess(respnse.playlists.items)))
        .catch(error => {
            alert('Error PlaylistsRoute')
        })
        .catch(error => dispatch(userLogout))
    }

    function getContentNameCategory(id){
        const { name } = content.categories.find(item => id === item.id)

        return name
    }

    return (
       <Playlists  
       path={path} 
       categoryId={categoryId}
       categoryName={ getContentNameCategory( categoryId ) }
       isLoading={content.status === 'loading'? true: false}
       path={path}
       data={content.playlists}
       />
    )
}
