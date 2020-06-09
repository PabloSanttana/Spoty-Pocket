import React,{useEffect, useState} from 'react';
import { debounce } from 'lodash';

import './Authorize.scss';
import Loading from '../../components/Loading/Loading'
import BackMobile from '../../assets/images/app-intro-1.jpg';
import BackDesktop from '../../assets/images/app-intro-2.jpg';

export default function Authorize(){

  const sreenWidth = window.innerWidth
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

  return (
  <div className="callback" data-testid="callback" style={{backgroundImage:`url(${(mobileActive || sreenWidth <= 768 ) ? BackMobile: BackDesktop })`}} >
    <div>
      <Loading text='Aguarde, Autenticando...' />
    </div>

  </div>);
}


