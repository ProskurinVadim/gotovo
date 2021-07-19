import React from "react";
const status = ["новая заявка" ,"в работе","запросить еще документы","одобрена","оплачена","срок оплаты истек"];

const statusTransform = ["NEW" ,"IN_WORK","REQUESTED","APPROVED","PAID_UP","EXPIRED_PAYMENT"];
const StatusList = ({setStatus}) => {
    return (
        <ul className="table-status-list">
            {
                status.map((elem,i) => <li key={`status-item-${i}`} className="table-status-list-item" onClick={() => setStatus(statusTransform[i])}>{elem}</li>)
            }
        </ul>
    )
};


export default StatusList