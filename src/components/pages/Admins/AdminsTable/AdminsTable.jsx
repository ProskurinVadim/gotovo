import React, {useMemo} from "react";
import {Table} from "antd"
import {getColumns} from "./formatData";
import {getStatusColor} from "../../../../utils/getStatusColor";
import {setApplication} from "../../../../redux/actions/applicationsActions";
const AdminsTable = ({users}) => {
    const memoizedColumns= useMemo(()=>getColumns(),[]);
    return (
        <Table
            dataSource={users}
            columns={memoizedColumns}
        />
    )
};

export default AdminsTable