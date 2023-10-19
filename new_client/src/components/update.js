import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';

export default function Update() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [termAgree, setTermAgree] = useState(false);
    const [id, setID] = useState(null);

    const updateAPIData = () => {
        axios.put(`http://localhost:3500/api/user/${id}`, {
            fullname,
            email,
            role,
            termAgree
        })
    }
    useEffect(() => {
            setID(localStorage.getItem('ID'))
            setFullname(localStorage.getItem('fullname'));
            setEmail(localStorage.getItem('E-mail'));
            setRole(localStorage.getItem('Role'));
            setTermAgree(localStorage.getItem('Term Agree Value'));
    }, []);

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>UserName</label>
                    <input placeholder='UserName' value={fullname} onChange={(e) => setFullname(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Role</label>
                    <input placeholder='Role' value={role} onChange={(e) => setRole(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox checked={termAgree} label='I agree to the Terms and Conditions' onChange={(e) => setTermAgree(!termAgree)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}