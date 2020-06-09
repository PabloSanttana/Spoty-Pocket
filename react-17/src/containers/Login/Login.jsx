import React,{useEffect, useState} from 'react';
import Ink from 'react-ink';
import { debounce } from 'lodash';

import {Authorization} from '../../modules/endpoints'
import './Login.scss';
import Logo from '../../components/Logo/Logo'
import BackMobile from '../../assets/images/app-intro-1.jpg';
import BackDesktop from '../../assets/images/app-intro-2.jpg';

export default function Login() {
    const [mobileActive, setMobileActive] = useState(false)

    function onResizeHandler (e) {
        const width  = e.target.innerWidth
        //console.log('Width', width)
        width <= 768 ? setMobileActive(true) : setMobileActive(false)

        return
    }

    useEffect(()=>{
        window.addEventListener('resize', debounce(onResizeHandler, 250));

        return () => {
            window.removeEventListener('resize',  debounce(onResizeHandler));
        }
    },[])

    //tamanho da tela 
    const sreenWidth = window.innerWidth
  

    return(
      <main className='login' data-testid='login' style={{backgroundImage:`url(${(mobileActive || sreenWidth <= 768 ) ? BackMobile: BackDesktop })`}}>
          <div className='container'>
              <Logo />
              <h2 className='login__microcopy'>Não toca a música inteira.</h2>
            <a className='login__auth-button' href={Authorization.url}>
                Login com Spotify
               <Ink/>
            </a>
          </div>
      </main>
    )
}




