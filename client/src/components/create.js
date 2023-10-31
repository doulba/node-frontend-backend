import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import { Tilt } from "react-tilt";
import { useNavigate } from 'react-router-dom';
import { environment } from '../environments/environment';
import Swal from 'sweetalert2'

let baseUrl = `${environment.apiUrl}/api/user/register`;

export default function Create() {

    const accesToken = localStorage.getItem('token');
    const config = {
        headers: {
            "Content-type": "application/json",
             "Authorization": `Bearer ${accesToken}`,
        },
   };

    const navigate = useNavigate();
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termAgree, setTermAgree] = useState(false);
    const [role, setRole] = useState('');

    const postData = () => {
        axios.post(`${baseUrl}`, {
            fullname,
            role,
            email,
            password,
            termAgree
        }, config)
        .then(() => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Utilisateur créé',
                showConfirmButton: true,
                timer: 1500
              })
            navigate('/read')
        })
        .catch(() =>
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Utilisateur non créé!'
          }))
    }
    return (

        <main>
            <div className="limiter" >
                <div className="container-login100" >
                    <div className="wrap-login100" >
                        <Tilt className="Tilt"
                            options={
                                { max: 100 }
                            } >
                            <h2>Gestion Daara IT Create user</h2>
                        </Tilt>
                    </div>
                    <div className="container-md6">
                        <div className="wrap-login100" >
                            <Form className="create-form">
                                <Form.Field>
                                    <label>UserName</label>
                                    <input placeholder='userName' onChange={(e) => setFullname(e.target.value)} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Email</label>
                                    <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Role</label>
                                    <select onChange={(e) => setRole(e.target.value)}>
                                        <option value="Admin">Admin</option>
                                        <option value="Teacher">Teacher</option>
                                        <option defaultValue="Student">Student</option>
                                    </select>
                                </Form.Field>
                                <Form.Field>
                                    <label>Password</label>
                                    <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                                </Form.Field>
                                <Form.Field>
                                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setTermAgree(!termAgree)} />
                                </Form.Field>
                                <Button onClick={postData} type='submit'>Submit</Button>
                            </Form>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}