import React, { useState } from 'react';
import '../../styles/gesdaara.css';
import '../../assets/fontawesome-free/css/all.css';
import PopupAdmin from '../Dialog/PopupAdmin';
import AdminForm from '../Forms/formAdmin';
import PopupTeacher from '../Dialog/PopupTeacher';
import TeacherForm from '../Forms/formTeacher';
import PopupStudent from '../Dialog/PopupStudent';
import StudentForm from '../Forms/formStudent';
import PopupTeacherModClass from '../Dialog/PopupTeacherModClass';
import TeacherModClassForm from '../Forms/formTeacherModClass';
import PopupClass from '../Dialog/PopupClass';
import ClassForm from '../Forms/formClass';
import PopupMarkClass from '../Dialog/PopupMarkClass';
import MarkClassForm from '../Forms/formMarkClass';
import PopupMarkStudent from '../Dialog/PopupMarkStudent';
import MarkStudentForm from '../Forms/formMarkStudent';
import * as FaIcons from 'react-icons/fa';
import * as ImIcons from 'react-icons/im';
import * as SiIcons from 'react-icons/si';
import * as GoIcons from 'react-icons/go';





function SidebarAdmin() {


  const [openPopupAdmin, setOpenPopupAdmin] = useState(false);
  const [openPopupTeacher, setOpenPopupTeacher] = useState(false);
  const [openPopupTeacherModClass, setOpenPopupTeacherModClass] = useState(false);
  const [openPopupStudent, setOpenPopupStudent] = useState(false);
  const [openPopupClass, setOpenPopupClass] = useState(false);
  const [openPopupMarkStudent, setOpenPopupMarkStudent] = useState(false);
  const [openPopupMarkClass, setOpenPopupMarkClass] = useState(false);

  const [ toggled, setToggled ] = React.useState(false);
    
  let SidebarAdminClassName = 'navbar-nav bg-gradient-primary sidebar';
  SidebarAdminClassName += ` sidebar-dark accordion ${toggled ? 'toggled' : ''}`;


  return (
    <ul 
      className={SidebarAdminClassName} 
      id="accordionSidebar">
                 
      <a 
        className="sidebar-brand d-flex align-items-center justify-content-center" 
        href="">
        <div className="sidebar-brand-icon">
          <i className="fas fa-school"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
            <img src="./logo.png" style={{ width: 100, height: 100 }} />
        </div>
      </a>

      
      <hr className="sidebar-divider my-0" />

      
      <li className="nav-item active">
        <a className="nav-link" href="">
          <i className="fas fa-fw">
              <FaIcons.FaTachometerAlt />
          </i>
          <span>Tableau de Bord</span></a>
      </li>


      <hr className="sidebar-divider" />


      <li className="nav-item">
        <a 
          className="nav-link collapsed" 
          href="" 
          data-toggle="collapse" 
          data-target="#collapseTwo" 
          aria-expanded="true" 
          aria-controls="collapseTwo">
          <i className="fas fa-fw">
            <FaIcons.FaUserCog />
          </i>
          <span>Administration</span>
          <i className="menu-arrow"></i>
        </a>
        <div 
          id="collapseTwo" 
          className="collapse" 
          aria-labelledby="headingTwo" 
          data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Action:</h6>
            <a 
              className="collapse-item"
              type="button"
              onClick={() => setOpenPopupAdmin(true)} 
            >
                Ajouter
            </a>
            <PopupAdmin
              title="Ajouter admin"
              openPopupAdmin = {openPopupAdmin}
              setOpenPopupAdmin = {setOpenPopupAdmin}
            >
              <AdminForm />
            </PopupAdmin>
          </div>
        </div>
      </li>

      
      <li className="nav-item">
        <a 
          className="nav-link collapsed" 
          href="" 
          data-toggle="collapse" 
          data-target="#collapseProfesseurs" 
          aria-expanded="true" 
          aria-controls="collapseProfesseurs">
          <i className="fas fa-fw">
            <ImIcons.ImUserTie />
          </i>
          <span>Professeurs</span>
        </a>
        <div 
          id="collapseProfesseurs" 
          className="collapse" 
          aria-labelledby="headingProfesseurs" 
          data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Action:</h6>
            <a 
              className="collapse-item"
              type="button"
              onClick={() => setOpenPopupTeacher(true)}
            >
                Ajouter
            </a>
            <PopupTeacher
              title="Ajouter professeur"
              openPopupTeacher = {openPopupTeacher}
              setOpenPopupTeacher = {setOpenPopupTeacher}
            >
              <TeacherForm />
            </PopupTeacher>
            <a 
              className="collapse-item" 
              type="button"
              onClick={() => setOpenPopupTeacherModClass(true)} >
                Ajouter Prof-Mod-classe
            </a>
            <PopupTeacherModClass
              title="Ajouter professeur module classe"
              openPopupTeacherModClass = {openPopupTeacherModClass}
              setOpenPopupTeacherModClass = {setOpenPopupTeacherModClass}
            >
              <TeacherModClassForm />
            </PopupTeacherModClass>
          </div>
        </div>
      </li>
      
      <li className="nav-item">
        <a 
          className="nav-link collapsed" 
          href="" 
          data-toggle="collapse" 
          data-target="#collapseEtudiants" 
          aria-expanded="true" 
          aria-controls="collapseEtudiants">
          <i className="fas fa-fw">
            <FaIcons.FaUserGraduate />
          </i>
          <span>Etudiants</span>
        </a>
        <div 
          id="collapseEtudiants" 
          className="collapse" 
          aria-labelledby="headingEtudiants" 
          data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Action:</h6>
            <a 
              className="collapse-item" 
              type="button"
              onClick={() => setOpenPopupStudent(true)} >
                Ajouter
            </a>
            <PopupStudent
              title="Ajouter étudiant"
              openPopupStudent = {openPopupStudent}
              setOpenPopupStudent = {setOpenPopupStudent}
            >
              <StudentForm />
            </PopupStudent>
          </div>
        </div>
      </li>

      <li className="nav-item" id="show">
        <a 
          className="nav-link collapsed" 
          href="" 
          data-toggle="collapse" 
          data-target="#collapseNotes" 
          aria-expanded="true" 
          aria-controls="collapseNotes">
          <i className="fas fa-fw">
            <SiIcons.SiGooglesheets />
          </i>
          <span>Notes</span>
        </a>
        <div 
          id="collapseNotes" 
          className="collapse" 
          aria-labelledby="headingNotes" 
          data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Action:</h6>
              <a 
                className="collapse-item"
                type="button" 
                onClick={() => setOpenPopupMarkClass(true)}>
                  Notes classes
              </a>
              <PopupMarkClass
                title="Afficher notes classes"
                openPopupMarkClass={openPopupMarkClass}
                setOpenPopupMarkClass={setOpenPopupMarkClass}>
                <MarkClassForm />
              </PopupMarkClass>
              <a 
                className="collapse-item" 
                type="button"
                onClick={() => setOpenPopupMarkStudent(true)}>
                  Notes Etudiant
              </a>
              <PopupMarkStudent
                title="Afficher notes étudiant"
                openPopupMarkStudent={openPopupMarkStudent}
                setOpenPopupMarkStudent={setOpenPopupMarkStudent}>
                <MarkStudentForm />
              </PopupMarkStudent>
            </div>
        </div>
      </li>

      <li className="nav-item">
        <a 
          className="nav-link collapsed" 
          href="" 
          data-toggle="collapse" 
          data-target="#collapseclasse" 
          aria-expanded="true" 
          aria-controls="collapseclasse">
          <i className="fas fa-fw">
            <SiIcons.SiGoogleclassroom />
          </i>
          <span>classes</span></a>
          <div 
            id="collapseclasse" 
            className="collapse" 
            aria-labelledby="headingclass" 
            data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Action:</h6>
              <a 
                className="collapse-item" 
                type="button"
                onClick={() => setOpenPopupClass(true)} >
                  Ajouter
              </a>
              <PopupClass
                title="Ajouter classe"
                openPopupClass = {openPopupClass}
                setOpenPopupClass = {setOpenPopupClass}
              >
                <ClassForm />
              </PopupClass>
            </div>
          </div>
      </li>

      <li className="nav-item" id="show">
        <a className="nav-link" href="">
          <i className="fas fa-fw">
            <GoIcons.GoFileSubmodule />
          </i>
          <span>Modules</span></a>
      </li>


      <hr className="sidebar-divider d-none d-md-block" />

      <div className="text-center d-none d-md-inline">
        <button 
          className="rounded-circle border-0" 
          id="sidebarToggle"
          onClick={() => {
            setToggled(!toggled);
          }}
        >
        </button>
      </div>

    </ul>
    );
}

export default SidebarAdmin;