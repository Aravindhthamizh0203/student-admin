import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import UserContext from './usercontext';

function Sidebar() {
    const userdata = useContext(UserContext)
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SBHSS<img src="https://freesvg.org/img/logo_school.png" style={{ width: 50 }} /></div>
            </a>

            <hr className="sidebar-divider my-0" />
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/dashboard">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>

            <li className="nav-item active">
                <Link className="nav-link" to="/portal/userlist">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>UserList</span></Link>
            </li>

        </ul>
    )
}

export default Sidebar;