import React from "react";
import "../Visualizar/view.css"

export const Visualizar = () => {

    return (
        <body>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        Alpha
                    </a>
                    <i class="bi bi-person-circle"></i>
                </div>
            </nav>
            <div className="content">
                <div className="info-topo">
                <h2>Users</h2>
                <img src="img/img_view.svg" />
x                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-end">
                        <li class="page-item disabled">
                            <a class="page-link"><i class="bi bi-arrow-left"></i></a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#"><i class="bi bi-arrow-right"></i></a>
                        </li>
                    </ul>
                </nav>
                </div>

                <div className="userList">

                </div>
               
            </div>
        </body>
    )
}

export default Visualizar