import React from 'react';
import {Data} from '../../data.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sidebar() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {Data.map((val, key) => {
                return (
                    <li key={key}
                    className="nav-item"
                    onClick={()=> {window.location.pathname = val.path}}>
                        <a 
                        className="nav-link collapsed" 
                        href="" data-toggle="collapse" 
                        data-target="#collapseTwo" 
                        aria-expanded="true" 
                        aria-controls="collapseTwo">
                            <i className="fas fa-fw">
                                {val.icon}
                            </i>
                            <span>
                                {val.title}
                            </span>
                        </a>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Custom Components:</h6>
                                <a className="collapse-item" href="" data-toggle="modal" data-target="#exampleModalCenter2">Ajouter</a>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

export default Sidebar