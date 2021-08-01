import React,{useCallback,useEffect,useState,useRef} from "react";
import ApplicationsTable from "./ApplicationsTable"
import Button from "../../common/Button";
import io from 'socket.io-client';
import {toggleApplicationsModal,getApplications,getApplicationsData} from "../../../redux/actions/applicationsActions";
import {useDispatch, useSelector,shallowEqual} from "react-redux";
import ApplicationModal from "./ApplicationModal";
const Applications = () => {
    const {modal,applications} = useSelector(({applications}) => applications,shallowEqual);
    const dispatch = useDispatch();
    const [toggle,setToggle] = useState("");
    const socketRef = useRef(null);
    useEffect(() => {
        dispatch(getApplications());
        socketRef.current = io("https://cmusy-dev.space");
        socketRef.current.on('connect', () => {
            console.log("connected");
        });
        socketRef.current.on('orders', data => {
            const applicationsIds = applications.map(elem => elem._id);
            !applicationsIds.includes(data.payload._id) && getApplicationsData([data.payload,...applications]);
        });

    },[]);
    const handelClose = useCallback(()=> dispatch(toggleApplicationsModal(false)),[]);
    const handelOpen = useCallback(()=> dispatch(toggleApplicationsModal(true,{},true)),[]);

    useEffect(()=>{
        dispatch(getApplications())
    },[]);
    return (
        <div className={"applications-page"}>
            <div className="application-buttons">
                <Button text="Додати Заявку" onClick={()=>handelOpen()} className="button-common"/>
            </div>
            {modal &&  <ApplicationModal cancelClick={handelClose} length={applications.length}/>}
            <ApplicationsTable applications={applications} />
        </div>
    )
};

export default Applications