import React from "react"
import "./alert.css"


export const Alert = () => {
  return (

    <div>

      <header>
        <nav className="navbar navbar-view fixed-top navbar-alpha">
          <div className="container-fluid ">
            <img src="../img/logo-alerta.png" alt="Imagem" />
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
                  <i className="bi bi-person-circle"></i>

                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <a className="dropdown-item" href="#">Perfil</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">Logout</a>
                  </li>
                </ul>
              </div>

              {/* Botão de toggle para o offcanvas */}
              <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <i className="bi bi-person-circle"></i>
              </button>
            </div>

            {/* Offcanvas */}
            <div className="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>

              </div>
              <div className="offcanvas-body  offcanvas-body-alert">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/dashboard">Dashboard</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/listar">Listar</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/formulario">Formulario</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/visualizar">Visualizar</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/alerta">Alerta</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Perfil</a>
                    <ul class="dropdown-menu">
                      <li><a className="dropdown-item" href="/">Logout</a></li>
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
        <img src="../img/imagem-alerta.png" alt="Imagem Sobrepondo Linha Laranja" className="overlay-image" />
      </div>
      

      <div className="container alert-container" >
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
           {/* <!-- /* parte menu */}

           <div class="menu menuListar">

<ul className="menuCenter menuCenterListar">
    {/* <!-- 1 --> */}
    <a href="/dashboard" >
        <li className="Dashboard" >
            <span class="icon iconListar"><i className="bi bi-speedometer2"></i></span>
            <span class="text textListar">Dashboard</span>
        </li>
    </a>

    {/* <!-- 2 --> */}
    <a href="/listar">
        <li className="Listar">
            <span class="icon iconListar"><i className="bi bi-card-list"></i></span>
            <span class="text textListar">Listar</span>
        </li>
    </a>

    {/* <!-- 3 --> */}
    <a href="/formulario">
        <li className="Formulario">
            <span class="icon iconListar"><i className="bi bi-ui-checks-grid"></i></span>
            <span class="text textListar">Formulario</span>
        </li>
    </a>

    {/* <!-- 4 --> */}
    <a href="/visualizar">
        <li className="Visualizar">
            <span class="icon iconListar"><i className="bi bi-eye-fill"></i></span>
            <span class="text textListar">Visualizar</span>
        </li>
    </a>

    {/*  <!-- 5 --> */}
    <a href="#">
        <li className="Alerta">
            <span class="icon iconListar"><i className="bi bi-slash-circle"></i></span>
            <span class="text textListar">Alerta</span>
        </li>
    </a>

    <a href="/">
        <li className="logOut">
            <span class="icon iconListar"><i class="bi bi-x-circle"></i></span>
            <span class="text textListar">logOut</span>
        </li>
    </a>
</ul>
</div>
{/* /* fim menu */}
        </nav>
      </footer>

    </div>

  );
};
export default Alert