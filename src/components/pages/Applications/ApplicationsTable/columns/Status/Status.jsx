import React,{useState,useCallback,useEffect} from "react";
import StatusList from "./StatusList";
import {changeApplication} from "../../../../../../redux/actions/applicationsActions";
import {useDispatch} from "react-redux";
const statusLocal = ["новая заявка" ,"в работе","запросить еще документы","одобрена","оплачена","срок оплаты истек"];
const statusTransform = ["NEW" ,"IN_WORK","NEED_DOCUMENTS","APPROVED","PAID","PAYMENT_EXPIRED"];
const Status = ({status,id}) => {
    const dispatch = useDispatch();
    const [open,setOpen] = useState(false);
    const index = statusTransform.indexOf(status);
    const toggleOpen = useCallback(()=>{
        setOpen(!open)
    },[open]);
    const [_status,set_Status] = useState(status);
    useEffect(()=>{
        (_status !== status) && dispatch(changeApplication(id,_status));
        setOpen(false)
    },[_status]);
    return (
        <>
            <p className={"table-status "} onClick={toggleOpen}>{statusLocal[index]}</p>
            {open && <StatusList setStatus={set_Status} />}
        </>

    )
};

export default Status