import React,{useCallback} from "react"
import {useDispatch, useSelector} from "react-redux";
import ApplicationsModal from "../../components/pages/Applications/ApplicationModal";
import {toggleApplicationsModal,unSetApplications} from "../../redux/actions/applicationsActions"

const ModalWrapper = () => {
    const {modal,currentAplication} = useSelector(({applications}) => applications);
    const okClick = () => null;
    const dispatch = useDispatch();
    const hideClick = () => {
        dispatch(toggleApplicationsModal())
    };
    const cancelClick = useCallback(()=> {
        dispatch(unSetApplications())
    },[]);
    return (
        <>
            {modal && <ApplicationsModal okClick={okClick()} hideClick={hideClick} cancelClick={cancelClick}/>}
        </>
    )
};

export default ModalWrapper;