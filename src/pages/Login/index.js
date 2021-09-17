import React, { useState } from "react";
import { connect } from 'react-redux';
import { useHistory } from "react-router";
import Swal from 'sweetalert2';
import api from '../../Services/Api';
import './login.css';

function Login(props) {

    const history = useHistory();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [disable, setDisable] = useState('false');

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisable('true');

        try{
            
            const getUser = await api.get(`/login/?user=${user}`);
            if (getUser.data.length > 0 && getUser.data[0].password == password && password != ''){
                props.setLogin(user);
                history.push("/dashboard");
            }else {
                Swal.fire("Usuário e ou senha incorreto(s)");
            }

        }catch(error){

        }
        setDisable('false');
        setPassword('');

    }

    return (
        <div className="body-home">
            <div className="row">
                <div className="col-md-offset-5 col-md-4 text-center">
                    <h1 className='text-white'>Zap System</h1>
                    <div className="form-login"><br />
                        <h4>Login de Segurança</h4>
                        <br />
                        <form onSubmit={handleSubmit} >
                            <input 
                                type="text" 
                                className="form-control login input-sm chat-input" 
                                placeholder="usuário" 
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                                disable={'disable'}
                            />
                            <br /><br />
                            <input 
                                type="password"
                                className="form-control login input-sm chat-input" 
                                placeholder="senha" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disable={'disable'}
                                />
                            <br /><br />
                            <div className="wrapper">
                                <span className="group-btn">
                                    <button disable={'disable'} className="btn btn-danger btn-md">login <i className="fa fa-sign-in"></i></button>
                                </span>
                            </div>
                        </form>
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

const mapStateToProps = (state) => {
    return {
        user: state.login.user,
        isLogued: state.login.isLogued
    }
}

const mapDispatchToProps = (dispach) => ({
    setLogin: (user) => dispach({
        type: 'SET_LOGIN',
        payload: { user: user, isLogued: true}
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);