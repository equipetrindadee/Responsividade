import React from "react"
import '../Dashboard/dashboard.css'
export const Dashboard = () => {
    return (
        <body>
            <header>
            <nav class="navbar navbarDashboard">
                <div class="container-sm">

                    <div class="parent-menu">
                        <div class="div1-menu"> <h1 className="logoDashboard">Alpha</h1></div>
                        <div class="div2-menu">  <button class="btn
                    perfil-btn-mobile" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> <i className="bi bi-person-circle"></i></button>
                        </div>
                    </div>




                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">

                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/dashboard">
                                        Dashboard
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/listar">
                                        Listar
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/formulario">
                                        Formulario
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/visualizar">
                                        Visualizar
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/alerta">
                                        Alerta
                                    </a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Perfil
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="/">Logout</a></li>
                                        <li><a class="dropdown-item" href="#">Meu perfil</a></li>

                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button className="btn perfil-btn perfil-btnDash" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-person-circle perfil"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Perfil</a></li>
                            <li><a class="dropdown-item" href="#">Cadastrar</a></li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-user"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </header>
            <div className="container-dashboard">
                <div className="info-dashboard">

                    <div className="card usuario">
                        <i class="bi bi-people-fill"></i>
                        <h6>397</h6>
                        <p class="card-text">Usuários</p>
                    </div>
                    <div className="card entregas">
                        <i class="bi bi-floppy"></i>
                        <h6>43</h6>
                        <p class="card-text">Entregas</p>
                    </div>
                    <div className="card completas">
                        <i class="bi bi-check-circle"></i>
                        <h6>12</h6>
                        <p class="card-text">Completas</p>
                    </div>
                    <div className="card alerta">
                        <i class="bi bi-exclamation-triangle-fill"></i>
                        <h6>1</h6>
                        <p class="card-text">Alerta</p>
                    </div>
                </div>
                <div className="parent">
                    <img class="moca-lapis div1" src="./img/moca.png" alt="icone-perfil" />
                    <div className="footer-Dashboard">
                        <div class="menu menuListar div2">

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
                                <a href="/alerta">
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
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Dashboard