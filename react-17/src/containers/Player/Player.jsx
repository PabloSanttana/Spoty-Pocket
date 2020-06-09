import React, { useEffect, useState , useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';

import './Player.scss';
import {removeTrackToPlayer} from '../../store/models/Content/actions'

export default function Player() {
     const dispatch = useDispatch()
    const playingNowTrack = useSelector(state => state.content.playingNowTrack);
    const audioRef = useRef(null)
    const [music, setMusic] = useState(null)
    const [isplaying, setIsplaying] = useState(false)
    const [playProgress,setPlayProgress] = useState(0)

    useEffect(() => {
        if (!playingNowTrack) {
            setMusic(false)
            return
        }

        setMusic(playingNowTrack)
        setIsplaying(true)
    }, [playingNowTrack])

    function handleONEndMusic(){
        togglePlayPause()
        dispatch(removeTrackToPlayer())
        

    }
    function handleMusicProgesss(){
        const audio =  audioRef.current
        const progress = Math.floor((audio.currentTime / audio.duration) * 100) + '%';
        setPlayProgress(progress)
    }

    function togglePlayPause(){
        if(isplaying){
            audioRef.current.pause()
        }else{
            audioRef.current.play()
        }
        
        setIsplaying(!isplaying)
    }

    return (
        <div data-testid="player" className={`player ${music ? 'is-playing' : ''}`} >

            {music &&
                <div className="player__wrapper">
                    <div className="player__progress-bar">
                        <div
                            className="player__progress-bar__stroke"
                            style={{ width: `${playProgress}` }}
                        />
                    </div>

                    <div className="container">
                        <figure
                            className="player__album-cover"
                            style={{ backgroundImage: `url(${music.album?.images[1]?.url || ''})` }}
                        />


                        <div className="player__status">
                            <div className="player__artist">
                                <span className="player__music">
                                    {music.name}
                                </span>

                                <span className="player__artists">
                                    {music.artists && music.artists.map(({ name }) => name).join(', ')}
                                </span>

                                <div className={`player__status__current ${isplaying ? 'is-playing' : ''}`}>
                                    <span>Pausado</span>
                                    <span>Reproduzindo</span>
                                </div>
                            </div>
                        </div>

                        <div
                            className="player__controls"
                        onClick={togglePlayPause}
                        >
                            <div className={`player__control ${isplaying ? 'is-paused' : ''}`}>
                                {!isplaying
                                    ? (<BsPlayFill />)
                                    : (<BsPauseFill />)
                                }
                            </div>
                        </div>
                    </div>
                    <audio 
                        ref={audioRef}
                        autoPlay preload='metadata' 
                        onEnded={handleONEndMusic}
                        onTimeUpdate={handleMusicProgesss}
                        src={music.preview_url} 
                    />
                </div>

            }


        </div>
    )
}

