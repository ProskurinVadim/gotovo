import React,{useCallback,useEffect,useState} from "react";
import ApplicationsTable from "./ApplicationsTable"
import Button from "../../common/Button";
import Toggle from "../../common/Toggle";
import LocalModal from "../../common/LocalModal";
import {toggleApplicationsModal,getApplications,getMarriageOffice,serMarriageOffice} from "../../../redux/actions/applicationsActions";
import {useDispatch, useSelector,shallowEqual} from "react-redux";
import ApplicationModal from "./ApplicationModal";
const Applications = () => {
    const {modal,applications,marriageOffice} = useSelector(({applications}) => applications,shallowEqual);
    const dispatch = useDispatch();
    const [toggle,setToggle] = useState("");
    useEffect(()=> {
        marriageOffice === "" && dispatch(getMarriageOffice())
    });
    const handelSetToggle = (id) => {
        console.log(id)
        const newData = marriageOffice.map(elem => elem._id !== id ? {...elem,isActive:false} : {...elem,isActive:true});
        dispatch(serMarriageOffice(id,newData))
    };
    const handelClose = useCallback(()=> dispatch(toggleApplicationsModal(false)),[]);
    const handelOpen = useCallback(()=> dispatch(toggleApplicationsModal(true,"new",)),[]);

    // const handelOpenLocal = (togel) => {
    //     setOpen(true);
    //     setToggle(togel)
    // };
    useEffect(()=>{
        dispatch(getApplications())
    },[]);
    return (
        <div className={"applications-page"}>
            <div className="application-buttons">
                <Button text="Додати Заявку" onClick={()=>handelOpen()} className="button-common"/>
                {marriageOffice !== "" &&
                <LocalModal
                    onClick={handelSetToggle}
                    elem={marriageOffice.length ? marriageOffice.filter(elem => elem._id === toggle && elem)[0] : {name:""}}
                >
                        <Toggle toggleValue={marriageOffice} setToggleValue={setToggle}/>
                 </LocalModal>
                }
            </div>
            {modal &&  <ApplicationModal cancelClick={handelClose} length={applications.length}/>}
            <ApplicationsTable applications={applications} />
        </div>
    )
};

export default Applications