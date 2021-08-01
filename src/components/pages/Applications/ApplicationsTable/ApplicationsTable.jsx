import React,{useMemo} from "react";
import {Table} from "antd";
import {getColumns} from "./formateData"
import 'antd/dist/antd.css';
import {toggleApplicationsModal} from "../../../../redux/actions/applicationsActions"
import {useDispatch} from "react-redux";
import {getStatusColor} from "../../../../utils/getStatusColor"
const ApplicationTable = ({applications}) => {
    const memoizedColumns= useMemo(()=>getColumns(),[]);
    const dispatch = useDispatch();
    return (
        <Table
            dataSource={applications}
            columns={memoizedColumns}
            rowClassName={(record, index) => {
                return getStatusColor(record.status);
            }}
            onRow={(record,index) => {
                return {
                    onDoubleClick: event => {dispatch(toggleApplicationsModal(true,applications[index]))}
                }
            }}
        />
    )
};

export default ApplicationTable