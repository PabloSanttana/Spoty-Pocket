const CONTENT_INTIAL_STATE = {
    categories: [],
    playlists: [],
    tracks: [],
    playingNowId: null,
    playingNowTrack: null,
    playerHeight: 0,
    status: 'idle',
    errorMessage: '',
}

export default (state = CONTENT_INTIAL_STATE , action)=>{
    const { type, payload } = action
    switch(type){
        case 'CATEGORIES_DATA_SUCESS':
            return{
                ...state,
                categories: payload
            }
        case 'CATEGORIES_DATA_REQUEST':
            return{
                ...state,
                status: payload
            }

        case 'CATEGORIES_PLAY_LISTS_DATA_REQUEST':
            return{
                ...state,
                playlists: [],
                status: payload
            }
        case 'CATEGORIES_PLAY_LISTS_DATA_SUCESS':
            return{
                ...state,
                playlists:payload,
                status: 'sucesss'
            }

        case 'PLAY_LISTS_TRACKS_DATA_REQUEST':
            return{
                ...state,
                tracks: [],
                status: payload
            }
        case 'PLAY_LISTS_TRACKS_DATA_DATA_SUCESS':
            return{
                ...state,
                tracks: payload,
                status: 'sucesss'
            }

        case 'REMOVE_TRACK_PLAY':
            return{
                ...state,
                playingNowId: null,
                playingNowTrack: null,
                playerHeight: 0,
            }
        case 'ADD_TRACK_PLAY':
            return{
                ...state,
                playingNowId: payload.id,
                playingNowTrack: payload,
            }
        default:
            return state
    }
}