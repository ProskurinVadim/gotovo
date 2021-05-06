import React,{useCallback} from "react";
import Navbar from "../../pages-shared/Navbar"
import ApplicationsTable from "./ApplicationsTable"
import Button from "../../common/Button";
import {toggleApplicationsModal} from "../../../redux/actions/applicationsActions";
import {useDispatch, useSelector} from "react-redux";
const Applications = () => {
    const dispatch = useDispatch();
    const handelClick = useCallback(()=>dispatch(toggleApplicationsModal()),[]);
    const applications = useSelector(({applications}) => applications.applications);
    return (
        <div className={"applications-page"}>
            <ApplicationsTable applications={applications} />
        </div>
    )
};

export default Applications