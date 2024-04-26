import React from "react";

export const Formulario = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="Bootstrap Logo"
                            width="30" height="30" className="d-inline-block align-text-top me-2" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="/dashboard"><i className="fas fa-chart-line"></i> Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/listar"><i className="fas fa-list"></i> Listar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link-nav" href="/formulario"><i className="fas fa-edit"></i> Formulário</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/visualizar"><i className="fas fa-eye"></i> Visualizar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/alerta"><i className="fas fa-exclamation-triangle"></i> Alerta</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link dropdown cor-link" data-bs-toggle="dropdown" aria-expanded="false" href=""><i className="fas fa-users"></i> Customers</a>
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

            <div className="container form-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-alert">

                            <div className="container mt-5">
                                <div className="row">
                                    <div className="col-md-6">
                                    <h3 className="title">Cadastrar</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="container mt-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-8">
                                        <form>
                                            <div className="row mb-3">
                                                <div className="col">
                                                    <label htmlFor="nome" className="form-label">Nome:</label>
                                                    <input type="text" className="form-control" id="nome"
                                                        placeholder="Digite seu nome" />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="cpf" className="form-label">CPF:</label>
                                                    <input type="text" className="form-control" id="cpf"
                                                        placeholder="Digite seu CPF" />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col">
                                                    <label htmlFor="cep" className="form-label">CEP:</label>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" id="cep"
                                                            placeholder="Digite seu CEP" />
                                                        <button className="btn btn-outline-secondary" type="button">Buscar</button>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="estado" className="form-label">Estado:</label>
                                                    <select className="form-select" id="estado">
                                                        <option value="">Selecione o estado</option>
                                                        {/* Aqui você pode adicionar os estados */}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col">
                                                    <label htmlFor="cidade" className="form-label">Cidade:</label>
                                                    <input type="text" className="form-control" id="cidade"
                                                        placeholder="Digite sua cidade" />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="endereco" className="form-label">Endereço:</label>
                                                    <input type="text" className="form-control" id="endereco"
                                                        placeholder="Digite seu endereço" />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col">
                                                    <label htmlFor="complemento" className="form-label">Complemento:</label>
                                                    <input type="text" className="form-control" id="complemento"
                                                        placeholder="Exemplo: número Apt." />
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="email" className="form-label">Email:</label>
                                                <input type="email" className="form-control" id="email"
                                                    placeholder="Digite seu email" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="senha" className="form-label">Senha:</label>
                                                <input type="password" className="form-control" id="senha"
                                                    placeholder="Digite sua senha" />
                                            </div>
                                            <button type="submit" className="btn btn-cadastrar d-block mx-auto">Cadastrar</button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formulario;
