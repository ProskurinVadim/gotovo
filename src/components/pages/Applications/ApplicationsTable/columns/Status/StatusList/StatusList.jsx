import React from "react";
const status = ["новая заявка" ,"в работе","запросить еще документы","одобрена","оплачена","срок оплаты истек"];
const statusTransform = ["NEW" ,"IN_WORK","NEED_DOCUMENTS","APPROVED","PAID","PAYMENT_EXPIRED"];
const StatusList = ({setStatus}) => {
    return (
        <ul className="table-status-list">
            {
                status.map((elem,i) => <li className="table-status-list-item" onClick={() => setStatus(statusTransform[i])}>{elem}</li>)
            }
        </ul>
    )
};


export default StatusList