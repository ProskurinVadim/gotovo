import React,{useMemo} from "react";
import {Table} from "antd";
import {getColumns} from "./formateData"
import 'antd/dist/antd.css';
import {setApplication} from "../../../../redux/actions/applicationsActions"
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
            // onRow={(record) => {
            //     return {
            //         onDoubleClick: event => {dispatch(setApplication(record))}
            //     }
            // }}
        />
    )
};

export default ApplicationTable