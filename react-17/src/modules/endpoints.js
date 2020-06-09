import {config} from '../config'

const {spotify} = config

export const Options ={
    'Accept': 'application/json',
  'Content-Type': 'application/json',
  'method': 'GET',
}

export const Authorization = {
        url: `${spotify.authorizationURL}?client_id=${spotify.clientId}${(spotify.scopes ? '&scope=' + encodeURIComponent(spotify.scopes) : '')}&redirect_uri=${encodeURIComponent(spotify.redirectUrl)}&response_type=token&show_dialog=true`,
        options: {
          method: 'GET'
      }
}