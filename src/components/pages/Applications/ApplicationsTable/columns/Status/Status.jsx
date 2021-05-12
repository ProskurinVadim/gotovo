import React,{useState,useCallback,useEffect} from "react";
import StatusList from "./StatusList";
import {changeApplication} from "../../../../../../redux/actions/applicationsActions";
import {useDispatch} from "react-redux";
const Status = ({status,id}) => {
    const dispatch = useDispatch();
    const [open,setOpen] = useState(false);
    const toggleOpen = useCallback(()=>{
        setOpen(!open)
    },[open]);
    const [_status,set_Status] = useState(status);
    useEffect(()=>{
        dispatch(changeApplication(id,_status));
        setOpen(false)
    },[_status]);
    return (
        <>
            <p className={"table-status "} onClick={toggleOpen}>{status}</p>
            {open && <StatusList setStatus={set_Status} />}
        </>

    )
};

export default Status