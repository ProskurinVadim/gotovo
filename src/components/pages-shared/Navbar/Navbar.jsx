import React from "react"
import {useDispatch, useSelector} from "react-redux";
import AddAdmin from "../../icons/AddAdmins";
import Application from "../../icons/Application";
import Calendar from "../../icons/Calendar";
import Table from "../../icons/Table";
import {toggleApplicationsModal} from "../../../redux/actions/applicationsActions";
import {logout} from "../../../redux/actions/authActions";
import {Link} from "react-router-dom";
import Logout from "../../icons/Logout"
const Navbar = () => {
    const superAdmin = useSelector(({auth}) => auth.currentUser.roles[0] === "ROOT");
    console.log(superAdmin)
    const currentApplications = useSelector(({applications})=> applications.currentApplication);
    const dispatch = useDispatch();
    const handelClick = () => {
        dispatch(toggleApplicationsModal())
    };
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {Object.keys(currentApplications).length ?
                    <li className="navbar-list-item" onClick={handelClick} >
                        <Application className="navbar-icon"/>
                    </li>
                    : <></>}
                {superAdmin &&
                <Link to="admins">
                    <li className="navbar-list-item"><AddAdmin className="navbar-icon" /></li>
                </Link>}
                <Link to="applications">
                    <li className="navbar-list-item"><Table className="navbar-icon" /></li>
                </Link>
                <Link to="calendar">
                    <li className="navbar-list-item"><Calendar className="navbar-icon" /></li>
                </Link>
            </ul>
            <div onClick={()=>dispatch(logout())} className={"logout"}>
                <Logout />
            </div>
        </nav>
    )
};

export default Navbar