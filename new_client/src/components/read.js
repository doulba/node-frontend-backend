import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
        localStorage.setItem('Term Agree Value', termAgree)
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
        <div>
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
        </div>
    )
}