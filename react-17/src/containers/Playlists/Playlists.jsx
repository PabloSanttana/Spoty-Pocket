import React  from 'react';

import './Playlists.scss';
import {Loading, RouteHeader} from '../../components'
import PlaylistItem from './PlaylistItem';

export default function Playlists({ data, categoryName, categoryId, isLoading, path }){
    return  (
        <div className="playlists" data-testid="playlists">
            <div className='container'>
                <RouteHeader categoryName={categoryName} path={path} />

            

                {isLoading ?
                    <Loading  text='Carregando...'/>
                    :
                    <div className="playlists__content">
                        {data && data.map(item =>(
                            <PlaylistItem 
                            key={item.id}
                            categoryId={categoryId}
                            description={item.description}
                            id={item.id}
                            image={item.images[0]}
                            name={item.name}
                            path={path}
                            />
                        ))}

                    </div>
                }
           
            </div>
        </div>
    );
}



