import React  from 'react';
import {Link} from 'react-router-dom'
import { RiArrowLeftLine } from 'react-icons/ri';

import './RouteHeader.scss';

export default function RouterHeader({ categoryName, path }){
    return (
        <div className="route-header" data-testid="route-header">
            <Link to={path} className="back-button">
                <RiArrowLeftLine/>
            </Link>
                <span className="route-header__title">{categoryName}</span>
          
        </div>
    );
}


