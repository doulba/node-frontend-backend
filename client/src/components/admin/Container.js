import React, { useState } from 'react';
import '../../styles/gesdaara.css';
import * as GoIcons from 'react-icons/go';



function Content() {

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Tableau de Bord</h1>
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
                {/* Administration bd */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div 
                                        className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Administration
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">0</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-database fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Professeur bd */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div 
                                        className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        Professeurs
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">0</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-database fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Etudiant bd */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div 
                                        className="text-xs font-weight-bold text-info text-uppercase mb-1">
                                        Etudiants
                                    </div>
                                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">0</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-database fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* classNamee bd */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div 
                                        className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                            classes
                                        </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">0</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-database fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notifications */}
            <div className="row">
                <div className="col-xl-9 col-lg-7">
                    <div className="card shadow mb-4">
                        <div 
                            className="card-header py-3 d-flex flex-row 
                            align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">
                                Notifications
                            </h6>
                        </div>
                        <div className="card-body">
                            <div className="panel-body-notify">
                                <ul className="media-list">
                                    <li className="media">
                                        <a 
                                            href="" 
                                            className="pull-left">
                                            <img 
                                                src="" 
                                                alt="" 
                                                className="picture-src" 
                                                id="wizardPicturePreview" />
                                        </a>
                                        <div className="media-body">
                                            <span className="text-muted pull-right">
                                                <small className="text-muted">Il y a</small>
                                            </span>
                                            <strong className="text-success">@</strong>
                                            <p>
                                                <a href="">#consecteturadipiscing </a>.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Calendar */}
                <div className="col-xl-3 col-lg-7">
                    <div className="card shadow mb-4">
                        <div 
                            className="card-header py-3 d-flex flex-row 
                            align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Calendrier</h6>
                        </div>
                        <div className="card-body">
                            <div id="calendar" className="mb">
                                <div className="panel green-panel no-margin">
                                    <div className="panel-body">
                                        <div 
                                            id="date-popover" 
                                            className="popover top" >
                                            <div className="arrow"></div>
                                            <h3 className="popover-title"></h3>
                                            <div id="date-popover-content" className="popover-content"></div>
                                        </div>
                                        <div id="my-calendar"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Content;