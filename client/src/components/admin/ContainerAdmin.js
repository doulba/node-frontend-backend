import React, { useState, useEffect } from 'react';
import '../../styles/gesdaara.css';
import '../../assets/datatables/dataTables.bootstrap4.css';
import * as GoIcons from 'react-icons/go';

const $ = require('jquery');
$.DataTable = require('datatables.net-bs4');

const TableHeading = (
    <tr>
        <th>N°</th>
        <th>Prenom</th>
        <th>Nom</th>
        <th>Matricule</th>
        <th>Campus</th>
        <th>Fonction</th>
        <th>Action</th>
    </tr>
);

function ContentAdmin() {

    useEffect(() => {
        const dataTableResult = $('#dataTable').DataTable();
        return () => {
                dataTableResult.destroy();
        }
    }, []);

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Paramètres/Administration</h1>
                <div className="dropdown">
                    <button 
                        className="d-none d-sm-inline-block btn btn-sm btn-warning shadow-sm dropdown-toggle" 
                        type="button" 
                        id="dropdownMenuButton" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false">
                        <GoIcons.GoGear style={{paddingRight: 4}}/>
                        Paramètres
                    </button>
                    <div 
                        className="dropdown-menu" 
                        aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Administration</a>
                        <a className="dropdown-item" href="#">Professeurs</a>
                        <a className="dropdown-item" href="#">Etudiants</a>
                        <a className="dropdown-item" href="#">Classes</a>
                    </div>
                </div>
                <a 
                    href="" 
                    className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                        <i className="far fa-calendar-alt fa-sm text-white-50" style={{paddingRight: 4}}></i> 
                    Emploi du temps
                </a>
            </div>
            <div className="row">
                <div className="col-xl-12 col-lg-11">
                    <div className="card shadow mb-4">
                        <div 
                            className="card-header py-3 d-flex 
                            flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-black">
                                Membres administration
                            </h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table 
                                    className="table table-bordered" 
                                    id="dataTable"
                                    width="100%" cellspacing="0">
                                    <thead>{TableHeading}</thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <a 
                                                    href="" 
                                                    title="Modifier" 
                                                    className="btn btn-sm" 
                                                    role="button"
                                                    style={{color: 'green'}}>
                                                    <i className="fas fa-pen"></i>
                                                </a>
                                                <a 
                                                    href="" 
                                                    title="Supprimer" 
                                                    className="btn btn-sm" 
                                                    role="button"
                                                    style={{color: 'red'}}>
                                                    <i className="fas fa-trash-alt"></i>
                                                </a>
                                            </td> 
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ContentAdmin;