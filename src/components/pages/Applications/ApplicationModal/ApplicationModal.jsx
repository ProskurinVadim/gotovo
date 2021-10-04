import React,{useState,useCallback} from "react";
import {shallowEqual, useDispatch, useSelector,} from "react-redux";
import Modal from "../../../common/Modal"
import AddContent from "./AddContent";
import CurrentContent from "./CurrentContent"
import {addApplication,deleteApplication} from "../../../../redux/actions/applicationsActions";
import Edit from "../../../icons/Edit";
const   ApplicationModal = ({cancelClick,length}) => {
    const {currentApplication,add} = useSelector(({applications}) => applications,shallowEqual);
    const [modalType,setModalType] = useState("current");
    const dispatch = useDispatch();
    const [application,setApplication] = useState({});
    const handelAdd = useCallback(() => {
        addApplication(application)
    },[application]);
    console.log("add",add)
    const handelDelete = useCallback(() => {
        // deleteApplication(currentApplication._id)
    },[currentApplication]);
    const handelChange = useCallback(() => {
        console.log("asd")
        handelAdd();
        // handelDelete()
    },[]);
    const handelClick = useCallback( ()  => {
        add ? handelAdd() : modalType !== "new" ?  handelDelete() : handelChange()
    },[]);
    const toggleType = useCallback(() => {
        setModalType(prev => prev === "current" ? "new" : "current")
    },[]);
    return (
        <Modal
            okText="Відправити"
            cancelText="Закрити"
            okFunction={handelClick}
            hideFunction={cancelClick}
            cancelFunction={cancelClick}
            className="application-modal"
        >
            <>
                {/*{!add &&*/}
                {/*<span*/}
                    {/*onClick={toggleType}*/}
                    {/*style={{marginLeft: "95%",color:"#FFD251",fontSize:24,cursor:"pointer"}}*/}
                {/*>*/}
                        {/*<Edit />*/}
                {/*</span>*/}
                {/*}*/}
                {
                    add ?
                        <AddContent
                            application={application}
                            setApplication={setApplication}
                        />
                        : modalType === "new" ?
                            <AddContent
                                application={currentApplication}
                                setApplication={setApplication}
                            />
                            : <CurrentContent currentApplication={currentApplication} />
                }
            </>
        </Modal>
    )
};

export default ApplicationModal