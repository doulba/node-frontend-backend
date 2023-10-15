import * as FaIcons from 'react-icons/fa';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import { Tilt } from "react-tilt";
import swal from 'sweetalert';
//import Validation from '../../hooks/validationLogin';


async function loginUser(credentials) {
    return fetch('http://localhost:3500/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

function LoginPage() {

    const [email, setemail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();
    const [errors, setErrors] = useState({})

    // const handleInput = (event) => {
    //     setValues(prev => ({ ...prev, [event.target.nom]: [event.target.value] }))
    // }


    const handleSubmit = async event => {
        event.preventDefault();
        const response = await loginUser({
            email,
            password
        });
        console.log(email, password);
        if ('token' in response) {
            swal("Success", response.message, "success", {
                buttons: false,
                timer: 2000,
            })
                .then((value) => {
                    localStorage.setItem('token', response['token']);
                    localStorage.setItem('user', JSON.stringify(response['user']));
                    window.location.href = "/profile";
                });
        } else {
            swal("Failed", response.message, "error");
        }




        //setErrors(Validation(values));

        // if(errors.email === "&& errors.password === ") {
        //     axios.post('http://localhost:3500/user/login', values)

        //     .then(res => {
        //     if (res.data === "success"){
        //        navigate('/home');
        //     }else{ 
        //         alert ("impossible d enregistrer");
        //     }

        //     })
        //     .catch(err => console.log(err));
        //   }
    }

    return (
        <main>
            <div className="limiter" >
                <div className="container-login100" >
                    <div className="wrap-login100" >
                        <Tilt className="Tilt"
                            options={
                                { max: 50 }
                            } >
                            <div className="Tilt-inner login100-pic" data-tilt>
                                <img src="./logo.jpeg"
                                    alt="IMG" />
                            </div>
                        </Tilt>

                        <form onSubmit={handleSubmit} className="login100-form validate-form" >
                            <span className="login100-form-title" >
                                Connexion
                            </span>
                            <div className="wrap-input100 validate-input"
                                data validate="Valid login is required: exabc.123" >
                                <input className="input100"
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Email" 
                                    onChange={e => setemail(e.target.value)}
                                    />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <FaIcons.FaUser />
                                </span>
                            </div>

                            <div className="wrap-input100 validate-input"
                                data validate="Password is required" >
                                <input className="input100"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    id="password" 
                                    onChange={e => setPassword(e.target.value)}
                                    />
                                < span className="focus-input100">
                                </span>
                                <span className="symbol-input100">
                                    <FaIcons.FaLock />
                                </span >
                                <span className="symbol-input200">
                                    <i className="toggle-password" >

                                    </i>
                                </span>
                            </div>

                            <div className="container-login100-form-btn" >
                                <button className="login100-form-btn"
                                    style={
                                        { background: '#ea4335' }
                                    }
                                    name="logInadmin"
                                    type="submit" >
                                    <i className="fa-signIn" >
                                        <FaIcons.FaSignInAlt />
                                    </i>
                                    Connexion
                                </button>
                            </div>
                            <div className="text-center p-t-12">
                                <span className="txt1">
                                    Vous avez oublié
                                </span>

                                <a className="txt2"
                                    href="" >
                                    Votre Mot de passe ?
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default LoginPage;
