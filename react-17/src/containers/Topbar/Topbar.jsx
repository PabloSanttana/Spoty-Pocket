import React from 'react';
import {Link} from 'react-router-dom'

import './Topbar.scss';
import Logo from '../../components/Logo/Logo'

export default function Topbar({ name, image}){
    return(
        <header className="topbar" data-testid="topbar" >
            <div className='container'>

                <Link to='/'>
                    <Logo/>
                </Link>

                <div  className="user">
                    <span className="user__name">{name}</span>
                    <div  className="user__thumb">
                        <img src={image} alt={`profile ${name}`}/>
                    </div>
                </div>

            </div>
        </header>
    )
       
    
}
