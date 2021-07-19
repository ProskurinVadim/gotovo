import React,{useState} from "react";
import {shallowEqual, useDispatch, useSelector,} from "react-redux";
import Modal from "../../../common/Modal"
import AddContent from "./AddContent";
import CurrentContent from "./CurrentContent"
import {addApplication} from "../../../../redux/actions/applicationsActions"
const ApplicationModal = ({cancelClick,length}) => {
    const {modalType,currentApplication} = useSelector(({applications}) => applications,shallowEqual);
    const dispatch = useDispatch();
    const [application,setApplication] = useState({});
    const handelClick = () => {
        dispatch(addApplication(application))
    };
    return (
        <Modal
            okText="Відправити"
            cancelText="Закрити"
            okFunction={handelClick}
            hideFunction={cancelClick}
            cancelFunction={cancelClick}
            className="application-modal"
        >
            {
                modalType === "new" ? <AddContent length={length} setApplication={setApplication} />
                : currentApplication && <CurrentContent currentApplication={currentApplication} />
            }

        </Modal>
    )
};

export default ApplicationModal