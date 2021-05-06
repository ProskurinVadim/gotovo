import React from "react";
import {useSelector} from "react-redux";
import AdminsTable from "./AdminsTable";
const Admins = () => {
    const users = useSelector(({auth})=>auth.users);
    console.log(users)
    return (
        <div>
            <AdminsTable users={users}/>
        </div>
    )
};

export default Admins