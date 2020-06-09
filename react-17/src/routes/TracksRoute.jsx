import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {config} from '../config/index'
import {Options} from '../modules/endpoints'
import {PlayListTracksDataRequest,PlayListTracksDataSucess} from '../store/models/Content/actions'
import {userLogout} from '../store/models/Auth/actions'
import { Tracks } from '../containers';

export default function TracksRoute({path}) {
    const { playlistId } = useParams();
    const { auth, content } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() =>{
        getCategoryPlayLits()
    },[playlistId])

    function getCategoryPlayLits(){
            dispatch(PlayListTracksDataRequest('loading'))
        fetch(`${config.spotify.webAPI}/playlists/${playlistId}/tracks`,{
            ...Options,
            headers:{
                'Authorization':`Bearer ${auth.accessToken}`
            }
        })
        .then(respnse => respnse.json())
        .then(response => {
            console.log(response)
            dispatch( PlayListTracksDataSucess(response.items))
        })
        .catch(error => {
            alert('Error PlaylistsRoute')
            dispatch(userLogout())
        })
    }
    function getContentNamePlaylists(id){
        const { name } =  content.playlists.find(item => id === item.id)

        return name
    }

    return (
        <Tracks
            data={content.tracks}
            isLoading={content.status === 'loading'? true : false}
            path={path}
            categoryName={getContentNamePlaylists(playlistId)}
        />
    )
}
