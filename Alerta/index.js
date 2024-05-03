import React from "react";
import "./alerta.css";


export const Alerta = () => {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">
            <span className="alpha-text">Alpha</span>
          </span>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
          </div>
        </div>
      </nav>

      {/* Linha laranja abaixo da navbar */}
      <div className="orange-line">
        <h1 className="alert-title">Alertas</h1>
      </div>
      <img src="imagem-alerta.png" alt="Imagem Sobrepondo Linha Laranja" className="overlay-image" width={"200px"} />

      <div className="container alert-container">
        <div className="row">
          <div className="col-md-3">
            <div className="alert-box">
              <div className="color-box alert1"></div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="alert-box">
              <div className="color-box alert2"></div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="alert-box">
              <div className="color-box alert3"></div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="alert-box">
              <div className="color-box alert4"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="alert-box">
              <div className="color-box alert5"></div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="alert-box">
              <div className="color-box alert6"></div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="alert-box">
              <div className="color-box alert7"></div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="alert-box">
              <div className="color-box alert8"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="alert-box">
              <div className="color-box alert9"></div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="alert-box">
              <div className="color-box alert10"></div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="alert-box">
              <div className="color-box alert11"></div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="alert-box">
              <div className="color-box alert12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerta;
