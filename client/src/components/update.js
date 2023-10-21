import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import { Tilt } from "react-tilt";
import { useNavigate } from 'react-router-dom';

export default function Update() {

    const navigate = useNavigate();
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [termAgree, setTermAgree] = useState(false);
    const [id, setID] = useState(null);

    const updateAPIData = () => {
        axios.put(`http://localhost:3500/api/user/${id}`, {
            fullname,
            email,
            role,
            termAgree
        }).then(() => {
            navigate('/read')
        })
    }

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFullname(localStorage.getItem('fullname'));
        setEmail(localStorage.getItem('E-mail'));
        setRole(localStorage.getItem('Role'));
        setTermAgree(localStorage.getItem('TermAgreeValue'));
    }, []);

    return (
        <main>
            <div className="limiter" >
                <div className="container-login100" >
                    <div className="wrap-login100" >
                        <Tilt className="Tilt"
                            options={
                                { max: 100 }
                            } >
                            <h2>Gestion Daara IT Update user</h2>
                        </Tilt>
                    </div>
                    <div className="container-md6">
                    <div className="wrap-login100" >
                    <Form className="create-form">
                        <Form.Field>
                            <label>UserName</label>
                            <input placeholder='UserName' value={fullname} onChange={(e) => setFullname(e.target.value)} />
                        </Form.Field>
                        <Form.Field>
                            <label>Email</label>
                            <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Field>
                        <Form.Field>
                            <label>Role</label>
                            <select onChange={(e) => setRole(e.target.value)}>
                                <option defaultValue>{role}</option>
                                <option value="Admin">Admin</option>
                                <option value="Teacher">Teacher</option>
                                <option value="Teacher">Student</option>
                            </select>
                        </Form.Field>
                        <Form.Field>
                            <Checkbox checked={termAgree} onChange={(e) => setTermAgree(!termAgree)} />
                            <label className="form-check-label">
                                I agree to the Terms and Conditions
                            </label>
                        </Form.Field>
                        <Button type='submit' onClick={updateAPIData}>Update</Button>
                    </Form>
                    </div>
                    
                    </div>
                </div>
            </div>
        </main>
    )
}