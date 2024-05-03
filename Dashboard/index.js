import React from "react"

export const Dashboard = () => {
    return (
        <div>
            {/* NavBar */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <img src="../img/logo.png" alt="" />
                
                <img className="perfil" src="../img/iconeperfil" alt="icone-perfil" />
           
            </nav>
            {/* Corpo */}

            <div className="content">
                <div className="info-dashboard"> 
                    <div className="card usuarios">
                        <div className="card-body usuarios">
                            <i className='bi bi-person-fill'></i>
                            <h6>397</h6>
                            <p className="card-text">Usuários</p>
                        </div>
                    </div>

                    <div className="card entregas">
                        <div className="card-body entregas" id="card_user">
                            <i className='bi bi-person-fill'></i>
                            <h6>43</h6>
                            <p className="card-text">Entregas</p>
                        </div>
                    </div>
                    <div className="card completas">
                        <div className="card-body completas" id="card_user">
                            <i className='bi bi-person-fill'></i>
                            <h6>12</h6>
                            <p className="card-text">Completas</p>
                        </div>
                    </div>
                    <div className="card alertas">
                        <div className="card-body alertas" id="card_user">
                            <i className='bi bi-person-fill'></i>
                            <h6>1</h6>
                            <p className="card-text">Alerta</p>
                        </div>
                    </div>
                </div>
                {/* footer */}
                <div className="footer-dashboard">
                    <img className="moca-lapis" src="../img/moca.png" alt="" />

            {/* parte menu */}
                
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/dashboard"><i className="bi bi-speedometer2"></i></a>
                                <p>Dashboard</p>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/listar"><i className="bi bi-card-list"></i></a>
                                <p>Listar</p>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/formulario"><i className="bi bi-ui-checks-grid"></i></a>
                                <p>Formulário</p>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/visualizar"><i className="bi bi-eye"></i></a>
                                <p>Visualizar</p>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/alerta"><i className="bi bi-exclamation-square"></i></a>
                                <p>Alerta</p>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="bi bi-person-circle"></i></a>
                                <p>Custorms</p>
                            </li>
                        </ul>
                    </div>
                    {/* fim menu */}
                    </div> 
                    {/* fim do footer */}
            </div>
        </div>
    )
}

export default Dashboard