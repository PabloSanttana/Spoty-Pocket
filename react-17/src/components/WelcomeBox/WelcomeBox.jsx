import React from 'react';

import './WelcomeBox.scss';

export default function  WelcomeBox({ name }){
  return(
      <div className="welcome-box" data-testid="welcome-box">
          <div className="container">
            <span>Bem vindo <strong>{name}</strong> </span>
          </div>
      </div>
  );
}
