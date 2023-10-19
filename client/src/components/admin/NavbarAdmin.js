import React, { useState, useEffect } from 'react';
import '../../styles/gesdaara.css';
import '../../styles/Toggle.css';
import * as FaIcons from 'react-icons/fa';

function NavbarAdmin() {

    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <button id="sidebarToggleTop" 
            className="btn btn-link d-md-none rounded-circle mr-3">
                <i>
                    <FaIcons.FaBars />
                </i>
            </button>

            <ul className="navbar-nav ml-auto">

            
            {/* <li className="notification-list topbar-dropdown d-lg-block">
                    <button className="nav-link dropdown-toggle arrow-none btn btn-link right-bar-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-cog fa-fw">
                            <FaIcons.FaCog />
                        </i>
                    </button>
                </li> */}

                <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" 
                    href="#" id="alertsDropdown" 
                    role="button" data-toggle="dropdown" 
                    aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-cog fa-fw">
                        </i>
                        <span className="badge badge-danger badge-counter"></span>
                    </a>
             
                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" 
                    aria-labelledby="alertsDropdown">
                        <h6 className="dropdown-header">
                            <div className="toggle-container">
                                <span>☀︎</span>
                                <span className="toggle">
                                    <input
                                    id="checkbox"
                                    className="checkbox"
                                    type="checkbox"
                                    />
                                    <label htmlFor="checkbox" />
                                </span>
                                <span>☾</span>
                                {/* <button onClick={() => setDarkMode(prevMode => !prevMode)}>
                                Toggle
                                </button> */}
                            </div>
                        </h6> 
                        <div className="slimScrollDiv" 
                        style={{ 
                            position: 'relative', 
                            overflow: 'hidden', 
                            width: 'auto', 
                            height: '234'}}>

                            <div className="p-1">
                                <div className="alert alert-primary" role="alert">
                                    <strong>Personnaliser </strong>
                                    le jeu de couleurs général. 
                                    Notez que Ges'Daara stocke les préférences dans le stockage local.
                                </div>
                            </div> 
                        </div>
                    </div>
                </li>


                {/*<li className="nav-item dropdown no-arrow d-sm-none">
                    <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-search fa-fw">
                            <FaIcons.FaSearch />
                        </i>
                    </a>
              
                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                        <form className="form-inline mr-auto w-100 navbar-search">
                            <div className="input-group">
                                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">
                                        <i className="fas fa-search fa-sm">
                                            <FaIcons.FaSearch />
                                        </i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>*/}

            
            {/*<li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="" id="alertsDropdown" role="button"   title="Envoyer message">
                        <i className="fas fa-paper-plane fa-fw">
                            <FaIcons.FaPaperPlane />
                        </i>
                    </a>
                </li> */}

            
                <li className="nav-item dropdown no-arrow mx-1">
                  <a className="nav-link dropdown-toggle" 
                  href="" id="messagesDropdown" 
                  role="button" data-toggle="dropdown" 
                  aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-paper-plane fa-fw">
                    </i>
                  </a>
                  
                  <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" 
                  aria-labelledby="messagesDropdown">
                    <h6 className="dropdown-header">
                      Envoyer un message
                    </h6>
                    <a className="dropdown-item text-black-500" href="">
                        vers un admin
                    </a>
                    <a className="dropdown-item text-black-500" href="">
                        vers un professeur
                    </a>
                  </div>
                </li>

                <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" 
                    href="#" id="messagesDropdown" 
                    role="button" data-toggle="dropdown" 
                    aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-envelope fa-fw">
                        </i>
                        <span className="badge badge-danger badge-counter">3+</span>
                    </a>
                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" 
                    aria-labelledby="messagesDropdown">
                        <h6 className="dropdown-header">
                            Messages
                        </h6>
                        <a className="dropdown-item d-flex align-items-center" href="">
                            <div className="dropdown-list-image mr-3">
                                <img src="" alt="" className="picture-src" id="wizardPicturePreview" />
                            </div>
                            <div className="font-weight-bold">
                                <div className="text-truncate"></div>
                                <div className="small text-gray-500"></div>
                            </div> 
                        </a>
                        <a className="dropdown-item text-center small text-gray-500" href="">
                            Voir plus de Messages
                        </a>
                    </div>
                </li>

                <div className="topbar-divider d-none d-sm-block"></div>

 
                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" 
                    href="#" id="userDropdown" 
                    role="button" data-toggle="dropdown" 
                    aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                            M. DRAME
                        </span>
                        <img className="img-profile rounded-circle" 
                        src="./logo.png" />
                    </a>
              
                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" 
                    aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="">
                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400">
                            </i>
                            Profil
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" 
                        href="#" data-toggle="modal" 
                        data-target="#logoutModal">
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400">
                            </i>
                            Deconnexion
                        </a>
                    </div>
                </li>
            </ul>        
        </nav>
    );
}


export default NavbarAdmin;