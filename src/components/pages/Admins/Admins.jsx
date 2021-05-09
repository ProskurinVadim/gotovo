import React,{useState,useCallback} from "react";
import {useSelector} from "react-redux";
import AdminsTable from "./AdminsTable";
import AdminModal from "./AdminsModal";
import Button from "../../common/Button"
const Admins = () => {
    const users = useSelector(({auth})=>auth.users);
    const [open,setOpen] = useState();
    const handelClose = useCallback(()=>{
        setOpen(false)
    },[]);
    return (
        <div>
            <Button text="Додати Юзера" onClick={()=>setOpen(!open)}/>
            {open &&  <AdminModal onClose={handelClose}/>}
            <AdminsTable users={users} />
        </div>
    )
};

export default Admins