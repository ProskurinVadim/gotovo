import React,{useState,useCallback,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import AdminsTable from "./AdminsTable";
import AdminModal from "./AdminsModal";
import Button from "../../common/Button"
import {getAdmins} from "../../../redux/actions/adminsAction";
const Admins = () => {
    const users = useSelector(({admins})=>admins.admins);
    const dispatch = useDispatch();
    const [open,setOpen] = useState();
    const handelClose = useCallback(()=>{
        setOpen(false)
    },[]);

    useEffect(()=> {
        dispatch(getAdmins())
    },[]);
    return (
        <div>
            <Button text="Додати Юзера" onClick={()=>setOpen(!open)} className="button-common button-m"/>
            {open &&  <AdminModal onClose={handelClose}/>}
            <AdminsTable users={users} />
        </div>
    )
};

export default Admins