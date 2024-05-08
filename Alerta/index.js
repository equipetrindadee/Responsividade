import React from "react";
import "./alerta.css";


export const Alerta = () => {
  return (
    <div>

      <header>
        <nav className="navbar navbar-view fixed-top navbar-alpha">
          <div className="container-fluid ">
            <img src="logo.png" alt="Imagem" />
            <a className="navbar-brand" href="#">Alpha</a>
            <div className="d-lg-flex align-items-center">
              {/* Botão de dropdown */}
              <div className="dropdown d-none d-lg-block">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img  src="perfil.png" alt="User Icon"  />

                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Perfil
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>

              {/* Botão de toggle para o offcanvas */}
              <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <img  src="perfil.png" alt="User Icon"/>
              </button>
            </div>

            {/* Offcanvas */}
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Deshboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Alerta
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Visualizar
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Listar
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Cadastrar
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Perfil
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Logout</a></li>
                      <li><a class="dropdown-item" href="#">Meu perfil</a></li>

                    </ul>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Linha laranja abaixo da navbar */}
      <div className="orange-line">
        <h1 className="alert-title">Alertas</h1>
      </div>
      <img src="imagem-alerta.png" alt="Imagem Sobrepondo Linha Laranja" className="overlay-image" />

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

      <footer className="fixed-bottom">

        <nav className="navbar navbar-expand-md bottom-navbar">
          <button className="navbar-toggler close-btn" type="button" data-toggle="collapse" data-target="#bottomNavbar">
            <span>&times;</span>
          </button>
          <div className="collapse navbar-collapse" id="bottomNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="circle-img">
                  <a href="../dashboard/index.js"><img src="material-symbols_dashboard-outline.png" alt="Imagem" /></a>
                </div>
              </li>
              <li className="nav-item">
                <div className="circle-img">
                  <a href="../dashboard/index.js"><img src="!.png" alt="Imagem" /></a>
                </div>
              </li>
              <li className="nav-item">
                <div className="circle-img">
                  <a href="../dashboard/index.js"><img src="vizu.png" alt="Imagem" /></a>
                </div>
              </li>
              <li className="nav-item">
                <div className="circle-img">
                  <a href="../dashboard/index.js"><img src="material-symbols_list.png" alt="Imagem" /></a>
                </div>
              </li>
              <li className="nav-item">
                <div className="circle-img">
                  <a href="../dashboard/index.js"><img src="caneta.png" alt="Imagem" /></a>
                </div>
              </li>

              <a className="button-close"><p>X</p></a>

            </ul>
          </div>
        </nav>
      </footer>

    </div>


  );
};

export default Alerta;
