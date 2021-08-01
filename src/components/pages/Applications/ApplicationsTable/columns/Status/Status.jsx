import React,{useState,useCallback,useEffect} from "react";
import StatusList from "./StatusList";
import {changeApplication} from "../../../../../../redux/actions/applicationsActions";
import {useDispatch} from "react-redux";
import LocalModal from "../../../../../common/LocalModal"
import {useInput} from "../../../../../../hooks/useInput";
import Input from "../../../../../common/Input";
const statusLocal = ["новая заявка" ,"в работе","запросить еще документы","одобрена","оплачена","срок оплаты истек"];

const statusTransform = ["NEW" ,"IN_WORK","REQUESTED","APPROVED","PAID_UP","EXPIRED_PAYMENT"];

const Status = ({status,id,className=""}) => {
    const dispatch = useDispatch();
    const {value:comment,bind:bindComment} = useInput();
    const [open,setOpen] = useState(false);
    const index = statusTransform.indexOf(status);
    const toggleOpen = useCallback(()=>{
        setOpen(!open)
    },[open]);
    const [_status,set_Status] = useState(status);
    const handelSend = useCallback(()=> {
        dispatch(changeApplication(id,_status,comment))
    },[comment,_status]);
    useEffect(()=>{
        (_status !== status &&_status !== "REQUESTED") && dispatch(changeApplication(id,_status));
        setOpen(false)
    },[_status]);
    return (
        <div>
            <p className={`table-status ${className}`} onClick={toggleOpen}>{statusLocal[index]}</p>
            {open && <StatusList setStatus={set_Status} />}
            {status !== "REQUESTED"&& _status === "REQUESTED" &&
                <LocalModal
                    initialOpen={true}
                    onSubmit={handelSend}
                    text={
                        <>
                            <p style={{margin:2}}>Додати коментар</p>
                            <Input {...bindComment} />
                        </>}
                />
            }
        </div>

    )
};

export default Status