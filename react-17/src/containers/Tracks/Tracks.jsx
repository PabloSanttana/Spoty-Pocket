import React  from 'react';

import './Tracks.scss';
import { Loading, RouteHeader } from '../../components';
import Track from './Track';

export default function  Tracks({ categoryName, data, isLoading, path }){
    return(
        <div className="tracks" data-testid="tracks">
            <div className="container">
                <RouteHeader
                    categoryName={categoryName}
                    path={path}
                />
                {isLoading?
                    <Loading text="Carregando..."/>
                    :
                    <div  className="tracks__content">
                        {data && data.map(({track}, index)=>(
                            <Track 
                                key={`${index}-${track.id}`} 
                                track={track}
                            />
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}



