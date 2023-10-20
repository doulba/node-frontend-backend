import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Tilt } from "react-tilt";
import { Table, Button } from 'semantic-ui-react'

export default function Read() {
    
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3500/api/user`)
            .then((response) => {
                setAPIData(response.data);
            }, [])
    })

    const setData = (data) => {
        let { _id, fullname, email, role, termAgree } = data;
        localStorage.setItem('ID', _id);
        localStorage.setItem('fullname', fullname);
        localStorage.setItem('E-mail', email);
        localStorage.setItem('Role', role);
        localStorage.setItem('TermAgreeValue', termAgree)
    }
    const getData = () => {
        axios.get(`http://localhost:3500/api/user`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }
    const onDelete = (id) => {
        axios.delete(`http://localhost:3500/api/user/${id}`)
            .then(() => {
                getData();
            })
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
                            <h2>Gestion Daara IT</h2>
                        </Tilt>
                        <select>
                            <option value="Admin">Admin</option>
                            <option value="Teacher">Teacher</option>
                            <option defaultValue="Student">Student</option>
                        </select>
                    </div>  
                    <Table singleLine>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>UserName</Table.HeaderCell>
                                <Table.HeaderCell>E-mail </Table.HeaderCell>
                                <Table.HeaderCell>Role</Table.HeaderCell>
                                <Table.HeaderCell>Term Agree</Table.HeaderCell>
                                <Table.HeaderCell>Update</Table.HeaderCell>
                                <Table.HeaderCell>Delete</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {APIData.map((data) => {
                                return (
                                    <Table.Row>
                                        <Table.Cell>{data.fullname}</Table.Cell>
                                        <Table.Cell>{data.email}</Table.Cell>
                                        <Table.Cell>{data.role}</Table.Cell>
                                        <Table.Cell>{data.termAgree ? 'Checked' : 'Unchecked'}</Table.Cell>
                                        <Link to='/update'>
                                            <Table.Cell>
                                                <Button onClick={() => setData(data)}>Update</Button>
                                            </Table.Cell>
                                        </Link>
                                        <Table.Cell>
                                            <Button onClick={() => onDelete(data._id)}>Delete</Button>
                                        </Table.Cell>
                                    </Table.Row>
                                )
                            })}
                        </Table.Body>
                    </Table>
                    {/* </Tilt> */}
                </div>
            </div>
        </main>
    )
}