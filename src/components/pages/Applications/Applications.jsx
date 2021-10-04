import React,{useCallback,useEffect,useState,useRef} from "react";
import ApplicationsTable from "./ApplicationsTable"
import Button from "../../common/Button";
import io from 'socket.io-client';
import {toggleApplicationsModal,getApplications,getApplicationsData,addSocketApplication} from "../../../redux/actions/applicationsActions";
import {useDispatch, useSelector,shallowEqual} from "react-redux";
import ApplicationModal from "./ApplicationModal";
let a = false;
const Applications = () => {
    const {modal,applications} = useSelector(({applications}) => applications,shallowEqual);
    const dispatch = useDispatch();
    const [toggle,setToggle] = useState("");
    const socketRef = useRef(null);
    useEffect(() => {
        console.log(socketRef.current,"socketRef.current")
        if (!a) {
            a=true;
            socketRef.current = io("https://cmusy-dev.space");
            socketRef.current.on('connect', () => {
                console.log("connected");
            });
            socketRef.current.on('orders', data => {
                console.log("changeType", data.changeType);
                const applicationsIds = applications.map(elem => elem._id);
                console.log(applicationsIds,data.id,applicationsIds.includes(data.id))
                data.changeType !=="update" && dispatch(addSocketApplication(data.payload));
            }, [applications]);
        }
    },[]);
    const handelClose = useCallback(()=> dispatch(toggleApplicationsModal(false)),[]);
    const handelOpen = useCallback(()=> dispatch(toggleApplicationsModal(true,{},true)),[]);

    useEffect(()=>{
        dispatch(getApplications())
    },[]);
    return (
        <div className={"applications-page"}>
            {/*<div className="application-buttons">*/}
                {/*<Button text="Додати Заявку" onClick={()=>handelOpen()} className="button-common"/>*/}
            {/*</div>*/}
            {modal &&  <ApplicationModal cancelClick={handelClose} length={applications.length}/>}
            <ApplicationsTable applications={applications} />
        </div>
    )
};

export default Applications