// index.js
import React from "react";


export const MudarSenha = () => {
  return (
    <div className="container">
      <div className="left-panel">
        <img src="img/senha.png"/>
      </div>
      <div className="right-panel">
        <h1 className="title">trocar de senha</h1>
        <input type="email" placeholder="Digite seu email" className="email-input" />
        <button className="trocar-button">trocar</button>
      </div>
    </div>
  );
};

export default MudarSenha;
