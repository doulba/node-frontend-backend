import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function  Create() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termAgree, setTermAgree] = useState(false);
    const [role, setRole] = useState('');

    const postData = () => {
        axios.post(`http://localhost:3500/api/user/register`, {
            fullname,
            role,
            email,
            password,
            termAgree
        })
}
 return (   
<Form className="create-form">
        <Form.Field>
            <label>UserName</label>
            <input placeholder='userName' onChange={(e) => setFullname(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Email</label>
            <input placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Role</label>
            <select onChange={(e) => setRole(e.target.value)}>
                <option value="Admin">Admin</option>
                <option value="Teacher">Teacher</option>
                <option selected value="Student">Student</option>
            </select>
        </Form.Field>
        <Form.Field>
            <label>Password</label>
            <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setTermAgree(!termAgree)}/>
        </Form.Field>
        <Button onClick={postData} type='submit'>Submit</Button>
    </Form>
    )    
}