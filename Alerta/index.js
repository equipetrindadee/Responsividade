import React from "react";

export const Alerta = () => {

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="Bootstrap Logo" width="30"
              height="30" class="d-inline-block align-text-top me-2" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" href="/dashboard"><i class="fas fa-chart-line"></i> Dashboard</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/listar"><i class="fas fa-list"></i> Listar</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/formulario"><i class="fas fa-edit"></i> Formulário</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/visualizar"><i class="fas fa-eye"></i> Visualizar</a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-nav" href="/alerta"><i class="fas fa-exclamation-triangle"></i> Alerta</a>
              </li>
              <li class="nav-item">
                <a class="nav-link dropdown cor-link" data-bs-toggle="dropdown" aria-expanded="false" href=""><i class="fas fa-users"></i> Customers</a>
                <ul className="dropdown-menu">
                  <li><button type="button" className="btn btn">Login</button></li>
                  <li><button type="button" className="btn btn-primary"><a href="/">Sign-up</a></button></li>
                  <li><hr className="dropdown-divider"></hr></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <div className="container alert-container">
        <div className="row">
          <div className="col-md-12">
            <div className="main-alert">
              <div className="alert-box">
                <div className="container-fluid mt-5">
                  <div className="row">
                    <div className="col-6">
                      <h3 className="text-center alert-title">Alerta</h3>
                    </div>
                    <div className="col-6">
                      <a href="#" className="btn btn-primary btn-listar">Listar</a>
                    </div>
                  </div>
                </div>
                <div className="color-box alert1">
                  <p className="alert-text">A simble primary alert</p>
                </div>
              </div>
              <div class="alert-box">
                <div class="color-box alert2">
                  <p class="alert-text">A simple succes alert</p>
                </div>
              </div>
              <div class="alert-box">
                <div class="color-box alert3">
                  <p class="alert-text">A simple warning alert</p>
                </div>
              </div>
              <div class="alert-box">
                <div class="color-box alert4">
                  <p class="alert-text">A simple danger alert</p>
                </div>
              </div>
              <div class="alert-box">
                <div class="color-box alert5">
                  <p class="alert-text">A simple info alert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Alerta