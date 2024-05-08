import React, { useState, useEffect } from "react";

export const Listar = () => {


    return (
        <div>
            {/* <!-- Navbar Config --> */}
            <nav className="navbar bg-dark border-bottom border-body navbarTopo" data-bs-theme="dark">
                <div className="container-fluid navbarFluid">

                    {/* <!-- Navbar Celular --> */}
                    <img className="d-block d-sm-none imgLogo" src="/img/logoAlpha.svg" alt="LogoAlpha" />

                    <button className="navbar-toggler d-block d-sm-none menuResponsi" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
                        aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="nav justify-content-end list menuCenter menuLinha">

                                {/* <!-- 1 --> */}
                                <a href="" >
                                    <li className="Dashboard dashboardCell" >
                                        <span class="icon"><i className="bi bi-speedometer2"></i></span>
                                        <span class="text">Dashboard</span>
                                    </li>
                                </a>

                                {/* <!-- 2 --> */}
                                <a href="">
                                    <li className="Listar listarCell">
                                        <span class="icon"><i className="bi bi-card-list"></i></span>
                                        <span class="text">Listar</span>
                                    </li>
                                </a>

                                {/* <!-- 3 --> */}
                                <a href="">
                                    <li className="Formulario formularioCell">
                                        <span class="icon"><i className="bi bi-ui-checks-grid"></i></span>
                                        <span class="text">Formulario</span>
                                    </li>
                                </a>

                                {/* <!-- 4 --> */}
                                <a href="">
                                    <li className="Visualizar visualizarCell">
                                        <span class="icon"><i className="bi bi-eye-fill"></i></span>
                                        <span class="text">Visualizar</span>
                                    </li>
                                </a>

                                {/*  <!-- 5 --> */}
                                <a href="">
                                    <li className="Alerta alertaCell">
                                        <span class="icon"><i className="bi bi-slash-circle"></i></span>
                                        <span class="text">Alerta</span>
                                    </li>
                                </a>

                                <a href="">
                                    <li className="logOut logOutCell">
                                        <span class="icon"><i class="bi bi-x-circle"></i></span>
                                        <span class="text">logOut</span>
                                    </li>
                                </a>

                            </ul>
                        </div>
                    </div>

                    {/* <!-- Fim Navbar Celular --> */}

                    {/* <!-- Navbar Computador --> */}
                    <div className="headerComputador d-none d-sm-table-cell">
                        <img className="logoAlpha" src="/img/logoAlpha.svg" alt="LogoAlpha" />
                    </div>
                    {/* <!-- Fim Navbar Computador --> */}

                </div>
            </nav>
            {/* <!-- Fim Navbar Config --> */}

            <div className="procurar">
                <div className="pesquisar">
                    <i className="bi bi-search logoPesquisar"></i>
                    <input className="form-control me-2 pesquisarInput" type="search" placeholder="Pesquisar"
                        aria-label="Search" />
                    <select className="form-select opcoes">
                        <option selected>Opções</option>
                        <option>Nome</option>
                        <option>Estado</option>
                        <option>Email</option>
                        <option>CPF</option>
                    </select>
                </div>

                <div className="filtrar">
                    <div class="dropdown form-filtrar">
                        <button class="btn btn-secondary dropdown-toggle dropdown-Filtrar" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Filtro
                        </button>
                        <ul class="dropdown-menu itensFiltrar">
                            <li>
                                <select className="form-select opcoesAZ">
                                    <option selected>A-Z</option>
                                    <option>Z-A</option>
                                </select>
                            </li>
                            <li>
                                <select className="form-select opcoesAZ">
                                    <option selected>Nome</option>
                                    <option>Estado</option>
                                    <option>Email</option>
                                    <option>CPF</option>
                                </select>
                            </li>
                            <li>
                                <select className="form-select opcoesAZ">
                                    <option selected>Regiões</option>
                                    <option>Norte</option>
                                    <option>Nordeste</option>
                                    <option>Centro-Oeste</option>
                                    <option>Sudeste</option>
                                    <option>Sul</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="tabela">
                <div className="conteudoTable">
                    <div>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">CPF</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col" className="d-none d-sm-table-cell">Email</th>
                                    <th scope="col">Visualizar</th>
                                    <th scope="col" className="d-none d-sm-table-cell">Editar</th>
                                    <th scope="col" className="d-none d-sm-table-cell">Deletar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>João</td>
                                    <td>123.456.789-00</td>
                                    <td>SP</td>
                                    <td className="d-none d-sm-table-cell">joao@example.com</td>

                                    <td><button type="button" className="btn btn-info btn-view" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"><i className="bi bi-eye"></i></button></td>

                                    <td className="d-none d-sm-table-cell"><button type="button" className="btn btn-info btn-edit"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal2"><i
                                            className="bi bi-pencil-fill"></i></button></td>

                                    <td className="d-none d-sm-table-cell"><button className="btn btn-danger btn-delete"><i
                                        className="bi bi-trash-fill"></i></button></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Maria</td>
                                    <td>987.654.321-00</td>
                                    <td>RJ</td>
                                    <td className="d-none d-sm-table-cell">maria@example.com</td>
                                    <td><button type="button" className="btn btn-info btn-view" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"><i className="bi bi-eye"></i></button></td>

                                    <td className="d-none d-sm-table-cell"><button type="button" className="btn btn-info btn-edit"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal2"><i
                                            className="bi bi-pencil-fill"></i></button></td>

                                    <td className="d-none d-sm-table-cell"><button className="btn btn-danger btn-delete"><i
                                        className="bi bi-trash-fill"></i></button></td>
                                </tr>
                                {/* <!-- Adicione mais linhas conforme necessário --> */}
                            </tbody>
                        </table>
                    </div>
                </div>

                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item1"><a className="page-link" href="#"><i class="bi bi-arrow-left"></i></a></li>
                        <li className="page-item2"><a className="page-link" href="#"><i class="bi bi-arrow-right"></i></a></li>
                    </ul>
                </nav>

            </div>


            <div class="footer-dashboard d-none d-sm-table-cell">

                {/* <!-- /* parte menu */}

                <div class="menu">

                    <ul className="menuCenter">
                        {/* <!-- 1 --> */}
                        <a href="" >
                            <li className="Dashboard" >
                                <span class="icon"><i className="bi bi-speedometer2"></i></span>
                                <span class="text">Dashboard</span>
                            </li>
                        </a>

                        {/* <!-- 2 --> */}
                        <a href="">
                            <li className="Listar">
                                <span class="icon"><i className="bi bi-card-list"></i></span>
                                <span class="text">Listar</span>
                            </li>
                        </a>

                        {/* <!-- 3 --> */}
                        <a href="">
                            <li className="Formulario">
                                <span class="icon"><i className="bi bi-ui-checks-grid"></i></span>
                                <span class="text">Formulario</span>
                            </li>
                        </a>

                        {/* <!-- 4 --> */}
                        <a href="">
                            <li className="Visualizar">
                                <span class="icon"><i className="bi bi-eye-fill"></i></span>
                                <span class="text">Visualizar</span>
                            </li>
                        </a>

                        {/*  <!-- 5 --> */}
                        <a href="">
                            <li className="Alerta">
                                <span class="icon"><i className="bi bi-slash-circle"></i></span>
                                <span class="text">Alerta</span>
                            </li>
                        </a>

                        <a href="">
                            <li className="logOut">
                                <span class="icon"><i class="bi bi-x-circle"></i></span>
                                <span class="text">logOut</span>
                            </li>
                        </a>
                    </ul>
                </div>
                {/* /* fim menu */}
            </div>



            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content ">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Detalhes do Usuário</h1>
                            <span className="custom-close" data-bs-dismiss="modal">&times;</span>
                        </div>
                        <div className="modal-body modal-table">
                            {/* <!-- Conteúdo do modal --> */}
                            <div className="table-responsive">
                                <table className="table table_center">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Nome</th>
                                            <th scope="col">CPF</th>
                                            <th scope="col">Estado</th>
                                            <th scope="col">CEP</th>
                                            <th scope="col">Cidade</th>
                                            <th scope="col">Endereço</th>
                                            <th scope="col">Complemento</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Senha</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>João</td>
                                            <td className="cpfTable">123.456.789-00</td>
                                            <td>SP</td>
                                            <td>12345-678</td>
                                            <td>São Paulo</td>
                                            <td>Rua A</td>
                                            <td>Apto 101</td>
                                            <td>joao@example.com</td>
                                            <td>senha123</td>
                                        </tr>
                                        {/* <!-- Adicione mais linhas conforme necessário --> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="modal-footer d-block d-sm-none">
                            <button type="button" className="btn btn-info btn-edit" data-bs-toggle="modal" data-bs-target="#exampleModal2"><i className="bi bi-pencil-fill"></i></button>
                            <button className="btn btn-danger btn-delete"><i className="bi bi-trash-fill"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Editar Usuário</h1>
                            <span className="custom-close" data-bs-dismiss="modal">&times;</span>
                        </div>
                        <div className="modal-body modal-editar">
                            {/* <!-- Formulário de edição do usuário --> */}
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col">
                                        <form className="formFulLISTAR">
                                            <div className="form-floating mb-3">
                                                <h1 className="textoID">ID: 1</h1>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="edit-nome" />
                                                <label for="edit-nome">Nome</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input type="email" className="form-control" id="edit-email" />
                                                <label for="edit-email">Email</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="edit-cpf" />
                                                <label for="edit-cpf">CPF</label>
                                            </div>
                                            <div className="row">
                                                <div className="col colCep">
                                                    <div className="form-floating formCep mb-3">
                                                        <input type="text" className="form-control" id="edit-cep" />
                                                        <label for="edit-cep">CEP</label>
                                                    </div>
                                                </div>
                                                <div className="col colState">
                                                    <div className="form-floating formState mb-3">
                                                        <input type="text" className="form-control" id="edit-estado" />
                                                        <label for="edit-estado">Estado</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="edit-cidade" />
                                                <label for="edit-cidade">Cidade</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="edit-endereco" />
                                                <label for="edit-endereco">Rua</label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="imageEdit d-none d-sm-table-cell">
                                <img className="imgEdit" src="/img/Img_Editar.svg" alt="imgEditar" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary btn-save">Salvar Alterações</button>
                        </div>
                    </div>
                </div>
            </div>




        </div>

    );



}

export default Listar;