import React from "react";
import './home.css';

function Home() {

    return (
        <div className="body-home">
            <div className="row">
                <div className="col-md-offset-5 col-md-4 text-center">
                    <h1 className='text-white'>Zap System</h1>
                    <div className="form-login"><br />
                        <h4>Login de Segurança</h4>
                        <br />
                        <input type="text" id="userName" className="form-control input-sm chat-input" placeholder="usuário" />
                        <br /><br />
                        <input type="text" id="userPassword" className="form-control input-sm chat-input" placeholder="senha" />
                        <br /><br />
                        <div className="wrapper">
                            <span className="group-btn">
                                <a href="#" className="btn btn-danger btn-md">login <i className="fa fa-sign-in"></i></a>
                            </span>
                        </div>
                    </div >
                </div >
            </div >
            <br /><br /><br />

            <div className="footer text-white text-center">
                <p>Projeto Final do Módulo I. DevInHouse</p>
            </div>

        </div >
    )
};

export default Home;