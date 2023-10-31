import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Tilt } from "react-tilt";
import { Table, Button } from 'semantic-ui-react'
import { environment } from '../environments/environment';
import Swal from 'sweetalert2'

let baseUrl = `${environment.apiUrl}/api/user`;


export default function Read() {

    const accesToken = localStorage.getItem('token');
    const config = {
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${accesToken}`,
        },
    };

    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`${baseUrl}`, config)
            .then((response) => {
                setAPIData(response.data);
            }, [])
            .catch(() =>
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Erreur imprévue, Api non disponible!'
                }))
    })

    const setData = (data) => {
        let { _id, fullname, email, role, termAgree } = data;
        localStorage.setItem('ID', _id);
        localStorage.setItem('fullname', fullname);
        localStorage.setItem('E-mail', email);
        localStorage.setItem('Role', role);
        localStorage.setItem('TermAgreeValue', termAgree);
    }

    const getData = () => {
        axios.get(`${baseUrl}`, config)
            .then((getData) => {
                setAPIData(getData.data);
            })
            .catch(() =>
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Erreur imprévue, Api non disponible!'
                }))
    }
    const onDelete = (id) => {
        axios.delete(`${baseUrl}/${id}`)
            .then(() => {
                getData();
            })
    }

    const onFilterProfil = (id) => {
        axios.get(`${baseUrl}/${id}`)
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