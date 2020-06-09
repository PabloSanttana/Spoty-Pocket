import React,{useState,useEffect} from 'react';
import { BsPlayFill, BsVolumeUpFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';

import './Track.scss';
import {addTrackToPlay,removeTrackToPlayer} from '../../store/models/Content/actions'


export default function Track({ track }){
    const dispatch = useDispatch()
    const [play_Pause, setPlay_Pause] = useState(false)
    const {playingNowId} = useSelector(state => state.content)
    useEffect(() =>{
        if(playingNowId === track.id ) return

        setPlay_Pause(false)
    },[playingNowId,track.id ])

    function togglePlayPause(){
        if(play_Pause && playingNowId === track.id){
            setPlay_Pause(false)
            dispatch(removeTrackToPlayer())
            return
        }

        dispatch(addTrackToPlay(track))

        setPlay_Pause(!play_Pause)
        
    }

    return(
        <div
            className={`track ${play_Pause && 'is-playing'}`}
            data-testid="track"
            onClick={togglePlayPause}
           >
            <div className="track__play">
                <div className="track__play__wrapper">
                    <BsPlayFill className="track__play__icon" />
                    <BsVolumeUpFill className="track__play__icon" />
                </div>
            </div>

            <div className="track__info">
                <span className="track__name">{track.name}</span>

                <span className="track__artists">
                {track.artists.length && track.artists.map(({ name }) => name).join(', ')}
            </span>
            </div>
        </div>
    );

}