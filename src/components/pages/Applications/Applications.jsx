import React,{useCallback,useEffect,useState} from "react";
import Navbar from "../../pages-shared/Navbar"
import ApplicationsTable from "./ApplicationsTable"
import Button from "../../common/Button";
import {toggleApplicationsModal,getApplications} from "../../../redux/actions/applicationsActions";
import {useDispatch, useSelector} from "react-redux";
import AdminModal from "../Admins/Admins";
import ApplicationModal from "./ApplicationModal";
const Applications = () => {
    const [open,setOpen] = useState(false);
    const dispatch = useDispatch();
    const handelClick = useCallback(()=>dispatch(toggleApplicationsModal()),[]);
    const handelClose = useCallback(()=>{
        setOpen(false)
    },[]);
    useEffect(()=>{
        dispatch(getApplications())
    },[]);
    const applications = useSelector(({applications}) => applications.applications);
    return (
        <div className={"applications-page"}>
            {/*<Button text="Додати Заявку" onClick={()=>setOpen(!open)} className="button-common button-m"/>*/}
            {open &&  <ApplicationModal cancelClick={handelClose} length={applications.length}/>}
            <ApplicationsTable applications={applications} />
        </div>
    )
};

export default Applications