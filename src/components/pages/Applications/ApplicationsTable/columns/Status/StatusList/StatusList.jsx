import React from "react";
const status = ["новая заявка" ,"в работе","запросить еще документы","одобрена","оплачена","срок оплаты истек"];

const StatusList = ({setStatus}) => {
    return (
        <ul className="table-status-list">
            {
                status.map(elem => <li className="table-status-list-item" onClick={() => setStatus(elem)}>{elem}</li>)
            }
        </ul>
    )
};


export default StatusList