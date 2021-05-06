import React from "react";
import Navbar from "../../components/pages-shared/Navbar"

const NavbarWrapper = ({children}) => {
    return (
        <>
            <div className="navbar-wrapper">
                {children}
            </div>
            <Navbar />
        </>
    )
};

export default  NavbarWrapper