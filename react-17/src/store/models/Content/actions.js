export const CategoriesDataSucess = (data) =>{
    return{
        type: 'CATEGORIES_DATA_SUCESS',
        payload: data
    }
}
export const CategoriesDataRequest = (data) =>{
    return{
        type: 'CATEGORIES_DATA_REQUEST',
        payload: data
    }
}
/// actions Categorias

export const CategoriesPlayListDataRequest = (data) =>{
    return{
        type: 'CATEGORIES_PLAY_LISTS_DATA_REQUEST',
        payload: data
    }
}
export const CategoriesPlayListDataSucess = (data) =>{
    return{
        type: 'CATEGORIES_PLAY_LISTS_DATA_SUCESS',
        payload: data
    }
}

/// actions Tracks
export const PlayListTracksDataRequest = (data) =>{
    return{
        type: 'PLAY_LISTS_TRACKS_DATA_REQUEST',
        payload: data
    }
}
export const PlayListTracksDataSucess = (data) =>{
    return{
        type: 'PLAY_LISTS_TRACKS_DATA_DATA_SUCESS',
        payload: data
    }
}
/// actions tracks
export const addTrackToPlay = (data) =>{
    return{
        type: 'ADD_TRACK_PLAY',
        payload: data
    }
}
export const removeTrackToPlayer = () =>{
    return{
        type: 'REMOVE_TRACK_PLAY',
    }
}